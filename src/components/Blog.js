import React, { Component } from 'react';

class Blog extends Component {
    render(){
        return(
            <section id="blog" className="inverse">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-block text-center">
                            <h1>Recent Posts</h1>
                            <p>Lorem Ipsum is simply dummy text</p>
                            <div className="line-block">
                                <span className="bullet"><i className="fa fa-heart-o"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="post wow fadeInLeft">
                            <div className="post-thumb">
                                <a href="index.html#">
                                    <img src="img/blog/1.jpg" alt="" />
                                    <div className="overlay">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </a>
                            </div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>
                                <span className="post-by"><a href="index.html#"><i className="fa fa-user"></i> Admin</a></span>
                                <span className="post-date"><i className="fa fa-calendar"></i> 14 March 2016</span>
                                <span className="post-comments"><a href="index.html#"><i className="fa fa-comment-o"></i> 12 comments</a></span>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                    
                    <div className="col-xs-12 col-md-4">
                        <div className="post">
                            <div className="post-thumb">
                                <a href="index.html#">
                                    <img src="img/blog/2.jpg" alt="" />
                                    <div className="overlay">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </a>
                            </div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>
                                <span className="post-by"><a href="index.html#"><i className="fa fa-user"></i> Admin</a></span>
                                <span className="post-date"><i className="fa fa-calendar"></i> 14 March 2016</span>
                                <span className="post-comments"><a href="index.html#"><i className="fa fa-comment-o"></i> 12 comments</a></span>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                    
                    <div className="col-xs-12 col-md-4">
                        <div className="post wow fadeInRight">
                            <div className="post-thumb">
                                <a href="index.html#">
                                    <img src="img/blog/3.jpg" alt="" />
                                    <div className="overlay">
                                        <i className="fa fa-link"></i>
                                    </div>
                                </a>
                            </div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>
                                <span className="post-by"><a href="index.html#"><i className="fa fa-user"></i> Admin</a></span>
                                <span className="post-date"><i className="fa fa-calendar"></i> 14 March 2016</span>
                                <span className="post-comments"><a href="index.html#"><i className="fa fa-comment-o"></i> 12 comments</a></span>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        </section>
        );
    }
}

export default Blog;