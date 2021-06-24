import React,{Component} from 'react'
import profile from '../assets/images/profile.jpg'

class Sidebar extends Component{
	render(){return(
		<div>
		  <a href="/#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
		  <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
		    <div className="text-center">
		      <div className="author-img" style={{backgroundImage: `url(${profile})`}} />
		      <h1 id="colorlib-logo"><a href="index.html">Aman Tiwari</a></h1>
		      <span className="position">Engineer at <a href="https://www.samsung.com/sec/" target="_blank" rel="noopener noreferrer">Samsung</a></span>
		    </div>
		    <nav id="colorlib-main-menu" role="navigation" className="navbar">
		      <div id="navbar" className="collapse">
		        <ul>
		          <li className="active"><a href="/#" data-nav-section="home">Home</a></li>
		          <li><a href="/#;" data-nav-section="about">About</a></li>
		          <li><a href="/#;" data-nav-section="skills">Skills</a></li>
		          <li><a href="/#;" data-nav-section="education">Education</a></li>
		          <li><a href="/#;" data-nav-section="experience">Experience</a></li>
		          <li><a href="/#" data-nav-section="contact">Contact</a></li>
		        </ul>
		      </div>
		    </nav>
		    <div className="colorlib-footer">
		      <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
		          Copyright  All rights reserved. Made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
		          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</small></p>
		      <ul>
		        <li><a href="https://www.facebook.com/AmanTiwari1503/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
		        <li><a href="https://github.com/AmanTiwari1503" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></li>
		        <li><a href="https://www.instagram.com/amantiwari1503/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
		        <li><a href="https://www.linkedin.com/in/amantiwari1503/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
		      </ul>
		    </div>
		  </aside>
		</div>
	)}
}

export default Sidebar;