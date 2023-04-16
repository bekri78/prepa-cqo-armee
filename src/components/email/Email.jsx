import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Email.css";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Chip from "@mui/material/Chip";

export default function Email() {
  const [value, setValue] = useState();
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const handleValueChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const succesMessage = () => {
    Toast.fire({
      icon: "success",
      title: "Envoyé avec succès !",
    });
  };

  const handeSubmit = (e) => {
    
    e.preventDefault();
    if (name && email && prenom && value) {
      sendEmail({
        name,
        prenom,
        email,
        value,
      });
    }
  };

  const sendEmail = (variable) => {
   
    emailjs
      .send(
        "service_tc5kj2k",
        "template_7te270a",
        variable,
        "user_CeUZSbU8Tow2n0Uj8WHhH"
      )
      .then(
        () => {
          
          succesMessage();
          setName("");
          setEmail("");
          setPrenom("");
          setValue("");
        },
        (error) => {
          console.log(error.text);
          Toast.fire({
            icon: "error",
            title: "Erreur veuillez réessayer",
          });
        }
      );
  };
  return (
    <div className="container-form">
      <Card
        className="card-form"
        style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" color="textPrimary">
            Me contacter
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Pour toute suggestion remplissez le formulaire, je reviendrai vers
            vous au plus vite.
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Nom"
                  id="name"
                  placeholder="Entrez votre nom"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Prenom"
                  id="prenom"
                  value={prenom}
                  placeholder="Entrez votre prenom"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  id="email"
                  label="Email"
                  placeholder="Entrez email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  id="message"
                  multiline
                  rows={4}
                  placeholder="Entrez votre message"
                  variant="outlined"
                  fullWidth
                  required
                  value={value}
                  onChange={handleValueChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  value="Send"
                  variant="contained"
                  size="medium"
                  fullWidth
                  onClick={handeSubmit}
                >
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <div className="home-form">
      <Link style={{ textDecoration: "none"}} to={"/"}>
        <Chip  style={{cursor:"pointer",display: 'flex',alignItems: 'center',flexDirection: 'column',justifyContent: 'center',height: 'auto', width:'100%'}} icon={<HomeIcon style={{fontSize: '2em'}} />} label="Accueil" />{" "}
      </Link>
      </div>
        <div className="signature"><div className="container-signature"> <p style={{margin:'unset',  marginRight:3}}>Developed by </p><a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/mehdi-bekri/" target="_blank"  rel="noreferrer"> Mister_B_For_You</a></div> </div> 
    </div>
  );
}
