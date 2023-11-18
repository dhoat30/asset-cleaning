"use client";
import {
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import styled from "@emotion/styled";
// styling for select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Input({
  label,
  type,
  value,
  onChange,
  onBlur,
  required,
  autoComplete,
  errorMessage,
  isInvalid,
  options,
  multipleValue,
  ...props
}) {
  if (type === "radio") {
    return (
      <FormControlStyled
        error={required ? isInvalid : null}
        variant="standard"
        sx={{ marginTop: "24px " }}
      >
        <FormLabel className="radio-label">
          <Typography variant="h5" component="div">
            {label}
          </Typography>
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          color="secondary"
          value={value}
          onChange={onChange}
          sx={{ marginTop: "8px" }}
        >
          {options.map((option, index) => (
            <FormControlLabel
              color="white"
              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              key={index}
              value={option.value}
              control={<Radio color="secondary" />}
              label={option.label}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{isInvalid && errorMessage}</FormHelperText>
      </FormControlStyled>
    );
  } else if (type === "select") {
    return (
      <FormControlStyled
        error={required ? isInvalid : null}
        sx={{ marginTop: "24px " }}
        color="secondary"
        fullWidth={true}
      >
        <InputLabel id="multiple-checkbox-label" sx={{ width: "100%" }}>
          {label}
        </InputLabel>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={multipleValue}
          value={value}
          onChange={onChange}
          input={<OutlinedInput label={label} />}
          renderValue={
            multipleValue
              ? (selected) => selected.join(", ")
              : (selected) => selected.toString()
          }
          MenuProps={MenuProps}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              <Checkbox
                checked={value.indexOf(option.value) > -1}
                color="secondary"
              />
              <ListItemText primary={option.label} color="secondary" />
            </MenuItem>
          ))}
        </Select>
      </FormControlStyled>
    );
  } else {
    return (
      <TextFieldStyle
        sx={{ marginTop: "24px" }}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        variant="outlined"
        fullWidth
        color="secondary"
        autoComplete={autoComplete}
        helperText={isInvalid && errorMessage}
        error={required ? isInvalid : null}
        multiline={type === "textarea" ? true : false}
        minRows={type === "textarea" ? 3 : null}
      />
    );
  }
}
const FormControlStyled = styled(FormControl)`
  .radio-label.Mui-focused {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const TextFieldStyle = styled(TextField)`
  .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px rgba(244, 244, 237, 1) inset;
    -webkit-text-fill-color: rgba(0, 76, 105, 1);
    caret-color: #fff;
    border-radius: inherit;
  }
`;
