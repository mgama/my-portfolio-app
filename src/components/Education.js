import React from "react"
import EducationSection from './EducationSection.js'; // Import the Thumbnail component
 
function Education(props) {
  return (
    <div>
    	<h1>Education</h1>
    	<EducationSection
	        title="Strayer University"
	        subtitle="Master of Science in Information Systems with concentration in Software Engineering Management"
	        years="2011 to 2014"
	        href="https://www.strayer.edu/online-degrees/masters/information-systems/software-engineering-management"
	        image="https://www.strayer.edu/content/dam/strayer/SUHP-redesign/images/D_StrayerUniv_Logo_Horiz_red.svg"
      	/>
      	<EducationSection
	        title="Cetys Universidad"
	        subtitle="Bachelor of Cybernetics Electronics Engineering"
	        years="2006 to 2010"
	        href="https://www.cetys.mx/en/academic-programs/undergraduate-programs/electronic-cybernetics-engineering"
	        image="https://www.cetys.mx/en/wp-content/uploads/2016/11/logo-cetys.png"
      	/>
      	<EducationSection
	        title="Cetys Universidad"
	        subtitle="International Baccalaurate"
	        years="2003 to 2006"
	        href="https://www.ibo.org/about-the-ib/"
	        image="https://www.ibo.org/Assets/Images/logo-163.svg"
      	/>
	    <h1>Professional Certifications</h1>
	    <EducationSection
	        title="ISTQB Advanced Level Test Automation Engineer"
	        subtitle="Credential ID: 18-CTAL-TAE-0054-USA"
	        years="November 2018"
	        href="https://www.istqb.org/certification-path-root/test-automation-engineer.html"
	        image="https://aiit.ac.nz/wp-content/uploads/2019/05/300x300-CTAL-TAE.png"
      	/>
	    <EducationSection
			  title="ISTQB Certified Tester Foundation Level"
			  subtitle="Credential ID: 12-CTFL-00852-USA"
			  years="June 2012"
			  href="https://www.istqb.org/certification-path-root/foundation-level-2018.html"
			  image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F83484851%2F216232088902%2F1%2Foriginal.20191204-151921?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C18%2C478%2C239&s=fa2a8a08924a8cf7767cc45a19f09d5f"
	    />
	    <h1>Online Courses</h1>
	    <EducationSection
			  title="Coursera: Duke University"
			  subtitle="Programming Foundations with JavaScript, HTML and CSS"
			  years="April 2018"
			  href="https://www.coursera.org/account/accomplishments/verify/AS4PL6MUT7XP"
			  image="https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo.png"
	    />
	    <EducationSection
			  title="Coursera: deeplearning.ai"
			  subtitle="Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization"
			  years="October 2017"
			  href="https://www.coursera.org/account/accomplishments/verify/Q7A6SN8JHXKP"
			  image="https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo.png"
	    />
	    <EducationSection
			  title="Coursera: deeplearning.ai"
			  subtitle="Structuring Machine Learning Projects"
			  years="October 2017"
			  href="https://www.coursera.org/account/accomplishments/verify/JP5DBJHQAY9C"
			  image="https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo.png"
	    />
	    <EducationSection
			  title="Coursera: deeplearning.ai"
			  subtitle="Neural Networks and Deep Learning"
			  years="September 2017"
			  href="https://www.coursera.org/account/accomplishments/verify/2TS5M96MKMXP"
			  image="https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo.png"
	    />
	    <EducationSection
			  title="Coursera: The University of Edinburgh"
			  subtitle="AstroTech: The Science and Technology behind Astronomical Discovery"
			  years="July 2015"
			  image="https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo.png"
	    />
	    <EducationSection
			  title="Coursera: Berklee College of Music"
			  subtitle="Introduction to Music Production"
			  years="September 2013"
			  image="https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo.png"
	    />
	    <EducationSection
			  title="Coursera: University of Rochester"
			  subtitle="Fundamentals of Audio and MusicEngineering: Part 1 Musical Sound& Electronics"
			  years="August 2013"
			  image="https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo.png"
	    />
	    <EducationSection
			  title="Coursera: Emory University"
			  subtitle="Introduction to Digital Sound Design"
			  years="May 2013"
			  image="https://149362230.v2.pressablecdn.com/wp-content/uploads/2018/08/coursera-social-logo.png"
	    />
    </div>
  )
}
 
export default Education;