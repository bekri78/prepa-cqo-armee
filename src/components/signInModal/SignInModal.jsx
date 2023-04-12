import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { Backdrop, Box, Modal, Fade, Typography, Button } from "@mui/material";


export default function SignInModal() {
  const { modalState, toggleModals, signIn, signInWithGoolge } =
    useContext(UserContext);
  const [validation, setValidation] = useState("");
  const formRef = useRef();
  const inputs = useRef([]);
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    border: "2px solid #000",
    boxShadow: 24,
    background:
      "linear-gradient(135deg,rgba(255, 255, 255, 255),rgba(255, 255, 255, 255))",
    backdropFilter: "blur(10px)",
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await signIn(inputs.current[0].value, inputs.current[1].value);
      await formRef.current.reset();
      await toggleModals("close");
       setValidation("");
       navigate("/private/private-state");
    } catch (err) {
      setValidation("Oup , email ou mot de passe incorrect");
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalState.signInModal}
            onClose={closeModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={modalState.signInModal}>
              <Box sx={style} className="modale-signUp">
                <div className="container-metric">
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{ textAlign: "center" }}
                    color="textPrimary"
                  >
                    Connexion
                  </Typography>
                </div>
                <form
                  ref={formRef}
                  onSubmit={handleForm}
                  className="sign-up-form"
                >
                  <div className="mb-3">
                    <label htmlFor="signInEmail" className="form-label">
                      Email
                    </label>
                    <input
                      ref={addInputs}
                      name="email"
                      required
                      type="email"
                      className="form-control"
                      id="signInEmail"
                    />
                    <p className="text-danger mt-1">{validation}</p>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="signInPwd" className="form-label">
                      Mot de passe
                    </label>
                    <input
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      className="form-control"
                      id="signInPwd"
                    />
                  </div>
                  <div className="mb-3 w-100 d-flex justify-content-center align-items-center flex-column">
                    <Button
                      variant="contained"
                      size="small"
                      style={{ width: "50%", height: 40 }}
                      type="submite"
                    >
                      Se connecter
                    </Button>
                    
                  </div>
                </form>
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
}

// <div
//   className="position-fixed top-0 vw-100 vh-100"
//   style={{ zIndex: 3 }}
// >
//   <div
//     onClick={closeModal}
//     className="w-100 h-100 bg-dark bg-opacity-75"
//   ></div>
//   <div
//     className="position-absolute bg-white top-50 start-50 translate-middle"
//     style={{ minWidth: "400px" }}
//   >
//     <div className="modal-dialog">
//       <div className="modal-content padding-10">
//         <div className="modal-header">
//           <h5 className="modal-title">Sign In</h5>
//           <button onClick={closeModal} className="btn-close"></button>
//         </div>

//         <div className="modal-body">
//           <form
//             ref={formRef}
//             onSubmit={handleForm}
//             className="sign-up-form"
//           >
//             <div className="mb-3">
//               <label htmlFor="signInEmail" className="form-label">
//                 Email
//               </label>
//               <input
//                 ref={addInputs}
//                 name="email"
//                 required
//                 type="email"
//                 className="form-control"
//                 id="signInEmail"
//               />
//               <p className="text-danger mt-1">{validation}</p>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="signInPwd" className="form-label">
//                 Mot de passe
//               </label>
//               <input
//                 ref={addInputs}
//                 name="pwd"
//                 required
//                 type="password"
//                 className="form-control"
//                 id="signInPwd"
//               />
//             </div>

//             <button className="btn btn-primary">Connexion</button>
//             <button
//               onClick={googleConnexion}
//               className="btn btn-primary"
//             >
//               Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
