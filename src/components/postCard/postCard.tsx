import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/29401471/pexels-photo-29401471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, libero. Et cupiditate officia minus suscipit itaque illo voluptate sit necessitatibus, veritatis odit in est a, saepe ipsa, consequuntur dolorem provident?</p>
        <Link className={styles.link} href="/blog/post" >READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard;