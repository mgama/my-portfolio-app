import React from 'react'; // Import the Component component from React
 
function Thumbnail(props) {
  return (
    <div className="project">
      <div className="project-image">
        <img className="workplace-logo" src={props.image} alt="Project Image"/>
      </div>
      <h2 className="project-title">{props.title}</h2>
      <h3 className="project-subtitle">{props.subtitle}</h3>
    </div>
  );
}
 
export default Thumbnail;