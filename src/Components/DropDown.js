import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { getArticles } from "./Utils/Axios";
import { useState } from "react";

const MenuPopupState = ({ setSorted, setSortByCat }) => {
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  const handleClick = () => {
    getArticles(order).then((response) => {
      setSorted(true);
      setSortByCat(response);
    });
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Sort
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                setOrder("desc");
                handleClick();
              }}
            >
              Date (New)
            </MenuItem>
            <MenuItem
              onClick={() => {
                setOrder("asc");
                handleClick();
              }}
            >
              Date (Old)
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSortBy("comments");

                handleClick();
              }}
            >
              Comments
            </MenuItem>
            <MenuItem onClick={popupState.close}>Votes</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default MenuPopupState;
