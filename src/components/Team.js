import React, { Component } from 'react';

class Team extends Component {
    render(){
        return(
            <section id="team" className="inverse">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-block text-center">
                            <h1>Our Team</h1>
                            <p>Lorem Ipsum is simply dummy text</p>
                            <div className="line-block">
                                <span className="bullet"><i className="fa fa-heart-o"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-3">
                        <div className="team-member text-center wow fadeInLeft">
                            <div className="team-thumb">
                                <img src="img/team/1.jpg" alt="" />
                                <div className="social-link">
                                    <ul>
                                        <li><a href="index.html#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h2>John Doe</h2>
                            <span className="designation">CEO</span>
                            
                        </div>
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-3">
                        <div className="team-member text-center wow fadeInLeft">
                            <div className="team-thumb">
                                <img src="img/team/2.jpg" alt="" />
                                <div className="social-link">
                                    <ul>
                                        <li><a href="index.html#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h2>Abu Bin Musa</h2>
                            <span className="designation">UI/UX Designer</span>
                            
                        </div>
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-3">
                        <div className="team-member text-center wow fadeInRight">
                            <div className="team-thumb">
                                <img src="img/team/3.jpg" alt="" />
                                <div className="social-link">
                                    <ul>
                                        <li><a href="index.html#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h2>Ahmed Shafi</h2>
                            <span className="designation">Web Developer</span>
                            
                        </div>
                    </div>
                    
                    <div className="col-xs-6 col-sm-6 col-md-3">
                        <div className="team-member text-center wow fadeInRight">
                            <div className="team-thumb">
                                <img src="img/team/4.jpg" alt="" />
                                <div className="social-link">
                                    <ul>
                                        <li><a href="index.html#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="index.html#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h2>John Doe</h2>
                            <span className="designation">Graphic Designer</span>
                            
                        </div>
                    </div>
                      
                </div>
                
            </div>
        </section>
        );
    }
}

export default Team;