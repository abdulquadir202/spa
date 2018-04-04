import React, { Component } from 'react';
import Footer from './Footer';

class About extends Component {
    render(){
        return(
            <section id="about-us">
                <div className="about-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="title-block text-center">
                                    <h1>About Us</h1>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                    <div className="line-block">
                                        <span className="bullet"><i className="fa fa-heart-o"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row  wow fadeInDown">
                            <div className="col-xs-6 col-sm-6 col-md-3">
                                <div className="inner text-center">
                                    <i className="fa fa-plane"></i>
                                    <h2>SLEEK DESIGN</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                                </div>
                            </div>
                            
                            <div className="col-xs-6 col-sm-6 col-md-3">
                                <div className="inner text-center">
                                    <i className="fa fa-heart-o"></i>
                                    <h2>CLEAN CODE</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                                </div>
                            </div>
                            
                            <div className="col-xs-6 col-sm-6 col-md-3">
                                <div className="inner text-center">
                                    <i className="fa fa-lightbulb-o"></i>
                                    <h2>CREATIVE IDEAS</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                            </div>
                            </div>
                            
                            <div className="col-xs-6 col-sm-6 col-md-3">
                                <div className="inner text-center">
                                    <i className="fa fa-life-ring"></i>
                                    <h2>FREE SUPPORT</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                            </div>
                            </div>
                            
                        </div>
                
                    </div>
                </div>
                <div className="count-section">
                    <div className="count-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <ul>
                                        <li>
                                            <i className="fa fa-heart-o"></i>
                                            <h1><span className="counter">3891</span></h1>
                                            <h2>User Favourites</h2>
                                        </li>
                                        <li>
                                            <i className="fa fa-trophy"></i>
                                            <h1><span className="counter">281</span>K</h1>
                                            <h2>Posts Last 24 Hours</h2>
                                        </li>
                                        <li>
                                            <i className="fa fa-thumbs-o-up"></i>
                                            <h1><span className="counter">618</span></h1>
                                            <h2>Total Posts</h2>
                                        </li>
                                        <li>
                                            <i className="fa fa-star-o"></i>
                                            <h1><span className="counter">178</span></h1>
                                            <h2>Campaigns</h2>
                                        </li>
                                        <li>
                                            <i className="fa fa-glass"></i>
                                            <h1><span className="counter">285</span></h1>
                                            <h2>Amazing Features</h2>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
            
        );
    }
}

export default About;