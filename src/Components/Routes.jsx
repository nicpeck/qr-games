import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import DefaultPage from './DefaultPage';

const AppRoutes = ({ Container, StartPage, SharePage, GamePage }) => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Container with wrapper & theme */}
                <Route path="/" element={<Container />}>
                    {/* Start page to set options */}
                    <Route index element={<StartPage /> || <DefaultPage />} />
                    {/* Start page to set options */}
                    <Route path="/game" element={<GamePage /> || <DefaultPage />} />
                    {/* Share page with  */}
                    <Route path="/share/:config" element={<SharePage /> || <DefaultPage />} />
                    {/* Catch unfound and redirect back to the root */}
                    <Route path="*" element={<DefaultPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

