import React, { useEffect, useContext, useRef, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material";
import { format } from 'date-fns'
import metric from "../../utils/img/metric.svg";
import "./SignUpModal.css";

export default function SignUpModal() {
  const { modalState, toggleModals, signUp, currentUser,setIdUserFirebase } =
    useContext(UserContext);
  const [validation, setValidation] = useState("");
  const formRef = useRef();
  const inputs = useRef([]);
  const navigate = useNavigate();
  const [creation, setCreation] = useState(false);
  const [data, setData] = useState([]);
  const auth = getAuth();
  const [error, setError] = useState(null);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
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
 const date = new Date();
  const dateFormated = format(date,'dd/MM/yyyy')
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  useEffect(() => {
    if (currentUser && creation) {
      handleAddData();
      setCreation(!creation);
    }
   
  }, [currentUser, creation]);

  const handleAddData = async () => {
    const initialValueAccount = {
      correctAnswer:0,
      initialUser: true,
      note: [],
      quizzComplete: 0,
      quizzSuccess: 0,
      uid: currentUser.uid,
      wrongAnswer:0,
      date:[dateFormated]
    };
    try {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const usersCollectionRef = collection(getFirestore(), "users");
        await addDoc(usersCollectionRef, { ...initialValueAccount, uid });
        const q = query(usersCollectionRef, where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIdUserFirebase(userData[0].id)
        setData(userData);
       
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 caractères min");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("les mots de passe ne correspondent pas");
      return;
    }

    try {
      await signUp(inputs.current[0].value, inputs.current[1].value).then(
        (result) => {
          if (result) {
            setCreation(true);
            formRef.current.reset();
            setValidation("");
            toggleModals("close");
            navigate("./private/private-state");
          }
        }
      );
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setValidation("Email invalide");
      }
      if (err.code === "auth/email-already-in-use") {
        setValidation("Email deja utilisé");
      }
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signUpModal && (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalState.signUpModal}
            onClose={closeModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={modalState.signUpModal}>
              <Box sx={style} className="modale-signUp">
                <div className="container-metric">
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{ textAlign: "center" }}
                    color="textPrimary"
                  >
                 Créer un compte et accéder à l'ensemble de vos résultats !
                  </Typography>

                  <img src={metric} />
                </div>
                <form
                  ref={formRef}
                  onSubmit={handleForm}
                  className="sign-up-form"
                >
                  <div className="mb-3">
                    <label htmlFor="signUpEmail" className="form-label">
                      Email
                    </label>
                    <input
                      ref={addInputs}
                      name="email"
                      required
                      type="email"
                      className="form-control"
                      id="signUpEmail"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="signUpPwd" className="form-label">
                      Mot de passe
                    </label>
                    <input
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      className="form-control"
                      id="signUpPwd"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="repeatPwd" className="form-label">
                      Répeter mot de passe
                    </label>
                    <input
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      className="form-control"
                      id="repeatPwd"
                    />
                    <p className="text-danger mt-1">{validation}</p>
                  </div>
                  <div className="mb-3 d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary"   style={{ width: "50%", height: 40 }}>S'incrire</button>
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
//     style={{ minWidth: "400px", }}
//   >
//     <div className="modal-dialog">
//       <div className="modal-content padding-10">
//         <div className="modal-header">
//           <h5 className="modal-title">Sign Up</h5>
//           <button onClick={closeModal} className="btn-close"></button>
//         </div>

//         <div className="modal-body">
//           <form
//             ref={formRef}
//             onSubmit={handleForm}
//             className="sign-up-form"
//           >
//             <div className="mb-3">
//               <label htmlFor="signUpEmail" className="form-label">
//                 Email
//               </label>
//               <input
//                 ref={addInputs}
//                 name="email"
//                 required
//                 type="email"
//                 className="form-control"
//                 id="signUpEmail"
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="signUpPwd" className="form-label">
//                 Mot de passe
//               </label>
//               <input
//                 ref={addInputs}
//                 name="pwd"
//                 required
//                 type="password"
//                 className="form-control"
//                 id="signUpPwd"
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="repeatPwd" className="form-label">
//                 Répeter mot de passe
//               </label>
//               <input
//                 ref={addInputs}
//                 name="pwd"
//                 required
//                 type="password"
//                 className="form-control"
//                 id="repeatPwd"
//               />
//               <p className="text-danger mt-1">{validation}</p>
//             </div>

//             <button className="btn btn-primary">S'incrire</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//       )}
//     </>
//   );
// }
