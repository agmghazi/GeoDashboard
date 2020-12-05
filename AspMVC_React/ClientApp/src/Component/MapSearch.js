import React from "react";

function Mapsearch(props) {
  React.useEffect(() => {
    let divSearchResults;
    let r;
    divSearchResults = document.getElementById("divSearchResults");
    const txtSearch = document.getElementById("txtSearch");

    txtSearch.addEventListener("keypress", onSearch);

    function zoomTo(e) {
      const mapView = window._view;
      const feature = e.target.feature;
      // console.log(feature);
      // mapView.goTo(feature.geometry.extent.center.latitude);
      mapView.goTo({
        center: [
          feature.geometry.extent.center.longitude,
          feature.geometry.extent.center.latitude,
        ],
      });

      mapView.zoom = 7;
      // console.log(feature.geometry.extent.center.latitude);
      // console.log(feature.geometry.extent.center.longitude);
    }

    function onSearch(e) {
      if (e.code != "Enter") return;
      divSearchResults.style.display = "block";
      const q = e.target.value;
      const query = window._areaZone.createQuery();
      query.where = `NAME_A like N'%${q}%'`;
      query.returnGeometry = true;
      // query.num = 3;
      divSearchResults.innerHTML = "";
      window._areaZone
        .queryFeatures(query)
        .then(function (result) {
          if (result.features === undefined || result.features.length == 0) {
            console.log("no data");
            divSearchResults.innerHTML = "لا يوجد نتائج";
            divSearchResults.classList.add("divCo");
            divSearchResults.classList.remove("searchResult");
            divSearchResults.style.color = "red";
          } else {
            divSearchResults.style.color = "black";
            divSearchResults.classList.remove("divCo");
            divSearchResults.classList.add("searchResult");
            let ulR = document.createElement("ul");
            result.features.forEach((f) => {
              r = document.createElement("li");
              r.textContent = f.attributes.NAME_A;
              r.feature = f;
              r.addEventListener("click", zoomTo);
              ulR.appendChild(r);
              divSearchResults.appendChild(ulR);
              ulR.classList.add("list-group");
              r.classList.add("list-group-item");
              r.style.cursor = "pointer";
              r.style.backgroundColor = "lightcyan";
              r.id = "custSearchLi";
            });
            //
          }
        })
        .catch((e) => console.log("Error executing query " + e));
    }
    setTimeout(() => {
      window._view.ui.add([
        {
          component: "app-form",
          position: "top-right",
          index: 0,
        },
        {
          component: "divSearchResults",
          position: "top-right",
          index: 1,
        },
      ]);
    }, 2000);
  });

  return (
    <>
      <div className="esri-widget" id="app-form">
        <input
          type="search"
          className="esri-input text-right myinput"
          placeholder="ابحث هنا"
          id="txtSearch"
        />
      </div>
      <div>
        <div id="divSearchResults" className="searchResultt"></div>
      </div>
    </>
  );
}
export default Mapsearch;
