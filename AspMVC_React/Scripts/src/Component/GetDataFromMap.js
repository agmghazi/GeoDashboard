import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const GetDataFromMap = (props) => {
  const selector = useSelector((m) => m.entities.mapService.list.name);
  console.log("get data", selector);

  useEffect(() => {
    console.log("storeMaster", selector);
  }, [selector]);

  return (
    <>
      <h1>zone name ..{selector} </h1>
    </>
  );
};

export default GetDataFromMap;
