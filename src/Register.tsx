import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const transfer = useNavigate();

  const [data, setData] = useState({
    supermarketName: "",
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
      <div className="w-[700px]! paper absolute left-1/2 top-1/2 -translate-1/2 flex flex-col">
        <h1 className="text-center font-bold text-amber-500 text-3xl pb-4!">Register</h1>
          <div className="w-full sign flex flex-col justify-evenly">
            <input
              onChange={handleChane}
              name="supermarketName"
              type="text"
              placeholder="Supermarket Name"
              className="mb-2! rounded-sm px-[20px]! py-[15px]! border-amber-600 border-2 outline-none!"
            />
            <input
              onChange={handleChane}
              name="email"
              type="text"
              placeholder="Email"
              className="mb-2! rounded-sm px-[20px]! py-[15px]! border-amber-600 border-2 outline-none!"
            />
            <input
              onChange={handleChane}
              name="password"
              type="password"
              placeholder="Password"
              className="mb-2! rounded-sm px-[20px]! py-[15px]! border-amber-600 border-2 outline-none!"
            />
            <input
              onChange={handleChane}
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="mb-2! rounded-sm px-[20px]! py-[15px]! border-amber-600 border-2 outline-none!"
            />
            <button
              onClick={handleSubmit}
              className="bg-amber-600 font-bold text-xl cursor-pointer duration-200 hover:bg-amber-700 text-white rounded-sm px-[20px]! py-[15px]!"
            >
              Sign In
            </button>
        </div>
      </div>
    </>
  );
}

export default Register;
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
