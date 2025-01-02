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
        <div className="min-h-screen overflow-hidden min-w-screen relative bg-background flex flex-col justify-center items-center  font-inter">
            <div className="flex flex-row w-full justify-center items-center h-full lg:ps-20 2xl:ps-20" >
                <div className="
                w-[380px] sm:w-[520px] lg:w-[570px] xl:w-[470px] 2xl:w-[520px] 3xl:w-[570px] 
                -me-0 lg:me-4 xl:-me-40 2xl:-me-52 p-6 
                rounded-[20px] bg-white/80 flex flex-col justify-center z-[3] items-center 
                pt-[clamp(50px,5vw,55px)] px-[clamp(55px,5vw,75px)] pb-[clamp(60px,5vw,80px)]
                ">
                    <img src="/icons/logo.svg" alt="Logo" className="w-[63.72px] h-[54px] 
                    2xl:mb-[39px] lg:mb-[30px] mb-[30px]" />
                    <span className="font-bold text-center 
                    mb-[clamp(10px,1.5vw,15px)]
                    w-[clamp(343px,20vw,380px)]
                    text-headSection
                    ">
                        Login to your account! 👋🏻
                    </span>
                    <span className="
                    text-gray-02
                    text-center 
                    w-[clamp(343px,50vw,380px)]
                    text-[clamp(16px,1.5vw,20px)]
                    px-[clamp(5px,1.5vw,10px)]
                    2xl:mb-[32px] lg:mb-[22px]">
                        Please, Login to your account and start discover our world
                    </span>
                    <div className="flex flex-col
                    w-inputForms 
                    2xl:gap-[20px] lg:gap-[12px]">
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
                    <Link to='forget-password' className="text-warningState w-inputForms 
                    text-end mt-[10px] mb-[24px]">Forget password?</Link>
                    <button title="Login" type="button" onClick={handleSubmit} className=" w-inputForms  h-[50px] bg-brand text-white py-2 rounded-xl mb-[24px]">
                        Login
                    </button>
                    <div className="flex items-center w-inputForms mb-[10px]">
                        <div className="flex-grow border-t border-gray-300" />
                        <span className="px-8 text-gray-500 text-sm font-medium">OR</span>
                        <div className="flex-grow border-t border-gray-300" />
                    </div>
                    <button className="border-[1px] h-[50px] border-gray-03 w-inputForms text-black flex flex-row gap-4 items-center justify-center py-3 rounded-xl">
                        <img src="/icons/google.svg" alt="Google" />
                        <span>
                            Login with Google account
                        </span>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <img src="/persons/person-login.svg" alt="Main ground"
                        className="md:w-[36vw] xl:w-[700px] 3xl:w-[931px] z-[2] hidden xl:block" />
                    <img src="/icons/icons.svg" alt="Main ground" className="absolute 
                    md:w-[24vw] lg:w-[36vw] -end-9 top-12  z-[2] hidden xl:block" />
                </div>
            </div>
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
            <Background />
        </div >
    )
}
