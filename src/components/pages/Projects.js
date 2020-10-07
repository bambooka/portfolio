import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const Projects = () => {

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setSuggestions(data))
  })

  let settings = {
    infinite: false,
    speed: 100,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4
  }
  return (
    <>
      <h2>Projects</h2>
      <div className='container'>
        <h6 className='text-muted'>Friends Suggestions</h6>
        {
          suggestions.length === 0
            ? (<div className='spinner-border' role='status'>
            <span className='sr-only'>Lading...</span>
            </div>)
            : (<Slider {...settings}>
              {suggestions.map((current) => (
                <div className="out" key={current.id}>
                  <div className="card">
                    <img
                      className="rounded-circle"
                      alt={"users here"}
                      src={`https://source.unsplash.com/random/${current.id}`}
                      height={56}
                      width={56}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{current.username}</h5>
                      <small className="card-text text-sm-center text-muted">
                        In your contacts
                      </small>
                      <br />
                      <button className="btn btn-sm follow btn-primary">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>)
        }
      </div>
    </>
  )
}

export default Projects;