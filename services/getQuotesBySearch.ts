import { MAX_QUOTES_PER_PAGE } from "@/lib/constants";
import { createClient } from "@/services/supabase/client";

async function getQuotesBySearch(
  page: number,
  sort: QuoteSorting,
  searchQuery: string,
  tags?: string[],
  grade?: string
) {
  const supabase = createClient();

  try {
    const response = await supabase.rpc("search_quotes", {
      order_by: sort.column,
      sort_order: sort.isAscending ? "ASC" : "DESC",
      search_query: searchQuery,
      rows_limit: (page === 0 ? 1 : page) * MAX_QUOTES_PER_PAGE - 1,
      included_tags: tags ?? [],
      included_grade: grade ?? null,
    });
    const { error, data } = response;

    if (error) throw error;

    const quotes: QuoteFromDB[] = data.slice(
      page * MAX_QUOTES_PER_PAGE - MAX_QUOTES_PER_PAGE
    );

    return { ...response, data: quotes };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getQuotesBySearch;
