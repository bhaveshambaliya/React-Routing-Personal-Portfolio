import {createStore} from "redux";
import rootreducer from "./Reducers/RootReducer";

const store = createStore(rootreducer);

export default store;
