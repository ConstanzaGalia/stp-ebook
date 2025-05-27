import { defineMiddleware } from "astro:middleware";
import { supabase } from "../lib/supabase";
import micromatch from "micromatch";

const protectedRoutes = ["/dashboard(|/)", "/books/**"];
const redirectRoutes = ["/signin(|/)", "/register(|/)"];
const protectedAPIRoutes = ["/api/guestbook(|/)"];

export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {
    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");

    // Intenta setear sesión si hay tokens
    if (accessToken && refreshToken) {
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken.value,
        refresh_token: refreshToken.value,
      });

      if (!error && data?.user) {
        locals.user = data.user;

        // Renovar tokens
        cookies.set("sb-access-token", data.session?.access_token!, {
          sameSite: "strict",
          path: "/",
          secure: true,
        });
        cookies.set("sb-refresh-token", data.session?.refresh_token!, {
          sameSite: "strict",
          path: "/",
          secure: true,
        });
      }
    }

    // 🔐 Bloqueo de ruta /admin si no es admin
    const isAdminRoute = url.pathname.startsWith("/admin");
    const userRole = locals.user?.app_metadata?.role;
    if (isAdminRoute && userRole !== "admin") {
      return redirect("/dashboard");
    }

    // Rutas protegidas generales
    if (micromatch.isMatch(url.pathname, protectedRoutes)) {
      if (!accessToken || !refreshToken || !locals.user) {
        return redirect("/signin");
      }
    }

    // Redirige si intenta ir a /signin o /register ya logueado
    if (micromatch.isMatch(url.pathname, redirectRoutes)) {
      if (accessToken && refreshToken && locals.user) {
        return redirect("/dashboard");
      }
    }

    // Protege rutas de API
    if (micromatch.isMatch(url.pathname, protectedAPIRoutes)) {
      if (!accessToken || !refreshToken) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
        });
      }

      const { error } = await supabase.auth.setSession({
        access_token: accessToken.value,
        refresh_token: refreshToken.value,
      });

      if (error) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
        });
      }
    }

    return next();
  }
);
