import React from "react";
import styles from "./post.module.scss";

const Post = () => (
  <div className={styles.eachPost}>
    <div className={styles.image}>
      <img
        className={styles.img}
        src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
      ></img>
    </div>
    <div className={styles.description}>
      <header className={styles.title}>Zdanie tytułowe</header>
      <p className={styles.postDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem
      </p>
    </div>
    <button className={styles.btn}>Wiecej >></button>
  </div>
);

export default Post;
