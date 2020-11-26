import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Form/Cards";

const GetDataFromMap = (props) => {
  const [cardDetails1, SetcardDetails1] = useState([]);
  const [cardDetails2, SetcardDetails2] = useState([]);
  const selector = useSelector((m) => m.entities.mapService.list.name);
  // console.log("get data", selector);
  let cardArray1 = [];
  for (let i = 0; i < 3; i++) {
    cardArray1.push(
      <div className="col">
        <Cards header={selector ?? "اسم المنطقة"} title="popup 01" body="123" />
      </div>
    );
  }
  let cardArray2 = [];
  for (let i = 0; i < 3; i++) {
    cardArray2.push(
      <div className="col">
        <Cards header={selector ?? "اسم المنطقة"} title="popup 01" body="123" />
      </div>
    );
  }

  useEffect(() => {
    SetcardDetails1(cardArray1);
    SetcardDetails2(cardArray2);
    // console.log("storeMaster", selector);
  }, [selector]);

  return (
    <>
      <div className="container text-right">
        <div className="row">{cardDetails1}</div>
        <div className="row">{cardDetails2}</div>
      </div>
    </>
  );
};

export default GetDataFromMap;
