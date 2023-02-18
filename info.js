var works='['+
	'{"type":"Work", "icon":"infosysIcon", "designation":"Associate Consultant at Infosys Limited", "period":"Dec 2022 - present", "class":"subIcon"},'+
	'{"type":"OldWork", "icon":"tcsIcon", "designation":"System Engineer at Tata Consultancy Services", "period":"Jul 2019 - Dec 2022", "class":"subIcon"},'+
	'{"type":"University", "icon":"collegeIcon", "designation":"Electronics and Communication Engineer at Andhra University", "period":"Jul 2015 - Jun 2019", "class":"subIcon"},'+
	'{"type":"Intermediate", "icon":"interCollegeIcon", "designation":"MPC at Ascent Classes", "period":"Jul 2013 - Jun 2015", "class":"subIcon"},'+
	'{"type":"High School", "icon":"educationIcon", "designation":"State Board at Balaji Public School", "period":"Jun 2005 - Jun 2013", "class":"subIcon educationIcon"}'+
']';

var locations='['+
	'{"city":"Hyderabad", "icon":"hyderabadIcon", "period":"Current city"},'+
	'{"city":"Visakhapatnam", "icon":"visakhapatnamIcon", "period":"Home town"}'+
']';

var skills='['+
	'{"title":"HTML", "icon":"htmlIcon", "name":"HTML", "review":"Simple to Learn!", "score":"100"},'+
	'{"title":"CSS", "icon":"cssIcon", "name":"CSS", "review":"Design only limited to Imagination!", "score":"100"},'+
	'{"title":"JavaScript", "icon":"jsIcon", "name":"Vanilla JS", "review":"Basic and clean!", "score":"90"},'+
	'{"title":"PHP", "icon":"phpIcon", "name":"PHP", "review":"Great things can be achieved!", "score":"90"},'+
	'{"title":"MySQL", "icon":"sqlIcon", "name":"MySQL", "review":"One stop Many ways!", "score":"90"},'+
	'{"title":"React JS", "icon":"reactIcon", "name":"React JS", "review":"Cool and Effecient!", "score":"80"},'+
	'{"title":"Firebase", "icon":"firebaseIcon", "name":"Firebase", "review":"Google backed Database!", "score":"75"},'+
	'{"title":"C++", "icon":"cppIcon", "name":"C++", "review":"Vast Applicability!", "score":"75"},'+
	'{"title":"C", "icon":"cIcon", "name":"C Language", "review":"Primitive yet poweful!", "score":"75"},'+
	'{"title":"Core Java", "icon":"javaIcon", "name":"Core Java", "review":"Sophisticated!", "score":"75"}'+
']';

var connections='['+
	'{"title":"facebook", "link": "http://www.facebook.com/nikhil.shakohi.5"},'+
	'{"title":"instagram", "link": "http://www.instagram.com/nikhilshakohi"},'+
	'{"title":"twitter", "link": "http://www.twitter.com/nikhilshakohi"},'+
	'{"title":"github", "link": "http://www.github.com/nikhilshakohi"},'+
	'{"title":"linkedin", "link": "http://www.linkedin.com/in/nikhil-shakohi-060561126"}'+
']';

