import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
export default () => (
  <Layout>
    <h1>About me!</h1>
    <p>this is a personal webbies</p>

    <Link to="/">&larr; go to home</Link>
  </Layout>
);
