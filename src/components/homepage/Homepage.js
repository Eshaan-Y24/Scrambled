import React from 'react'
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Homepage = () => {
    return (
        <div className="App">
            <Navbar />
            <Container1 />
            <Container2 />
            <Container3 />
            <Footer />
        </div>
    )
}

export default Homepage;