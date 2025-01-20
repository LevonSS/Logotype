import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Search.module.scss";
import { useRef } from "react";
import { TRANSITION_DELAY } from "../../utils/constants";

const Search = ({ setSearchText }) => {
  const [openInput, setOpenmInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const delayFocus = setTimeout(() => {
      if (openInput) {
        inputRef.current.focus();
      }
    }, TRANSITION_DELAY);

    return () => {
      clearTimeout(delayFocus);
    };
  }, [openInput]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        className={`${styles.search__text} ${
          openInput ? styles["search__text--active"] : ""
        }`}
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInput}
        placeholder="search"
      />
      <span
        className={styles.search__button}
        onClick={() => setOpenmInput((prev) => !prev)}
      ></span>
    </div>
  );
};

Search.propTypes = {
  setSearchText: PropTypes.func,
};

export default Search;
