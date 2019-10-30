import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import {
  usePopupState,
  bindTrigger,
  bindMenu
} from "material-ui-popup-state/hooks";

import three_cats from "../../public/three_cats.png";
import "./Nav.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Nav(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const TriggerMenu = () => {
    const popupState = usePopupState({
      variant: "popover",
      popupId: "demoMenu"
    });
    return (
      <div>
        <Button
          className="nav-menu"
          variant="contained"
          {...bindTrigger(popupState)}
        >
          <MenuIcon />
        </Button>
        <Menu
          {...bindMenu(popupState)}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem onClick={popupState.close}>Find Parking</MenuItem>
          <MenuItem onClick={popupState.close}>Directions</MenuItem>
          <MenuItem onClick={popupState.close}>About us</MenuItem>
        </Menu>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>

          <TriggerMenu />

          <Typography variant="h6" className={classes.title}>
            <div className="center-nav">
              <img
                src={
                  "https://github.com/ChrisnNg/cat_park/blob/features/nav/client/public/cat_park.png?raw=true"
                }
                alt="cat_park_logo"
                className="catimg"
              />
              <div className="cattxt left">
                <b>~Cat</b>
              </div>
              <div className="cattxt right">
                <b>Park~</b>
              </div>
            </div>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
