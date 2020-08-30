import React from 'react';

const Project = ({ item: { img, alt, title, descrip, href } }) => {
    return(
        <div className="card" style={{width: "20rem", height: "auto"}}>
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{descrip}</p>
            <a href={href} class="btn btn-light" target="_blank">View Project</a>
            </div>
        </div>
    )
}

export default Project;
