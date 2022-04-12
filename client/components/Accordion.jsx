import React from "react";
import ReactDOM from "react-dom";


// The basic way to have accordian menus in a const, with the first being open automatically and the rest being closed:
const Accordion = (props) => {


    return (
        // This block is for the first section that is automatically expanded.
        <div id="accordion">
            <div className="accordionCard">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            KEY CONCEPTS
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <ul>
                      {props.conceptList.map(concept => { 
                          return (
                          <li>
                            <h1>{concept.name}</h1>
                          <p>{concept.explanation}</p>
                          </li>
                          )
                      })}
                      </ul>
                    </div>
                </div>
            </div>
            <div className="accordionCard">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            MORE RESOURCES
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                    <ul>
                      {props.resourceList.map(resource => { 
                          return (
                          <li>
                            <h1>{resource.url}</h1>
                          </li>
                          )
                      })}
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

//need to redownload the SQL workbench to test if it works

export default Accordion;