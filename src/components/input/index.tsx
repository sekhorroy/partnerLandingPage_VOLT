import { InputProps } from "@/components/input/type";
import { TextField } from "@mui/material";
import styles from "./input.module.css";

export const TextInput: React.FunctionComponent<InputProps> = ({ label, onChange }) => {
  const handleOnChange = (e: Object) => {
      onChange && onChange(e);
  }
  return (
    <div className={styles.textInputContainer}>
      <TextField
        id="outlined-basic"
        label={label ? label : "test label"}
        variant="outlined"
        style={{
          width: "100%",
        }}
        onChange={(event)=>handleOnChange(event)}
      />
    </div>
  );
};
