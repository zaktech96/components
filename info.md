to prevent seperate button making

use Button component
not making <button/>
all buttons should be styled depending on purpose of button
no custom css only presets

component known as wrapper and
plain element known as underlying element

<button><button/>, this is underlying element

children prop system helps to just write in children instead of specific name to pass as prop, and it shows just the name

<Button>Click Me</Button>

//Button.js
function Button({ children }) {
return (

<div>
<button>{children}</button>
</div>
);
}

as showm here as i wrote click me in App.js, in button.js called prop and shown it and works just the same

implementation
