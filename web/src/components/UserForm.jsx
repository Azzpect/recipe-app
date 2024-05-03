import { useEffect, useState } from "react"
export default function UserForm() {

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

  return (
    <form className="flex flex-col items-center justify-around w-[80vw] h-[40vh] sm:w-[30vw] sm:h-[27vw] bg-indigo-800 absolute top-[50%] left-[50%] z-10 -translate-x-[50%] -translate-y-[50%] rounded-3xl">
        <h1 className="text-3xl font-bold text-white underline">{formType}</h1>
        <div className="userForm-input-container">
            <label htmlFor="username" className="userForm-input-label">Username:</label>
            <input type="text" name="username" id="" className="userForm-input" placeholder="Enter your username:"/>
        </div>
        {formType=="SignUP" && <div className="userForm-input-container">
            <label htmlFor="email" className="userForm-input-label">Email:</label>
            <input type="email" name="email" id="" className="userForm-input" placeholder="Enter your email:"/>
        </div>}
        <div className="userForm-input-container">
            <label htmlFor="password" className="userForm-input-label">Password:</label>
            <input type="password" name="password" id="" className="userForm-input" placeholder="Enter your password:"/>
        </div>
        <button type="submit" className="border-2 border-white rounded-3xl w-1/5 h-10 font-semibold text-white hover:bg-white hover:text-indigo-800 transition-all duration-300 ease-linear">{formType}</button>
        <p className="text-white font-semibold">Already have an account? <span className="underline decoration-2 cursor-pointer" onClick={() => {
            setFormType(formType=="SignUP"?"LogIn":"SignUP");
        }}>{formType!="SignUP"?"SignUP":"LogIn"}</span></p>
    </form>
  )
}
