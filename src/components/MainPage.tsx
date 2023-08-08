import { useGetData } from "../api/api";

const MainPage = () => {
  const { isLoading, isError, data, error, refetch, isFetching } = useGetData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("Data dari API:", data);

  return (
    <div>
      <button onClick={() => refetch()}>Fetch Todos</button>
      <div className="w-full flex flex-wrap p-10 justify-betweens">
        {data?.map((post: any) => (
          <div className="w-1/4 border-slate-900 rounded-md border-2">
            <h1>{post.title}</h1>
          </div>
        ))}
      </div>
      <div>{isFetching ? "Fetching..." : null}</div>
    </div>
  );
};

export default MainPage;
