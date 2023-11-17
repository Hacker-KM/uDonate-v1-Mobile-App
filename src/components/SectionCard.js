import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SectionCard = () => {
  const navigate = useNavigate();

  const onFrameContainer13Click = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  return (
    <div className="my-0 mx-[!important] absolute bottom-0 left-0 z-[999] rounded-t-none rounded-b-xxs bg-aliceblue w-[360px] h-[300px] shrink-0 flex flex-col p-2.5 box-border items-center justify-center gap-[10px] z-[3] text-left text-2xs text-gray-300 font-poppins">
      <img
        className="absolute my-0 mx-[!important] top-[10px] left-[53px] w-[254px] h-[254px] shrink-0 z-[0]"
        alt=""
        src="../ellipse-2.svg"
      />
      <div
        className="my-0 mx-[!important] absolute right-4 top-4 rounded-small bg-gray-100 w-[25px] h-[25px] shrink-0 flex flex-col p-2.5 box-border items-center justify-center cursor-pointer z-[1]"
        onClick={onFrameContainer13Click}
      >
        <div className="relative">X</div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[276px] left-[136px] box-border w-[88px] h-0.5 shrink-0 z-[2] border-t-[2px] border-solid border-gray-200" />
      <img
        className="relative w-[193px] h-[193px] shrink-0 object-cover z-[3]"
        alt=""
        src="../party-popper-3d-1@2x.png"
      />
    </div>
  );
};

export default SectionCard;
