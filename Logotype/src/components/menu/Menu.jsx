import PropTypes from "prop-types";
import Logo from "../logo/Logo";
import MenuItem from "./menuItem/MenuItem";
import { menuData } from "../../utils/constants";
import styles from "./Menu.module.scss";

const Menu = ({ showMobileMenu, onShowMobileMenu }) => {
  return (
    <nav
      className={`${styles.container} ${
        showMobileMenu ? styles.showMobileMenu : ""
      }`}
    >
      <div className={styles.menuContainer}>
        <div className={styles.menuContainer__mobile}>
          <Logo />
          <span
            className={styles.menuContainer__mobile__close}
            onClick={() => onShowMobileMenu((prev) => !prev)}
          >
            &nbsp;
          </span>
        </div>
        <ul className={styles.menu}>
          {menuData.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <div
        className={styles.container__overlay}
        onClick={() => onShowMobileMenu(false)}
      ></div>
    </nav>
  );
};

Menu.propTypes = {
  showMobileMenu: PropTypes.bool,
  onShowMobileMenu: PropTypes.func,
};
export default Menu;
