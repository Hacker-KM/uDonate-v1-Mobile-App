import { useMemo } from "react";

const DonationHistoryContainer = ({
  pastDonationsText,
  propPadding,
  propBoxSizing,
  propAlignSelf,
  propCursor,
  onFrameContainer5Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propPadding, propBoxSizing]);

  const pastDonationsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[9px] text-left text-lg text-gray-200 font-poppins"
      style={frameDivStyle}
    >
      <b className="self-stretch relative" style={pastDonationsStyle}>
        {pastDonationsText}
      </b>
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-center text-3xs text-aliceblue">
        <div
          className="self-stretch relative rounded-xxs h-[175px] shrink-0 overflow-hidden bg-[url(../public/frame-134@3x.png)] bg-cover bg-no-repeat bg-[top]"
          style={frameDiv1Style}
          onClick={onFrameContainer5Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-gray-400 w-80 h-[175px] mix-blend-multiply" />
          <div className="absolute top-[0px] left-[0px] flex flex-row p-2.5 items-center justify-start gap-[5px] text-left">
            <img
              className="relative w-[13px] h-4 shrink-0"
              alt=""
              src="../vector4.svg"
            />
            <div className="relative">Book</div>
          </div>
          <div className="absolute top-[120px] left-[2px] flex flex-row p-2.5 items-start justify-start">
            <div className="relative">ABC Library</div>
          </div>
          <div className="absolute top-[141px] left-[10px] text-base text-gray-200">
            Old Books
          </div>
        </div>
        <div className="self-stretch relative rounded-xxs h-[175px] shrink-0 overflow-hidden bg-[url(../public/frame-135@3x.png)] bg-cover bg-no-repeat bg-[top] text-left">
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

export default DonationHistoryContainer;
