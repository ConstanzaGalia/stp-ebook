import type { APIRoute } from "astro";
import { supabase, supabaseAdmin } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;

  // Guardar sesión
  cookies.set("sb-access-token", access_token, {
    path: "/",
    secure: true,
    httpOnly: true,
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
    secure: true,
    httpOnly: true,
  });

  // Obtener usuario logueado
  const { data: userData, error: userError } = await supabase.auth.getUser();
  const user = userData?.user;

  if (userError || !user) {
    return new Response("No user found after login", { status: 500 });
  }

  const userId = user.id;
  const userEmail = user.email;
  const userName = user.user_metadata.name || null;

  // Consultar perfil desde la tabla profiles
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle();

  let role = profile?.role || "student";

  if (!profile) {
    // Crear perfil si no existe
    await supabase.from("profiles").insert({
      id: userId,
      role,
      email: userEmail,
      name: userName,
    });
  }

  // Actualizar el app_metadata del usuario con el rol
  const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(userId, {
    app_metadata: { role },
  });

  if (updateError) {
    console.error("Error updating app_metadata.role:", updateError.message);
  }

  return redirect("/dashboard");
};
