import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Architect", "Master Student", "Restoration", "Human Resources"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
