### Day-1
* **NPM** is a Node Package Manager. It is used to running JavaScript code outside our browser.
* NPM is used to install JavaScript packages on local machine from REMOTE NPM Database.
* **NPX** is a Node Package eXecute. It is simply a Node Package Runner which allows to execute any javascript package 
available on REMOTE NPM Database without installing on local machine.
* NPX is installed automatically when we install NPM.(v5.2)
#### React Basic
* Index.js should be the entry point for react project.
* App.js is imported in Index.js.
* All logic should be present inside App.js and not in Index.js.
* **node_modules** folder contains all the javascript package that we need.
* **package-lock.json** and **package.json** file are responsible to create node_modules folder.
* Only Single HTML element should be return from App.js return statement.
```jsx
function App(){
    return (
        <div>
            
        </div>
        // <h2>First HTML BLOCK</h2>
        // <h4>SECOND HTML BLOCK</h4>
    );
}
// Above is not the correct code.
```
* If we want to return multiple HTML element then we should use **JSX Fragment.**
* **'<>'** and **'</>' this are called as JSX Fragment.**
```jsx
function App(){
    return (
        <>
            <h2>First HTML BLOCK</h2>
            <h4>SECOND HTML BLOCK</h4>
        </>
    );
}
// Above is the correct code.
```
* We can use variable name/expression inside JSX.
```jsx
function App(){
    let name = 'React' 
    return (
        <>
            <h1>My Name is {name}</h1>
        </>
    )
}
```
* We can use logical operator in JSX.
```jsx
function App(fname){
    if (fname){
        return (<p>If Condition is True</p>)
        
    }
    return (<p>Else Condition is True</p>)
}
```

## Day - 2
* React Component is a collection of one for more HTML elements that we can use multiple time and return HTML.
* React Component are like a JS function which we can use multiple time.
* If we want to pass some arguments to this function we can, and they are called as **PROPS.**
* Value of **PROPS** should never be changed in the React Component.
```jsx
import React from 'react';

const MyComponent = (props) => {
    return (
        <p>
            Hello message from {props.first_name} {props.last_name}.
        </p>
    );
};

export default MyComponent;
```
* If we do not pass any value in PROPS then it will be created as empty.
* We can specify the type of the props like, string, int, etc
* Prop-Type is like data type in JS.
* If we pass incorrect PROP-TYPE then we get warning but our component will still load.
```jsx
import PropTypes from "prop-types";
const MyComponent = (props) => {
    return (
        <p>
            Hello message from {props.first_name} {props.last_name}.
        </p>
    );
};
MyComponent.prototypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string
}
export default MyComponent;
```
* We can also make PROP required by using **isRequired.**
```jsx
import PropTypes from "prop-types";
const MyComponent = (props) => {
    return (
        <p>
            Hello message from {props.first_name} {props.last_name}.
        </p>
    );
};
MyComponent.prototypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string
}
export default MyComponent;
```
* We can use default value if props are empty by using **defaultProps.**
```jsx
import PropTypes from "prop-types";
const MyComponent = (props) => {
    return (
        <p>
            Hello message from {props.first_name} {props.last_name}.
        </p>
    );
};
MyComponent.prototypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string
}
export default MyComponent;

MyComponent.defaultProps = {
    first_name: 'First Name must be passed',
    last_name: 'Last Name must be passed'
}
```
* React **STATE** is used to define the current value of the component.
* State variable is used to store the initial value of the component.
* State variable are mutable.
* React re-renders the **state variable** on any change(Event-handler, Value change)
* To change the value of **state variable** we need to use setValue method.
* In case of Function base component we need to use **useState** hooks to set the initial value and setValue to 
change the value.
* In case of class base component first we need to initialize the state variable using the constructor,
then we need to use **this.setValue** method to change the value.

```jsx
import React, {useState} from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
    const [value, setValue] = useState(props.value)

    return (
        <>
            <p>Hello message from {props.first_name} {props.last_name}.</p>
            <p>Condition: {value}</p>
            <button onClick={() => setValue("New Value")}>Click me to change value</button>
        </>
    );
};
export default MyComponent;

MyComponent.propTypes = {
    value : PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
}
```

### Day-3
* Using Styles in function based component.
* There 2 most common ways to apply CSS to a component **inline and normal CSS.**
* There are different ways also like **node-sass, Styled Components** installing some CSS package using npm.
```jsx

import React from "react";
import PropTypes from "prop-types";
import {black} from "colorette";

const MyComponent = (props) => {
    // First create a style object.
    myStyles = {
        color: 'red',
        backgroundColor: 'black'
    }
    return (
        <>
            {/*Apply the style object in JSX format to HTML element style attribute.*/}
            <p style={myStyles}>Hello message from {props.first_name} {props.last_name}.</p>
            <p>Condition: {value}</p>
        </>
    );
};
export default MyComponent;

MyComponent.propTypes = {
    value: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
}
```