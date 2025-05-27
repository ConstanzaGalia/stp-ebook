import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export type Student = {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  created_at: string;
  content_access?: {
    content: {
      id: string;
      title: string;
    };
  }[];
};

function normalizeStudents(raw: any[]): Student[] {
  return raw.map((student) => ({
    ...student,
    content_access: student.content_access?.map((access: any) => ({
      content: Array.isArray(access.content) ? access.content[0] : access.content,
    })),
  }));
}

async function getStudents(
  page: number,
  limit: number,
  search: string
): Promise<{ data: Student[]; count: number; error: any }> {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("profiles")
    .select(
      `
        id,
        name,
        email,
        role,
        created_at,
        content_access (
          content (
            id,
            title
          )
        )
      `,
      { count: "exact" }
    )
    .range(from, to)
    .order("created_at", { ascending: false });

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  const { data, error, count } = await query;

  return {
    data: normalizeStudents(data || []),
    error,
    count: count || 0,
  };
}


export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "10");
  const search = url.searchParams.get("search") || "";

  const { data, error, count } = await getStudents(page, limit, search);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ data, count }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
