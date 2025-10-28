
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import NowPlaying from './pages/NowPlaying';
import Layout from './components/Layout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playing" element={<NowPlaying />} />
        
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/search" element={<Layout><Search /></Layout>} />
        <Route path="/library" element={<Layout><Library /></Layout>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
