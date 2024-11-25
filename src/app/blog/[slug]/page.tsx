import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import Loading from "@/app/loading";
import { getPost } from "@/lib/data";

// interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }
// const getData = async (): Promise<Post[]> => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${param.slug}`
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

// FETCH DATA WITH AN API
// const getData = async (slug: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }: any) => {
  const { slug } = await params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);
  // console.log(param.slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  console.log(post);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/29401471/pexels-photo-29401471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/29401471/pexels-photo-29401471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          {post && (
            <Suspense fallback={<Loading />}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
