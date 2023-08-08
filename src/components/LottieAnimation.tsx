import { useState } from "react";
import Lottie from "lottie-react";
import notFoundPage from "../assets/404_animate.json";
// import MainPage from "./components/MainPage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function wait(duration: any) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

const POSTS = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];

function LottieAnimations() {
  const queryClient = useQueryClient();
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: (obj) =>
      wait(1000).then(() => {
        console.log(obj);
        return [...POSTS];
      }),
  });

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (postsQuery.isLoading) return <h1>Loading....</h1>;
  if (postsQuery.isError) return <h1>{JSON.stringify(postsQuery.error)}</h1>;

  const style = {
    height: 300,
  };

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [45, 60],
      },
    ],
  };

  return (
    <>
      {/* <div>
        {postsQuery.data.map((post) => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </div>
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        add new
      </button> */}
      <div>
        <Lottie
          animationData={notFoundPage}
          style={style}
          interactivity={interactivity}
        />
      </div>
    </>
  );
}

export default LottieAnimations;
