import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const Projects = () => {

  const projectsData = [
    {
      name: 'Repo Search',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: 'Поиск репозиториев по заданным фильтрам. В проекте используется React, Redux (thunk)',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'ToDo List',
      image_url: 'https://cdn.dribbble.com/users/4920082/screenshots/10465675/02.png',
      description: 'Составление списка дел, их удаление и редактирование. В проекте используется React, Bootstrap ',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'Recipe App',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: 'Поиск рецептов с сайта food2fork. В поректе используется React. Продеменстрирована работа со сторонним API',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'Tech Store',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: 'Поиск и формирование заказа интернет-магазина электроники. В проекте используется React (styled.components, Context API), bootstrap',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'Restaurant Reviews',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: 'Сервис для поиска ресторанов. В проекте ипродемонстрирована работа с service worker, indexed database, accesebility. На чистом Javascript ',
      github_url: 'https://github.com/bambooka',
      languages: ['java', 'js']
    },
    {
      name: 'Fitbit Clockfaces',
      image_url: 'https://docs.microsoft.com/learn/achievements/github/search-organize-repository-history-github-social.png',
      description: 'Циферблаты для умных часов fitbit. В проекте использовался чистый Javascript (ES5/ES6), svg, websocket, обработка ответа сервера ',
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
    // slidesToScroll: 7
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
                  {/*<div className="out" key={current.name}>*/}
                  {/*<div className="card">*/}
                  {/*<img*/}
                  {/*  className="card-img-top"*/}
                  {/*  alt={"users here"}*/}
                  {/*  src={current.image_url}*/}
                  {/*  height={56}*/}
                  {/*  width={56}*/}
                  {/*/>*/}
                  {/*<div className="card-body">*/}
                  {/*  <h5 className="card-title">{current.name}</h5>*/}
                  {/*  <span>Languages:*/}
                  {/*    {current.languages.map(lang => <span className='language'>{lang}</span>)}*/}
                  {/*  </span>*/}
                  {/*  <br/>*/}
                  {/*  <small className="card-text text-sm-center text-muted">*/}
                  {/*    {current.description}*/}
                  {/*  </small>*/}
                  {/*  <br/>*/}
                  {/*  <div className='card-footer'>*/}
                  {/*    <a className='card-link' href={current.github_url}>*/}
                  {/*      <small className='text-muted'>Github</small>*/}
                  {/*    </a>*/}
                  {/*    <a className='card-link' href={current.github_url}>*/}
                  {/*      <small className='text-muted'>Project</small>*/}
                  {/*    </a>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*</div>*/}
                  {/*</div>*/}
                </>
              ))}
            </Slider>)
        }
      </div>
    </>
  )
}

export default Projects;