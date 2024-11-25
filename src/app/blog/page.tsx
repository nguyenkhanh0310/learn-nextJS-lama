import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

// interface Post {
//   id: number;
//   userId: number;
//   title: string;
//   body: string;
// }

// const getData = async (): Promise<Post[]> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   let posts: Post = await res.json();
//   if(!posts)
// };

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if(!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post:any) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
