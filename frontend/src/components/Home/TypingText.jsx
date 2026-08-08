import { Typewriter } from "react-simple-typewriter";

function TypingText() {

  return (

    <h2 className="hero-title">

      <Typewriter
        words={[
          "Python Developer",
          "Django Developer",
          "React Developer",
          "Backend Developer",
          "Full Stack Developer",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={90}
        deleteSpeed={45}
        delaySpeed={1800}
      />

    </h2>

  );

}

export default TypingText;