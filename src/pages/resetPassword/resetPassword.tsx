import Background from "../../components/background/background";
import InputAndLabel from "../../components/FormInput/FormInput";

export default function ResetPassword() {
    return (
        <div className="min-h-screen font-sans overflow-hidden relative bg-background flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-center items-center h-full">
                <div className="
                w-[380px] sm:w-[520px] lg:w-[570px] xl:w-[470px] 2xl:w-[570px] 3xl:w-[570px] 
                gap-2 min-h-[50vh]  -me-0 lg:-me-10 rounded-[20px] bg-white/80 flex flex-col justify-center z-[3] items-center
                pt-[clamp(80px,5vw,95px)] px-[clamp(80px,5vw,115px)] pb-[clamp(150px,5vw,178px)]
                ">
                    <img src="/icons/logo.svg" alt="Logo" className="w-[63.72px] h-[54px] 
                    2xl:mb-[39px] lg:mb-[30px] mb-[30px]" />
                    <span className="text-headSection font-bold mb-[12px] w-inputForms text-center">
                        Reset Password 🔐
                    </span>
                    <span className="text-[clamp(16px,1.5vw,20px)] text-center  text-gray-02 w-[clamp(303px,50vw,380px)] 
                    2xl:mb-[32px] mb-[22px]">
                        Please, Enter your new password then confirm it ..
                    </span>
                    <div className="flex flex-col w-inputForms 2xl:gap-[20px] gap-[12px]">
                        <InputAndLabel
                            required
                            see={true}
                            name="password"
                            label="New Password"
                            type="password"
                            placeholder="Enter your email"
                        />
                        <InputAndLabel
                            required
                            see={true}
                            name="confirm_password"
                            label="Confirm Password"
                            type="password"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button title="Login" type="button" onClick={() => console.log("Login")} className="mt-[26px] w-inputForms h-[50px] bg-warningState-02 text-white py-2 rounded-xl">
                        Reset Password
                    </button>

                </div>
                <div className="xl:flex flex-col justify-center items-center relative hidden ">
                    <img src="/persons/person-resetPassword.svg" alt="Main ground" className="md:w-[28vw] lg:w-[36vw] z-[2] hidden lg:block" />
                    <img src="/icons/icons.svg" alt="Main ground" className="absolute md:w-[24vw] -end-10 lg:w-[34vw] -top-0 z-[2] hidden lg:block" />
                </div>
            </div>
            <Background />
        </div >
    )
}
