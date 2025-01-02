import { useState } from "react"
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { forgetPasswordSchema } from "../validation/forgetPasswordSchema";

export function useForgetPassword() {
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [data, setData] = useState<{ email: string, }>({
        email: "",
    })
    const navigate = useNavigate();
    const [error, setErrors] = useState<{ email: string,}>({
        email: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        setErrors({
            email: "",
        });
        try {
            await forgetPasswordSchema.validate(data, { abortEarly: false });
            setTitle("EMail sent successfully")
            setBody("Check your email")
            navigate('/email-verification')
            setShowSuccessToast(true)
        }
        catch (error: unknown) {
            if (error instanceof Yup.ValidationError) {
                const validation: { email: string, password: string } = {
                    email: "",
                    password: "",
                };
                error.inner.forEach((err: Yup.ValidationError) => {
                    if (err.path) {
                        // @ts-ignore
                        validation[err.path as keyof ValidationErrors] = err.message;
                    }
                });
                setTitle("Error in validation")
                setBody("Please check all inputs")
                setShowErrorToast(true)
                setErrors(validation);
            }
        }
    };

    return {
        data,
        handleChange,
        error,
        handleSubmit,
        setShowErrorToast,
        setShowSuccessToast,
        showErrorToast,
        showSuccessToast,
        title, body
    }
}