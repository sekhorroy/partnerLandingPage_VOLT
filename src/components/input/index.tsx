import { InputColorTokens, InputProps } from "@/components/input/type";
import { TextField } from "@mui/material";
import styles from "./input.module.css";
import { useMemo } from "react";

export const TextInput: React.FunctionComponent<InputProps> = ({
  label,
  onChange,
  color = InputColorTokens.PRIMARY,
  error = false,
  value = "",
  helperText = "",
}) => {
  const handleOnChange = (e: any) => {
    value = e?.target?.value;
    console.log("value 123: ", value);
    onChange && onChange(e?.target?.value);
  };

  const _child = useMemo(
    () => (
      <div className={styles.textInputContainer}>
        <TextField
          id="outlined-basic"
          label={label ? label : "test label"}
          variant="outlined"
          style={{
            width: "100%",
          }}
          color={color}
          error={value !== "" ? error : false}
          onChange={(event) => handleOnChange(event)}
          // helperText={helperText === "" ? "" : helperText}
        />
      </div>
    ),
    [error, value, color, helperText]
  );

  return <>{_child}</>;
};
