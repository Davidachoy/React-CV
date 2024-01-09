//simple route
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Curriculum } from '../components/Curriculum';
import { Contact } from '../components/Contact';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';

export const Rute = () => {
    return (
        <BrowserRouter>
            <HeaderNav/>
            <section className="container">
                <Routes>
                    <Route  path="/" element={<Home/>} />
                    <Route  path="/services" element={<Services/>} />
                    <Route  path="/portfolio" element={<Portfolio/>} />
                    <Route  path="/curriculum" element={<Curriculum/>} />
                    <Route  path="/contact" element={<Contact/>} />
                </Routes>
            </section>  
            <Footer/>
        </BrowserRouter>
    );
    }