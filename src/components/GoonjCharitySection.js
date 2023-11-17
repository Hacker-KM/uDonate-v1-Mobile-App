import { useMemo } from "react";

const GoonjCharitySection = ({
  goonjCharity,
  organization,
  propJustifyContent,
  propGap,
  propFlex,
  onFrameContainer13Click,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
      flex: propFlex,
    };
  }, [propJustifyContent, propGap, propFlex]);

  return (
    <div className="my-0 mx-[!important] absolute bottom-0 right-[0px] z-[999] rounded-t-none rounded-b-xxs bg-aliceblue w-[360px] h-[450px] shrink-0 flex flex-col p-2.5 box-border items-center justify-end gap-[10px] z-[3] text-left text-2xs text-gray-300 font-poppins">
      <div className="absolute my-0 mx-[!important] top-[429px] left-[136px] box-border w-[88px] h-0.5 shrink-0 z-[0] border-t-[2px] border-solid border-gray-200" />
      <div
        className="my-0 mx-[!important] absolute top-[443px] left-[330px] rounded-small bg-gray-100 w-[25px] h-[25px] shrink-0 flex flex-col p-2.5 box-border items-center justify-center cursor-pointer z-[1]"
        onClick={onFrameContainer13Click}
      >
        <div className="relative">X</div>
      </div>
      <div className="self-stretch flex-1 flex flex-col pt-[30px] px-0 pb-0 items-center justify-start gap-[12px] z-[2] text-center text-lg text-gray-200">
        <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-[60px] items-center justify-start gap-[20px]">
          <div className="self-stretch flex flex-col p-2.5 items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <div className="flex flex-col items-center justify-start gap-[3px]">
                <img
                  className="relative w-4 h-4 shrink-0"
                  alt=""
                  src="../vector2.svg"
                />
                <img
                  className="relative w-6 h-[13.33px] shrink-0"
                  alt=""
                  src="../vector3.svg"
                />
              </div>
              <div className="relative">Account</div>
            </div>
          </div>
          <div
            className="self-stretch flex flex-col py-0 px-2.5 items-start justify-start gap-[10px] text-left text-base"
            style={frameDiv2Style}
          >
            <div className="flex flex-col p-2.5 items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[36px]">
                <div className="relative">{goonjCharity}</div>
                <div className="relative">{organization}</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative inline-block w-80 shrink-0">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  4, Amrita Shergill Road
                </p>
                <p className="m-0">New Delhi</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative">110003</div>
            </div>
            <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
              <div className="relative">987546512</div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xxs flex flex-row py-2.5 px-[25px] items-center justify-center text-left text-sm text-gray-300">
          <div className="relative">Edit</div>
        </div>
      </div>
    </div>
  );
};

export default GoonjCharitySection;
