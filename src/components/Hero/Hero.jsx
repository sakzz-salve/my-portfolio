import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sakshi</h1>
        <p className={styles.description}>
          Passionate B.Sc. Computer Science graduate (2025) with a solid
          foundation in programming and web development. Skilled in Python,
          HTML, CSS, JavaScript and React, ready to create innovative solutions.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sakshisalve516@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/cropped.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
