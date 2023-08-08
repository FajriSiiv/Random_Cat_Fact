import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://meowfacts.herokuapp.com");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useGetData = () => {
  return useQuery({
    queryKey: ["meowFact"],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });
};
