import React, {ReactNode, useRef} from "react";
import {Section} from "./Section";
import useAnimation from "@hooks/useAnimation";

// Black background
export const PageTitle: React.FC<{
    title: string,
    description?: string
}>
    = React.memo(({title, description = ""}) => {

    const headerRef = useRef(null);
    useAnimation(headerRef, 'text-fast-appearance');

    return (
        <Section>
            <div className="max-w-xl">
                <h2 className="text-3xl font-medium font-play opacity-0" ref={headerRef}>{title}</h2>
                <p className="mt-1 text-md text-gray-400 whitespace-pre-wrap">{description}</p>
            </div>
        </Section>
    );
});
