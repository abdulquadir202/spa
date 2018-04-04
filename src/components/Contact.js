import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return(
            <section id="contact-us" className="inverse">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-block text-center">
                            <h1>KEEP IN TOUCH</h1>
                            <p>Lorem Ipsum is simply dummy text</p>
                            <div className="line-block">
                                <span className="bullet"><i className="fa fa-heart-o"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5">
                        <div className="contact-left wow fadeInLeft">
                            <ul>
                                <li>
                                    <div className="conact-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</div>
                                </li>
                                
                                <li>
                                    <div className="conact-icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="info-text">Phone: 02 9635 0247 <br/> Fax: 02 9635 0247</div>
                                </li>
                                
                                <li>
                                    <div className="conact-icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="info-text"><a href="mailto:info@yourdomain.com">info@yourdomain.com</a><a href="mailto:support@yourdomain.com">support@yourdomain.com</a></div>
                                </li>
                                
                                <li>
                                    <div className="conact-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                    <div className="info-text">Monday-Friday: 9am - 5pm <br/> Saturday: 10am - 2pm</div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-7">
                        <div className="contact-right wow fadeInRight">
                            <form action="index.html#" method="post" id="contact-form">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" className="form-control" placeholder="Subject"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                                </div>
                                
                                    <input type="submit" className="btn btn-primary" name="submit" value="Send Message"/>
                                
                            </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>  
        )
    }
}

export default Contact;