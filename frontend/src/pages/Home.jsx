import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Qualities from "../components/Qualities";
import Menu from "../components/Menu";
import WhoareWe from "../components/WhoareWe";
import Team from "../components/Team";
import Reservation from "../components/Reservation";
import Footer from "../components/footer";

const Home = ()=>{
    return (
        <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoareWe/>
        <Team/>
        <Reservation/>
        <Footer/>
        </>
    )
}

export default Home;