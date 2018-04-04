import React, { Component } from 'react';
import Footer from './Footer';
import Contact from './Contact';
import Blog from './Blog';
import Testimonials from './Testimonials';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Team from './Team';
import Skills from './Skills';

class Home extends Component {
    render(){
        return(
            <div>
                
                <section id="banner">
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                                <div className="banner-inner text-center">
                                    
                                    <h1 className="cd-headline clip is-full-width">
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible">Welcome to Rohino</b>
                                            <b>We are Expert in</b>
                                            <b>Wordpress, HTML5, CSS3</b>
                                            <b>jQuery, Photography</b>
                                            <b>Logo &amp; Print Design</b>
                                        </span>
                                    </h1>
                                    <div className="line-block">
                                        <span className="bullet"><i className="fa fa-heart-o"></i></span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    
                                    <a href="index.html#" className="btn btn-primary">GET STARTED NOW</a>
                                    <a href="index.html#" className="btn btn-default">Learn More</a>
                                    
                                    <div className="bottom-arrow">
                                        <a href="index.html#about-us" className="page-scroll"><i className="fa fa-angle-down"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <About/>
                <Services/>
                <Portfolio/>
                <Pricing/>
                <Team/>
                <Blog/>
                <Testimonials/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default Home;