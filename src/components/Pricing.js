import React, { Component } from 'react';

class Pricing extends Component {
    render(){
        return(
            <section id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-block text-center">
                            <h1>Pricing</h1>
                            <p>Lorem Ipsum is simply dummy text</p>
                            <div className="line-block">
                                <span className="bullet"><i className="fa fa-heart-o"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="price-table text-center wow fadeInLeft">
                            <div className="price-top">
                                <h3>Standard</h3>
                                <div className="pack-price">
                                    <span><sup>$</sup>19.99</span>
                                </div>
                            </div>
                            <ul>
                                <li>Wordpress</li>
                                <li>HTML5 &amp; CSS 3</li>
                                <li>PSD Files</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Unlimited Support</li>
                            </ul>
                            
                            <a href="index.html#" className="btn btn-default">Buy Now</a>
                            
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="price-table text-center">
                            <div className="price-top">
                                <h3>Medium</h3>
                                <div className="pack-price">
                                    <span><sup>$</sup>39.99</span>
                                </div>
                            </div>
                            <ul>
                                <li>Wordpress</li>
                                <li>HTML5 &amp; CSS 3</li>
                                <li>PSD Files</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Unlimited Support</li>
                            </ul>
                            
                            <a href="index.html#" className="btn btn-default">Buy Now</a>
                            
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="price-table text-center wow fadeInRight">
                            <div className="price-top">
                                <h3>Premium</h3>
                                <div className="pack-price">
                                    <span><sup>$</sup>59.99</span>
                                </div>
                            </div>
                            <ul>
                                <li>Wordpress</li>
                                <li>HTML5 &amp; CSS 3</li>
                                <li>PSD Files</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Unlimited Support</li>
                            </ul>
                            
                            <a href="index.html#" className="btn btn-default">Buy Now</a>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        );
    }
}

export default Pricing;