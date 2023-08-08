import { useState } from "react";
import Lottie from "lottie-react";
import loadingCat from "../assets/loading-cat.json";

function Loading() {
  const style = {
    height: 300,
  };

  return (
    <>
      <div>
        <Lottie animationData={loadingCat} style={style} />
      </div>
    </>
  );
}

export default Loading;
