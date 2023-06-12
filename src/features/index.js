import {configureStore} from "@reduxjs/toolkit";
import TuduSlices from "./slices/TuduSlices";


const Store = configureStore({
            reducer: {
            todo: TuduSlices,
        }
})
export default Store;