import React from "react";
import ReactDOM from "react-dom";


// The basic way to have accordian menus in a const, with the first being open automatically and the rest being closed:
const Accordian = () => {


    return (
        // This block is for the first section that is automatically expanded.
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Section 1
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        This is example text for the section.
                    </div>
                </div>
            </div>
            {/* After this line are the ones that are automatically collapsed. */}
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Section 2-....
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        This is example test for the section.
                    </div>
                </div>
            </div>
            
        </div>
    )
};

//need to redownload the SQL workbench to test if it works

export default Accordian;