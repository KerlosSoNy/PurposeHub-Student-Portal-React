import * as yup from 'yup';

export const loginValidation = yup.object().shape({
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
})