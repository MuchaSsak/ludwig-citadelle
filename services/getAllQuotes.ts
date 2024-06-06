import { MAX_QUOTES_PER_PAGE, QUOTES_GRADES } from "@/lib/constants";
import { createClient } from "@/services/supabase/client";

async function getAllQuotes(
  page: number,
  sort: QuoteSorting,
  tags?: string[],
  grade?: string
) {
  const supabase = createClient();

  try {
    const response = await supabase
      .from("quotes")
      .select("*")
      .contains("tags", tags ?? [])
      .or(
        grade
          ? `grade.eq.${grade}`
          : QUOTES_GRADES.map((grade) => `grade.eq.${grade}`)
      )
      .range(
        page * MAX_QUOTES_PER_PAGE - MAX_QUOTES_PER_PAGE,
        (page === 0 ? 1 : page) * MAX_QUOTES_PER_PAGE - 1
      )
      .order(sort.column, { ascending: sort.isAscending });
    const { error } = response;

    if (error) throw error;

    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getAllQuotes;
