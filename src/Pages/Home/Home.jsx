import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';
import Project from '../../components/Poroject/Poroject';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <ContactSection></ContactSection>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;