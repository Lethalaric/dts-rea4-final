import logo from './logo.svg';
import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Routes
} from "react-router-dom";
import Navbar from "./sections/navbar";
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

function App() {
  return (
      <Router>
        <Routes>
            <Route path={"/"} element={<Navbar />} />
                <Route path={"/"} element={<Homepage />} />
                <Route path={"about"} element={<AboutPage />} />
        </Routes>
      </Router>
  );
}

export default App;
