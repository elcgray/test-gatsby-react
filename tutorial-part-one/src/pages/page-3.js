import React from "react";
import Link from "gatsby-link";

export default () => <div style={{ color: `grey` }}>
  <h1>Hello again!</h1>
  <p>I am <b> still </b> testing the Gatsby link component.</p>
    <div>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/">Go home</Link>
    </div>
  </div>;
