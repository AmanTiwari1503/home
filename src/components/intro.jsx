import React, {Component} from 'react'

class Intro extends Component{
	render(){return(
		<section id="colorlib-hero" className="js-fullheight" data-section="home">
		  <div className="flexslider js-fullheight">
		    <ul className="slides">
		      <li id="slide1">
		        <div className="overlay" />
		        <div className="container-fluid">
		          <div className="row">
		            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
		              <div className="slider-text-inner js-fullheight">
		                <div className="desc">
		                  <h1>Hi! <br />I'm Aman</h1>
		                  {/*<h2>I code and binge-watch anime</h2>*/}
		                  <p><a href="https://drive.google.com/file/d/10jjApHy09KaVs_OESZQdH6BY8EMkkhFR/view?usp=sharing"
		                  target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </li>
		      <li id="slide2">
		        <div className="overlay" />
		        <div className="container-fluid">
		          <div className="row">
		            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
		              <div className="slider-text-inner">
		                <div className="desc">
		                  <h1>I code and binge watch anime</h1>
		                  {/*<h2>You can see some of my anime recommendations here</h2>*/}
		                  {/*<p><a href="/#" className="btn btn-primary btn-learn">View Recommendations <i className="icon-briefcase3" /></a></p>*/}
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </li>
		    </ul>
		  </div>
		</section>
	)}
}

export default Intro;