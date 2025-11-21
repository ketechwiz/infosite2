import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Research from './Research';
import Conferences from './Conferences';
import Leadership from './Leadership';
import Resume from './Resume';
import Contact from './Contact';

export default function Pages() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Conferences" element={<Conferences />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
