import React, { Component } from 'react';

class Testimonials extends Component {
    render(){
        return(
            <section id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-block text-center">
                            <h1>Testimonials</h1>
                            <p>Lorem Ipsum is simply dummy text</p>
                            <div className="line-block">
                                <span className="bullet"><i className="fa fa-heart-o"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
                            
                            <div className="carousel-inner text-center" role="listbox">
                                <div className="item active">
                                    <div className="thumb">
                                        <img src="img/testimonials/1.png" alt="" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                                    
                                    <div className="name">Abdullah Bin Shami</div>
                                    <div className="author-designation">CEO - Lorem Ipsum</div>
                                    
                                </div>
                                
                                <div className="item">
                                    <div className="thumb">
                                        <img src="img/testimonials/1.png" alt="" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                                    
                                    <div className="name">Abdullah Bin Shami</div>
                                    <div className="author-designation">CEO - Lorem Ipsum</div>
                                    
                                </div>
                                
                                <div className="item">
                                    <div className="thumb">
                                        <img src="img/testimonials/1.png" alt="" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.</p>
                                    
                                    <div className="name">Abdullah Bin Shami</div>
                                    <div className="author-designation">CEO &amp; Co-Founder</div>
                                    
                                </div>
                            
                            </div>
                            
                            <ol className="carousel-indicators">
                                <li data-target="#testimonial-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#testimonial-carousel" data-slide-to="1"></li>
                                <li data-target="#testimonial-carousel" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        );
    }
}

export default Testimonials;