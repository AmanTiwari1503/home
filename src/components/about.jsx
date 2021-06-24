import React,{Component} from 'react'

class About extends Component{
	render(){return(
		<section className="colorlib-about" data-section="about">
		  <div className="colorlib-narrow-content">
		    <div className="row">
		      <div className="col-md-12">
		        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
		          <div className="col-md-12">
		            <div className="about-desc">
		              <span className="heading-meta">About Us</span>
		              <h2 className="colorlib-heading">Who Am I?</h2>
		              <p><strong>Hi I'm Aman Tiwari</strong>. I consider myself a very confident, hard-working, focussed and determined person.
		               I am very passionate about my work and whatever task I am assigned. I am known for my time-management and I am very excited about learning new things in my life.</p>
		              <p>I also consider myself as a very effective leader as I have been a cultural fest technical coordinator and a student mentor in the past. 
		              I am very sincere regarding my work and academics. I have been pretty consistent throughout my life and have always been among one of the top performers of my batch.</p>
		              <p>Some of my hobbies include - </p>
		            </div>
		          </div>
		        </div>
		        <div className="row">
		          <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
		            <div className="services color-2">
		              <span className="icon2"><i className="icon-globe-outline" /></span>
		              <h3>Web Designing</h3>
		            </div>
		          </div>
		          <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
		            <div className="services color-3">
		              <span className="icon2"><i className="icon-music2" /></span>
		              <h3>Singing</h3>
		            </div>
		          </div>
		          <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
		            <div className="services color-4">
		              <span className="icon2"><i className="icon-pencil" /></span>
		              <h3>Sketching</h3>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)}
}

export default About;