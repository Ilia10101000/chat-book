"use client";
import { CustomeInput } from "./CustomeInput";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { Stack } from "@mui/material";
import { phoneValidationSchema, phoneFormList } from "@/lib/formsParam";

function PhoneForm() {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (value) => {
      setTimeout(() => {
        console.log(value);
      }, 3000);
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
        <Button type="submit" variant="contained" disabled={!formik.isValid}>
          Get a code
        </Button>
      </Stack>
    </form>
  );
}

export { PhoneForm };
