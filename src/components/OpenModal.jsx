import React, { useContext, createContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
// import { Password } from "@mui/icons-material";
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
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { pink } from "@mui/material/colors";

// import { useContext } from "react";
// import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  borderRadius: "10px",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const currencies = [
  {
    label: "None",
  },
  {
    label: "Developing",
  },
  {
    label: "Marketing",
  },
  {
    label: "Accounting",
  },
];

export default function BasicModal() {
  const state = useContext(openModal);
  const [open, setOpen, data, setData] = state;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let validate = Yup.object({
    fullName: Yup.string()
      //  .max(15, "Must be 15 characters or less")
      .min(5, "Must be 1 characters or more")
      .required("requared"),
    email: Yup.string().email("Email is invalid").required("Email is requared"),
    mobile: Yup.number()
      .min(6, "Must be 6 characters or more")
      .required("requared"),
    city: Yup.string()
      .min(1, "Must be 1 characters or more")
      .required("requared"),
    department: Yup.string().required("required"),
    date: Yup.string().required("required"),
    gender: Yup.string().min(1, "dsfgdsfg").required("requared"),
  });

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const resetButton = () => {};

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
          <div className="modalBox d-flex justify-content-between">
            <h3>Employee Form</h3>
            <Button onClick={() => handleClose()}>
              <FontAwesomeIcon size="2x" icon={faXmark} color="red" />
            </Button>
          </div>
          <hr />
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              mobile: "",
              city: "",
              department: "",
              date: "",
              gender: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
              data.push(values);
              setData(data);
              setOpen(false);
            }}
          >
            {({ handleChange, errors, touched, setFieldValue }) => (
              <div>
                <Form className="modalBox">
                  <div>
                    <TextField
                      className="m-2"
                      label="Full Name"
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                      fullWidth
                      helperText={
                        errors.fullName && touched.fullName
                          ? errors.fullName
                          : null
                      }
                      error={errors.fullName && touched.fullName}
                    />

                    <TextField
                      className="m-2"
                      label="Email"
                      name="email"
                      // type="email"
                      onChange={handleChange}
                      fullWidth
                      helperText={
                        errors.email && touched.email ? errors.email : null
                      }
                      error={errors.email && touched.email}
                    />
                    <TextField
                      className="m-2"
                      label="Mobile"
                      name="mobile"
                      type="number"
                      onChange={handleChange}
                      fullWidth
                      helperText={
                        errors.mobile && touched.mobile ? errors.mobile : null
                      }
                      error={errors.mobile && touched.mobile}
                    />
                    <TextField
                      className="m-2"
                      label="City"
                      name="city"
                      type="text"
                      onChange={handleChange}
                      fullWidth
                      helperText={
                        errors.city && touched.city ? errors.city : null
                      }
                      error={errors.city && touched.city}
                    />
                  </div>

                  <div className="modalRight">
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="gender"
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="female"
                          control={
                            <Radio
                              sx={
                                errors.gender && touched.gender
                                  ? { color: "red" }
                                  : ""
                              }
                            />
                          }
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={
                            <Radio
                              sx={
                                errors.gender && touched.gender
                                  ? { color: "red" }
                                  : ""
                              }
                            />
                          }
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={
                            <Radio
                              sx={
                                errors.gender && touched.gender
                                  ? { color: "red" }
                                  : ""
                              }
                            />
                          }
                          label="Other"
                        />
                      </RadioGroup>
                    </FormControl>

                    <TextField
                      className="w-100"
                      id="outlined-select-currency"
                      select
                      label="Department"
                      defaultValue=""
                      helperText={
                        errors.department && touched.department
                          ? errors.department
                          : null
                      }
                      onChange={handleChange}
                      name="department"
                      error={errors.department && touched.department}
                      // name="selected"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Date"
                        name="date"
                        onChange={(e) => setFieldValue("date", e)}
                        slotProps={{
                          textField: {
                            error: !!errors.date && touched.date,
                            helperText:
                              errors.date && touched.date ? errors.date : null,
                            fullWidth: true,
                          },
                        }}
                      />
                    </DemoContainer>

                    {/* <FormGroup>
                      <FormControlLabel  name="accept" 
                        control={<Checkbox/>}
                        label="Permanent Employee"
                      />
                    </FormGroup> */}
                    {/* <Checkbox
                      name="checkbox"
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    /> */}

                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkbox"
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Required"
                      />
                    </FormGroup>

                    <Stack direction="row" spacing={2}></Stack>
                    <Button className="mt-2 " variant="contained" type="submit">
                      Submit
                    </Button>
                    <Button
                      className="mt-2 ms-2"
                      variant="outlined"
                      color="error"
                      type="reset"
                      onClick={() => resetButton()}
                    >
                      Reset
                    </Button>
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

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';

// function MyComponent() {
//   const [textValue, setTextValue] = useState('');

//   const handleChange = (event) => {
//     setTextValue(event.target.value);
//   };

//   return (
//     <div>
//       <TextField
//         label="Enter text"
//         value={textValue}
//         onChange={handleChange}
//       />
//       <p>The value you entered is: {textValue}</p>
//     </div>
//   );
// }

// export default MyComponent;
