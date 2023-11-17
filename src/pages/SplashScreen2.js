import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const SplashScreen2 = () => {
  const navigate = useNavigate();
  
  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[800px] overflow-hidden text-left text-xl text-white font-poppins">
      <div className="absolute top-[-51px] left-[-33px] rounded-tl-base rounded-tr-none rounded-br-base rounded-bl-none bg-blueviolet w-[360px] h-[800px]" />
      <div className="absolute top-[-51px] left-[-33px] rounded-tl-base rounded-tr-none rounded-br-base rounded-bl-none bg-blueviolet w-[360px] h-[800px] overflow-hidden" />
      <img
        className="absolute top-[30px] left-[30px] w-20 h-[60px] object-cover"
        alt=""
        src="../udonateasset-72x-2@2x.png"
      />
      <img
        className="absolute top-[192px] left-[111px] w-[157px] h-[157px] object-cover"
        alt=""
        src="../party-popper-3d-2@2x.png"
      />
      <b className="absolute top-[365px] left-[101px]">Welcome</b>
      <b className="absolute top-[413px] left-[91px] text-xs inline-block text-aliceblue text-center w-[177px]">
        We are delighted to have you here
      </b>
      <div className="absolute top-[661px] left-[98px] rounded-small bg-aliceblue flex flex-row py-2.5 px-[30px] items-start justify-start text-sm text-gray-200">
        <div className="relative" onClick={onDontHaveAnClick}> Get Started</div>
      </div>
    </div>
  );
};

export default SplashScreen2;
