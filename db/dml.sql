USE walkthrough_assist;

INSERT INTO videos (subject, description, url)
VALUES ("OOP Drills",
"The OOP Drills video focuses on the concepts and syntax found in object-oriented programming. Watch our instructor demonstrate object literals, pseudo-classes, object instantiation,  methods, and inheritance. This video is code-along friendly for tactile learners.",
"https://www.youtube.com/watch?v=DN50exL743M"),
("Express JS",
"Get a handle on backend technologies by following along as our instructor demonstrates how to create a new project using npm init, add an express server, and much more.",
"https://www.youtube.com/watch?v=fIol_xceM_s"),
("Chirp It Up - Full Stack Style - Frontend",
"The behemoth Chirp it Up - Full Stack Style walkthrough is now condensed into a more learner-friendly video. This video's objective is to connect the chirpr schema with the 
database to make a front-to-back application. Learn how to create a MySQL database, set up Node.JS for the backend, and use React for the front-end.",
"https://www.youtube.com/watch?v=abyKEo1fBx4"),
("Chirper Front-end",
"Want to build a front-end application using React? This engaging demonstration walks learners through building a simple React app. Our instructor covers core React web development with easy-to-understand examples. The lesson features UUID and moment.js.",
"https://www.youtube.com/watch?v=aBvFhybNY_o"),
("Reacting To React",
"Learn best practices for setting up a new React project with the Create-React-App command. In this video, the instructor demonstrates fundamental React features you can use to create simple inputs and outputs. The video covers props, hooks, conditional renders, and more.",
"https://www.youtube.com/watch?v=-bKp6Kt_YNI");

INSERT INTO timestamps (video_id, subject, start_time)
VALUES
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Object Literals", "00:03:40"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Methods, Functions as Properties on Objects", "00:05:00"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "'this' Keyword", "00:05:00"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Pseudo-Classes", "00:11:15"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Adding Methods to Prototypes, the Prototype", "00:20:42"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Parameters on Constructor Functions", "00:28:00"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Classes, Constructor Functions", "00:33:35"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Declaring a Class", "00:41:10"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Declaring a Class Extension, Inheritance", "00:46:00"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Declaring and Instantiating Sibling Extensions", "00:54:20"),
((SELECT id FROM videos WHERE subject = "OOP Drills"), "Dicey Business Introduction ", "01:02:05");

INSERT INTO timestamps (video_id, subject, start_time)
VALUES
((SELECT id FROM videos WHERE subject = "Express JS"), "Server-side Live Reload With Nodemon", "00:05:00"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Quick set-up For Node Projects", "00:07:50"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Setting Up Simple Express Server", "00:09:25"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Configuring First Get Endpoint", "00:11:15"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Static Middleware to Serve Files", "00:18:00"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Custom Middleware to Intercept Requests", "00:19:25"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Capturing Form Values with Express", "00:24:54"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Configuring HTTP Route and Method", "00:27:09"),
((SELECT id FROM videos WHERE subject = "Express JS"), "JSON Middleware for Capturing Req Body Elements", "00:32:08"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Writing Posted Data to a File as JSON", "00:34:35"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Preventing Chirp Data Overwriting", "00:39:35"),
((SELECT id FROM videos WHERE subject = "Express JS"), "Creating '/formsubmissions' Route for Returning all Chirps", "01:00:35");

INSERT INTO timestamps (video_id, subject, start_time)
VALUES
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Basic Setup",
"00:08:46"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"GET Request",
"00:11:22"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Reformatting Query",
"00:14:32"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Reformatting 'chirps.map' and ChirpCard",
"00:16:43"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"POST Request",
"00:18:51"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Inserting a User for POST",
"00:23:00"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Fixing Errors",
"00:33:49"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Creating a User Through Postman",
"00:35:00"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Formatting handleChirpSubmit for POST",
"00:36:20"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Creating fetchChirps Function",
"00:48:18"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Creating a Home Component",
"00:51:58"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Adding Routes to App.jsx",
"00:54:43"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Creating a SingleChirp component",
"00:58:37"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Adding routing for SingleChirp and Fixing Errors",
"1:01:05"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Linking SingleChirp to Home Page",
"1:11:00"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Implementing Edit Chirp Feature",
"1:18:00"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Implementing Delete Chirp Feature",
"1:27:10"),
((SELECT id FROM videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"),
"Implementing Update Chirp Feature",
"1:39:28");

INSERT INTO timestamps (video_id, subject, start_time)
VALUES
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Lab Overview",
"00:03:21"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Creating a Chirp Timeline in App.jsx",
"00:04:50"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Using Array Method map() on the Chirp Data Set",
"00:09:48"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Creating Components and Destructuring Explained",
"00:17:00"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Importing Components to App.jsx, Mapping Over ChirpCard Objects",
"00:19:30"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Adding Key Prop",
"00:21:18"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Creating Form with Inputs, Implementing useState, Handlers",
"00:22:23"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"UUID, Button and Button Handler",
"00:28:05"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Importing Images into React",
"00:44:45"),
((SELECT id FROM videos WHERE subject = "Chirper Front-end"),
"Moment.js",
"00:51:34");

