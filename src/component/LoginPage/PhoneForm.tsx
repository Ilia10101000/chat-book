"use client";
import { CustomeInput } from "./CustomeInput";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import { IconButton, Stack, TextField } from "@mui/material";
import { phoneValidationSchema, phoneFormList } from "@/lib/formsParam";
import { useState } from "react";

interface IPhoneForm {
  handleSubmit: (phone: string) => void;
  sendCode?: (code: string) => void;
}

function PhoneForm({ handleSubmit, sendCode }: IPhoneForm) {

  const [showCodeInput, setShowCodeInput] = useState(true);
  const [verificationCode, setVerificationCode] = useState('')

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (value) => {
      const { phone } = value;
      handleSubmit(phone);
      setShowCodeInput(true);
    },
    validationSchema: phoneValidationSchema,
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        direction="column"
        sx={{
          gap: 5,
          alignItems: "center",
        }}
      >
        {phoneFormList.map((form) => (
          <CustomeInput
            autoComplete="off"
            label={form.label}
            id={form.name}
            name={form.name}
            helperText={formik.touched[form.name] && formik.errors[form.name]}
            error={
              formik.touched[form.name] && Boolean(formik.errors[form.name])
            }
            value={formik.values[form.name]}
            onChange={formik.handleChange}
            onBlur={(e: any) => {
              if (form.shouldTransform.value) {
                const { schema } = form.shouldTransform;
                formik
                  .setFieldValue(form.name, schema && schema(e.target.value))
                  .then(() => formik.handleBlur(e));
              } else {
                formik.handleBlur(e);
              }
            }}
            mask={form.withMask.value ? form.withMask.mask : null}
            key={form.name}
          />
        ))}
        <Button
          id="sign-in-button"
          type="submit"
          variant="contained"
          disabled={!formik.isValid}
        >
          Get a code
        </Button>
        {showCodeInput && (
          <TextField
            value={verificationCode}
            onChange={e => setVerificationCode(e.target.value)}
            label="Enter verification code"
            InputProps={{
              endAdornment: <IconButton onClick={() => sendCode(verificationCode)}><SendIcon/></IconButton>,
            }}
          />
        )}
      </Stack>
    </form>
  );
}

export { PhoneForm };
