import * as yup from "yup";

export const forgetPasswordSchema = yup.object().shape({
    email: yup.string().required("Please enter your email"),
})