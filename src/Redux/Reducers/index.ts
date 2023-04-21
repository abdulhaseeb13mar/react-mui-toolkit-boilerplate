import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import app from "./app";

const persistConfig = {
  key: "spock-ts",
  storage,
  whitelist: ["app"],
};

const reducers = combineReducers({
  app,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
