import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import GuestLayout from "./layouts/GuestLayout.jsx";
import Login from "./views/Login.jsx";
import App from "./views/Home/App.jsx";
import NotFound from "./views/NotFound.jsx";
import Register from "./views/Register.jsx";
import Chat from "./views/Home/Chat/Chat.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/home",
                element: <App />,
                children: [
                    {
                        path: ":chatID",
                        element: <Chat />
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "*",
        element:<NotFound />
    }
])