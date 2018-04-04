import React, { Component } from 'react';

class Services extends Component {
    render(){
        return(
            <section id="services">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-block text-center">
                            <h1>Our Services</h1>
                            <p>Lorem Ipsum is simply dummy text</p>
                            <div className="line-block">
                                <span className="bullet"><i className="fa fa-heart-o"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row  wow fadeInDown">
                    <div className="col-xs-6 col-sm-6 col-md-4">
                        <div className="service-list text-center">
                            <i className="fa fa-laptop"></i>
                            <h2>WEB DESIGN</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                        </div>
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-4">
                        <div className="service-list text-center">
                            <i className="fa fa-eye-slash"></i>
                            <h2>PHOTOGRAPHY</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                        </div>
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-4">
                        <div className="service-list text-center">
                            <i className="fa fa-stack-exchange"></i>
                            <h2>PRINT DESIGN</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                        </div>
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-4">
                        <div className="service-list text-center">
                            <i className="fa fa-flash"></i>
                            <h2>ANIMATION</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                        </div>
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-4">
                        <div className="service-list text-center">
                            <i className="fa fa-briefcase"></i>
                            <h2>Marketing</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                        </div>
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-4">
                        <div className="service-list text-center">
                            <i className="fa fa-diamond"></i>
                            <h2>Branding</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
        );
    }
}

export default Services;