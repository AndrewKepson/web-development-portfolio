import React from 'react';
import './Portfolio.css';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Project from '../Project';



const Portfolio = () => {

    const Items = [
        { title: 'Interplanetary Travel Planner', img: '../../Gallery-Images/interplanetarytravel.png', alt: 'Interplanetary Travel Planner', descrip: 'Plan your next interplanetary trip with a web application that easily guides you through the process of selecting a planet to visit, finding a rocket, and choosing your options!', href: 'https://github.com/AndrewKepson/interplanetary-travel-planner'},
        { title: 'Fitness Tracker', img: '../../Gallery-Images/workouttracker.png', alt: 'Fitness Tracker', descrip: 'Track all of your workouts and watch the results appear in front of you with helpful graphs to visualize the data.', href: 'https://github.com/AndrewKepson/fitness-tracker' },
        { title: 'Note Taking Web Application', img: '../../Gallery-Images/notetaker.png', alt: 'Note Taker Application', descrip: 'Gone are the days of forgetting items on your list! This is an application utilizing Express.js to allow you to take notes and save them for later.', href: 'https://github.com/AndrewKepson/note-taker-app-express' },
        { title: 'Brewgle', img: '../../Gallery-Images/brewgle.png', alt: 'Find a brewery with Brewgle', descrip: 'Looking for a Brewery to sit down and have your next drink? Brewgle is a simple web application that allows you to find Breweries in any city in the world!', href: 'https://github.com/AndrewKepson/Brewgle' },
        { title: 'Digital Marketing Landing Page', img: '../../Gallery-Images/landingpage.png', alt: 'Landing Page', descrip: 'A responsive landing page for a digital marketing firm, that could easily be adjusted to the needs of any company building its presence in the online era.', href: 'https://github.com/AndrewKepson/improving-seo-marketing-webpage-assmt1' },
        { title: 'Employee Management Application', img: '../../Gallery-Images/employeetracker.png', alt: 'Employee Management Application', descrip: 'Having trouble keeping track of your employees? Easily view, sort and filter them with this employee management React application!', href: 'https://andrewkepson.github.io/employee-management-application/' }
    ]

    return(
        <div className="portfolioWrapper">
            {Items.map((item) => <Project key={item.title} item={item} />)} 
           
        </div>
    
    );
}

export default Portfolio;

 {/* <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require("../../Gallery-Images/interplanetarytravel.png")} className="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Interplanetary Travel Planner</h5>
                 <p class="card-text">Plan your next interplanetary trip with a web application that easily guides you through the process of selecting a planet to visit, finding a rocket, and choosing your options!</p>
                 <a href="https://github.com/AndrewKepson/interplanetary-travel-planner" class="btn btn-light" target="_blank">View Project</a>
                </div>
            </div> */}
            {/* <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require('../../Gallery-Images/workouttracker.png')} class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Fitness Tracker</h5>
                 <p class="card-text">Track all of your workouts and watch the results appear in front of you with helpful graphs to visualize the data.</p>
                 <a href="https://github.com/AndrewKepson/fitness-tracker" class="btn btn-light" target="_blank">View Project</a>
                </div>
            </div> */}
            {/* <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require('../../Gallery-Images/notetaker.png')} class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Note Taking Web Application</h5>
                 <p class="card-text">Gone are the days of forgetting items on your list! This is an application utilizing Express.js to allow you to take notes and save them for later.</p>
                 <a href="https://github.com/AndrewKepson/note-taker-app-express" class="btn btn-light" target="_blank">View Project</a>
                </div>
            </div> */}
            {/* <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require('../../Gallery-Images/brewgle.png')} class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Brewgle</h5>
                 <p class="card-text">Looking for a Brewery to sit down and have your next drink? Brewgle is a simple web application that allows you to find Breweries in any city in the world!</p>
                 <a href="https://github.com/AndrewKepson/Brewgle" class="btn btn-light">View Project</a>
                </div>
            </div> */}
            {/* <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require('../../Gallery-Images/landingpage.png')} class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Digital Marketing Landing Page</h5>
                 <p class="card-text">A responsive landing page for a digital marketing firm, that could easily be adjusted to the needs of any company building its presence in the online era.</p>
                 <a href="https://github.com/AndrewKepson/improving-seo-marketing-webpage-assmt1" class="btn btn-light" target="_blank">View Project</a>
                </div>
            </div>
            <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require('../../Gallery-Images/employeetracker.png')} class="card-img-top" alt="Employee Management Application" />
                 <div class="card-body">
                 <h5 class="card-title">Employee Management Application</h5>
                 <p class="card-text">Having trouble keeping track of your employees? Easily view, sort and filter them with this employee management React application!</p>
                 <a href="https://andrewkepson.github.io/employee-management-application/" class="btn btn-light" target="_blank">View Project</a>
                </div>
            </div> */}