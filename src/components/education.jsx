import React,{Component} from 'react'

class Education extends Component{
	render(){return(
		<section className="colorlib-education" data-section="education">
		  <div className="colorlib-narrow-content">
		    <div className="row">
		      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
		        <span className="heading-meta">Education</span>
		        <h2 className="colorlib-heading animate-box">Education</h2>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
		        <div className="fancy-collapse-panel">
		          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		            <div className="panel panel-default">
		              <div className="panel-heading" role="tab" id="headingOne">
		                <h4 className="panel-title">
		                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Graduation
		                  </a>
		                </h4>
		              </div>
		              <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
		                <div className="panel-body">
		                  I graduated in <strong>Electrical Engineering</strong> from the <strong>Indian Institute of Technology, Delhi</strong> in <strong>2021</strong>.
		                  <br></br>My Grade Point Average (GPA) at graduation was <strong>9.453/10</strong>
		                </div>
		              </div>
		            </div>
		            <div className="panel panel-default">
		              <div className="panel-heading" role="tab" id="headingTwo">
		                <h4 className="panel-title">
		                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">High School Secondary Education
		                  </a>
		                </h4>
		              </div>
		              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
		                <div className="panel-body">
		                  I did my Class X and Class XII from <strong>City Montessori School, Gomtinagar-1</strong> which is affiliated to the <strong>CISCE</strong>.
		                  <ul>
		                  <li>12th percentage - <strong>98.25%</strong></li>
		                  <li>10th percentage - <strong>98.40%</strong></li>
		                  </ul>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)}
}

export default Education;