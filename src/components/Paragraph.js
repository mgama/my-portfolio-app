import React from 'react'; // Import the Component component from React
 
function Paragraph(props) {
  return (
    <p className="project-description">{props.text}</p>
  );
}
 
export default Paragraph;