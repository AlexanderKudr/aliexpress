import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormProps, validationRules } from "../utils/forms";

export const useHookForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>({ reValidateMode: "onSubmit" });
  const [loading, setLoading] = useState(false);
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
