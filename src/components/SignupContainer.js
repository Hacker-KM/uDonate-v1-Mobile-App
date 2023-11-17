import { useMemo } from "react";

const SignupContainer = ({
  signupForA,
  individualAccount,
  individualAccountCursor,
  frame122Cursor,
  onFrameContainerClick,
  onSignupForAClick,
  onAlreadyHaveAnClick,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      cursor: individualAccountCursor,
    };
  }, [individualAccountCursor]);

  const signupForAContainerStyle = useMemo(() => {
    return {
      cursor: frame122Cursor,
    };
  }, [frame122Cursor]);

  return (
    <div className="absolute top-[297px] left-[30px] w-[300px] flex flex-col items-center justify-center gap-[8px] text-left text-xs text-gray-300 font-poppins">
      <b className="relative text-xl text-gray-200">Sign Up</b>
      <div
        className="flex flex-row pt-0 px-2.5 pb-2.5 items-start justify-start cursor-pointer"
        onClick={onFrameContainerClick}
        style={frameDiv3Style}
      >
        <div
          className="relative"
          style={signupForAContainerStyle}
          onClick={onSignupForAClick}
        >
          <span>{signupForA}</span>
          <span className="text-blueviolet">{individualAccount}</span>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-lg text-aliceblue">
        <div className="self-stretch rounded-xxs bg-gray-100 flex flex-row py-2.5 pr-0 pl-[30px] items-start justify-start border-[1px] border-solid border-gray-200">
          <b className="relative">Username</b>
        </div>
        <div className="self-stretch rounded-xxs bg-gray-100 flex flex-row py-2.5 pr-0 pl-[30px] items-start justify-start border-[1px] border-solid border-gray-200">
          <b className="relative">Password</b>
        </div>
      </div>
      <div className="relative cursor-pointer" onClick={onAlreadyHaveAnClick}>
        <span>{`Already have an account? `}</span>
        <span className="text-blueviolet">Sign in</span>
      </div>
    </div>
  );
};

export default SignupContainer;
