import React from "react";
import loading from "../assets/loading.svg";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loadingScreen">
      <img src={loading} alt="loading spinner" />
    </div>
  );
};

export default LoadingScreen;
