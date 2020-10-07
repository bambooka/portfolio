import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const Projects = () => {

  const projectsData = [
    {
      name: 'Repo Search',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: ' Notice the use of %PUBLIC_URL% in the tags above.\n' +
        '      It will be replaced with the URL of the `public` folder during the build.\n' +
        '      Only files inside the `public` folder can be referenced from the HTML.',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'p 2',
      image_url: 'https://cdn.dribbble.com/users/4920082/screenshots/10465675/02.png',
      description: 'lorem',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'p 3',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: 'lorem',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'p 4',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: 'lorem',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'p 5',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: 'lorem',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
  ]

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
    slidesToShow: 3,
    slidesToScroll: 5
  }
  return (
    <>
      <h2>Projects</h2>
      <div className='container slider-container'>
        {
          projectsData.length === 0
            ? (<div className='spinner-border' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>)
            : (<Slider {...settings}>
              {projectsData.map((current) => (
                // <div className='project-card'>
                //   <img className='project-image' src={current.image_url}/>
                //   <div className='project-content'>
                //     <h3>{current.name}</h3>
                //     <div>ro
                //       {current.languages.map(lang => <span>{lang}</span>)}
                //     </div>
                //     <p>{current.description}</p>
                //   </div>
                //   <div className='project-links'>
                //     <a href={current.github_url}>github</a>
                //     <a href={current.github_url}>project</a>
                //   </div>
                // </div>
                <div className="out" key={current.name}>
                  <div className="card">
                    {/*<img*/}
                    {/*  className="card-img-top"*/}
                    {/*  alt={"users here"}*/}
                    {/*  src={current.image_url}*/}
                    {/*  height={56}*/}
                    {/*  width={56}*/}
                    {/*/>*/}
                    <div className="card-body">
                      <h5 className="card-title">{current.name}</h5>
                      <span>Languages:
                      {current.languages.map(lang => <span className='language'>{lang}</span>)}
                      </span>
                      <br/>
                      <small className="card-text text-sm-center text-muted">
                        {current.description}
                      </small>
                      <br/>
                      <a className='card-link' href={current.github_url}>
                        Github
                      </a>
                      <a className='card-link' href={current.github_url}>
                        Project
                      </a>

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