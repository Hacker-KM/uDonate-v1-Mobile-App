const DonationFormContainer = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] text-center text-base text-gray-200 font-poppins">
      <div className="relative text-lg" placeholder = "New Donation"> New Donation </div>
      <div className="self-stretch rounded-xxs bg-gray-100 flex flex-row p-2.5 items-start justify-start border-[1px] border-solid border-gray-300">
        <input className="relative text-2xl p-2 flex-1 border-0" placeholder = "Name"></input>
      </div>
      <div className="self-stretch flex-1 rounded-xxs bg-gray-100 flex flex-row p-2.5 items-start justify-start text-left border-[1px] border-solid border-gray-300">
        <input className="relative text-2xl flex-1 p-2 h-full border-0" placeholder="Description"></input>
      </div>
    </div>
  );
};

export default DonationFormContainer;
