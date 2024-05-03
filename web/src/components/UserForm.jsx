import { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
export default function UserForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({mode: "onChange", reValidateMode: "onChange"});
    const [formType, setFormType] = useState("SignUP");

    useEffect(() => {
        let inputs = document.querySelectorAll(".userForm-input");
        inputs.forEach(input => {
            input.addEventListener("focus", e => {
                e.target.parentElement.firstChild.style.bottom = "15px";
            })
            input.addEventListener("focusout", e => {
                e.target.parentElement.firstChild.style.bottom = "0";
            })
        })
    }, [])

    function submitUserForm(data) {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(submitUserForm)} className="flex flex-col items-center justify-around w-[80vw] h-[40vh] sm:w-[30vw] sm:h-[27vw] bg-indigo-800 absolute top-[50%] left-[50%] z-10 -translate-x-[50%] -translate-y-[50%] rounded-3xl">
        <h1 className="text-3xl font-bold text-white underline">{formType}</h1>
        <div className="userForm-input-container">
            <label htmlFor="username" className="userForm-input-label">Username:</label>
            <input type="text" {...register("username", 
            {required: {value: true, message: "This field can not be empty"}, minLength: {value: 5, message: "Username can not be less than 5 characters"}})} 
            className="userForm-input" placeholder="Enter your username:"/>
            {errors.username && <div className="userForm-input-error-message">{errors.username.message}
            <div className="triangle"></div>
            </div>}
        </div>
        {formType=="SignUP" && 
        <div className="userForm-input-container">
            <label htmlFor="email" className="userForm-input-label">Email:</label>
            <input className="userForm-input" type="text" {...register("email", {
                required: {value: true, message: "This field can not be empty."},
                pattern: {
                    value: /^(\w|\d|[._])+@gmail.com/gm,
                    message: "Please enter a valid email address."
                }
            })} placeholder="Enter your email:"/>
            {errors.email && <div className="userForm-input-error-message">{errors.email.message}
            <div className="triangle"></div>
            </div>}
        </div>}
        <div className="userForm-input-container">
            <label htmlFor="password" className="userForm-input-label">Password:</label>
            <input type="password" {...register("password", {required: {value: true, message: "This field can not be empty"}, pattern: {value: /^[A-Z]{1,}(\w|\d)*[!@#$%&]+(\w|\d)*/gm, message: "A password must start with one capital letter and must include one of these {!@#$%^&}"}, minLength: {value: 8, message: "A password must be 8 character long."}})} className="userForm-input" placeholder="Enter your password:"/>
            {errors.password && <div className="userForm-input-error-message">{errors.password.message}
            <div className="triangle"></div>
            </div>}
        </div>
        <button type="submit" className="border-2 border-white rounded-3xl w-1/5 h-10 font-semibold text-white hover:bg-white hover:text-indigo-800 transition-all duration-300 ease-linear">{formType}</button>
        <p className="text-white font-semibold">Already have an account? <span className="underline decoration-2 cursor-pointer" onClick={() => {
            setFormType(formType=="SignUP"?"LogIn":"SignUP");
        }}>{formType!="SignUP"?"SignUP":"LogIn"}</span></p>
    </form>
  )
}
