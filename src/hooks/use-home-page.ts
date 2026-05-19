import { useQuery } from "@tanstack/react-query";
import { fetchHomePage } from "@/lib/cms/fetchHomePage";

export function useHomePage() {
  return useQuery({
    queryKey: ["cms", "home"],
    queryFn: fetchHomePage,
    staleTime: 5 * 60 * 1000,
  });
}
