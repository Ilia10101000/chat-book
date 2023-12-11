import InputMask from "react-input-mask";
import { TextField, Box } from "@mui/material";

const CustomeInput = (props: any) => {
  if (props.mask) {
    return (
      <Box>
          <InputMask
            {...props} maskChar={""} alwaysShowMask={false}>
            {(prop: any) => <TextField {...prop} />}
          </InputMask>
      </Box>
    );
  }
  return (
    <Box>
      <TextField {...props}/>
    </Box>
      );
};

export { CustomeInput };
