import {memo, useEffect, useState} from "react";

import {Header} from "./Header/Header.tsx";
import Main from "./Main";
import {SimpleFooter} from "./Footer/SimpleFooter.tsx";
import {twJoin} from "tailwind-merge";
import {
    SiriBottomNavigation
} from "@modules/Layout/components/BottomNavigation/SiriBottomNavigation/SiriBottomNavigation.tsx";

export const Layout: React.FC<{ children: React.ReactElement }> = memo(({children}) => {
    const [showFooter, setShowFooter] = useState(true);

    return (
            <div
                className={twJoin(
                    "h-screen w-screen flex flex-col",
                    // "scroll-container overflow-y-auto overflow-x-hidden", // Header can be scrolled

                    // "md:h-screen h-[calc(100vh-4.4rem)]", // For MobileBottomMenu
                    // "pt-16",// For header
                    // "pb-[4.4rem] md:pb-0",// For MobileBottomMenu 1
                    "bg-app-dark font-inter text-white"
                )}
            >

                {/* Top banner */}
                {/*<Banner*/}
                {/*    text="Мы запустили нашу собственную игру!"*/}
                {/*    link="https://colorbit.ru"*/}
                {/*    show={!localStorage.getItem('hide-banner-1') || false}*/}
                {/*    callback={() => localStorage.setItem('hide-banner-1', '1')}*/}
                {/*/>*/}

                <Header/>

                <div
                    className="scroll-container overflow-y-auto overflow-x-hidden flex flex-col flex-auto mb-20"
                >
                    <Main>
                        {children}
                    </Main>

                    {/*Small footer with couple links*/}
                    {/*<SimpleFooter/>*/}

                    {/*Big footer with many links*/}
                    {/*<Footer />*/}
                </div>

                <SiriBottomNavigation/>

            </div>
    );
});