import "./styles/Menu.css";
import MenuItem from "./MenuItem";
import menuItems from "./MenuItems";

const Menu = () => {
  return (
    <div>
      <div className="menu-categoty">
        <h1>Starters</h1>
        <div className="menu-items-section">
          {menuItems
            .filter((menuItems) => menuItems.category === "starters")
            .map((menuItems) => (
              <MenuItem key={menuItems.id} menuItems={menuItems} />
            ))}
        </div>
      </div>
      <div className="menu-categoty">
        <h1>Desserts</h1>
        <div className="menu-items-section">
          {menuItems
            .filter((menuItems) => menuItems.category === "desserts")
            .map((menuItems) => (
              <MenuItem key={menuItems.id} menuItems={menuItems} />
            ))}
        </div>
      </div>
      <div className="menu-categoty">
        <h1>Drinks</h1>
        <div className="menu-items-section">
          {menuItems
            .filter((menuItems) => menuItems.category === "drinks")
            .map((menuItems) => (
              <MenuItem key={menuItems.id} menuItems={menuItems} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
