import { Link } from "react-router-dom";
import Background from "../../components/background/background";
import InputAndLabel from "../../components/FormInput/FormInput";
import { useLogin } from "./hooks/useLogin";
import Toast from "../../components/toasts/toast";

export default function Login() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast,
        setShowSuccessToast,
        showErrorToast,
        showSuccessToast, title, body } = useLogin();
    return (
        <div className="min-h-screen relative bg-background flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-center items-center h-full">
                <div className="min-w-[30%] -me-0 lg:-me-36 p-6 rounded-md bg-white/80 flex flex-col justify-center z-[3] items-center">
                    <img src="/icons/logo.svg" alt="Logo" className="w-[60px] mb-4" />
                    <span className="text-[26px] font-bold w-[80%] text-center">
                        Login to your account! 👋🏻
                    </span>
                    <span className="text-[16px] text-center w-[80%]">
                        Please, Login to your account and start discover our world
                    </span>
                    <div className="flex flex-col w-[80%]">
                        <InputAndLabel
                            value={data.email}
                            onChange={handleChange}
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            error={error.email}
                        />
                        <InputAndLabel
                            see={true}
                            value={data.password}
                            onChange={handleChange}
                            name="password"
                            label="Password"
                            placeholder="SH123456789"
                            type="password"
                            error={error.password}
                        />
                    </div>
                    <Link to='forget-password' className="text-brand w-[80%] text-end mt-1">Forget password?</Link>
                    <button title="Login" type="button" onClick={handleSubmit} className="mt-4 w-[80%] h-[50px] bg-login text-white py-2 rounded-xl">
                        Login
                    </button>
                    <div className="flex items-center w-[80%] my-3">
                        <div className="flex-grow border-t border-gray-300" />
                        <span className="px-8 text-gray-500 text-sm font-medium">OR</span>
                        <div className="flex-grow border-t border-gray-300" />
                    </div>
                    <button className="mt-1 border-[1px] h-[50px] border-gray-03 w-[80%] text-black flex flex-row gap-4 items-center justify-center py-3 rounded-xl">
                        <img src="/icons/google.svg" alt="Google" />
                        <span>
                            Login with Google account
                        </span>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <img src="/persons/person-login.svg" alt="Main ground" className="md:w-[36vw] lg:w-[44vw] z-[2] hidden lg:block" />
                    <img src="/icons/icons.svg" alt="Main ground" className="absolute md:w-[24vw] -end-10 lg:w-[36vw] z-[2] hidden lg:block" />
                </div>
            </div>
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
            <Background />
        </div >
    )
}
