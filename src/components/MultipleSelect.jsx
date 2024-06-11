import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: 'None',
  },
  {
    value: 'EUR',
    label: 'Developing',
  },
  {
    value: 'BTC',
    label: 'Marketing',
  },
  {
    value: 'JPY',
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
          defaultValue="EUR"
          helperText="Please select your department"
          name='selected'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
     
     
    </Box>
  );
}
