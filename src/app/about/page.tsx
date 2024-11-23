import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, amet ullam cupiditate eaque eveniet exercitationem. Magnam optio aliquam nulla, distinctio incidunt unde ipsum quibusdam tenetur ad hic nihil repellendus quos.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience </p>
          </div>

          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience </p>
          </div>

          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience </p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;

{
  /* fill: a boolean that causes the image to fill the parent element
        -> parent element must assign position: relative, fixed or absolute style */
}
{
  /* <Image src="https://images.pexels.com/photos/28833016/pexels-photo-28833016/free-photo-of-con-d-ng-mua-thu-v-i-la-r-ng-trong-r-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="about" fill/> */
}
