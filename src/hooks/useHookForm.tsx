import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormProps, validationRules } from "../utils/forms";

export const useHookForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>({ reValidateMode: "onSubmit" });
  validationRules(errors);

  return {
    handleSubmit,
    control,
    errors,
    validationRules,
    loading,
    setLoading,
  };
};
