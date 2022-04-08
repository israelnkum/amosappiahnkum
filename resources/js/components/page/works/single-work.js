import React from 'react';

function SingleWork({ project }) {
    return (
        <div className="column">
            <div className="card">
                <div className={'img-div'}>
                    <img src={project.cover} alt="Jane" style={{width: '100%'}}/>
                </div>
                <div className="container">
                    <h2>{project.title}</h2>
                </div>
            </div>
        </div>
    );
}

export default SingleWork;
