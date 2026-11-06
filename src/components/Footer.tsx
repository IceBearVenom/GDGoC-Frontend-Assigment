import Brand from "./Brand";

export default function Footer() {
  return (
    <div className="flex pt-12 md:pt-14 px-5 md:px-10 xl:px-24 pb-7 flex-col items-start gap-10 bg-[#F1F3F4] w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-start gap-10 w-full overflow-hidden">
        <div className="flex flex-col items-start gap-6 w-full lg:w-[400px] xl:w-[480px] overflow-hidden">
          <div className="flex flex-wrap items-center gap-3 max-w-full">
            <Brand />
          </div>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            A student community for curious minds, shared learning, and
            technology with purpose.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3.5 w-full md:w-[150px] overflow-hidden">
          <p className="text-[#000] font-googleSans text-base font-bold w-fit">
            Explore
          </p>
          <a 
          className="text-[#5F6368] font-googleSans text-[15px] w-fit"
          href="/"
          >
            Home
          </a>
          <a 
          className="text-[#5F6368] font-googleSans text-[15px] w-fit"
          href="/about"
          >
            About
          </a>
          <a 
          className="text-[#5F6368] font-googleSans text-[15px] w-fit"
          href="/overview"
          >
            Overview
          </a>
          <a 
          className="text-[#5F6368] font-googleSans text-[15px] w-fit"
          href="/contact"
          >
            Contact
          </a>
          
        </div>
        <div className="flex flex-col items-start gap-4 w-full md:w-[260px] overflow-hidden">
          <p className="text-[#000] font-googleSans text-base font-bold w-fit">
            Keep in the loop
          </p>
          <a className="text-[#1967D2] font-googleSans text-lg w-fit cursor-pointer" href="https://www.instagram.com/gdgoc.ugm/">
            @gdgoc.ugm
          </a>
          <div className="flex items-start gap-4 w-fit overflow-hidden">
            <div className="w-6 h-6 relative cursor-pointer" onClick={() => window.location.href = "https://www.instagram.com/gdgoc.ugm/"}>
              <i className="bi bi-instagram"></i>
            </div>
            <div className="w-6 h-6 relative cursor-pointer" onClick={() => window.location.href = "https://www.youtube.com/@gdgocugm"}>
              <i className="bi bi-youtube"></i>
            </div>
          </div>
          <p className="text-[#5F6368] font-googleSans text-sm leading-[1.55em] w-full">
            Learn together. Build together.
          </p>
        </div>
      </div>
      <div className="bg-[#DADCE0] w-full h-px"></div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 w-full overflow-hidden">
        <p className="text-[#5F6368] font-googleSans text-xs w-fit">
          © GDGoC Universitas Gadjah Mada • 2026&#x2F;2027
        </p>
        <p className="text-[#5F6368] font-googleSans text-xs w-fit">
          Made for the campus. Open to possibilities.
        </p>
      </div>
      <div className="flex items-start w-40 h-1 overflow-hidden">
        <div className="bg-[#4284F4] w-full h-1"></div>
        <div className="bg-[#EA4335] w-full h-1"></div>
        <div className="bg-[#F9AB00] w-full h-1"></div>
        <div className="bg-[#34A853] w-full h-1"></div>
      </div>
    </div>
  );
}
