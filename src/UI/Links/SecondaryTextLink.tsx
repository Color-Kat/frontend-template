import React, {memo} from 'react';
import {ILinkProps} from "./types.ts";
import {Link} from "react-router-dom";
import {twMerge} from "tailwind-merge";

export const SecondaryTextLink: React.FC<ILinkProps> = memo(({
                                                        children,
                                                        to,
                                                        className,
                                                        ...props
                                                    }) => {

    return (
        <Link
            to={to}
            className={twMerge(
                "text-indigo-600 hover:text-indigo-500 hover:underline py-2 px-4 font-medium duration-150",
                className
            )}
            {...props}
        >
            {children}
        </Link>
    );
});