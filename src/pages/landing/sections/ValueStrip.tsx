export default function ValueStrip() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 py-5 md:py-[26px] px-5 md:px-10 xl:px-24 sm:justify-between items-start border-t border-t-[#DADCE0] border-b border-b-[#DADCE0] w-full overflow-hidden">
      <div className="flex items-center gap-3.5 w-fit overflow-hidden">
        <div className="bg-[#4284F4] w-2 h-2"></div>
        <p className="text-[#242424] font-googleSans text-lg font-medium w-fit">
          Learn by doing
        </p>
      </div>
      <div className="flex items-center gap-3.5 w-fit overflow-hidden">
        <div className="bg-[#EA4335] w-2 h-2"></div>
        <p className="text-[#242424] font-googleSans text-lg font-medium w-fit">
          Connect across disciplines
        </p>
      </div>
      <div className="flex items-center gap-3.5 w-fit overflow-hidden">
        <div className="bg-[#34A853] w-2 h-2"></div>
        <p className="text-[#242424] font-googleSans text-lg font-medium w-fit">
          Build with purpose
        </p>
      </div>
    </div>
  );
}
