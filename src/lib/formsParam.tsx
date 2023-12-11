import * as Yup from "yup";


interface IFormsList {
  label: string;
  name: string;
  shouldTransform: {
    value: boolean;
    schema?: (val: string) => string;
  };
  withMask: {
    value: false;
    mask?: string;
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
    .matches(/^(?!-)(?!.*-\s*-)[A-Za-zА-Яа-яЁё -]+$/, "Check typed value")
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

export {
  formsList,
  ValidationSchema
};