import type { Student } from '../../pages/api/students/getStudents';

export async function getStudents(
  page: number,
  limit: number,
  search: string
): Promise<{ data: Student[]; count: number; error: any }> {
  try {
    const res = await fetch(`/api/students/getStudents?page=${page}&limit=${limit}&search=${search}`);
    const result = await res.json();

    return {
      data: result.data,
      count: result.count,
      error: null,
    };
  } catch (err) {
    return {
      data: [],
      count: 0,
      error: err,
    };
  }
}
