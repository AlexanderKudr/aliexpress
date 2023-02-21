export type FormValues = {
  Firstname: string;
  Lastname: string;
  Email: string;
  Number: string;
  Address: string;
  Country: string;
  State: string;
  Zip: string;
  City: string;
  Password: string;
};
const formData = {
  Firstname: "",
  Lastname: "",
  Email: "",
  Number: "",
  Address: "",
  Country: "",
  State: "",
  Zip: "",
  City: "",
  Password: "",
};
const validateFormData = (values: FormValues) => {
  const errors = formData;
  if (!values.Firstname) {
    errors.Firstname = "Required";
  } else if (values.Firstname.length < 3) {
    errors.Firstname = "Must be at least 3 characters";
  }
  if (!values.Lastname) {
    errors.Lastname = "Required";
  } else if (values.Lastname.length < 3) {
    errors.Lastname = "Must be at least 3 characters";
  }
  if (!values.Email) {
    errors.Email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = "Invalid email address";
  }
  if (!values.Number) {
    errors.Number = "Required";
  } else if (values.Number.length < 10) {
    errors.Number = "Must be at least 10 characters";
  }
  if (!values.Password) {
    errors.Password = "Required";
  } else if (values.Password.length < 6) {
    errors.Password = "Must be at least 6 characters";
  }
};
export { formData, validateFormData };
