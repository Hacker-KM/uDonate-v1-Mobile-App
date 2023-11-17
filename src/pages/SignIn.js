import { useCallback } from "react";
import SignInContainer from "../components/SignInContainer";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const onFrameContainer5Click = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[800px] overflow-hidden text-center text-lg text-aliceblue font-poppins">
      <div className="absolute top-[-180px] left-[-150px] rounded-large bg-blueviolet w-[360px] h-[360px]" />
      <img
        className="absolute top-[30px] left-[30px] w-20 h-[60px] object-cover"
        alt=""
        src="../udonateasset-72x-2@2x.png"
      />
      <SignInContainer />
      <div
        className="absolute top-[717px] left-[20px] rounded-xxs bg-blueviolet w-80 flex flex-row py-[15px] px-[30px] box-border items-start justify-start cursor-pointer"
        onClick={onFrameContainer5Click}
      >
        <b className="flex-1 relative">Sign In</b>
      </div>
      <img
        className="absolute top-[173px] left-[125px] w-28 h-28 object-cover"
        alt=""
        src="../sparkles-3d-2@2x.png"
      />
    </div>
  );
};

export default SignIn;
