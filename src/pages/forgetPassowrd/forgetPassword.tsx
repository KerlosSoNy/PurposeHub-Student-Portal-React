import Background from '../../components/background/background'
import InputAndLabel from '../../components/FormInput/FormInput'

export default function ForgetPassword() {
    return (
        <div className="min-h-screen relative bg-background flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-center items-center h-full">
                <div className="min-w-[30%] gap-2 min-h-[50vh] lg:min-h-[90vh] -me-0 lg:-me-24 px-6 py-20 rounded-md bg-white/80 flex flex-col justify-center z-[3] items-center">
                    <img src="/icons/logo.svg" alt="Logo" className="w-[60px] mb-4" />
                    <span className="text-[26px] font-bold w-[80%] text-center">
                        Forgot password? 💭
                    </span>
                    <span className="text-[16px] text-center w-[80%]">
                        Please, Enter your email to reset your password
                    </span>
                    <div className="flex flex-col w-[80%]">
                        <InputAndLabel
                            required
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                        // error={error.email}
                        />
                    </div>
                    <button title="Login" type="button" onClick={() => console.log("Login")} className="mt-4 w-[80%] h-[50px] bg-brand text-white py-2 rounded-xl">
                        Send
                    </button>

                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <img src="/persons/person-forgetPassword.svg" alt="Main ground" className="md:w-[28vw] lg:w-[36vw] z-[2] hidden lg:block" />
                    <img src="/icons/icons.svg" alt="Main ground" className="absolute md:w-[24vw] -end-20 lg:w-[34vw] z-[2] hidden lg:block" />
                </div>
            </div>
            <Background />
        </div >
    )
}
