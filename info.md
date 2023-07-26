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

can also pass component inside element

<Button>
        <Icon />
      </Button>

      then pass

      unction Button({ Children }) {

return (

<div>
<button>{Children}</button>
</div>
);
}

as shown component is shown as prop and works the same when doing with plan text or other text

to get standard button would be
rounded={false} gives standard button
rounded

outline={false} -> would mean no outline

if i say primary={true} means blue button

can just do primary instead of doing primary false, to take out primary dont include, same as true and false

to include button info example, success rounded outline

also need to update component file in destructring array to use it

prop types is a library to validate props passed into component

to use prop types need to do
prop name, then PropTYPES.data type such as string,array,function or boolean

isRequired needs to be chained on to make it sure it was passed in

can assign custom validator to any key,

he custom PropTypes validator checks if there are more than one truthy prop among primary, secondary, warning, success, and danger. If there are, it returns a new Error with the message 'Only one value'. This validation enforces that only one of these props can be truthy at a time. If more than one prop is truthy, it violates the rule defined in the validator, and the Error is logged.
