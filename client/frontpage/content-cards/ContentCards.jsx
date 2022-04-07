import React from "react";

const ContentCards = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Reacting to React </h4>
          <p className="card-text">
            Learn best practices for setting up a new React project with the
            Create-React-App environment. In this video, the instructor
            demonstrates fundamental React features you can use to create simple
            inputs and outputs. The video covers props, hooks, conditional
            renders, and more.
          </p>
          <button className="btn btn-primary">Play Video</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Express JS</h4>
          <p className="card-text">
            Get a handle on backend technologies by following along as our
            instructor demonstrates how to create a new project using npm init,
            add an express server, and much more.
          </p>
          <button className="btn btn-primary"> Play Video</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">OOP Drills</h4>
          <p className="card-text">
            The OOP Drills video focuses on the concepts and syntax found in
            object-oriented programming. Watch our instructor demonstrate object
            literals, pseudo-classes, object instantiation, methods, and
            inheritance. This video is code-along friendly for tactile learners.
          </p>
          <button className="btn btn-primary">Play Video</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Chirper Front-end </h4>
          <p className="card-text">
            Want to build a front-end application using React? This engaging
            demonstration walks learners through building a simple React app.
            Our instructor covers core React web development with
            easy-to-understand examples. The lesson features UUID and moment.js.
          </p>
          <button className="btn btn-primary">Play Video</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Chirp it Up - Full Stack Style</h4>
          <p className="card-text">
            The behemoth Chirp it Up - Full Stack Style walkthrough is now
            condensed into a more learner-friendly video. The video's objective
            is to connect the chirpr schema with the database to make a
            front-to-back application. Learn how to create a MySQL database, set
            up Node.JS for the backend, and use React for the front-end.
          </p>
          <button className="btn btn-primary">Play Video</button>
        </div>
      </div>
    </div>
  );
};


export default ContentCards;