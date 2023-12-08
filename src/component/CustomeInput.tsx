import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

const CustomeInput = (props: any) => {
  if (props.mask) {
    return (
      <InputMask {...props} maskChar={""} alwaysShowMask={false}>
        {(prop: any) => <TextField {...prop} />}
      </InputMask>
    );
  }
  return <TextField {...props} />;
};

export { CustomeInput };
