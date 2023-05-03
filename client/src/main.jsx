import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "./router.jsx";
import {Provider} from "react-redux";
import store from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)