var projects='['+
	'{"name":"thisSite", "heading":"This Site", "content": "This is a Facebook profile page similar blog.<br> Created just to express anything could be done with CSS.", '+
	'"link":"https://nikhilshakohi.github.io/facebook", "githubLink":"https://github.com/nikhilshakohi/facebook", "date":"02 Jul 2022 at 12:52", "languages":"HTML, CSS, JS", "contentID":"site5"},'+
	
	'{"name":"facebookClone", "heading":"Facebook Clone", "content": " - A Facebook Clone site developed using React JS hosted in Firebase.<br> - One can signup, login and add posts with/without Images.<br> - Mobile Friendly Interface with light/dark modes.<br> - Login, Signup, Validations and Home page dashboard are added.", '+
	'"link":"https://facebook-clone-96246.web.app/", "githubLink":"https://github.com/nikhilshakohi/facebookClone", "date":"24 Aug 2022 at 00:07", "languages":"React JS, Firebase, react-icons", "contentID":"site8"},'+

	'{"name":"diary", "heading":"Personal Diary", "content": " - This is a Personal Diary developed using React JS, Material UI and hosted using Firebase.<br> - One can signup or login using email/google authentication.<br> - Mobile Friendly Interface with light/dark modes.<br> - Content can be edited/deleted.", '+
	'"link":"https://diary-mark1.web.app", "githubLink":"https://github.com/nikhilshakohi/diary", "date":"31 May 2022 at 16:20", "languages":"React JS, Firebase, Material-UI", "contentID":"site7"},'+
	
	'{"name":"toDoList", "heading":"To Do List", "content": " - A first project on React JS using various react concepts like router, context, hooks..<br> - One can signup or login using email/google authentication.<br> - User can add/edit/delete tasks.<br> - Pending tasks and Completed tasks can be viewed.", '+
	'"link":"https://assist-mark2.web.app", "githubLink":"https://github.com/nikhilshakohi/toDoList", "date":"16 Mar 2022 at 03:24", "languages":"React JS, Firebase, Material-UI", "contentID":"site6"}, '+
	
	'{"name":"socialsite", "heading":"Social Site", "content": " - The best of PHP - a social media website with refreshless updates using AJAX.<br> - One can signup using E-mail ID.<br> - We can add posts, write content and even add images. <br> - One can search for friends and send them friend Requests. Upon their confirmation, they can be friends.<br> - Any logged in user can comment on a post or can like a post or share it.<br> - Another best thing is, the MESSENGER! Friends can text each other refreshless..<br> - One can also share the posts to others who dont have an account..", '+
	'"link":"https://socialsite14911.000webhostapp.com", "githubLink":"https://github.com/nikhilshakohi/socialsite", "date":"11 Oct 2021 at 12:43", "languages":"PHP, MySQL, HTML, CSS, JS, AJAX", "contentID":"site4"}, '+
	
	'{"name":"expenseManager", "heading":"Expense Manager", "content": " - The most handy web application for managing daily expenses.<br> - Simple, Fast and User friendly Interface.<br> - Wallet feature available, so one can check all their current accounts balance anytime.<br> - Faster search and filter results.<br> - Statement Download option available in excel format with overall statistics.<br> - All these features with refreshless updates using AJAX.",  '+
	'"link":"http://expensemanager14911.000webhostapp.com", "githubLink":"https://github.com/nikhilshakohi/expensemanager", "date":"08 Nov 2021 at 12:07", "languages":"PHP, MySQL, HTML, CSS, JS, AJAX", "contentID":"site3"}, '+
	
	'{"name":"taskPlanner", "heading":"Task Planner", "content": " - Planning is an important thing to maintain our life in balance.<br> - Scheduling daily tasks and repetitive tasks at once.<br> - Redoing tasks and getting number of times the task was Completed.<br> - Checking future tasks or previous day tasks and their status.<br> - Getting task history of selected task.<br> - User can edit/delete task.<br> - Refreshless and smooth interface",  '+
	'"link":"http://taskmanager14911.000webhostapp.com/", "githubLink":"https://github.com/nikhilshakohi/taskplanner", "date":"16 Jan 2022 at 02:09", "languages":"PHP, MySQL, HTML, CSS, JS, AJAX", "contentID":"site2"},'+
	
	'{"name":"oldBlog", "heading":"Old Blog", "content": " - Created just for fun..<br> - First Blog with HTML, CSS, JS.<br> - Tried for a Mobile Mimic Interface..", '+
	'"link":"https://nikhilshakohi.github.io/firstSite", "githubLink":"https://github.com/nikhilshakohi/firstSite", "date":"04 Aug 2019 at 11:47", "languages":"HTML, CSS, JS", "contentID":"site1"},'+
	
	'{"name":"newbee", "heading":"Newbee (Old socialsite)", "content": " - An old project developed collaboratively while learning PHP.<br> - Couldn\'t find the hosted site (alternative created <a class=\'pageLink\' target=\'_blank\' href=\'https://socialsite14911.000webhostapp.com\'>socialsite</a> with more features.)", '+
	'"link":"https://github.com/nikhilshakohi/socialweb", "githubLink":"https://github.com/nikhilshakohi/socialweb", "date":"14 Oct 2018 at 06:58", "languages":"PHP, MySQL, HTML, CSS, JS", "contentID":"site0"}'+

