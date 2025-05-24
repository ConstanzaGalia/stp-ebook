import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

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

  // ✅ Obtener usuario logueado
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return new Response("No user found after login", { status: 500 });
  }

  const userId = userData.user.id;
  const userEmail = userData.user.email;
  const userName = userData.user.user_metadata.name || null;

  // ✅ Verificar si ya existe el profile
  const { data: existingProfile } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", userId)
    .maybeSingle();

  if (!existingProfile) {
    // ✅ Crear el perfil del usuario
    await supabase.from("profiles").insert({
      id: userId,
      role: "student",
      email: userEmail,
      name: userName,
    });
  }

  return redirect("/dashboard");
};
