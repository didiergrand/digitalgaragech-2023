// App.js
import "./css/index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import PhotoIndexPage from "./components/PhotoIndexPage";
import PhotoDetailPage from "./components/PhotoDetailPage";
import WebProjectIndexPage from "./components/WebProjectIndexPage";
import WebProjectDetailPage from "./components/WebProjectDetailPage";
import AboutPage from "./components/AboutPage";



const App = () => {
    // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/photos" element={<PhotoIndexPage />}></Route>
        <Route path="/photos/:id" element={<PhotoDetailPage />}></Route>
        <Route
          exact
          path="/web-projects"
          element={<WebProjectIndexPage />}
        ></Route>
        <Route
          path="/web-projects/:id"
          element={<WebProjectDetailPage />}
        ></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
