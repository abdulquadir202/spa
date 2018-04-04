import React, { Component } from 'react';

class Portfolio extends Component {
    render(){
        return(
            <section id="portfolio" className="inverse">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-block text-center">
                            <h1>RECENT WORKS</h1>
                            <p>It has survived not only five centuries, but also the leap scrambled it to make a type.</p>
                            <div className="line-block">
                                <span className="bullet"><i className="fa fa-heart-o"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <ul id="filter-list">
                             <li className="filter" data-filter="all">ALL</li>
                              <li className="filter" data-filter="print-design">PRINT DESIGN</li>
                              <li className="filter" data-filter="animation">ANIMATION</li>
                              <li className="filter" data-filter="web-design">WEB DESIGN</li>
                            <li className="filter" data-filter="photography">PHOTOGRAPHY</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
            <ul className="portfolio_items">
                <li className="portfolio web-design print-design">
                    <div className="post_thumb">
                        <img src="img/portfolio/1.jpg" alt="" />
                        <div className="portfolio-overlay">
                            <a href="img/portfolio/1.jpg" className="fancybox"><i className="fa fa-camera"></i></a>
                            <a href="index.html#"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </li>
                
                <li className="portfolio photography animation">
                    <div className="post_thumb">
                        <img src="img/portfolio/2.jpg" alt="" />
                        <div className="portfolio-overlay">
                            <a href="img/portfolio/2.jpg" className="fancybox"><i className="fa fa-camera"></i></a>
                            <a href="index.html#"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </li>
                
                <li className="portfolio print-design web-design">
                    <div className="post_thumb">
                        <img src="img/portfolio/3.jpg" alt="" />
                        <div className="portfolio-overlay">
                            <a href="img/portfolio/3.jpg" className="fancybox"><i className="fa fa-camera"></i></a>
                            <a href="index.html#"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </li>
                
                <li className="portfolio animation photography">
                    <div className="post_thumb">
                        <img src="img/portfolio/4.jpg" alt="" />
                        <div className="portfolio-overlay">
                            <a href="img/portfolio/4.jpg" className="fancybox"><i className="fa fa-camera"></i></a>
                            <a href="index.html#"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </li>
                
                <li className="portfolio web-design print-design">
                    <div className="post_thumb">
                        <img src="img/portfolio/5.jpg" alt="" />
                        <div className="portfolio-overlay">
                            <a href="img/portfolio/5.jpg" className="fancybox"><i className="fa fa-camera"></i></a>
                            <a href="index.html#"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </li>
                
                <li className="portfolio photography animation">
                    <div className="post_thumb">
                        <img src="img/portfolio/6.jpg" alt="" />
                        <div className="portfolio-overlay">
                            <a href="img/portfolio/6.jpg" className="fancybox"><i className="fa fa-camera"></i></a>
                            <a href="index.html#"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </li>
                
                <li className="portfolio print-design  web-design">
                    <div className="post_thumb">
                        <img src="img/portfolio/7.jpg" alt="" />
                        <div className="portfolio-overlay">
                            <a href="img/portfolio/7.jpg" className="fancybox"><i className="fa fa-camera"></i></a>
                            <a href="index.html#"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </li>
                
                <li className="portfolio animation photography">
                    <div className="post_thumb">
                        <img src="img/portfolio/8.jpg" alt="" />
                        <div className="portfolio-overlay">
                            <a href="img/portfolio/8.jpg" className="fancybox"><i className="fa fa-camera"></i></a>
                            <a href="index.html#"><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </li>
            </ul>
            
        </section>
        );
    }
}

export default Portfolio;