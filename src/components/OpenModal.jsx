import React, { useContext, createContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
// import { Password } from "@mui/icons-material";
import TextField1 from "./TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import BasicSelect from "./MultipleSelect";
import CommonlyUsedComponents from "./CommonlyUsedComponents";
import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { openModal } from "./MainSection";
import * as Yup from "yup";
import SelectTextFields from "./MultipleSelect";
// import { useContext } from "react";
// import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",

  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function BasicModal() {
  const state = useContext(openModal);
  const [open, setOpen, data, setData] = state;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  let validate = Yup.object({
    fullName: Yup.string()
      //  .max(15, "Must be 15 characters or less")
      .min(1, "Must be 1 characters or more")
      .required("requared"),
    email: Yup.string()
    .email("Email is invalid")
    .required("Email is requared"),
    number: Yup.number()
      .min(6, "Must be 6 characters or more")
      .required("requared"),
    text: Yup.string()
      .min(1, "Must be 1 characters or more")
      .required("requared"),
    // selected: Yup.string()
    //   .min(1, 'required')
    //   .required("required")
    
  });


  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        <FontAwesomeIcon size="2x" style={{ margin: 5 }} icon={faPlus} /> Add
        User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              number: "",
              text: "",
              selected: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              data.push(values);
              setData(data);
              setOpen(false);
              console.log(values)
            }}
          >
            {(formik) => (
              <div>
                <div className="modalBox d-flex justify-content-between">
                  <h3>Employee Form</h3>
                  <Button onClick={() => handleClose()}>
                    <FontAwesomeIcon size="2x" icon={faXmark} color="red" />
                  </Button>
                </div>
                <Form className="modalBox">
                  <div>
                    <TextField1
                      className="m-2"
                      label="Full Name"
                      name="fullName"
                      type="text"
                    />
                    <TextField1
                      className="m-2"
                      label="Email"
                      name="email"
                      type="email"
                    />
                    <TextField1
                      className="m-2"
                      label="Mobile"
                      name="number"
                      type="number"
                    />
                    <TextField1
                      className="m-2"
                      label="City"
                      name="text"
                      type="text"
                    />
                    <button className="m-2 btn btn-success" type="submit">
                      Submit
                    </button>
                    <Button
                      className="m-2"
                      variant="outlined"
                      color="error"
                      type="reset"
                    >
                      Reset
                    </Button>
                  </div>

                  <div>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                          selected
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </RadioGroup>
                    </FormControl>

                    
                      
                     <SelectTextFields/>
                    

                    <CommonlyUsedComponents />
                    <FormGroup>
                      <FormControlLabel
                        className="mt-3"
                        required
                        control={<Checkbox />}
                        label={`Permanent Employee `}
                      />
                    </FormGroup>
                    <Stack direction="row" spacing={2}></Stack>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
