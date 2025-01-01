import Background from '../../components/background/background'

export default function EmailVerification() {
    return (
        <div className="min-h-screen relative bg-background flex flex-col justify-center items-center">
            <div className="flex flex-row w-full justify-center items-center h-full">
                <div className="min-w-[30%] max-w-[80%] md:max-w-[45%] lg:max-w-[35%] gap-2 min-h-[50vh] lg:min-h-[90vh] -me-0 lg:-me-36 px-6 py-20 rounded-md bg-white/80 flex flex-col justify-center z-[3] items-center">
                    <img src="/icons/logo.svg" alt="Logo" className="w-[60px] mb-4" />
                    <span className="text-[26px] font-bold w-[80%] text-center">
                        Check Your email
                    </span>
                    <img src='/icons/email-sent.svg' alt="Main sent" className='w-[40%]' />
                    <span className='w-[80%] text-center mt-2'>
                        we have sent an email to {`sameerrshams95@gmail.com`} to reset your password, please check your email
                    </span>
                    <span className="flex flex-row items-center justify-center font-base gap-2">
                        <span>Not received the email?</span>
                        <button className='text-brand'>
                            Resend it.
                        </button>
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <img src="/persons/person-checkEmail.svg" alt="Main ground" className="md:w-[32vw] lg:w-[40vw] z-[2] hidden lg:block" />
                    <img src="/icons/icons-emailVerification.svg" alt="Main ground" className="absolute md:w-[24vw] -end-7 lg:w-[32vw] top-16 z-[2] hidden lg:block" />
                </div>
            </div>
            <Background />
        </div >
    )
}
