import PropTypes from "prop-types"; // Importing PropTypes from the "prop-types" library.

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>; // A simple Button component that renders a <button> element with the provided children.
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }) => {
    // A custom PropTypes validator for the "checkVariationValue" prop.

    // Calculate the count of truthy (non-empty, non-zero) values among the provided props.
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    // Note: The !! operator is used to convert the prop values into booleans. For example, !!primary will return true if primary is truthy and false otherwise.

    // The count variable now holds the number of truthy props among primary, secondary, warning, success, and danger.

    if (count > 1) {
      // If the count of truthy props is greater than 1 (meaning more than one prop is truthy), we return a new Error.
      // This is a way to enforce that only one of these props can be truthy at a time. If more than one is truthy, it violates the rule defined here.
      return new Error("Only one value");
    }
  },
};

export default Button; // Exporting the Button component.
