import React from 'react'; // Import the Component component from React
 
function EducationSection(props) {
  return (
    <div className="education-section">
       <div class="row">
        <div class="column">
          <a href={props.href}>
            <img class="education-section-logo" src={props.image}/>
          </a>
        </div>
        <div class="column">
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
          <h4>{props.years}</h4>
        </div>
      </div> 
    </div>
  );
}
 
export default EducationSection;