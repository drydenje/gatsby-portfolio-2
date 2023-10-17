import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { fas, faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styles from "./index.module.css";

library.add(fab, faTwitter, fas, faBars, faTimesCircle);

const links = [
  {
    url: "https://twitter.com/itsmejeremyd",
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "Twitter",
    ariaLabel: "Twitter",
    icon: ["fab", "twitter"],
  },
  {
    url: "https://www.linkedin.com/in/jeremy-dryden-2396879",
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "linkedIn",
    ariaLabel: "linkedIn",
    icon: ["fab", "linkedin-in"],
  },
  {
    url: "https://github.com/drydenje",
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "github",
    ariaLabel: "github",
    icon: ["fab", "github"],
  },
  {
    url: "https://medium.com/@jeremy.dryden/",
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "medium",
    ariaLabel: "medium",
    icon: ["fab", "medium-m"],
  },
];

const Footer = () => {
  return (
    <footer className={styles.navSocial}>
      <ul className={styles.navSocialLinks}>
        {links.map(({ url, target, rel, alt, ariaLabel, icon }) => {
          return (
            <li key={ariaLabel}>
              <a
                href={url}
                target={target}
                rel={rel}
                alt={alt}
                aria-label={ariaLabel}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
