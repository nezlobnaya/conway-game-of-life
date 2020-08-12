import React from "react";

const Rules = () => (
  <div style={{ display: "flex", width: "20em", textAlign: "left", marginTop: "1em",  marginLeft: "10em" ,justifyContent: "right",}}>
    <div>
      <ul>
        <h3 style={{ color: "#d4ae6f" }}>Intro</h3>
        <li style={{ color: "#d4ae6f", fontSize: "17px", lineHeight: "140%"}} >
        The game takes place on a two-dimensional finite or infinite grid 
        whose cells can take two distinct states: “alive” or “dead”.
        </li>
        <h3 style={{ color: "#d4ae6f" }}>Rules for death</h3>
        <li style={{ color: "#d4ae6f" , fontSize: "17px", lineHeight: "140%" }} >
          If the cell is alive and has 2 or 3 neighbors, then it remains alive.
          Else it dies
        </li>
        <h3 style={{ color: "#d4ae6f" }}>Rules for birth</h3>
        <li style={{ color: "#d4ae6f" , fontSize: "17px", lineHeight: "140%" }} >
          If the cell is dead and has exactly 3 neighbors, then it comes to
          life. Else, it remains dead.
        </li>
        <h3 style={{ color: "#d4ae6f" }}>The Controls</h3>
        <li style={{ color: "#d4ae6f" , fontSize: "17px", lineHeight: "140%" }} >
        Choose a figure from the drop-down menu or make one yourself by clicking on the cells with a mouse. 
        A new generation of cells (corresponding to one iteration of the rules)
        is initiated by the 'Next' button. 
        </li>
      </ul>
    </div>
  </div>
);

export default Rules;
