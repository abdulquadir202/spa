import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="footer-top">
                <div className="top-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <h1>Love what we have done?</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu felis orci. Pellentesque habitant morbi tristique</p>
                                <a href="index.html#" className="btn btn-primary">start free trial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="footer-left">
                                <ul>
                                    <li><a href="index.html#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="index.html#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="index.html#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="index.html#"><i className="fa fa-youtube"></i></a></li>
                                    <li><a href="index.html#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-xs-12 col-sm-6">
                            <div className="footer-right text-right">
                                <p>&copy; Copyright 2016. All Rights Reserved.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;