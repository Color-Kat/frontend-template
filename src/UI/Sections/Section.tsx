import React, {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

// Black background
export const Section: React.FC<{
    className?: string,
    children: ReactNode
}>
    = React.memo(({children, className = ""}) => {
    return (
        <div className={twMerge("rounded-xl app-bg-dark text-app shadow-md mb-4 px-4 py-4 ", className)}>
            {children}
        </div>
    );
});
