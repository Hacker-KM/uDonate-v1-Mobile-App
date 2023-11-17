import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignInContainer = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/user-sign-up");
  }, [navigate]);

  return (
    <div className="absolute top-[297px] left-[30px] w-[300px] flex flex-col items-center justify-center gap-[8px] text-left text-xs text-gray-200 font-poppins">
      <b className="relative text-xl">Sign In</b>
      <div className="flex flex-row pt-0 px-2.5 pb-2.5 items-start justify-start text-gray-300">
        <div className="relative cursor-pointer" onClick={onDontHaveAnClick}>
          <span>{`Don’t have an account? `}</span>
          <span className="text-blueviolet">Sign Up</span>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-lg text-aliceblue">
        <input placeholder="Username" className="self-stretch rounded-xxs bg-gray-100 flex flex-row py-2.5 pr-0 pl-[30px] items-start justify-start border-[1px] border-solid border-gray-200">
          {/*<b className="relative">Username</b>*/}
        </input>
        <input placeholder="Password" className="self-stretch rounded-xxs bg-gray-100 flex flex-row py-2.5 pr-0 pl-[30px] items-start justify-start border-[1px] border-solid border-gray-200">
          {/*<b className="relative">Password</b>*/}
        </input>
      </div>
      <div className="relative text-blueviolet" onClick={onDontHaveAnClick}>Forgot password?</div>
    </div>
  );
};

export default SignInContainer;
