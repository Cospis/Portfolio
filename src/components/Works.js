import React from "react";
import ReactTypingEffect from "react-typing-effect";
const Works = () => {
  return (
    <>
      <ReactTypingEffect
        text={[
          "Professsional Web Developer",
          "Embedded Systems Engineer",
          "3D Modeler",
          "IT Support Specialist",
        ]}
        cursor="_"
        speed={100}
        eraseSpeed={100}
        eraseDelay={1500}
        typingDelay={100}
      />
    </>
  );
};

export default Works;
