import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  
  const navigate = useNavigate();
    
  const onDontHaveAnClick = useCallback(() => {
    navigate("/splash-screen-2");
  }, [navigate]);
  

  
  return (
    <div className="relative bg-white w-full h-[800px] overflow-hidden">
      <input
        className="cursor-pointer absolute top-[32px] left-[100px]"
        type="checkbox"
      />
      <div className="absolute top-[0px] left-[0px] bg-blueviolet w-[360px] h-[800px] overflow-hidden"  onClick={onDontHaveAnClick}/>
      <img
        className="absolute top-[314px] left-[65px] w-[231px] h-[172px] object-cover"
        alt=""
        src="../udonateasset-72x-24@2x.png"
      />
    </div>
  );
};

export default SplashScreen;
