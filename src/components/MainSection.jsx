import React, {createContext, useState} from "react";
import TextField from "@mui/material/TextField";
import BasicModal from "./OpenModal";
import CustomizedTables from "./EditToolbar";

export const openModal = createContext(null)







const MainSection = () => {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const [data, setData] = useState([])



  return (
    <openModal.Provider value={[open, setOpen, data, setData]}>
      <div className="addEmployee">
       <div className="adduser">
         <TextField id="outlined-basic" label="Search Employee" variant="outlined" style={{width:"60%"}}/>
        < BasicModal />
       </div>
        <CustomizedTables />
      </div>
    </openModal.Provider>
  );
};

export default MainSection;
