import React,{Component} from 'react';
import './App.css';
import './assets/css/animate.css'
import './assets/css/bootstrap.css'
import './assets/css/flexslider.css'
import './assets/css/icomoon.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/style.css'
import Sidebar from './components/sidebar'
import Intro from './components/intro'
import About from './components/about'
import Skills from './components/skills'
import Education from './components/education'
import Experience from './components/experience'
import Contact from './components/contact'

class App extends Component{
  render(){return(
    <div id="colorlib-page">
    <div className="container-wrap">
    <Sidebar></Sidebar>
    <div id="colorlib-main">
    	<Intro></Intro>
    	<About></About>
    	<Skills></Skills>
    	<Education></Education>
    	<Experience></Experience>
      <Contact></Contact>
    </div>
  	</div>
  	</div>
  )}
}

export default App;
