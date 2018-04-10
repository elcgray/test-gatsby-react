import React from "react";
import Link from "gatsby-link";

export default () => <div style={{ color: `grey` }}>
  <h1>Hello Docsbroads!</h1>
  <p>I am playing with Gatsby.js to learn about GraphQL and React.js.</p>
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  <br />
    <div>
      <Link to="/page-2/">Page 2</Link>
      <br />
      <Link to="/page-3/">Page 3</Link>
    </div>
  </div>;
