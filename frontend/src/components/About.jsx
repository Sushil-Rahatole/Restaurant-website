import React from "react";
import {Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = ()=>{
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we're serious about is Food.</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et impedit unde aut repellendus odio, eaque quisquam! Impedit, laborum? Ducimus aperiam, ut veritatis doloribus delectus ipsam hic. Cupiditate, placeat accusamus officia veritatis at voluptates ad dolore consectetur doloribus deserunt? Cum, quam? Molestiae, assumenda. Quibusdam deserunt id provident dolore cumque quidem aut.
                    </p>
                    <Link to={"/"} >Explore menu <span><HiOutlineArrowNarrowRight/></span></Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About;