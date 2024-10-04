import React, {ReactNode, useRef} from "react";
import {Section} from "./Section";
import {Head} from "@inertiajs/inertia-react";
import route from "ziggy-js";
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
                {/* @ts-ignore */}
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>
                <h2 className="text-3xl font-medium font-play opacity-0" ref={headerRef}>{title}</h2>
                <p className="mt-1 text-md text-gray-400 whitespace-pre-wrap">{description}</p>
            </div>
        </Section>
    );
});
