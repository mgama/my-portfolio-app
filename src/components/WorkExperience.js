import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import Paragraph from './Paragraph.js';

function WorkExperience(props) {
  return (
    <div>
      <h1>Work Experience</h1>

      <a href="https://www.linkedin.com/in/manuelalejandrogama/">
        <img class="social-media-logo" src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png"/>
      </a>

      <div class="row">
        <div class="workplace column left">
          <Thumbnail
            image="https://searchvectorlogo.com/wp-content/uploads/2019/11/wayfair-logo-vector.png"
            title="Wayfair"
            subtitle="L2 Engineer"
          />
        </div>
        <div class="workplace column right">
          <Paragraph
            text="- Creating new Rest API integration tests using Karate (Java and Javascript). Configuring and executing tests to run against Docker instances. Running them on Buildkite CI as part of Pull Request pipeline"
          />
          <Paragraph
            text="- Integrated Sonarqube, Buildkite and Code coverage across different repositories/technologies from the scrum team (Python/Pytest, Javascript/Jest, PHP/PHPUnit, Java/Junit/Jacoco)"
          />
          <Paragraph
            text="- Implemented new deploy and software testing process improvements in scrum team, including the execution of API integration tests"
          />
          <Paragraph
            text="- Lead new process improvements to the Deploy Suite of Integration Tests used for daily deploys of the Wayfair Ecosystem by implementing a new Multi-Team Collaboration Project to Audit, Fix, Stabilize and Increate Test Coverage of the Integration Tests"
          />
          <Paragraph
            text="- Used PHP Unit for creating new Graphql API Integration tests. Integrated the tests on the Jenkins CI deploy process to production. Configured Jenkins JUnit plugin for displaying test results, and slack integration to send test results to a dedicated team slack channel."
          />
          <Paragraph
            text="- Using Buildkite pipelines to execute API Integration tests. Setup scheduled buildkite builds for executing Deploy and Regression Suites daily. Worked with other Software Engineers to configure slack notifications from test results."
          />
          <Paragraph
            text="- Using Codeception (PHP/Selenium) for Desktop automated UI Web tests. Running them on Jenkins CI using Saucelabs on a daily basis as a Smoketest Run."
          />
          <Paragraph
            text="- Using Espresso (Java) for automated tests on the Android App"
          />
        </div>
      </div>

      <div class="row">
        <div class="workplace column left">
          <Thumbnail
            image="https://corp.hapyak.com/wp-content/uploads/hapyak_nav_logo_color-2.png"
            title="Hapyak Interactive Video"
            subtitle="Director of QA"
          />
        </div>
        <div class="workplace column right">
          <Paragraph
            text="- Oversaw the QA and Software Testing processes, as well as implementing improvements to the Software Development Lifecycle. Worked in mixed methodologies such as Agile Scrum and Kanban."
          />
          <Paragraph
            text="- Architect from scratch a new end-to-end automated testing framework for different video player integrations with the company's platform, as well as for testing the Company's clients Portal. The framework was implemented with webdriver.io, and was cross-platform, supporting Windows 7, Windows 10, Mac OS and several browsers (Chrome, Firefox, Safari, IE, Edge). The framework was also been expanded to automate dev tests (unit and integration tests) that are dependent on running on browsers."
          />
          <Paragraph
            text="- Adapted the end-to-end test framework to be executable on Sauce Labs, in order to expand test coverage across platforms and browsers"
          />
          <Paragraph
            text="- Jenkins Admin: Setup a new Jenkins Infrastructure on AWS to be used for Dev Unit and integration tests, as well as QA End to End Tests. Configured both the Jenkins master and slave machines, as well as several Jenkins Jobs that execute specific tests across different levels (unit, integration, end to end, security)"
          />
          <Paragraph
            text="- Mentored a QA Intern during the summer of 2018. Provided training from functional and negative manual testing, to Test case design, Test Automation and Jenkins."
          />
        </div>
      </div>

      <div class="row">
        <div class="workplace column left">
          <Thumbnail
            image="https://img-new.cgtrader.com/items/2094894/3856bcb743/jibo-robot-3d-model-obj-mtl-3ds-fbx-3dm-stp-bip-ksp.jpg"
            title="Jibo Inc."
            subtitle="SQA Lead"
          />
        </div>
      </div>

      <div class="row">
        <div class="workplace column left">
          <Thumbnail
            image="https://20kh6h3g46l33ivuea3rxuyu-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/baxter-sawyer-copy.jpeg"
            title="Rethink Robotics"
            subtitle="SQA Automation Engineer"
          />
        </div>
      </div>

      <div class="row">
        <div class="workplace column left">
          <Thumbnail
            image="https://media.xconomy.com/wordpress/wp-content/images/2012/08/06195436/Visible_Measures.jpeg"
            title="Visible Measures"
            subtitle="SQA Engineer"
          />
        </div>
      </div>

      <div class="row">
        <div class="workplace column left">
          <Thumbnail
            image="https://businesswire.images.worldnow.com/images/19153209_G.jpg?auto=webp&disable=upscale&height=560&fit=bounds&lastEditedDate=1580513177000"
            title="TechTarget"
            subtitle="SQA Engineer"
          />
        </div>
      </div>

      <div class="row">
        <div class="workplace column left">
        <Thumbnail
          image="https://multichannelmerchant.com/wp-content/uploads/2014/12/CommerceHub_Logo-300-200.jpg"
          title="CommerceHub"
          subtitle="Associate QA Engineer"
        />
        </div>
      </div>

      <div class="row">
        <div class="workplace column left">
        <Thumbnail
          image="https://media-exp1.licdn.com/dms/image/C4D0BAQG0yADfbEo14w/company-logo_200_200/0?e=2159024400&v=beta&t=XR-DnogFaVimrL5KwD5iyqnJg_icPt2wOq6ejaHNdqI"
          title="Softtek"
          subtitle="Software Test Engineer"
        />
        </div>
      </div>

    </div>
  )
}
 
export default WorkExperience;