import { Image, Box, Button } from "../../../../components";
import Userbar from "../../../../layouts/Userbar";
import UserImage from "../../../../assets/images/UserImage.jpg";
import { Edit } from "../../../../components/icons";
import Form from "../../../../components/forms/Form";
import CustomInput, { FormValues } from "../../../../components/forms/CustomInput";
import { useFormik } from "formik";
import { formData, validateFormData } from "../../../../utils/formik";

export default function Dashboard() {
  const { handleSubmit, errors, values, touched, handleChange } = useFormik<FormValues>({
    initialValues: formData,
    validate: validateFormData,
    onSubmit: (values) => {
      console.log(values, "values");
      console.log(errors, "errors");
    },
  });
  type Input = {
    id: string;
    name: string;
    label: string;
    val: string;
  };
  const inputHandler = ({ id, name, label, val }: Input) => {
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
      <CustomInput
        className={"input-custom"}
        id={"firstname"}
        name={"Firstname"}
        label={"Firstname"}
        placeholder=" "
        onChange={handleChange}
        value={values.Firstname}
      />
      {errors.Firstname && touched.Firstname && <div className="error">{errors.Firstname}</div>}

      {/* <Box>
      <CustomInput className={"input-custom"} id={"lastname"} required label={"Lastname"} />
      </Box>
      <CustomInput className={"input-custom"} id={"email"} required label={"Email"} />
      <CustomInput className={"input-custom"} id={"number"} required label={"Contact number"} />
      <CustomInput className={"input-custom"} id={"address"} required label={"Address"} />
      <Box>
        <CustomInput className={"input-custom"} id={"country"} required label={"Country"} />
        <CustomInput className={"input-custom"} id={"state"} required label={"State"} />
      </Box>
      <Box>
        <CustomInput className={"input-custom"} id={"zip-code"} required label={"Zip code"} />
        <CustomInput className={"input-custom"} id={"city"} required label={"City"} />
      </Box>
      <CustomInput className={"input-custom"} id={"password"} required label={"Password"} /> */}

      <Box className="submit">
        <Button className="Button-save">Save</Button>
        <Button className="Button-cancel">Cancel</Button>
      </Box>
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
