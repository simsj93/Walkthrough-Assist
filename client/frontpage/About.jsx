import React from 'react'

const About = () => {
  return (
    <div className="container d-inline-flex">
      <section className="card-deck section">
          <div className="card-body gap-5">
          <h5 className="card-title fs-3  h5"> About <span className='span-about'>Walkthrough Assist</span> <span> : </span>TL;DW </h5>
          <p className="card-text m-2 p-1 ">
          Walkthrough Assist is an educational project front and back, designed not just to make learning easier but also to re- immerse its student developers in course material during development. 
          </p>
          <p className="card-text m-2 p-1 ">
          Our video environment provides better orientation for reviewing course walkthroughs through timestamps, concept explainers, and contextual resources.
          </p>
          <p className="card-text m-2 p-1">
          Just click one of the cards below to get started. 
          </p>
          </div>
      </section>
    </div>
  );
};

export default About;
