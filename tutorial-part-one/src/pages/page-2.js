import React from "react";
import Link from "gatsby-link";

export default () => <div style={{ color: `grey` }}>
  <h1>Page 2</h1>
  <p>I am testing the Gatsby link component.</p>
    <div>
      <Link to="/">Go home</Link>
      <br />
      <Link to="/page-3/">Go to page 3</Link>
    </div>
  </div>
