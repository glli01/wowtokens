import React from "react";
import { Alert } from "react-bootstrap";
const DismissableAlert = ({
  show,
  setShow,
  message,
  variant = "danger",
  heading = "Oh snap! You got an error!",
}) => {
  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  return <></>;
};

export default DismissableAlert;
