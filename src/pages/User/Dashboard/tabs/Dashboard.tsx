import Form from "../../../../components/forms/Form";
import Userbar from "../../../../layouts/Userbar";
import UserImage from "../../../../assets/images/UserImage.jpg";
import { Edit } from "../../../../components/icons";
import { Image, Box, Button } from "../../../../components";
import { usePassword } from "../../../../hooks/usePassword";
import { Controller, useForm } from "react-hook-form";
import { FormValues, inputComponent, rules } from "../../../../utils/formDashboard";
//todo, add logic for user image
//todo, replace onsubmit with backend schema
//todo, add logout functionality
//todo, gonna add help center page?
export default function Dashboard() {
  const { hidden, icons } = usePassword("password-eye-icon");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ reValidateMode: "onSubmit" });

  const onSubmit = (data: FormValues) => console.log(data);

  const { Firstname, Lastname, Email, Number, Password } = rules(errors);
  
  const user = (
    <Box className={"image-container"}>
      <Image src={UserImage} width={100} height={100} alt={"user image"} />
      <Edit className={"edit-icon"} />
    </Box>
  );
  const form = (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Box className="group">
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Controller
            name="Firstname"
            control={control}
            rules={Firstname}
            defaultValue=""
            render={({ field }) => inputComponent(field, "Firstname")}
          />
          {Firstname.error.required}
          {Firstname.error.minLength}
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Controller
            name="Lastname"
            control={control}
            rules={Lastname}
            defaultValue=""
            render={({ field }) => inputComponent(field, "Lastname")}
          />
          {Lastname.error.required}
          {Lastname.error.minLength}
        </Box>
      </Box>
      <Controller
        name="Email"
        control={control}
        rules={Email}
        defaultValue=""
        render={({ field }) => inputComponent(field, "Email")}
      />
      {Email.error.required}
      {Email.error.pattern}
      <Controller
        name="Number"
        control={control}
        rules={Number}
        defaultValue=""
        render={({ field }) => inputComponent(field, "Number")}
      />
      {Number.error.required}
      {Number.error.pattern}
      {Number.error.minLength}
      <Controller
        name="Address"
        control={control}
        defaultValue=""
        render={({ field }) => inputComponent(field, "Address")}
      />
      <Box className="group">
        <Controller
          name="Country"
          control={control}
          defaultValue=""
          render={({ field }) => inputComponent(field, "Country")}
        />
        <Controller
          name="State"
          control={control}
          defaultValue=""
          render={({ field }) => inputComponent(field, "State")}
        />
      </Box>
      <Box className="group">
        <Controller
          name="Zip"
          control={control}
          defaultValue=""
          render={({ field }) => inputComponent(field, "Zip")}
        />
        <Controller
          name="City"
          control={control}
          defaultValue=""
          render={({ field }) => inputComponent(field, "City")}
        />
      </Box>
      <Controller
        name="Password"
        control={control}
        rules={Password}
        defaultValue=""
        render={({ field }) => (
          <Box className="password">
            {inputComponent(field, "Password", !hidden ? "password" : "text")}
            {icons}
          </Box>
        )}
      />
      {Password.error.required}
      {Password.error.minLength}
      <Box className="submit">
        <Button type={"submit"} className="Button-save">
          Save
        </Button>
        <Button className="Button-cancel">Cancel</Button>
      </Box>
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
