import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";
import styles from "./Header.module.scss";

const Header = ({ children }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isHidden ? styles.hidden : ""}`}>
      <div className={styles.header__content}>
        <div
          className={styles.header__content__mobileMenu}
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          <span>&nbsp;</span>
        </div>
        <Logo />
        {children}
      </div>
      <Menu
        showMobileMenu={showMobileMenu}
        onShowMobileMenu={setShowMobileMenu}
      />
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
