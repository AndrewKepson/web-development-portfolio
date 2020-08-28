import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return(
        <div className="portfolioWrapper">
            <div class="card" style={{width: "18rem", height: "25rem"}}>
                <img src="via$.ajax({
                    url: 'https://picsum.photos/v2/list?page=1&limit=50'
                })
                    .done(function (picsumImages) {
                        // Handling the images here by using picsumImages
                    });" class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Interplanetary Travel Planner</h5>
                 <p class="card-text">Plan your next interplanetary trip with a web application that easily guides you through the process of selecting a planet to visit, finding a rocket, and choosing your options!</p>
                 <a href="https://github.com/AndrewKepson/interplanetary-travel-planner" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style={{width: "18rem", height: "25rem"}}>
                <img src="via$.ajax({
                    url: 'https://picsum.photos/v2/list?page=1&limit=50'
                })
                    .done(function (picsumImages) {
                        // Handling the images here by using picsumImages
                    });" class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Fitness Tracker</h5>
                 <p class="card-text">Track all of your workouts and watch the results appear in front of you with helpful graphs to visualize the data.</p>
                 <a href="https://github.com/AndrewKepson/fitness-tracker" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style={{width: "18rem", height: "25rem"}}>
                <img src="via$.ajax({
                    url: 'https://picsum.photos/v2/list?page=1&limit=50'
                })
                    .done(function (picsumImages) {
                        // Handling the images here by using picsumImages
                    });" class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Note Taking Web Application</h5>
                 <p class="card-text">Gone are the days of forgetting items on your list! This is an application utilizing Express.js to allow you to take notes and save them for later.</p>
                 <a href="https://github.com/AndrewKepson/note-taker-app-express" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style={{width: "18rem", height: "25rem"}}>
                <img src="via$.ajax({
                    url: 'https://picsum.photos/v2/list?page=1&limit=50'
                })
                    .done(function (picsumImages) {
                        // Handling the images here by using picsumImages
                    });" class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Brewgle</h5>
                 <p class="card-text">Looking for a Brewery to sit down and have your next drink? Brewgle is a simple web application that allows you to find Breweries in any city in the world!</p>
                 <a href="https://github.com/AndrewKepson/Brewgle" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style={{width: "18rem", height: "25rem"}}>
                <img src="via$.ajax({
                    url: 'https://picsum.photos/v2/list?page=1&limit=50'
                })
                    .done(function (picsumImages) {
                        // Handling the images here by using picsumImages
                    });" class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Digital Marketing Landing Page</h5>
                 <p class="card-text">A responsive landing page for a digital marketing firm, that could easily be adjusted to the needs of any company building its presence in the online era.</p>
                 <a href="https://github.com/AndrewKepson/improving-seo-marketing-webpage-assmt1" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div class="card" style={{width: "18rem", height: "25rem"}}>
                <img src="via$.ajax({
                    url: 'https://picsum.photos/v2/list?page=1&limit=50'
                })
                    .done(function (picsumImages) {
                        // Handling the images here by using picsumImages
                    });" class="card-img-top" alt="..." />
                 <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    
    );
}

export default Portfolio;