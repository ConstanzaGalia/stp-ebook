import { defineMiddleware } from "astro:middleware";
import { supabase } from "../lib/supabase";
import micromatch from "micromatch";

const protectedRoutes = ["/dashboard(|/)"];
const redirectRoutes = ["/signin(|/)", "/register(|/)"];
const protectedAPIRoutes = ["/api/guestbook(|/)"];

export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {
    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");

    // Siempre intenta setear el usuario si hay tokens
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

    // Rutas protegidas: redirige si no hay user
    if (micromatch.isMatch(url.pathname, protectedRoutes)) {
      if (!accessToken || !refreshToken || !locals.user) {
        return redirect("/signin");
      }
    }

    // Si intenta entrar a /signin o /register y ya está logueado, redirigir
    if (micromatch.isMatch(url.pathname, redirectRoutes)) {
      if (accessToken && refreshToken && locals.user) {
        return redirect("/dashboard");
      }
    }

    // API protegida
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
