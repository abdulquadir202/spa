import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class Nav extends Component {
    render(){
        return(
        	<nav className="navbar navbar-default navbar-fixed-top">
								<div className="container">
									<div className="row">
										<div className="col-xs-12">
											<div className="navbar-header page-scroll">
												<button type="button" className="navbar-toggle mobile-menu-opener">
													<span className="sr-only">Toggle navigation</span>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
												</button>
												<a className="navbar-brand page-scroll" href="/home"><img src="img/logo.png" alt="Logo" /></a>
											</div>

											<div className="collapse navbar-collapse" id="navbar">
												<ul className="nav navbar-nav navbar-right">
													<li className="page-scroll" ><NavLink to="/home">Home</NavLink></li>
													<li className="page-scroll" ><NavLink to="/about">About Us</NavLink></li>
													<li className="page-scroll" ><NavLink to="/services">Services</NavLink></li>
													<li className="page-scroll" ><NavLink to="/portfolio">Portfolio</NavLink></li>
													<li className="page-scroll" ><NavLink to="/pricing">Pricing</NavLink></li>
													<li className="page-scroll" ><NavLink to="/blog">Blog</NavLink></li>
													<li className="page-scroll" ><NavLink to="/testimonials">Testimonials</NavLink></li>
													<li className="page-scroll" ><NavLink to="/team">Team</NavLink></li>
													<li className="page-scroll" ><NavLink to="/contact">Contact</NavLink></li>
												</ul>
											</div>
										</div>
									</div>		
								</div>
						</nav>
        );
    }
}


export default Nav;