']';

var reactTips='['+
	'{"heading":"Tips and Notes", "content": " - While learning React, I have made some notes.<br> - Below are some of my points regarding React JS.<br> - Some maybe basic things but I have included only those which are worth knowing.", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip1"},'+

	'{"heading":"npm vs npx", "content": " - npm (Node Package Manager) is used to install packages.<br>Eg:<br><ul><li><code>npm install create-react-app</code></li><li><code>create-react-app myReactAppName</code></li></ul><br> - npx (Node Package eXecute) is used to execute packages. <br>i.e., Without Installing the package, it can run the package directly.<br>Eg:<br><ul><li><code>npx create-react-app myReactAppName</code></li></ul><comment><code>//create-react-app is the package in the above examples</code></comment><br><br>{npx command is available along with npm command from (node v5.2)}<br>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip2"},'+
	
	'{"heading":"Components", "content": " - React Component should always be started with a capital letter.<br>Eg: <code> &lt;App/&gt;</code> or <code>&lt;Dashboard/&gt;</code> <br>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip3"},'+
	
	'{"heading":"Virtual DOM", "content": " - React uses Virtual DOM to update the actual DOM..<br> - React has 2 Virtual DOMs..<br> <ul><li> Whenever any update or state is changed, it updates in one virtual DOM.. Then it compares to the older Virtual DOM.. (Comparing them is called DIFFING).</li><li> Based upon it, it will find the effective method to update only the changes in the actual DOM.</li><li>This update actually happens in batches (group of updates)..(to avoid re-rendering)...</li><li>All this update process is called RECONCILIATION.</ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip4"},'+
	
	'{"heading":"One-Way Binding", "content": " - React uses one-way directional binding... <ul><li>Data is sent only from parent to child components.</li></ul> - Two-way binding is when <ul><li> Data/variables can be sent from child to parent</li> <li> Data/variables can be sent from html file to ts file or ts file to html file</li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip5"},'+

	'{"heading":"Babel Compiler", "content": " - React converts the JSX (JavaScript XML) into the browser javascript using babel compiler..<br>Eg:<br><ul><li><code>&lt;h3 id\=\'headerID\'>This is a Heading&lt;/h3></code><br>is converted to <br><code>React.createElement(\'h1\', {id:\'headerID\'}, \'This is a heading\');</code></li><br><li><code> function tester () { <br> &nbsp; return ( <br> &nbsp; &nbsp; &lt;div><br> &nbsp; &nbsp; &nbsp; &lt;h1 id\=\'headerGreeting\'>Greetings &lt;/h1> <br> &nbsp; &nbsp; &nbsp; &lt;p class\=\'contentGreeting\'>Hello there! &lt;/p> <br> &nbsp; &nbsp; &lt;/div><br> &nbsp; )<br> }</code><br> is converted to <br> <code> React.createElement( \'div\', null, React.createElement(\'h1\', {id:\'header\'}, \'Greetings\'), React.createElement(\'p\', {class:\'content\'}, \'Hello There!\') ); <br><br> <comment>//Syntax is React.createElement(tag,[props], [...children])</comment></code></li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip6"},'+

	'{"heading":"New Root API", "content": " - In React 18, root API is introduced:<br><ul><li>Previously<br> &nbsp; <code>reactDOM.render(&lt;App/>, document.getElementByID(\'root\'));</code></li><br><li>Current:<br> &nbsp; <code>const root = ReactDOM.createRoot(document.getElementByID(\'root\'));</code><br> &nbsp; <code>root.render(&lt;App/>);</code></li><br><li> So now, user will not have to call DOM node everytime the render is called.. instead can use the root created using createRoot API. </li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip7"},'+

	'{"heading":"Use of Super Function inside a Constructor", "content": " To access the arguments/props in the class, we use super(props) function.<br>Without using super function and without passing arguments/props inside it, Other functions in the class cannot use those arguments/props.<br> Eg:<br><code><comment>//index.js</comment><br> const root = document.getElementById(\'root\');<br> render(&lt;Car color=\'red\'/>,root);<br><comment>//Car.js</comment><br> Class Car extends React.Component{<br> &nbsp; constructor(props){<br> &nbsp; &nbsp; super(props);<br> &nbsp; }<br> &nbsp; render(){<br> &nbsp; &nbsp; &lt;h1>This car is {this.props.color} in color!&lt;/h1><br> &nbsp; }<br>}</code>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip8"},'+

	'{"heading":"var, let and const", "content": "<table> <tr><th>var</th><th>let</th><th>const</th></tr> <tr><td><ul><li>Functional Scope</li><li>Can be Re-declared</li><li>Can be updated anywhere after declaration</li><li>Eg:<br><code>var a=1;<br>if(a===1){<br> &nbsp; var a=2;<br> &nbsp; console.log(a);<br>}<br>console.log(a);</code><br><br>Output:<br><code>2<br>2</code></li></ul></td><td><ul><li>Block Scope</li><li>Cannot be Re-declared</li><li>If updated, changes reflected only in that scope</li><li>Eg:<br><code>let a=1;<br>if(a===1){<br> &nbsp; let a=2;<br> &nbsp; console.log(a);<br>}<br>console.log(a);</code><br><br>Output:<br><code>2<br>1</code></li></ul></td><td><ul><li>Block Scope</li><li>Cannot be Re-declared</li><li>Cannot be updated again within that scope</li><li>Eg:<br><code>const a=1;<br>if(a===1){<br> &nbsp; const a=2;<br> &nbsp; console.log(a);<br>}<br>console.log(a);</code></li><br><br>Output:<br><code>2<br>1</code></ul></td></tr></table>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip9"},'+

	'{"heading":"Destructuring Arrays", "content": "It is a simple concept while working with arrays.. An example would suffice to understand it.<br><code> const cars = [\'bmw\',\'5cr\',\'blue\'];<br> const [name,cost,color] = cars;<br><br> console.log(name); <comment>//bmw</comment><br> console.log(cost); <comment>//5cr</comment></code>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip10"},'+

	'{"heading":"Pure and Impure Functions", "content": "<ul><li>Pure: <br>It is a function such that whenever it is called, it returns the same value how many times it may be called..<br> Eg: <code>function fn(a,b){return a+b;}</code></li><li>Impure: <br> It returns different output for each call..<br> Eg: <code>function fn(a){return c=c+a;}</code></li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip11"},'+

	'{"heading":"dangerouslySetInnerHTML vs innerHTML", "content": "dangerouslySetInnerHTML is used instead of innerHTML in react as:<br><ul><li>React uses VirtualDOM, so if we use innerHTML, it will update the realDOM directly. And for the next render, react will replace it with current state..</li><li>To avoid this, dangerouslySetInnerHTML is used as an attribute to let VirtualDOM know about the update and render it.</li>Eg: <br> <code>&lt;div dangerouslySetInnerHTML={__html: \'Set this using new syntax\'}>&lt;/div></code><br><br><li>We can also add variables to the __html parameter.<br> <code>var text = \'some Text\';<br>&lt;div dangerouslySetInnerHTML={__html: text)>&lt;/div></code>.</li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip12"},'+

	'{"heading":"useParams() in react-router", "content": "<ul><li>useParams() is used in react-router so that we can use data from the URL.</li><li>Eg:<br> <code><comment>//App.js</comment><br>&lt;Link to=\'dashboard\'>&lt;/Link><br>&lt;Switch>&lt;Route path=\'/:id\'/>&lt;/Switch><br><comment>//Child.js</comment><br>function Child(){<br> &nbsp; let {id} = useParams();<br> &nbsp; return &lt;h3>{id}&lt;/h3>; <comment>//output will be dashboard in h3 format</comment><br>}</code></li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip13"},'+

	'{"heading":"Spread Operator", "content": "<ul><li>While handling input changes in forms, we can use spread operator instead of naming each one:</li><li>Eg:<br> <code>const handleChange = (event) =>{<br> &nbsp; const name = event.target.name;<br> &nbsp; const value = event.target.value;<br> &nbsp; setInputs(values => ({...values, [name]:[value]}) );<br>}<br><comment>//Instead of <br>setInputs(name:\'tester\', age:\'25\', subject:\'maths\')<br>setInputs(name:\'tester\', age:\'25\', subject:\'physics\');</comment></code></li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip14"},'+

	'{"heading":"Components Lifecycle", "content": "In React, we have 3 phases of components in its lifecycle : <b>Mounting, Updating and Unmounting.</b><br> - <b>Mounting:</b> We got 4 methods in this phase:<br> <i>constructor, getDerivedStateFromProps, render, componentDidMount.</i> <ul><li><i>Constructor:</i><br>This runs first and all the initializations are done here.<br>Eg: <code>constructor(){this.state = {color:\'red\'};</code> }</li><li><i>getDerivedStateFromProps(props,state):</i><br>This function is used to set the initial state (to the already initially set state in constructor) by taking value from props.<br>Eg:<br><code><comment>//index.js</comment><br>render(&lt;Car color=\'green\'/>);<br><comment>//Car.js</comment><br>getDerivedStateFromProps(props,state){ this.setState(color:this.props.color); }</code></li><li><i>render:</i><br>In this method, all the changes will be updated in virtual DOM and corresponding changes will be reflected in actual DOM.</li><li><i>componentDidMount:</i><br>This will run after the render method.. so that if we have any changes to do after rendering..</li></ul><br> - <b>Updating:</b> We got 5 methods in this phase:<br><i>getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate.</i><br><ul><li><i>getDerivedStateFromProps:</i><br>This method is used to set the intial state from the props and is called first before any update..</li><li><i>shouldComponentUpdate:</i><br>Returns boolean.. <br>so if we set it to return false... state will not change.. <br>if we set it to true.. it will render..(used to avoid re-rendering).</li><li><i>render:</i><br>Renders actual DOM by comparing changes in virtual DOM.</li><li><i>getSnapshotBeforeUpdate:</i><br>It will actually store the previous state values.. <br><code>getSnapshotBeforeUpdate(prevProps,prevState)</code> <br>Using its arguments, we can call the previous values... <br>It will be called after render.</li><li><i>componentDidUpdate:</i><br>It will run after the above methods and after the rendering of the changes..</li></ul><br> - <b>Unmounting:</b> This has one method: <i>componentWillUnmount.</i><ul><li><i>componentWillUnmount:</i> <br>Whenever a component is removed, just before deletion, this would be called.. so that any subscriptions can be cancelled.</li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip15"},'+

	'{"heading":"JSX Syntax", "content": "Below are some of the points to know while working with JSX.<br><ul><li><b>Brackets:</b><br><code>const elem = &lt;h1>This is a header&lt;/h1>;<br><comment>//For one line elements, no need of brackets!</comment><br></code><br><code>const elem = (&lt;div><br> &nbsp; &nbsp; &lt;h1>Header&lt;/h1><br> &nbsp; &nbsp; &lt;p>Content with another tag!&lt;/p><br> &nbsp; &lt;/div>);<br><comment>//For multi-line elements, brackets are enclosed!</comment><br></code><br><code>const elem = (&lt;h1><br> &nbsp; &nbsp; There are {5+2} continents in the world!<br> &nbsp; &lt;/h1>);<br><comment>//Expressions are enclosed in curly braces</comment></code></li><br><li><b>Ternary:</b><br> - if, else statement cannot be used inside JSX.. ternary operators can be used instead..<br><code><comment>//JS:</comment><br>const x=5;<br>let text=\'Got it\';<br>if(x>5){let text=\'More!!\';}<br>const elem = &lt;h3>{text}&lt;/h3>;<br><br><comment>//JSX:</comment><br>const elem = &lt;h3>{(x)>5 ? \'More\' : \'Got it\'}&lt;/h3></code></li></ul>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip16"},'+

	'{"heading":"Sort function", "content": "We can sort objects simply using .sort as:<br><code>persons={ <br> &nbsp; {name:\'James\', age:25, dob:\'1997-10-10\'},<br> &nbsp; {name:\'Victor\', age:30, dob:\'1997-07-07\'},<br> &nbsp; {name:\'Michael\', age:20, dob:\'1997-06-06\'}<br>}<br>const sortAge = () => {<br> &nbsp; setNewPerson( [...persons.sort((a,b) => {<br> &nbsp; &nbsp; return a.age - b.age;<br> &nbsp; })]);<br>}<br><br> <comment>//Output<br>persons = {<br> &nbsp; {name:\'Michael\', age:20, dob:\'1997-06-06\'}, <br> &nbsp; {name:\'James\', age:25, dob:\'1997-10-10\'},<br> &nbsp; {name:\'Victor\', age:30, dob:\'1997-07-07\'} <br>}</comment> </code>", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip17"},'+

	'{"heading":"createPortal", "content": "createPortal is a method used to create the element outside of DOM parent node.<br>More like a modal.<br>Eg:<br><code><comment>//App.js</comment><br>class App(){<br> &nbsp; render(){<br> &nbsp; &nbsp; return (&lt;><br> &nbsp; &nbsp;  &nbsp; &lt;h1>Hello! I am outside Portal.&lt;/h1><br> &nbsp; &nbsp;  &nbsp; { ReactDOM.createPortal( &lt;div>&lt;h3>Hello! I am in a Portal.&lt;/h3>&lt;/div>,document.getElementByID(\'root\') ); }<br> &nbsp; &nbsp; </>);<br> &nbsp; }<br>}<br><br><comment>//index.js</comment><br>reactDOM.render( &lt;App/>, document.getElementByID(\'root\') );<br><br><br></code>We have the output DOM tree as:<br><comment>//Output: <br><code>&lt;div id=\'root\'><br> &nbsp; &lt;h1>Hello! I am outside Portal.&lt;/h1><br>&lt;/div><br>&lt;div><br> &nbsp; &lt;h3>Hello! I am in a Portal.&lt;/h3><br>&lt;/div></code></comment><br><br>Even though the portal is outside of the DOM tree, it acts like a child of parent node and will have the access to the context API. (which is the Main Use of Portal)", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip18"},'+

	'{"heading":"create a react app with script tags", "content": "To create a react app without using node or without installing anything:<br><ol><li>We can add using these scripts in index.html:<br> &nbsp; <code>&lt;script src=\'https://unpkg.com/react@15.3.2/dist/react.js\'>&lt;/script><br> &nbsp; &lt;script src=\'https://unpkg.com/react-dom@15.3.2/dist/react-dom.js\'>&lt;/script><br> &nbsp; &lt;script src=\'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js\'>&lt;/script></code></li><li>We can only render the js written in index.html file as we cannot add the above packages in index.js file using:<br><code>&lt;script type=\'text/babel\'><br> &nbsp; ReactDOM.render(&lt;ABC/>,document.getElementById(\'root\'));<br> &nbsp; function ABC() { return &lt;h1>Hello&lt;/h1>; }<br></script><br></code></li><li>We cannot include other js files (App.js or xyz.js).<br>and<br>any function linked inside the <code>ReactDOM.render(&lt;ABC/>,document.getElementById(\'root\'));</code> should be called inside the script tag itself.</li></ol><br>All these are due to the fact that we are not using web-servers or http server which can be added through create-react-app through nodeJS or manually.<br>These servers are used for VirtualDOM, observe changes in the code, show errors and compile the changes..", '+
	'"date":"30 Nov 2019 at 01:14", "icon": "reactIcon", "contentID":"tip19"}'+

']';
