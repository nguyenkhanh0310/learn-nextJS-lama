import styles from "./postUser.module.css";

const getData = async (userId: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const PostUser = async ({ userId }: any) => {
  const user = await getData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
};

export default PostUser;
