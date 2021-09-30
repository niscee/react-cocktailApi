import React from "react";
import { withRouter } from "react-router";

const aboutStyle = {
  width: "80%",
  margin: "50px auto",
  color: "white",
  lineHeight: "40px",
  fontSize: "1.3rem",
};

const About = () => {
  return (
    <div style={aboutStyle}>
      <p>
        In January 2021, Drinks International (DI), a trade publication for the
        alcohol industry, released its list of 2020’s best-selling classic
        cocktails around the globe. To create the annual ranking, DI surveys the
        world’s top bars and asks each to name its best-selling drinks for the
        year. The responses are then weighted and ranked. For the latest
        version, the publication surveyed 100 bars to create a ranking of the
        year’s most-ordered drinks at top establishments around the world. A big
        takeaway from the newly released list is: Tropical cocktails are always
        in season. <br /> <br /> Three of the seven newcomers feature bright
        flavors and fruity ingredients — including the Jungle Bird, El Diablo,
        and the Zombie. Perhaps almost a year of staying at home has inspired
        imbibers to experience their beach vacations in a glass. On another
        note, the Long Island Iced Tea has found its way onto the year’s
        ranking, proving that these days, we should always expect the
        unexpected. <br /> <br /> Image result for cocktail They are the Old Fashioned,
        Martini, Daiquiri, Sidecar, Whiskey Highball, and Flip. In each drink,
        every ingredient falls into at least one category. Core is the primary
        flavor; balance enhances the core with sweetness, acidity, or both; and
        seasoning adds another dimension and complements or contrasts with the
        core.
      </p>
    </div>
  );
};

export default About;
