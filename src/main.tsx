import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/app";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <StrictMode>
        <PrimeReactProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PrimeReactProvider>
    </StrictMode>
);
