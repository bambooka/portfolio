import React from 'react';
import Slider from "react-slick";

const SliderProjects = (props) => {
  let settings = {
    infinite: false,
    speed: 100,
    arrows: true,
    slidesToShow: 3,
    // slidesToScroll: 7
  }

  return (
    <Slider {...settings}>
      {props.store.map((current) => (
        <>
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{current.name}</h5>
              <p className="card-text">{current.description}</p>
            </div>
            <div className="card-footer links">
              <a className='card-link link' href='#'>
                <h6 className="text-muted">github</h6>
              </a>
              <a className='card-link link' href='#'>
                <h6 className="text-muted">project</h6>
              </a>
            </div>
          </div>
        </>
      ))}
    </Slider>
  )
}

export default SliderProjects;