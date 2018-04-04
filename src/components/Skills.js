import React, { Component } from 'react';

class Skills extends Component {
    render(){
        return(
            <section id="our-skill">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-block text-center">
                            <h1>Our Skills</h1>
                            <p>Lorem Ipsum is simply dummy text</p>
                            <div className="line-block">
                                <span className="bullet"><i className="fa fa-heart-o"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-6">
                        <div className="skills_area">
                            <div className="single_progressbar">
                                <div className="skill_text">
                                    <span>HTML</span>
                                    <span className="skill_per"></span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                    </div>
                                </div>
                            </div>
                            <div className="single_progressbar">
                                <div className="skill_text">
                                    <span>CSS</span>
                                    <span className="skill_per"></span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                    </div>
                                </div>
                            </div>
                            <div className="single_progressbar">
                                <div className="skill_text">
                                    <span>PHOTOSHOP</span>
                                    <span className="skill_per"></span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                    </div>
                                </div>
                            </div> 
                            
                            <div className="single_progressbar">
                                <div className="skill_text">
                                    <span>JQuery</span>
                                    <span className="skill_per"></span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                    </div>
                                </div>
                            </div> 
                            
                        </div>
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="skills_area">
                            <div className="single_progressbar">
                                <div className="skill_text">
                                    <span>ILLUSTRATOR</span>
                                    <span className="skill_per"></span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                    </div>
                                </div>
                            </div> 
                            <div className="single_progressbar">
                                <div className="skill_text">
                                    <span>Wordpress</span>
                                    <span className="skill_per"></span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                    </div>
                                </div>
                            </div>
                            <div className="single_progressbar">
                                <div className="skill_text">
                                    <span>Php</span>
                                    <span className="skill_per"></span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                    </div>
                                </div>
                            </div>
                            <div className="single_progressbar">
                                <div className="skill_text">
                                    <span>Mysql</span>
                                    <span className="skill_per"></span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Skills;