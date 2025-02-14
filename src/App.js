import './App.css';

import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from "./sections/Navbar/navbar";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/aboutPage";
import ChannelsPage from "./pages/channelsPage";
import NewsPage from "./pages/newsPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import SearchresultPage from "./pages/SearchresultPage";
import ChannelDetailPage from "./pages/channelDetailPage";
import StoryForm from "./pages/StoryForm";
import StoryPage from "./pages/StoryPage";

function App() {

    return (
        <Routes>
            <Route element={<Navbar />} >
                <Route index path={"/"} element={<Homepage />} />
                <Route path={"about"} element={<AboutPage />} />
                <Route path={"channels"} element={<ChannelsPage />} />
                <Route path={"channel/:name"} element={<ChannelDetailPage />} />
                <Route path={"news/:id"} element={<NewsPage />} />
                <Route path={"signup"} element={<SignupPage />} />
                <Route path={"signin"} element={<SigninPage />} />
                <Route path={"searchresult"} element={<SearchresultPage />} />
                <Route path={"storyform"} element={<StoryForm />} />
                <Route path={"storyform/:id"} element={<StoryForm />} />
                <Route path={"storypage"} element={<StoryPage />} />
            </Route>
        </Routes>
  );
}

export default App;
