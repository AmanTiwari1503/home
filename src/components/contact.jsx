import React,{Component} from 'react'

class Contact extends Component{
	render(){return(
		<section className="colorlib-contact" data-section="contact">
		  <div className="colorlib-narrow-content">
		    <div className="row">
		      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
		        <span className="heading-meta">Get in Touch</span>
		        <h2 className="colorlib-heading">Contact</h2>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
		        <div className="colorlib-feature colorlib-feature-sm">
		          <div className="colorlib-icon">
		            <i className="icon-mail" />
		          </div>
		          <div className="colorlib-text">
		            <p><a href="mailto:tiwariaman2000@gmail.com">tiwariaman2000@gmail.com</a></p>
		          </div>
		        </div>
		        <div className="colorlib-feature colorlib-feature-sm">
		          <div className="colorlib-icon">
		            <i className="icon-map" />
		          </div>
		          <div className="colorlib-text">
		            <p><a href="https://goo.gl/maps/5XswTLTuuk4Mfg7r5" target="_blank" rel="noopener noreferrer">Jabalpur, Madhya Pradesh, India - 482001</a></p>
		          </div>
		        </div>
		        <div className="colorlib-feature colorlib-feature-sm">
		          <div className="colorlib-icon">
		            <i className="icon-phone" />
		          </div>
		          <div className="colorlib-text">
		            <p><a href="tel:+919873466670">+91-9873466670</a></p>
		          </div>
		        </div>
		      </div>
		      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
		          <iframe title="Jabalpur map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117371.05679927356!2d79.89871221862117!3d23.175837426447625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0fb6a97d%3A0x44020616bc43e3b9!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1624511625338!5m2!1sen!2sin" 
		          style={{border: 0, width: '100%'}} allowFullScreen loading="lazy" height={400} />
		      </div>
		    </div>
		  </div>
		</section>
	)}
}

export default Contact;