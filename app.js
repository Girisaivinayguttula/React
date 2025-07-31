import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import ResMenu from "./src/components/ResMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

const Applayout = () => {
    return (<><Header />
        <Outlet />
    </>
    );
};

const AppRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <Applayout />,
            children: [
                {
                    path: "/",
                    element: <Body />

                },
                {
                    path: '/About',
                    element: <About />
                },
                {
                    path: '/Contact',
                    element: <Contact />
                },
                {
                    path: '/ResMenu/:resId',
                    element: <ResMenu />
                }
            ],
            errorElement: <Error />
        },

    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);