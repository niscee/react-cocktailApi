import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <Loader
        type="Puff"
        color="gold"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loading;
