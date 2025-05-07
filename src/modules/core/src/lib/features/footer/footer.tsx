import { JSX } from "react";

import { Button } from "primereact/button";

export const Footer: () => JSX.Element = () => {
    const goToSite: () => void = () => {
        window.open("https://angular.dev", "_blank");
    };
    return (
        <div className="flex justify-content-between h-full w-full">
            <div></div>
            <div className="flex align-items-center">Angular c'est mieux &#169; 2025</div>
            <div className="flex justify-content-between gap-2 my-2 mx-4">
                <Button
                    icon="pi pi-facebook"
                    rounded
                    outlined
                    aria-label="facebook"
                    onClick={goToSite}
                />
                <Button
                    icon="pi pi-twitter"
                    rounded
                    outlined
                    aria-label="twitter"
                    onClick={goToSite}
                />
                <Button
                    icon="pi pi-discord"
                    rounded
                    outlined
                    aria-label="discord"
                    onClick={goToSite}
                />
            </div>
        </div>
    );
};
