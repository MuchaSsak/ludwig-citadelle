import { useQuery } from "@tanstack/react-query";

import getQotd from "@/services/getQotd";

function useQotd() {
  const query = useQuery({
    queryKey: ["getQotd"],
    queryFn: getQotd,
  });

  return query;
}

export default useQotd;
