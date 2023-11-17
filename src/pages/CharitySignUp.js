import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignupContainer from "../components/SignupContainer";

const CharitySignUp = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/user-sign-up");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/charity-home");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[800px] overflow-hidden text-center text-lg text-aliceblue font-poppins">
      <div className="absolute top-[-180px] left-[-150px] rounded-large bg-blueviolet w-[360px] h-[360px]" />
      <img
        className="absolute top-[30px] left-[30px] w-20 h-[60px] object-cover"
        alt=""
        src="../udonateasset-72x-2@2x.png"
      />
      <SignupContainer
        signupForA="Signup for a "
        individualAccount="Individual Account"
        individualAccountCursor="pointer"
        onFrameContainerClick={onFrameContainerClick}
        onAlreadyHaveAnClick={onAlreadyHaveAnClick}
      />
      <div
        className="absolute top-[717px] left-[20px] rounded-xxs bg-blueviolet w-80 flex flex-row py-[15px] px-[30px] box-border items-start justify-start cursor-pointer"
        onClick={onFrameContainer5Click}
      >
        <b className="flex-1 relative">Sign Up</b>
      </div>
      <img
        className="absolute top-[173px] left-[125px] w-28 h-28 object-cover"
        alt=""
        src="../sparkles-3d-21@2x.png"
      />
    </div>
  );
};

export default CharitySignUp;
