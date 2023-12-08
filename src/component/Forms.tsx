"use client";
import { CustomeInput } from "./CustomeInput";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Stack } from "@mui/material";

interface IFormsList {
  label: string;
  name: string;
  shouldTransform: {
    value: boolean;
    schema?: (val:string) => string;
  };
  withMask: {
    value: false;
    mask?:string
  };
}

const transformEmailValue = (value: string) => {
  return value.replace(/\s+/g, "");
};
const transformNameValue = (value: string) => {
  return value.trim().replace(/\s{2,}/g, " ");
};

const ValidationSchema = Yup.object({
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Enter a valid email")
    .required("Email is required"),
  name: Yup.string()
    .min(2, "Enter your name")
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, "Check typed value")
    .required("Name is required"),
  phone: Yup.string()
    .min(18, "Enter valid phone")
    .matches(
      /^\+38\(0(99|98|97|96|95|94|93|68|67|66|63|50|39|94)\)-\d{3}-\d{2}-\d{2}$/,
      "Check your typed value"
    )
    .required("Phone is required"),
}).shape({});

const formsList = [
  {
    label: "Name",
    name: "name",
    shouldTransform: {
      value: true,
      schema: transformNameValue,
    },
    withMask: {
      value: false,
    },
  },
  {
    label: "Email",
    name: "email",
    shouldTransform: {
      value: true,
      schema: transformEmailValue,
    },
    withMask: {
      value: false,
    },
  },
  {
    label: "Phone",
    name: "phone",
    shouldTransform: {
      value: false,
    },
    withMask: {
      value: true,
      mask: "+38(099)-999-99-99",
    },
  },
];

function Forms() {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
    },
    onSubmit: (value) => {
      setTimeout(() => {
        console.log(value);
      }, 3000);
    },
    validationSchema: ValidationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack direction="column" sx={{ gap: 3, alignItems: "center" }}>
        {formsList.map((form) => (
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
                const {schema} = form.shouldTransform;
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
          Send
        </Button>
      </Stack>
    </form>
  );
}

export { Forms };
