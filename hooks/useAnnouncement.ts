import { useQuery } from "@tanstack/react-query";

import getAnnouncement from "@/services/getAnnouncement";

function useAnnouncement() {
  const query = useQuery({
    queryKey: ["getAnnouncement"],
    queryFn: getAnnouncement,
  });

  return query;
}

export default useAnnouncement;
