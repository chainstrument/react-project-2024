import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ThemeSwitcher from "./pages/ThemeSwitcher";

import Survey from "./pages/Survey";

import ClientForm from "./components/ClientForm";
import FreelanceForm from "./components/FreelanceForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />

            <Route path="themeswitcher" element={<ThemeSwitcher />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/survey" element={<Survey />}>
              <Route path="client" element={<ClientForm />} />
              <Route path="freelance" element={<FreelanceForm />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
