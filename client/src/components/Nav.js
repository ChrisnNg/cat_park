import React, { useState } from "react";
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
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  usePopupState,
  bindTrigger,
  bindMenu
} from "material-ui-popup-state/hooks";

import "./Nav.css";
import { Link } from "react-router-dom";
import AboutPage from "./About.js";
import MyAccountEdit from "./MyAccountEdit.js";
import "./Modal.css";

import Register from "./Register.js";
import SignIn from "./SignIn.js";

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

import cat_park from "../../public/cat_park.png";

export default function Nav(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth, setAuth] = React.useState(true);

  const [showAbout, setShowAbout] = useState(false);
  const [showAccountEdit, setShowAccountEdit] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [showButtons, setShowButton] = React.useState({ visibility: "hidden" });

  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
    setShowButton({ visibility: "visible" });
  };

  // create a logout function that clears cookies and also sets login/register button to visible again
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowAbout(false);
    setShowAccountEdit(false);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleShowAbout = () => setShowAbout(true);
  const handleShowAccountEdit = () => {
    handleClose();
    setShowAccountEdit(true);
  };
  const handleShowLogin = () => setShowLogin(true);
  const handleShowRegister = () => setShowRegister(true);

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
      <AppBar className="nav-bar" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          {/* popup for my accountEdit */}
          <Modal show={showAccountEdit} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {" "}
                <h2>
                  <img
                    src={cat_park}
                    alt="cat_park_logo"
                    className="catimg modaltitle"
                  />
                  <b>Change Password</b>
                </h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MyAccountEdit />
            </Modal.Body>
          </Modal>
          {/* popup for register */}
          <Modal show={showRegister} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {" "}
                <h1>
                  <img
                    src={cat_park}
                    alt="cat_park_logo"
                    className="catimg modaltitle"
                  />
                  <b>Register</b>
                </h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Register />
            </Modal.Body>
          </Modal>
          {/* trigger menu */}
          <TriggerMenu />
          {/* Nav Logo */}
          <div className="center-nav">
            <img
              src={cat_park}
              alt="cat_park_logo"
              className="catimg modaltitle"
            />
            <b>~Cat_Park~</b>
          </div>
          <div className="container">
            <Button className="btn btn-info" onClick={handleShowAbout}>
              About
            </Button>
            {/* popup for About page */}
            <Modal
              show={showAbout}
              onHide={handleClose}
              size="xl"
              centered={true}
            >
              <Modal.Header closeButton>
                <Modal.Title className="aboutUsTitle">
                  {" "}
                  <img src={cat_park} alt="cat_park_logo" className="catimg" />
                  Cat Park
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AboutPage />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            {/* popup for Login */}
            <Modal show={showLogin} onHide={handleClose} centered={true}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {" "}
                  <h1>
                    <img
                      src={cat_park}
                      alt="cat_park_logo"
                      className="catimg modaltitle"
                    />
                    <b>Login</b>
                  </h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SignIn />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <div className="float-right" style={showButtons}>
              <Button onClick={handleShowLogin} className="btn btn-info">
                Login
              </Button>
              <Button onClick={handleShowRegister} className="btn btn-info">
                Register
              </Button>
            </div>
          </div>

          <Typography variant="h6" className={classes.title}></Typography>
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
                <MenuItem onClick={handleShowAccountEdit}>
                  Edit My account
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
