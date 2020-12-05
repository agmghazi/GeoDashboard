import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import api from "./middleware/api";


export default function configureAppStore() {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            //for passing params from config store
            // logger({ destination: "console" }),
            api,
        ],
    });
}

