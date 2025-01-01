import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login/loginPage";
import ForgetPassword from "../../pages/forgetPassowrd/forgetPassword";
import EmailVerification from "../../pages/emailVerification/emailVerification";
import ResetPassword from "../../pages/resetPassword/resetPassword";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: 'forget-password',
        element: <ForgetPassword />
    },
    {
        path: 'email-verification',
        element: <EmailVerification />
    },
    {
        path: 'reset-password',
        element: <ResetPassword />
    }
])