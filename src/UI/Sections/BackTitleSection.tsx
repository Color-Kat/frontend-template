import React, {useRef} from "react";
import {BiArrowBack} from "react-icons/bi/index.js";
import {Section} from "./Section";
import { useNavigate } from "react-router-dom";
import useAnimation from "@hooks/useAnimation.ts";

// Black background
export const BackTitleSection: React.FC<{
    title: string,
    description?: string,
    back?: boolean,
    route?: string,
    animation?: boolean
}>
    = React.memo(({title, description, back = true, route, animation = true}) => {

    const navigate = useNavigate();

    const backHandler = () => {
        if(!back) return;

        if(route) navigate(route);

        return window.history.back();
    }

    const headerRef = useRef(null);

    if(animation)
        useAnimation(headerRef, 'text-fast-appearance');

    return (
        <Section className="cursor-default relative">
            <div
                className={`flex gap-3 items-start w-full cursor-pointer ${animation ? 'opacity-0' : ''}`}
                onClick={backHandler}
                ref={headerRef}
            >
                {back && <BiArrowBack size="30" className="shrink-0"/>}
                <h1 className="text-xl xsm:text-2xl md:text-3xl font-medium font-play">{title}</h1>
            </div>
            {description && <p className="mt-1 text-sm sm:text-base text-gray-400">{description}</p>}
        </Section>
    );
});
