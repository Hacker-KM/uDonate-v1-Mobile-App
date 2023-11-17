const DonationContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-left text-lg text-gray-200 font-poppins">
      <b className="self-stretch relative">Past Donations</b>
      <div className="self-stretch flex flex-col items-start justify-start text-3xs text-aliceblue">
        <div className="absolute bottom-0 right-[0px] z-[999] self-stretch relative rounded-xxs h-[175px] shrink-0 overflow-hidden bg-[url(../public/frame-135@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[0px] left-[0px] bg-gray-400 w-80 h-[175px]" />
          <div className="absolute top-[0px] left-[0px] flex flex-row p-2.5 items-center justify-start gap-[5px]">
            <img
              className="relative w-[18px] h-5 shrink-0"
              alt=""
              src="../vector5.svg"
            />
            <div className="relative">Medicine</div>
          </div>
          <div className="absolute top-[120px] left-[2px] flex flex-row p-2.5 items-start justify-start text-center">
            <div className="relative">XYZ Charity</div>
          </div>
          <div className="absolute top-[141px] left-[10px] text-base text-gray-200">
            Meds
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationContainer;
