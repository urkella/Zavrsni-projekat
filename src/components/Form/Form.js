import classNames from "classnames";

import "./Form.css";

const Form = (props) => {
  const { className, id, children, handleSubmit } = props;

  const classes = classNames(className, "Form");
  return (
    <form className={classes} id={id} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
