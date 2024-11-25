import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

// interface PostCardProps {
//   post: Post;
// }

function PostCard({ post }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/29401471/pexels-photo-29401471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
