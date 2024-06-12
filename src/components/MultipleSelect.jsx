import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    label: 'None',
  },
  {
    label: 'Developing',
  },
  {
    label: 'Marketing',
  },
  {
    label: 'Accounting',
  },
];

export default function SelectTextFields() {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    //   noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Department"
          defaultValue=""
          helperText="Please select your department"
          name='selected'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
              {console.log(option.label)}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
     
     
    </Box>
  );
}
