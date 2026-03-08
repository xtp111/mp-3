import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";

import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import Education from "./components/mains/Education.tsx";
import Home from "./components/mains/Home.tsx";
import Experience from "./components/mains/Experience.tsx";
import Certifications from "./components/mains/Certifications.tsx";
import References from "./components/mains/References.tsx";
import Projects from "./components/mains/Projects.tsx";

import styled from "styled-components";


const StyledWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: burlywood;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex: 1;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const StyledMain = styled.div`
    flex: 1;
    min-width: 0;
    background-color: #fafafa
`;

function Root() {
    return (
        <StyledWrapper>
            <Header />
            <StyledContainer>
                <Nav />
                <StyledMain>
                <Routes>
                    <Route
                        path={`/`}
                        element={<Home />}
                    />
                    <Route
                        path={`/education`}
                        element={<Education />}
                    />
                    <Route
                        path={`/experience`}
                        element={<Experience />}
                    />
                    <Route
                        path={`/certifications`}
                        element={<Certifications />}
                    />
                    <Route
                        path={`/references`}
                        element={<References />}
                    />
                    <Route
                        path={`/projects`}
                        element={<Projects />}
                    />
                </Routes>
            </StyledMain>
            </StyledContainer>
            <Footer />
        </StyledWrapper>
    );
}

// --- 路由配置 ---
const router = createBrowserRouter(
    [{ path: "*", Component: Root }]
);

// --- 主应用出口 ---
export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}