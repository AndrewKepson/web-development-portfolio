import React from 'react';
import './Portfolio.css';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';



const Portfolio = () => {
    return(
        <div className="portfolioWrapper">
            <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require("../../Gallery-Images/interplanetarytravel.png")} className="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Interplanetary Travel Planner</h5>
                 <p class="card-text">Plan your next interplanetary trip with a web application that easily guides you through the process of selecting a planet to visit, finding a rocket, and choosing your options!</p>
                 <a href="https://github.com/AndrewKepson/interplanetary-travel-planner" class="btn btn-light" target="_blank">View Project</a>
                </div>
            </div>
            <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require('../../Gallery-Images/workouttracker.png')} class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Fitness Tracker</h5>
                 <p class="card-text">Track all of your workouts and watch the results appear in front of you with helpful graphs to visualize the data.</p>
                 <a href="https://github.com/AndrewKepson/fitness-tracker" class="btn btn-light" target="_blank">View Project</a>
                </div>
            </div>
            <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require('../../Gallery-Images/notetaker.png')} class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Note Taking Web Application</h5>
                 <p class="card-text">Gone are the days of forgetting items on your list! This is an application utilizing Express.js to allow you to take notes and save them for later.</p>
                 <a href="https://github.com/AndrewKepson/note-taker-app-express" class="btn btn-light" target="_blank">View Project</a>
                </div>
            </div>
            <div class="card" style={{width: "20rem", height: "auto"}}>
                <img src={require('../../Gallery-Images/brewgle.png')} class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Brewgle</h5>
                 <p class="card-text">Looking for a Brewery to sit down and have your next drink? Brewgle is a simple web application that allows you to find Breweries in any city in the world!</p>
                 <a href="https://github.com/AndrewKepson/Brewgle" class="btn btn-light">View Project</a>
                </div>
            </div>
            <div class="card" style={{width: "20rem", height: "auto"}}>
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
            </div>
        </div>
    
    );
}

// const items = [
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 1',
//       caption: 'Slide 1',
//       header: 'Slide 1 Header',
//       key: '1'
//     },
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 2',
//       caption: 'Slide 2',
//       header: 'Slide 2 Header',
//       key: '2'
//     },
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 3',
//       caption: 'Slide 3',
//       header: 'Slide 3 Header',
//       key: '3'
//     }
//   ];
  
//   const Portfolio = () => {
//       return(
//           <div className="container">
//             <Col>
//             <UncontrolledCarousel id="carousel" items={items} />
//             </Col>
//         </div>

//       )
//       }
  


export default Portfolio;