import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Blog from "./components/Blog";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
					  <Nav/>
						<div className="content">
							<Route path="/home" component={Home}/>
							<Route path="/about" component={About}/>
							<Route path="/services" component={Services}/>
							<Route path="/portfolio" component={Portfolio}/>
							<Route path="/pricing" component={Pricing}/>
							<Route path="/team" component={Team}/>
							<Route path="/blog" component={Blog}/>
							<Route path="/testimonials" component={Testimonials}/>
							<Route path="/contact" component={Contact}/>
						</div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;