INSERT INTO timestamps (video_id, subject, start_time)
VALUES
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Creating New Project using 'create-react-app'",
"00:05:40"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Explaining create-react-app Boilerplate",
"00:09:30"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Deletions, Setting up File Structure",
"00:10:11"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Coding a Function Component, Returning a JSX Element",
"00:18:40"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Running the App",
"00:20:29"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Creating an Output With Props",
"00:25:24"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Controlled React Input",
"00:35:45"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Rendering State Values",
"00:49:28"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Conditional Render and onClick Prop",
"00:50:48"),
((SELECT id FROM videos WHERE subject = "Reacting To React"),
"Implementing useEffect",
"00:57:13");

INSERT INTO concepts (name, explanation)
VALUES ("Object Oriented Programming",
"Object Oriented Programming is a programming paradigm, or general approach, that organizes design around objects with defined attributes and behaviors."),
("Javascript Classes",
"Classes are declared in Javascript (and other languages) to create a template for objects. Classes represent a blueprint which can be instantiated to create an object within the code."),
("Variable Scope",
"Variable scope determines the accessibility of variables. Scope is determined by the placement of variable declaration. Javascript features three scopes for variables: Block scope, function scope, and global scope.
Block scope variables are only declared with let and const. They are accessible within the { } block they are declared. Function scope variables are declared at the top level of a function and are accessible only within that function. Finally, global variables are declared outside of any function and are globally accessible."),
("Type Coercion",
"Depending on context, Javascript may automatically convert a value from one data type to another to resolve some kind of operation. For instance, when concatenating a number type value and string type value together, Javascript may need to coerce the number type value to a string type value to perform the operation.
const value1 = '3';
const value2 = 4;
let sum = value1 + value2;
The variable 'sum' would print to '34' due to type coercion of value2."),
("Syntactic Sugar",
"Syntactic Sugar refers to programming language syntax designed to make the language more accessible and readable to humans. It is often built on top of and resolves to the base language syntax when run, meaning it provides identical functionality to basic syntax while offering a more accessible abstraction of that syntax for human readability."),
("Middleware", 
"A central concept for Express. You can think of pieces of middleware as sections in an assembly line, where each module does some work to a request moving through the server, then passes the request on to the next piece. Remember that middleware components are registered in the order that you declare them in the code, and their scope can be further controlled by specifying the route prefix they are mounted onto."),
("HTTP Methods",
"These are sometimes called verbs. They're properties of HTTP requests that are used to specify a type of action the recipient server is to take. Typically requests are made to a server to request that some type of CRUD operation (CRUD being short for create, read, update, and delete) be done on a dataset the server maintains. The four most commonly used methods (and the respective operations they correlate to) are GET (read), POST (create), PUT (update), and DELETE (delete, obviously)."),
("Front-End",
"Broadly speaking, the front-end portion of software is the portion of an application designed to be directly interacted with by the end-user.  Front-end design involves creating the general user experience of a piece of software, designing for aesthetics, and ensuring interactive mechanics engage properly with the back-end structure."),
("CRUD Methods",
"CRUD is an acronym for Create, Read, Update, and Delete. Together, these form a set of the most essential HTTP verbs and the four basic operations of persistent storage."),
("Fetch",
"The fetch method is a part of the fetch API interface, and allows browsers to make HTTP requests to web servers when called."),
("useState",
"useState() is a built-in function that comes with the React library, and it lets you add React state to function components."),
("Map Method",
"The map method creates a new array from an existing array, with alterations, without mutating the original."),
("JSX",
"JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together. JSX can be “escaped” by using template literals in order to inject javascript within the JSX."),
("Create-react-app",
"Create-react-app is a command-line tool that creates a single-page React application that generates the required files and folders to start the React application and runs it on the browser."),
("Components & Props",
"Components are like JavaScript functions that accept arbitrary inputs called props that return React elements describing what should appear on the screen."),
("JSX component",
"Allows you to write HTML elements in JS and place them in the DOM without any createElement() and/or appendChild() methods for cleaner code."),
("Controlled react input",
"An input element whose value is being controlled by a component's state."),
("Conditional render",
"Conditional rendering allows content to be displayed when a predefined condition is met."),
("useEffect & useState hooks",
"Allows you to track state and perform side effects in function components.");

INSERT INTO resources (url)
VALUES ("https://www.w3schools.com/js/js_objects.asp"),
("https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects"),
("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"),
("https://www.w3schools.com/js/js_class_inheritance.asp"),
("https://www.w3schools.com/jsref/jsref_class_super.asp");

INSERT INTO concepts_to_resources (concept_id, resource_id)
VALUES((SELECT id from concepts WHERE name = "Object Oriented Programming"),
(SELECT id from resources WHERE url = "https://www.w3schools.com/js/js_objects.asp")),
((SELECT id from concepts WHERE name = "Object Oriented Programming"),
(SELECT id from resources WHERE url = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects")),
((SELECT id from concepts WHERE name = "Javascript Classes"),
(SELECT id from resources WHERE url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes")),
((SELECT id from concepts WHERE name = "Javascript Classes"),
(SELECT id from resources WHERE url = "https://www.w3schools.com/js/js_class_inheritance.asp")),
((SELECT id from concepts WHERE name = "Javascript Classes"),
(SELECT id from resources WHERE url = "https://www.w3schools.com/jsref/jsref_class_super.asp"));

INSERT INTO videos_to_concepts (concept_id, video_id)
VALUES((SELECT id from concepts where name = "Object Oriented Programming"), 
(SELECT id from videos where subject = "OOP Drills"));

INSERT INTO videos_to_concepts (concept_id, video_id)
VALUES((SELECT id from concepts WHERE name = "Javascript Classes"), 
(SELECT id from videos WHERE subject = "OOP Drills")),
((SELECT id from concepts WHERE name = "Variable Scope"),
(SELECT id from videos WHERE subject = "OOP Drills")),
((SELECT id from concepts WHERE name = "Type Coercion"), 
(SELECT id from videos WHERE subject = "OOP Drills")),
((SELECT id from concepts WHERE name = "Syntactic Sugar"), 
(SELECT id from videos WHERE subject = "OOP Drills"));

INSERT INTO videos_to_concepts (concept_id, video_id)
VALUES((SELECT id from concepts WHERE name = "Middleware"), 
(SELECT id from videos WHERE subject = "Express JS")),
((SELECT id from concepts WHERE name = "HTTP Methods"), 
(SELECT id from videos WHERE subject = "Express JS"));

INSERT INTO videos_to_concepts (concept_id, video_id)
VALUES((SELECT id from concepts WHERE name = "Front-End"), 
(SELECT id from videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend")),
((SELECT id from concepts WHERE name = "CRUD Methods"), 
(SELECT id from videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend")),
((SELECT id from concepts WHERE name = "Fetch"), 
(SELECT id from videos WHERE subject = "Chirp It Up - Full Stack Style - Frontend"));

INSERT INTO videos_to_concepts (concept_id, video_id)
VALUES((SELECT id from concepts WHERE name = "useState"), 
(SELECT id from videos WHERE subject = "Chirper Front-end")),
((SELECT id from concepts WHERE name = "Map Method"), 
(SELECT id from videos WHERE subject = "Chirper Front-end")),
((SELECT id from concepts WHERE name = "JSX"),
(SELECT id from videos WHERE subject = "Chirper Front-end"));

INSERT INTO videos_to_concepts (concept_id, video_id)
VALUES((SELECT id from concepts WHERE name = "Create-react-app"), 
(SELECT id from videos WHERE subject = "Reacting To React")),
((SELECT id from concepts WHERE name = "Components & Props"), 
(SELECT id from videos WHERE subject = "Reacting To React")),
((SELECT id from concepts WHERE name = "JSX component"),
(SELECT id from videos WHERE subject = "Reacting To React")),
((SELECT id from concepts WHERE name = "Controlled react input"),
(SELECT id from videos WHERE subject = "Reacting To React")),
((SELECT id from concepts WHERE name = "Conditional render"), 
(SELECT id from videos WHERE subject = "Reacting To React")),
((SELECT id from concepts WHERE name = "useEffect & useState hooks"), 
(SELECT id from videos WHERE subject = "Reacting To React"));