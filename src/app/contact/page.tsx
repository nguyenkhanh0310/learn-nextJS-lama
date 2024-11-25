"use client"
import Image from "next/image";
import styles from  "./contact.module.css"
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";
// import React, { useEffect, useState } from 'react'

const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})
const ContactPage = () => {
  // const [ isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // const a = Math.random(); 
  // console.log(a);

  // const a = Math.random();

  // console.log(a);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          fill
          alt="Contact Image"
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        {/* {isClient && <div>{a}</div>} */}
        <HydrationTestNoSSR/>
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname"/>
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Phone number (Optional)"/>
          <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;