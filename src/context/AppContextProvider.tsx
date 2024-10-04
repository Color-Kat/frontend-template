import React, { FC, useEffect, useState } from "react";
import { combineComponents } from "@/context/CombineProviders.tsx";
import { BrowserRouter } from "react-router-dom";

interface Props {children: React.ReactNode}

/**
 * Here you can list all global context providers.
 * They will be applied in order of the list.
 */
const providers: FC<Props>[] = [
    // React strict mode
    React.StrictMode,

    // Router
    BrowserRouter

    // Example: Simple provider without value
    // MusicProvider,

    // Example: Provider with initial value
    // ({ children }: Props) =>
    //     <VkMiniAppContext.Provider value={{ isVkMiniApp: isVKApp() }}>
    //         {children}
    //     </VkMiniAppContext.Provider>,
];

export const AppContextProvider = combineComponents(...providers);
