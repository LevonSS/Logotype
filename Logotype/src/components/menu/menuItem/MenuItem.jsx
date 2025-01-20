import PropTypes from "prop-types";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, subMenu }) => {
  return (
    <li className={styles.menuItem}>
      <span>{title}</span>

      {subMenu && subMenu.length > 0 && (
        <ul className={styles.menuItem__submenu}>
          {subMenu.map((subItem) => (
            <li
              className={styles.menuItem__submenu__menuItem}
              key={subItem.title}
            >
              <span>{subItem.title}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  subMenu: PropTypes.array,
  id: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MenuItem;
