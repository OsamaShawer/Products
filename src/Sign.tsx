import Logo from "./assets/alban.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sign() {
  const transfer = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleChane(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  async function handleSubmit() {
    const res = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
    if (res.ok) transfer("/auth-code");
  }
  return (
    <>
      <div className="w-[550px]! paper absolute left-1/2 top-1/2 -translate-1/2 flex flex-col">
        <h1 className="text-center font-bold text-amber-500 text-3xl pb-4!">Sign In</h1>
        <div className="parent flex">
          <div className="image">
            <p className="text-center border-[#eee] border-2 p-2! mb-4!">
              أبو الباشا
            </p>
            <img src={Logo} alt="" />
            <p className="text-center border-[#eee] border-2 p-2! mt-4!">
              بيت ريما
            </p>
          </div>
          <div className="ml-10! w-full sign flex flex-col justify-evenly">
            <input
              onChange={handleChane}
              name="email"
              type="text"
              placeholder="Email"
              className="rounded-sm px-[20px]! py-[15px]! border-amber-600 border-2 outline-none!"
            />
            <input
              onChange={handleChane}
              name="password"
              type="password"
              placeholder="Password"
              className="rounded-sm px-[20px]! py-[15px]! border-amber-600 border-2 outline-none!"
            />
            <button
              onClick={handleSubmit}
              className="bg-amber-600 font-bold text-xl cursor-pointer duration-200 hover:bg-amber-700 text-white rounded-sm px-[20px]! py-[15px]!"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="flex justify-between pt-7! text-[#bbb]! font-bold text-lg">
          <Link className="hover:text-red-600" to="register">Create Acount</Link>
          <Link className="hover:text-red-600" to="forget">Forgot Password</Link>
        </div>
      </div>
    </>
  );
}

export default Sign;
/**
 * git add .
 * git commit -m "First Upload"
 * git push origin main
 */
////

/*
if (res.ok) {
  setEmail(result.email);
  setHashedPassword(result.password);
  sessionStorage.setItem("email", result.email); // Store email for next step
  transfer("/auth-code");
}
// end of file
*/
