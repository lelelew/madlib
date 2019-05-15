import React from "react";

interface MadlibProps {
  message: string;
}

function Madlib(props: MadlibProps) {
  const { message } = props;
  return <h1>{message}</h1>;
}

export default Madlib;
