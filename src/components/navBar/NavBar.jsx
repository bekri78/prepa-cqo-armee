import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { auth } from "../../firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "react-bootstrap/Container";
import "./NavBar.css";

export default function Navbare() {
  const { toggleModals, currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "Pour certaines raison nous ne pouvons pas vous deconnecter,veuillez verifier votre connexion internet"
      );
    }
  };
  return (
    <Navbar
      className="d-flex flex-end w-100"
      collapseOnSelect
      sticky="top"
      expand="sm"
      variant="dark"
    >
      <NavbarToggle aria-controls="responsive-navbar-nav"></NavbarToggle>
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto">
          {!currentUser ? (
            <>
              <NavLink>
                <Button
                  onClick={() => toggleModals("signUp")}
                  variant="contained"
                >
                  Inscription
                </Button>
              </NavLink>
              <NavLink>
                <Button
                  onClick={() => toggleModals("signIn")}
                  variant="contained"
                >
                  Connexion
                </Button>
              </NavLink>
            </>
          ) : (
            <NavLink>
              <Button onClick={logOut} variant="contained">
                Deconnexion
              </Button>
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    
  );
}
