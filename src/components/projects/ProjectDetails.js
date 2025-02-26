import React from 'react';

const ProjectDetails = (props) =>  {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
    <div className="card z-depth-0">
    <div className="card-content">
    <span className="card-title">Project title - {id}</span> 
    <p>This is my first project</p>
   </div>
   <div className="card-action gret lighten-4 grey-text">
   <div>Posted by MB</div>
   <div>October, 5pm</div>
   </div>

    </div>  
    </div>
  );
}

export default ProjectDetails;
