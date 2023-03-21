import React from "react";
import { Container, Segment } from "semantic-ui-react";
import footerImg from "../images/may-the-force_.png";

export default function Footer() {
  return (
    <Segment very padded>

      <Container textAlign="center">
        <div style={{ border: 'none' }}>
          <img className="footer-img" src={footerImg} alt="footer" />;
        </div>
      </Container>

    </Segment>
  );
}
