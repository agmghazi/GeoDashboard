import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Cards from "./Form/Cards";

const GetDataFromMap = (props) => {
    const [cardDetails1, SetcardDetails1] = useState([]);
    const [cardDetails2, SetcardDetails2] = useState([]);
    const selector = useSelector((m) => m.entities.mapService.layerName);
    const selectorkey = useSelector((m) => m.entities.mapService.list[0]);
    const selectorvalue = useSelector((m) => m.entities.mapService.list[0]);

    // console.log("get data", selector);
    useEffect(() => {

        let cardArray1 = [];
        for (let i = 0; i < 13; i++) {

            cardArray1.push(
                <div className="col">
                    <Cards header={selector ? selector : "اسم المنطقة"} title={selectorkey ? JSON.parse(selectorkey).map(m => m.key[i]) : "اسم التصنيف"} body={selectorkey ? JSON.parse(selectorkey).map(m => m.value[i]) : "قيمة التصنيف"} />
                </div>
            );
        }
        //    let cardArray2 = [];
        //    for (let i = 0; i < 3; i++) {
        //        cardArray2.push(
        //            <div className="col">
        //                <Cards header={selector ?? "اسم المنطقة"} title="ddddd" body="123" />
        //            </div>
        //        );
        //    }
        SetcardDetails1(cardArray1);
        //        SetcardDetails2(cardArray2);

        console.log("selectorkey", selectorkey != null ? JSON.parse(selectorkey) : "");
        console.log("selectorvalue", selectorvalue != null ? JSON.parse(selectorvalue) : "");
        console.log("selectorkey", selectorkey != null ? selectorkey.[0].key : "");
        console.log("selectorvalue", selectorvalue != null ? JSON.parse(selectorvalue) : "");
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
