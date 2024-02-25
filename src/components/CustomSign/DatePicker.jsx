import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";

function DatePickerCustom({ name, selected, onChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const minimalDate = new Date();
  minimalDate.setDate(1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(name, date);
  };

  return (
    <div className={styles.datePickerWrapper}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={minimalDate}
        showMonthYearPicker
        dateFormat="MM/yyyy"
        className={styles.customDatePicker}
      />
    </div>
  );
}

export default DatePickerCustom;
