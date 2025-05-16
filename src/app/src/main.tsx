import { StrictMode } from "react";

import { PrimeReactProvider } from "primereact/api";
import * as ReactDOM from "react-dom/client";

import App from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </StrictMode>
);
