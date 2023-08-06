import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import Gallery from './components/pages/Gallery';
import Footer from "./components/Footer";
import {LanguageProvider} from "./components/LanguageContext";

const App = () => {
    return (
        <Router>
            <LanguageProvider>
                <div>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/game' element={<Game />} />
                        <Route path='/gallery' element={<Gallery />} />
                    </Routes>
                    <Footer />
                </div>
            </LanguageProvider>
        </Router>
    );
};

export default App;