import { useCallback } from "react";
import Header from "../components/Header";
import DonationHistoryContainer from "../components/DonationHistoryContainer";
import { useNavigate } from "react-router-dom";
import DonationFormContainer from "../components/DonationFormContainer";


const UserDonate1 = () => {
  const navigate = useNavigate();
  const onHomeClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onExploreClick = useCallback(() => {
    navigate("/user-donate");
  }, [navigate]);

  const onUserClick = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onFrameContainer17Click = useCallback(() => {
    navigate("/user-donate");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[800px] flex flex-col items-start justify-start text-center text-lg text-gray-200 font-poppins">
      <Header individualName="Individual" />
      <div className="z-[99] self-stretch my-0 mx-[!important] absolute top-[728px] left-[0px] flex flex-row py-2.5 px-[50px] w-full items-start justify-between z-[1] border-t-[1px] border-solid border-gray-200">
        <div onClick={onHomeClick} className="rounded-xxs bg-white flex flex-row p-2.5 items-center justify-center">
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <img
              className="relative w-8 h-8 shrink-0"
              alt=""
              src="../vector.svg"
            />
          </div>
        </div>
        <div onClick={onExploreClick} className="rounded-xxs bg-white flex flex-row p-2.5 items-start justify-start">
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <img
              className="relative w-8 h-8 shrink-0"
              alt=""
              src="../vector1.svg"
            />
          </div>
        </div>
        <div onClick={onUserClick} className="rounded-xxs bg-white flex flex-row p-2.5 items-start justify-start">
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
      <div className="self-stretch flex-1 flex flex-col py-2.5 px-5 items-start justify-start gap-[16px] z-[2]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <b className="relative">Current Donations</b>
          <div className="relative text-base text-lightslategray">
            No Current Donation
          </div>
        </div>
        <DonationHistoryContainer pastDonationsText="Past Donations" />
      </div>
      <div className="my-0 mx-[!important] absolute bottom-0 left-0 z-[999] rounded-t-none rounded-b-xxs bg-aliceblue w-[360px] h-[450px] shrink-0 flex flex-col p-2.5 box-border items-center justify-end gap-[10px] z-[3] text-left text-2xs text-gray-300">
        <div className="absolute my-0 mx-[!important] top-[429px] left-[136px] box-border w-[88px] h-0.5 shrink-0 z-[0] border-t-[2px] border-solid border-gray-200" />
        <div
          className="my-0 mx-[!important] absolute top-0 right-0 rounded-small bg-gray-100 w-[25px] h-[25px] shrink-0 flex flex-col p-2.5 box-border items-center justify-center cursor-pointer z-[1]"
          onClick={onFrameContainer13Click}
        >
          <div className="relative">X</div>
        </div>
        <div className="flex-1 flex flex-col pt-[25px] px-0 pb-0 items-start justify-start gap-[30px]  text-center text-lg text-aliceblue">
          <DonationFormContainer />
          <div
            className="rounded-xxs bg-blueviolet w-80 flex flex-row py-[15px] px-[30px] box-border items-start justify-start cursor-pointer"
            onClick={onFrameContainer17Click}
          >
            <b className="flex-1 relative">Done</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDonate1;
