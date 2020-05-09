import React from "react"
 
function Skills(props) {
  return (
	<div>
		<h1>Skills</h1>
		<div>
			<h2>Continuous Integration</h2>
			<a href="https://www.jenkins.io/">
				<img src="https://miro.medium.com/max/1600/1*LOFbTP2SxXcFpM_qTsUSuw.png"/>
			</a>
			<a href="https://buildkite.com/">
				<img src="https://xebialabs.com/wp-content/uploads/2018/10/buildkite.png"/>
			</a>
		</div>
		<div>
			<h2>Cloud Technologies</h2>
			<a href="https://www.heroku.com/">
				<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--7f5GjxUW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/c29t9uc8roz8g9rddbqs.png"/>
			</a>
		</div>
		<div>
			<h2>Cloud Test Execution</h2>
			<a href="https://saucelabs.com/">
				<img src="https://testingsaas.nl/wp-content/uploads/2019/12/saucelabs_logo.jpg"/>
			</a>
		</div>
		<div>
			<h2>Web UI Test Automation</h2>
			<a href="https://nightwatchjs.org/">
				<img src="https://nightwatchjs.org/img/banner.png"/>
			</a>
			<a href="https://webdriver.io/">
				<img src="https://i2.wp.com/grantnorwood.com/app/uploads/2017/07/webdriver-io-logo.png"/>
			</a>
		</div>
		<div>
			<h2>Android App UI Test Automation</h2>
		</div>
		<div>
			<h2>API Test Automation</h2>
		</div>
		<div>
			<h2>Unit Test Frameworks</h2>
		</div>
	</div>
  )
}
 
export default Skills;