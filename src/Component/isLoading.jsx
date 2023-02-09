import React from "react";
import { Circles } from "react-loader-spinner";


export default function isLoading() {
  return (
    <div className="justify-center align-center ">
      <div className="loading-spinner">
        <Circles
        width='2rem'
        height='2rem'
        color="red"
        />
      </div>
    </div>
  )
}