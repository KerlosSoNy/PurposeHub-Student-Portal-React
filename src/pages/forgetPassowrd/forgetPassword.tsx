import Background from '../../components/background/background'
import InputAndLabel from '../../components/FormInput/FormInput'
import Toast from '../../components/toasts/toast';
import { useForgetPassword } from './hooks/useForgetPassword';

export default function ForgetPassword() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast, setShowSuccessToast, showErrorToast, showSuccessToast, title, body } = useForgetPassword();
    return (
        <div className="min-h-screen overflow-hidden  font-inter relative bg-background flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-center items-center h-full">
                <div className="
                w-[380px] sm:w-[520px] lg:w-[570px] xl:w-[470px] 2xl:w-[520px] 3xl:w-[570px] 
                pt-[clamp(100px,5vw,138px)]
                px-[clamp(55px,5vw,75px)]
                pb-[clamp(180px,5vw,237px)]
                gap-2 min-h-[50vh] -me-0 lg:me-4 xl:-me-32 rounded-[20px] bg-white/80 flex flex-col justify-center z-[3] items-center">
                    <img src="/icons/logo.svg" alt="Logo" className="w-[63.72px] h-[54px] 
                    2xl:mb-[39px] lg:mb-[30px] mb-[30px]" />
                    <span className="text-headSection font-bold w-[clamp(343px,20vw,380px)] text-center">
                        Forgot password? 💭
                    </span>
                    <span className="text-center w-[clamp(320px,50vw,380px)]
                    text-[clamp(16px,1.5vw,20px)]  text-gray-02">
                        Please, Enter your email to reset your password
                    </span>
                    <div className="flex flex-col w-[clamp(303px,50vw,343px)] mb-[clamp(20px,1.5vw,26px)]">
                        <InputAndLabel
                            required
                            name="email"
                            label="Email"
                            type="email"
                            onChange={handleChange}
                            value={data.email}
                            placeholder="Enter your email"
                            error={error.email}
                        />
                    </div>
                    <button title="Login" type="button" onClick={handleSubmit} className=" h-[50px] w-[clamp(303px,50vw,343px)] bg-brand text-white py-2 rounded-xl">
                        Send
                    </button>

                </div>
                <div className="xl:flex flex-col justify-center items-center relative hidden ">
                    <img src="/persons/person-forgetPassword.svg" alt="Main ground" className="md:w-[28vw] xl:w-[40vw] 2xl:w-[38vw] z-[2] hidden lg:block" />
                    <img src="/icons/icons.svg" alt="Main ground" className="absolute md:w-[24vw] -end-20 lg:w-[34vw] z-[2] hidden lg:block" />
                </div>
            </div>
            <Background />
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
        </div >
    )
}
