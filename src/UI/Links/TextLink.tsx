import React, {memo} from 'react';
import {ILinkProps} from "./types.ts";
import {Link} from "react-router-dom";
import {twMerge} from "tailwind-merge";

export const TextLink: React.FC<ILinkProps> = memo(({
                                                        children,
                                                        to,
                                                        className,
                                                        ...props
                                                    }) => {

    return (
        <Link
            to={to}
            className={twMerge(
                "text-gray-500 hover:text-gray-800 py-2 px-4 font-medium duration-150",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
});