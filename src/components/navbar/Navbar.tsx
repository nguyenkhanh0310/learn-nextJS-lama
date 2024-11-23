import Links from "@/components/navbar/links/Links";
import React from "react";
import style from './navbar.module.css';
import Link from "next/link";

const Navbar = () => {

  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>Logo</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
};

export default Navbar;
