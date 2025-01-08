import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import { Children } from "react";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
	path: "profile",
	children: [
		{ index: true, element: <Profile/>},
		{ path: ":name", element: <Profile/>}
	]
  }
];

export default routes;