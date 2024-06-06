import getAllQuotes from "@/services/getAllQuotes";
import getQuotesBySearch from "@/services/getQuotesBySearch";

async function getQuotes(
  page: number,
  sort: QuoteSorting,
  searchQuery?: string,
  tags?: string[],
  grade?: string
) {
  try {
    // Search quotes
    if (searchQuery) {
      const { data, error } = await getQuotesBySearch(
        page,
        sort,
        searchQuery,
        tags,
        grade
      );
      if (error) throw error;
      return data;
    }

    // Get all quotes (if there are no rules applied)
    const { data, error } = await getAllQuotes(page, sort, tags, grade);
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getQuotes;
