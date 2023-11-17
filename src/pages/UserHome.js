import Header from "../components/Header";
import DonationHistoryContainer from "../components/DonationHistoryContainer";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const navigate= useNavigate();
  const onHomeClick = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const onExploreClick = useCallback(() => {
    navigate("/user-donate1");
  }, [navigate]);

  const onUserClick = useCallback(() => {
    navigate("/user-account");
  }, [navigate]);
  
  
  return (
    <div className="relative bg-white w-full h-[800px] flex flex-col items-start justify-start text-center text-lg text-gray-200 font-poppins">
      <Header individualName="Individual" />
      <div className="z-[99] self-stretch my-0 mx-[!important] absolute top-[728px] left-[0px] flex flex-row py-2.5 px-[50px] w-full items-start justify-between z-[1] border-t-[1px] border-solid border-gray-200">
        <div onClick={onHomeClick} className="rounded-xxs bg-blueviolet flex flex-row p-2.5 items-center justify-center">
          <div className="overflow-hidden flex flex-row items-start justify-start" >
            <img
              className="relative w-8 h-8 shrink-0"
              alt=""
              src="../vector47.svg " 
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
      <div className="absolute my-0 mx-[!important] top-[796px] left-[10px] bg-white w-[340px] h-px shrink-0 overflow-hidden z-[3]" />
    </div>
  );
};

export default UserHome;
