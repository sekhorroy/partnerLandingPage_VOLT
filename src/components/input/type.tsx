export type InputProps = {
  label: string;
  onChange: (value: string) => void;
  color?: InputColorTokens;
  helperText?: string;
  error?: boolean;
  value?: string;
};

export enum InputColorTokens {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ERROR = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
}
