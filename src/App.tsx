import { useState } from "react";
import Lottie from "lottie-react";
import "./App.css";
import { useQueryClient } from "@tanstack/react-query";
import { useGetData } from "./api/api";
import Loading from "./components/loading";
import catAnimation from "./assets/cat_anim.json";

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, error, refetch, isFetching } = useGetData();

  const handleRefresh = async () => {
    await refetch();
  };

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (error) return "An error has occurred: " + error.message;

  const style = {
    height: 300,
  };

  return (
    <div className="w-full">
      <button onClick={handleRefresh}>Refresh Data</button>
      {data && data.data[0] && (
        <div>
          <h1>Data:</h1>
          <p>{JSON.stringify(data.data[0], null, 2)}</p>
        </div>
      )}
      <Lottie animationData={catAnimation} style={style} />
    </div>
  );
}

export default App;
