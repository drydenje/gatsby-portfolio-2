/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Header from "@/components/containers/Header";
// import Footer from "@/components/containers/Footer";
import "./normalize.css";
import "./globals.css";
import * as styles from "./index.module.css";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className={styles.wrapper}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
