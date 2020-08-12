import React from "react";
import john from "./assets/Conway.jpg";



const About = () => (
  <article
    style={{
      width: "50%",
      display: "flex",
      flexDirection: "column",
    //   alignContent: "center",
      textAlign: "justify",
      marginTop: "3em",
    //   justifyContent: "center",
      marginBottom: "2em",
      borderTop: "2px solid #fbeaff",
      fontSize: "17px"
    }}
  >
    <h2 style={{ textAlign: "center" ,  color: "#fff",  marginTop: "2em",  marginBottom: "2em" }}>
      About this algorithm
    </h2>
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center"}}
    >
      <div style={{ marginBottom: "2em" }}>
        <img style={{ display: "flex", alignItems: "center" }} src={john} alt="John-Conway" />
      </div>
      <p >
        Conway’s game of life is a no player game which means its evolution
        throughout the game is determined by its initial input and no further
        interaction is required. It was devised by Cambridge mathematician,
        John Horton Conway. The game became very popular when it was mentioned
        in an article published by Scientific American in 1970.
      </p>
    </section>
    <section>
      <p>
        The algorithm which this game is based on is Turing complete meaning
         a system able to recognize or decide other data
        manipulation sets.{" "}
      </p>
      <p>
        With just a few basic rules it can create vast and complex objects.
        Any number of different possible configurations can be used as the
        initial input, but one thing to note is that after a time, there might
        be nothing left on the board, or as in some cases, the configurations
        live forever.{" "}
      </p>
      <p>
        There is no algorithmic way of telling which one of these will happen.
        It is able to make any arbitrarily complex configuration which could die 
        off on the first and the thousand move, or the billionth.
      </p>
      <p style={{ color: "#d4ae6f" }}>
        Fun fact: John Conway used to say he hated the Game of Life. 
        He felt the game overshadowed much more important things he worked on.
      </p>
      <p>
        This implementation of the algorithm was created using React
      </p>

      <p>
        More about the Game of Life {" "}
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          here
        </a>
        .{" "}
      </p>
      <p>
        If you need more presets for the game, Alan Hensel did heck of a job
        of compiling an extensive glossary. You can find that{" "}
        <a href="http://www.radicaleye.com/lifepage/picgloss/picgloss.html">
          here
        </a>
        .
      </p>
    </section>
  </article>
);

export default About;

