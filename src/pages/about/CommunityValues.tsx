import { useEffect, useState } from "react";
import SectionLabel from "../../components/SectionLabel";
import { fetchData } from "../../services/api";
import type { ApiResponse, ValuesTypes } from "../../types/types";

export default function CommunityValues() {
  const [values, setValues] = useState<ValuesTypes[]>([]);

  useEffect(() => {
    const getValues = async () => {
      try {
        const response = await fetchData<ApiResponse<ValuesTypes[]>>("/values");
        setValues(response.data);
      } catch (error) {
        console.error("Failed to fetch values:", error);
      }
    };

    getValues();
  }, []);

  return (
    <div className="flex flex-col items-start gap-10 py-14 md:py-[88px] px-5 md:px-10 xl:px-24 w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[18px] w-full md:max-w-[800px] overflow-hidden">
        <SectionLabel children="WHAT GUIDES US" />
        <h2 className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          Good technology starts with good company.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        {values.map(({ id, title, description, icon, color }) => (
          <div
            key={id ?? title}
            className="flex flex-col items-start gap-[22px] p-5 md:p-[26px] rounded-3xl border border-[#DADCE0] w-full overflow-hidden"
          >
            <div className="rounded-sm w-9 h-1" style={{ backgroundColor: color }}></div>
            <p className="text-[24px]">{icon}</p>
            <h3 className="text-[#242424] font-googleSans text-2xl font-bold leading-[1.12em] w-full">
              {title}
            </h3>
            <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}