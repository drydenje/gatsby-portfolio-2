import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";

const Panel = ({ backgroundColor, children }) => (
  <>
    <StaticImage
      className={styles.backgroundImage}
      layout="fullWidth"
      loading="eager"
      alt=""
      src="../../../images/backgroundRight.png"
      // src="@/images/backgroundLeft.png"
      formats={["auto", "webp", "avif", "png"]}
      // backgroundColor={"blue"}
      backgroundColor={`var(--${backgroundColor})`}
    />
    <div className={styles.panel}>{children}</div>
  </>
);

export default Panel;
