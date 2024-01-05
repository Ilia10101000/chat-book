import InputMask from "react-input-mask";
import { TextField, Box } from "@mui/material";

const CustomeInput = (props: any) => {
  if (props.mask) {
    return (
      <Box>
          <InputMask
            {...props} maskChar={""} alwaysShowMask={false}>
            {(prop: any) => <TextField sx={{width:'250px'}} {...prop} />}
          </InputMask>
      </Box>
    );
  }
  return (
    <Box>
      <TextField sx={{width:'250px'}} {...props}/>
    </Box>
      );
};

export { CustomeInput };
