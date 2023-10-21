import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <StaticImage
      className="backgroundImage"
      layout="fullWidth"
      alt=""
      src="../../../images/backgroundLeft.png"
      // src="@/images/backgroundLeft.png"
      formats={["auto", "webp", "avif", "png"]}
    />
    <div className="content">
      <h1>Portfolio</h1>
    </div>
  </header>
);

export default Header;
