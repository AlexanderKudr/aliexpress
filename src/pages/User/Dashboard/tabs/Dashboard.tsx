import { Image, Box, Button } from "../../../../components";
import Userbar from "../../../../layouts/Userbar";
import UserImage from "../../../../assets/images/UserImage.jpg";
import { Edit } from "../../../../components/icons";
import Form from "../../../../components/forms/Form";
import CustomInput from "../../../../components/forms/CustomInput";
import { useFormik } from "formik";
import { formData, FormValues, validateFormData } from "../../../../utils/formik";

export default function Dashboard() {
  const { handleSubmit, errors, values, touched, handleChange } = useFormik<FormValues>({
    initialValues: formData,
    validate: validateFormData,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values, "values");
      console.log(errors, "errors");
    },
  });

  type Input = (id: string, name: string, label: string, val: string) => void;
  const input: Input = (id, name, label, val) => {
    return (
      <CustomInput
        className={"input-custom"}
        id={id}
        name={name}
        label={label}
        placeholder=" "
        onChange={handleChange}
        value={val}
      />
    );
  };
  const user = (
    <Box className={"image-container"}>
      <Image src={UserImage} width={100} height={100} alt={"user image"} />
      <Edit className={"edit-icon"} />
    </Box>
  );
  const form = (
    <Form className="form" onSubmit={handleSubmit}>
      <>
        <Box>
          <>
            {input("firstname", "Firstname", "Firstname", values.Firstname)}
            {errors.Firstname && touched.Firstname && (
              <div className="error">{errors.Firstname}</div>
            )}
            {input("lastname", "Lastname", "Lastname", values.Lastname)}
            {errors.Lastname && touched.Lastname && <div className="error">{errors.Lastname}</div>}
          </>
        </Box>
        {input("email", "Email", "Email", values.Email)}
        {errors.Email && touched.Email && <div className="error">{errors.Email}</div>}
        {input("number", "Number", "Number", values.Number)}
        {errors.Number && touched.Number && <div className="error">{errors.Number}</div>}
        {input("address", "Address", "Address", values.Address)}
        {errors.Address && touched.Address && <div className="error">{errors.Address}</div>}
        <Box>
          <>
            {input("country", "Country", "Country", values.Country)}
            {errors.Country && touched.Country && <div className="error">{errors.Country}</div>}
            {input("state", "State", "State", values.State)}
            {errors.State && touched.State && <div className="error">{errors.State}</div>}
          </>
        </Box>
        <Box>
          <>
            {input("zipcode", "Zip", "Zip", values.Zip)}
            {errors.Zip && touched.Zip && <div className="error">{errors.Zip}</div>}
            {input("city", "City", "City", values.City)}
            {errors.City && touched.City && <div className="error">{errors.City}</div>}
          </>
        </Box>
        {input("password", "Password", "Password", values.Password)}
        {errors.Password && touched.Password && <div className="error">{errors.Password}</div>}
        <Box className="submit">
          <Button className="Button-save">Save</Button>
          <Button className="Button-cancel">Cancel</Button>
        </Box>
      </>
      <button type="submit">Submit</button>
    </Form>
  );
  return (
    <Box className="dashboard">
      <Userbar />
      <Box className="hero">
        {user}
        {form}
      </Box>
    </Box>
  );
}
