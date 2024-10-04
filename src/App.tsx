import { AppContextProvider } from "@/context/AppContextProvider.tsx";
import { Layout } from "@modules/Layout";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/HomePage/HomePage.tsx";
import { TestPage } from "@pages/TestPage/TestPage.tsx";
import { SnapScrollPage } from "@pages/SnapScrollPage/SnapScrollPage.tsx";
import { Page404 } from "@pages/Errors/Page404/Page404.tsx";

function App() {

    return (
        <Layout>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/test"
                    element={<TestPage />}
                />
                <Route
                    path="/snap-scroll"
                    element={<SnapScrollPage />}
                />

                {/*  Auth  */}
                {/*<Route element={<NotAuthRoute />}>*/}
                {/*    <Route*/}
                {/*        path="/login"*/}
                {/*        element={<Login />}*/}
                {/*    />*/}
                {/*    <Route*/}
                {/*        path="/register"*/}
                {/*        element={<Register />}*/}
                {/*    />*/}
                {/*</Route>*/}

                {/*  Admin Page  */}
                {/*<Route element={<AdminRoute />}>*/}
                {/*    <Route*/}
                {/*        path="/admin"*/}
                {/*        element={<AdminIndexPage />}*/}
                {/*    />*/}
                {/*</Route>*/}

                <Route
                    path="*"
                    element={<Page404 />}
                />

            </Routes>
        </Layout>
    )
}

export default App
