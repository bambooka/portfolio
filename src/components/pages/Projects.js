import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import {store} from "../../store";
import SliderProjects from "../SliderProjects";

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className='container slider-container'>
        {
          store.length === 0
            ? (<div className='spinner-border' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>)
            : (<SliderProjects store={store}/>)
        }
      </div>
    </>
  )
}

export default Projects;