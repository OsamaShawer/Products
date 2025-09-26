import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AuthCode() {
  const transfer = useNavigate();
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState({
    code: "",
  });
  function handleChane(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ code: e.target.value });
    console.log(data);
  }
  async function handleSubmit() {
    setValidated(false);
    const response = await fetch("http://localhost:3000/auth-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) transfer("/home");
    else if (response.status === 401 || response.status === 400) setValidated(true);
    else setValidated(true);
    const result = await response.json();
    console.log(result.message);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col paper absolute left-1/2 top-1/2 -translate-1/2 w-[500px]!">
        <h1 className="text-center text-2xl font-bold">
          We sent you a code which includes <b>6 digits</b>
        </h1>
        <TextField
          onChange={handleChane}
          variant="standard"
          label="Code"
          className="w-fit"
        ></TextField>
        <h1
          style={{ display: validated ? "block" : "none" }}
          className="text-center text-red-600 font-bold text-xl"
        ></h1>
        <Button
          onClick={handleSubmit}
          variant="contained"
          className="bg-amber-600! mt-4! hover:bg-amber-700!"
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default AuthCode;
// if (true== true) {

// }