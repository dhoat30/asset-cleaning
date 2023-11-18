// CustomDatePicker.js
import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import TextField from "@mui/material/TextField";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const CustomDatePicker = forwardRef(({ value, onChange }, ref) => {
  // Filter days to allow only weekdays (Monday to Friday)
  const filterWeekdays = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  // Filter times to allow only 10am to 5pm
  const filterHours = (time) => {
    const hours = time.getHours();
    return hours >= 10 && hours < 17;
  };
  // Get the current date with time set to 00:00:00 to prevent today's past times from being selected
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      showTimeSelect
      minDate={currentDate} // Prevent past dates from being selected
      minTime={setHours(setMinutes(new Date(), 0), 10)}
      maxTime={setHours(setMinutes(new Date(), 0), 17)}
      dateFormat="MMMM d, yyyy h:mm aa"
      filterDate={filterWeekdays}
      filterTime={filterHours}
      customInput={<DateTimeInput ref={ref} />}
    />
  );
});

const DateTimeInput = forwardRef(({ value, onClick }, ref) => (
  <TextField
    sx={{ marginTop: "24px" }}
    variant="outlined"
    label="Select a date and time"
    value={value}
    onClick={onClick}
    ref={ref}
    color="secondary"
    fullWidth={true}
  />
));

export default CustomDatePicker;
