import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { getArticles } from "./Utils/Axios";
import { useState } from "react";

const MenuPopupState = ({ setSorted, setSortByCat }) => {
  const [order, setOrder] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    getArticles(order).then((response) => {
      setSortByCat(response);
      setSorted(true);
    });
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick1}
      >
        Order
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            setOrder("desc");
            handleClick();
            handleClose();
          }}
        >
          Date New
        </MenuItem>

        <MenuItem
          onClick={() => {
            setOrder("asc");
            handleClick();
            handleClose();
          }}
        >
          Date Old
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuPopupState;
