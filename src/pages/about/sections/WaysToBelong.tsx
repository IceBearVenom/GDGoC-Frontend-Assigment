import SectionLabel from "../../../components/common/SectionLabel";
import HyperLink from "../../../components/common/HyperLink";
import { useEffect, useState } from "react";
import { fetchData } from "../../../services/api";
import type { ApiResponse, RolesTypes } from "../../../types/types";

export default function WaysToBelong() {

  const [roles, setRoles] = useState<RolesTypes[]>([]);
  
  useEffect(() => {
    const getRoles = async () => {
      try {
        const response = await fetchData<ApiResponse<RolesTypes[]>>("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Failed to fetch values:", error);
      }
    };

    getRoles();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 xl:gap-24 pt-0 pb-14 md:pb-[88px] px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[22px] w-full lg:w-[340px] xl:w-[400px] lg:shrink-0 overflow-hidden">
        <SectionLabel children="PEOPLE, NOT LABELS" />
        <h2 className="text-[#242424] font-googleSans text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.12em] w-full">
          There’s more than one way to contribute.
        </h2>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          You can be learning one day and helping someone else the next. A community grows through
          both.
        </p>
      </div>
      <div className="flex flex-col items-start gap-7 w-full min-w-0 overflow-hidden">
        {roles.map(({ id, title, description, icon, cta }) => (
          <div key={id} className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
            <h3 className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
              {icon} {title}
            </h3>
            <p className="text-[#5F6368] font-googleSans text-base md:text-[17px] leading-[1.55em] w-full">
              {description}
            </p>
            <div className="bg-[#DADCE0] w-full h-px"></div>
          </div>
        ))}
        <HyperLink caption="Let's talk about getting involved" href="" />
      </div>
    </div>
  );
}