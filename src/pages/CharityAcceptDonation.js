import { useCallback } from "react";
import Header from "../components/Header";
import DonationHistoryContainer from "../components/DonationHistoryContainer";
import { useNavigate } from "react-router-dom";

const CharityAcceptDonation = () => {
  const navigate = useNavigate();

  const onFrameContainer12Click = useCallback(() => {
    navigate("/charity-explore");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[800px] flex flex-col items-start justify-start text-left text-2xs text-gray-300 font-poppins">
      <Header individualName="Charity" />
      <div className="self-stretch my-0 mx-[!important] absolute top-[728px] left-[0px] flex flex-row py-2.5 px-[50px] items-start justify-between z-[1] border-t-[1px] border-solid border-gray-200">
        <div className="rounded-xxs bg-white flex flex-row p-2.5 items-center justify-center">
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <img
              className="relative w-8 h-8 shrink-0"
              alt=""
              src="../vector.svg"
            />
          </div>
        </div>
        <div className="rounded-xxs bg-white flex flex-row p-2.5 items-start justify-start">
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <img
              className="relative w-8 h-8 shrink-0"
              alt=""
              src="../vector29.svg"
            />
          </div>
        </div>
        <div className="rounded-xxs bg-white flex flex-row p-2.5 items-start justify-start">
          <div className="overflow-hidden flex flex-col py-0 px-1 items-center justify-start gap-[3px]">
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
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col py-2.5 px-5 items-start justify-start z-[2]">
        <DonationHistoryContainer
          pastDonationsText="Explore"
          propPadding="var(--padding-sm) 0px 0px"
          propBoxSizing="border-box"
          propAlignSelf="unset"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[800px] left-[0px] rounded-t-none rounded-b-xxs bg-aliceblue w-[360px] h-[450px] shrink-0 flex flex-col p-2.5 box-border items-center justify-end gap-[10px] z-[3]">
        <div className="absolute my-0 mx-[!important] top-[429px] left-[136px] box-border w-[88px] h-0.5 shrink-0 z-[0] border-t-[2px] border-solid border-gray-200" />
        <div
          className="my-0 mx-[!important] absolute top-[443px] left-[330px] rounded-small bg-gray-100 w-[25px] h-[25px] shrink-0 flex flex-col p-2.5 box-border items-center justify-center cursor-pointer z-[1]"
          onClick={onFrameContainer12Click}
        >
          <div className="relative">X</div>
        </div>
        <div className="bottom-0 left-0 absolute self-stretch flex-1 flex flex-col pt-[30px] px-0 pb-0 items-center justify-start gap-[12px] z-[2] text-center text-lg text-gray-200">
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
                <div className="relative">Being Donated by</div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col py-0 px-2.5 items-start justify-between text-left text-base">
              <div className="flex flex-col p-2.5 items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-[36px]">
                  <div className="relative">Mr. Rajiv</div>
                  <div className="relative">Rattan</div>
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
          <div className="rounded-xxs bg-blueviolet w-80 flex flex-row py-[15px] px-[30px] box-border items-start justify-start text-aliceblue">
            <b className="flex-1 relative">Accept</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityAcceptDonation;
