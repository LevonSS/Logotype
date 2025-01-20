import Post from "../../components/postContainer/post/Post";
import PostContainer from "../../components/postContainer/PostContainer";
import PropTypes from "prop-types";
import { usePosts } from "../../hooks/usePosts";
import styles from "./Content.module.scss";

const Content = ({ searchText }) => {
  const { posts, isLoading } = usePosts();

  if (isLoading)
    return (
      <div className={styles.content}>
        <p>Loading...</p>;
      </div>
    );

  const searchedPosts = searchText
    ? posts.filter(
        ({ title, text }) =>
          title.toLowerCase().includes(searchText?.toLowerCase()) ||
          text.toLowerCase().includes(searchText?.toLowerCase())
      )
    : posts;

  return (
    <div className={styles.content}>
      <PostContainer>
        {searchedPosts &&
          searchedPosts.map((post) => (
            <Post key={Math.random() * (100 - 1) + 1} post={post} />
          ))}
        {searchedPosts.length === 0 && <p>No posts found.</p>}
      </PostContainer>
    </div>
  );
};

Content.propTypes = {
  searchText: PropTypes.string,
};

export default Content;
