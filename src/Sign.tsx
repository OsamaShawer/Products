import Logo from "./assets/alban.png";
function SignComponent() {
  return (
    <>
      <div className="w-[550px]! paper absolute left-1/2 top-1/2 -translate-1/2 flex flex-row">
        <div className="image">
          <p className="text-center border-[#eee] border-2 p-2! mb-4!">أبو الباشا</p>
          <img src={Logo} alt="" />
          <p className="text-center border-[#eee] border-2 p-2! mt-4!">بيت ريما</p>
        </div>
        <hr className="border-t-2 border-blue-500 my-2" />
        <div className="sign flex flex-col justify-evenly">
          <input name="email" type="text" placeholder="Email" className="rounded-sm px-[20px]! py-[15px]! border-amber-600 border-2 outline-none!" />
          <input name="password" type="password" placeholder="Password" className="rounded-sm px-[20px]! py-[15px]! border-amber-600 border-2 outline-none!" />
        </div>
      </div>
    </>
  );
}

export default SignComponent;
/**
 * git add .
 * git commit -m "First Upload"
 * git push origin main
 */