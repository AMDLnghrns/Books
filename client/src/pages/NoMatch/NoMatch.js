import React from "react";
import { Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container>
    <Jumbotron>
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
            </span>
      </h1>
    </Jumbotron>
  </Container>
);

export default NoMatch;


