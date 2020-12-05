import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
    name: "mapSericeRecived",
    initialState: {
        list: [],
        layerName: "",
        loading: false,
        lastFeatch: null,
    },
    reducers: {
        dataReceived: (name, action) => {
            name.list.push(action.payload);
        },
        dataUpdate: (name, action) => {
            name.layerName = action.payload.layerName;
        },
    },
});

export const { dataReceived, dataUpdate } = slice.actions;
export default slice.reducer;

//api
//Action Creators
//const url = "/DataRepo?locationId=1&locationType=";
const url = "/DataRepo?";
export const loadBugs = (locationId, locationType) => (dispatch, getState) => {
    //    console.log("getState 1");
    getState();
    //    console.log(getState());
    const { lastFeatch } = getState().entities.mapService;
    //    console.log("lastFeatch   " + lastFeatch);

    const diffInMinutes = moment().diff(moment(lastFeatch), "minutes");
    if (diffInMinutes < 10) return;
    //    console.log("diffInMinutes" + diffInMinutes);

    dispatch(
        apiCallBegan({
            url: `${url}locationId=${locationId}&locationType=${locationType}`,
            onSuccess: dataReceived.type,
        })
    );
    //    console.log("getState 2");
    getState();
    //    console.log(getState());
};

//Action Post
// export const addBug = (bug) =>
//   apiCallBegan({
//     url,
//     method: "post",
//     data: bug,
//     onSuccess: bugAdded.type,
//   });
//selector
export const getUnresolvedBugs = createSelector(
    (state) => state.entities.mapService
    // (mapService, projects) => mapService.list.filter((mapService) => !bug.resolved)
);