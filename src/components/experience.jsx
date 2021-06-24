import React,{Component} from 'react'

class Experience extends Component{
	render(){return(
		<section className="colorlib-experience" data-section="experience">
		  <div className="colorlib-narrow-content">
		    <div className="row">
		      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
		        <span className="heading-meta">Experience</span>
		        <h2 className="colorlib-heading animate-box">Work Experience</h2>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-md-12">
		        <div className="timeline-centered">
		          <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
		            <div className="timeline-entry-inner">
		              <div className="timeline-icon color-3">
		                <i className="icon-pen2" />
		              </div>
		              <div className="timeline-label">
		                <h2>Engineer at Samsung<br></br><span> From September 2021</span></h2>
		                <p>I was given a <strong>Pre-Placement Offer</strong> by Samsung in August 2020. I will be starting as an Engineer in the <strong>Networks Business Unit </strong>
		                of <strong>Samsung Electronics, South Korea</strong> in Fall 2021.</p>
		              </div>
		            </div>
		          </article>
		          <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
		            <div className="timeline-entry-inner">
		              <div className="timeline-icon color-4">
		                <i className="icon-pen2" />
		              </div>
		              <div className="timeline-label">
		                <h2>Associate-Intern at Samsung<br></br><span>May 2020 - June 2020</span></h2>
		                <p>I worked as an Associate Intern in the <strong>Networks Business Unit</strong> of <strong> Samsung Electronics, South Korea</strong>. The project I worked on was titled 
		                <strong> Alarm Sequence Visualizer</strong>. I designed a web application using <strong>Dash</strong> for visualization of the causalities detected the in Alarm Logs of various
		                LTE entities.
		                <br></br>My internship completion letter is linked <a href="https://drive.google.com/file/d/18DBsWsj6ElB3Em0vP7BNlnEUEJuOuTrC/view?usp=sharing"
		                target="_blank" rel="noopener noreferrer">here</a>.</p>
		              </div>
		            </div>
		          </article>
		          <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
		            <div className="timeline-entry-inner">
		              <div className="timeline-icon color-5">
		                <i className="icon-pen2" />
		              </div>
		              <div className="timeline-label">
		                <h2>Research Intern at University of California, San Diego<br></br><span>May 2019 - June 2019</span></h2>
		                <p>I worked as a Research Intern under <strong>Prof. Dinesh Bharadia</strong> in the <strong>Wireless Communications, Systems and Networking Group, University of California, San Diego (UCSD)</strong>.
		                I worked on a project titled <strong>Indoor Mapping and Localization using Smartphone Devices</strong>. It involved the localization of a user, in a 2D map of an indoor environment, using
		                <strong> Wifi Based Localization</strong>.
		                <br></br>My internship completion letter is linked <a href="https://drive.google.com/file/d/1iCcXH_THTTfOz3_4yf_yMF93-sxrE0ix/view?usp=sharing"
		                target="_blank" rel="noopener noreferrer">here</a>.
						</p>
		              </div>
		            </div>
		          </article>
		          <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
		            <div className="timeline-entry-inner">
		              <div className="timeline-icon color-none">
		              </div>
		            </div>
		          </article>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)}
}

export default Experience;