import { useInfiniteQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";

import { DEFAULT_QUOTES_SORTING, QUOTES_SORTINGS } from "@/lib/constants";
import { splitStringByCapitalization } from "@/lib/utils";
import getQuotes from "@/services/getQuotes";

function useQuotes() {
  const [search] = useQueryState("search");
  const [sort] = useQueryState("sort");
  const [tags] = useQueryState("tags");
  const [grade] = useQueryState("grade");

  const sortingObj = QUOTES_SORTINGS.find((sorting) => sorting.value === sort);

  const query = useInfiniteQuery({
    queryKey: ["quotes"],
    queryFn: ({ pageParam }) =>
      getQuotes(
        pageParam,
        sortingObj ?? DEFAULT_QUOTES_SORTING,
        search ?? undefined,
        tags ? splitStringByCapitalization(tags) : undefined,
        grade ?? undefined
      ),
    initialPageParam: 0,
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  return query;
}

export default useQuotes;
