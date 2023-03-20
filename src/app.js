import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./pages/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./store";
import Offer from "./pages/Offer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Help from "./pages/Help";
import SignIn from "./pages/SignIn";

// Code Splitting
// Chunking
// Dynamic Bundling.
// Lazy Loading
// Dynamic Import
// On demand loading

const Instamart = lazy(() => import("./components/Instamart"));
// Upon on demand loading ---> upon render ---> suspand loading

const AppLayout = () => {
  //const user = useContext(UserContext);
  const [user, setUser] = useState({
    name: "Tahir Khan",
    email: "tahirkhan056@gmail.com",
  });

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser,
          }}
        >
          <Header />
          <div className="mt-20">
            <Outlet />
          </div>
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },

      {
        path: "/offers",
        element: <Offer />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          // Addding suspense for lazy loading
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
