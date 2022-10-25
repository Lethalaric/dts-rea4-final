import './App.css';

import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from "./sections/Navbar/navbar";
import Homepage from "./pages/homepage";
import AboutPage from "./pages/aboutPage";
import ChannelPage from "./pages/channelPage";
import BecomeAContributorPage from "./pages/becomeAContributorPage";
import SubmitAStoryPage from "./pages/submitAStoryPage";
import PrivacyPolicyPage from "./pages/privacyPolicyPage";
import TermsOfUsePage from "./pages/termsOfUsePage";
import ContactPage from "./pages/contactPage";
import CookiePolicyPage from "./pages/cookiePolicyPage";
import EditionPage from "./pages/editionPage";
import NewsPage from "./pages/newsPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import SudahloginPage from "./pages/SudahloginPage";
import SearchresultPage from "./pages/SearchresultPage";
import StoryForm from "./pages/StoryForm";

function App() {

    return (
        <Routes>
            <Route element={<Navbar />} >
                <Route index path={"/"} element={<Homepage />} />
                <Route path={"about"} element={<AboutPage />} />
                <Route path={"channels"} element={<ChannelPage />} />
                <Route path={"become-contributor"} element={<BecomeAContributorPage />} />
                <Route path={"submit-story"} element={<SubmitAStoryPage />} />
                <Route path={"privacy-policy"} element={<PrivacyPolicyPage />} />
                <Route path={"term-of-use"} element={<TermsOfUsePage />} />
                <Route path={"contact"} element={<ContactPage />} />
                <Route path={"cookie-policy"} element={<CookiePolicyPage />} />
                <Route path={"editions"} element={<EditionPage />} />
                <Route path={"news/:id"} element={<NewsPage />} />
                <Route path={"signup"} element={<SignupPage />} />
                <Route path={"signin"} element={<SigninPage />} />
                <Route path={"sudahlogin"} element={<SudahloginPage />} />
                <Route path={"searchresult"} element={<SearchresultPage />} />
                <Route path={"storyform"} element={<StoryForm />} />
            </Route>
        </Routes>
  );
}

export default App;
