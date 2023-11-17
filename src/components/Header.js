const Header = ({ individualName }) => {
  return (
    <div className="self-stretch flex flex-row pt-5 pb-2.5 pr-3 pl-5 items-center justify-start gap-[10px] z-[0] text-center text-base text-gray-200 font-poppins border-b-[1px] border-solid border-gray-200">
      <img
        className="relative w-[44.58px] h-[38px] shrink-0 object-cover"
        alt=""
        src="../udonateasset-42x-3@2x.png"
      />
      <div className="flex flex-row items-center justify-start">
        <b className="relative">{individualName}</b>
      </div>
    </div>
  );
};

export default Header;
