import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
// import DiamondList from "../components/elements/DiamondList";
// import Hr from "../components/elements/Hr";

const IndexPage = () => (
  <Layout>
    {/* <Hr />
    <div style={{ width: 400 }}>
      <DiamondList>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </DiamondList>
    </div> */}
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
