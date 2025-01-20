import PropTypes from "prop-types";
import styles from "./Post.module.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import Popup from "../../popup/Popup";

const Post = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.post} onClick={() => setShowModal(true)}>
        <img
          alt="Photo"
          className={styles.post__photo}
          srcSet={`${post?.img} 1x, ${post?.img_2x} 2x`}
        />
        <div className={styles.content}>
          <span className={styles.content__tags}>{post?.tags}</span>
          <h3 className={styles.content__title}>{post?.title}</h3>
          <div className={styles.content__author}>
            <span className={styles.content__author__name}>{post?.autor}</span>
            <span>{post?.date}</span>
            <span>{post?.views}</span>
          </div>
          <p className={styles.content__text}>{post?.text}</p>
        </div>
      </div>
      {showModal &&
        createPortal(
          <Popup modalInfo={post} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  onShowModal: PropTypes.func,
};

export default Post;
