import Background from '../../components/background/background'

export default function EmailVerification() {
    return (
        <div className="min-h-screen overflow-hidden font-inter relative bg-background flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-center items-center h-full">
                <div className="w-[380px] sm:w-[520px] lg:w-[570px] xl:w-[470px] 2xl:w-[520px] 3xl:w-[570px] 
                 gap-2 min-h-[clamp(50vh,50vh,764px)]  -me-0 xl:-me-36 
                 pt-[clamp(80px,5vw,112px)] px-[clamp(55px,5vw,75px)] pb-[clamp(150px,5vw,189px)]
                 rounded-[20px] bg-white/80 flex flex-col justify-center z-[3] items-center">
                    <img src="/icons/logo.svg" alt="Logo" className="w-[63.72px] h-[54px] 
                    2xl:mb-[39px] lg:mb-[30px] mb-[30px]" />
                    <span className="text-[clamp(24px,2.5vw,32px)] mb-[26px] font-bold w-[clamp(343px,20vw,380px)] text-center">
                        Check Your email
                    </span>
                    <img src='/icons/email-sent.svg' alt="Main sent" className='w-[191.84px] mb-[16px] h-[150px]' />
                    <span className='w-[clamp(343px,50vw,380px)] text-center mt-2 text-gray-02'>
                        we have sent an email to <span className='text-black'>  {`sameerrshams95@gmail.com`} </span> to reset your password, please check your email
                    </span>
                    <span className="flex flex-row items-center justify-center font-base gap-2">
                        <span>Not received the email?</span>
                        <button className='text-brand'>
                            Resend it.
                        </button>
                    </span>
                </div>
                <div className="xl:flex flex-col justify-center items-center relative hidden ">
                    <img src="/persons/person-checkEmail.svg" alt="Main ground" className="md:w-[32vw] lg:w-[40vw] z-[2] hidden lg:block" />
                    <img src="/icons/icons-emailVerification.svg" alt="Main ground" className="absolute md:w-[24vw] -end-7 lg:w-[32vw] top-16 z-[2] hidden lg:block" />
                </div>
            </div>
            <Background />
        </div >
    )
}
