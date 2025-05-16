// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { JSX } from "react";
import { RouterProvider } from "react-router";

import { APP_ROUTES } from "./app.routes";

export const App: () => JSX.Element = () => {
    return (
        <div className="h-full w-full">
            <RouterProvider router={APP_ROUTES} />
        </div>
    );
};

export default App;
