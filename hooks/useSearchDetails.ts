import { fetchDetails } from "@/features/requests/fetchDetails";

const useSearchDetails = () => {
  const searchDetails = async (searchRequest: string) => {
    return await fetchDetails(searchRequest.toLowerCase());
  }

  return {searchDetails};
};

export {useSearchDetails};
