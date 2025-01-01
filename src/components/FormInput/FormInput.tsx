import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

type InputAndLabelProps = {
    label?: string;
    error?: string;
    imgSrc?: string;
    placeholder?: string;
    icon?: JSX.Element;
    see?: boolean;
    isRequired?: boolean;
    type?: React.ComponentProps<"input">["type"];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

export default function InputAndLabel({
    label,
    error,
    placeholder,
    isRequired,
    imgSrc,
    icon,
    see = false,
    type,
    onChange,
    ...props
}: InputAndLabelProps) {
    const [visible, setVisible] = useState(true);
    const [typeInput, setTypeInput] =
        useState<React.ComponentProps<"input">["type"]>("");

    const handleVisible = () => {
        setTypeInput(typeInput === "password" ? "text" : "password");
        setVisible(!visible);
    };


    useEffect(() => {
        setTypeInput(type);
    }, [type]);

    return (
        <div
            className={`flex flex-col my-2 relative font-semibold text-gray-01 dark:text-white w-full `}
        >
            <div className="flex flex-row text-[#0E4E5D]">
                {label && (<label
                    id={label}
                    htmlFor={label}
                    className={`mb-[6px] text-brand font-medium text-[18px] flex flex-row items-center dark:text-shadow_blue `}
                >
                    {label && <span className="ms-2">{label}</span>}
                    <div className="ms-1"> : </div>
                    {isRequired && <span className="text-errorState block ms-1">*</span>}
                </label>)}

            </div>
            <div className={`relative h-[50px] rounded-xl overflow-hidden w-[100%] flex flex-row border-[1px] ${error ? "border-errorState" : "border-gray-03"} `}>
                <input
                    placeholder={placeholder}
                    id={label}
                    {...props}
                    type={typeInput}
                    min={type === "number" ? 1 : undefined}
                    onChange={onChange}
                    className={`${icon ? "ps-14" : ""
                        } text-[#333] outline-none  mb-1 focus:outline-none
                            h-12 p-3 rounded-lg w-[85%] px-6 py-3 text-base font-normal bg-inherit `}
                />
                {see && (
                    <button
                        type="button"
                        onClick={handleVisible}
                        className={`border-s-[1px] border-gray-03 flex flex-col items-center justify-center w-[15%]`}
                    >
                        {visible ? (
                            <FaEyeSlash className="text-gray-02" />
                        ) : (
                            <IoEyeSharp className="text-gray-02" />
                        )}
                    </button>
                )}
                {error && !see && (
                    <span
                        className={`flex flex-col items-center justify-center w-[15%]`}

                    >
                        <img alt="error"
                            className="w-6 h-6"
                            src="/icons/error.svg" />
                    </span>
                )}
            </div>
            {error && <span className="ps-3 pt-2 text-[14px]  font-semibold text-errorState">{error}</span>}
        </div>
    );
}