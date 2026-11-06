import { useEffect, useState } from "react";
import SectionLabel from "../../components/SectionLabel";
import type { ApiResponse, FormatsTypes } from "../../types/types";
import { fetchData } from "../../services/api";

function ProgramFormat({
  id,
  name,
  description,
  icon,
  cta
}: FormatsTypes) {

  return (
    <div className="flex p-6 md:p-8 flex-col items-start gap-5 rounded-3xl bg-[#FFF] w-full overflow-hidden">
      <p className="">{icon}</p>
      <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
        {name}
      </p>
      <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
        {description}
      </p>
    </div>
  )
}

export default function LearningFormats() {
  const [formats, setFormats] = useState<FormatsTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const getFormats = async () => {
      try {
        const response = await fetchData<ApiResponse<FormatsTypes[]>>("/formats");

        setFormats(response.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    getFormats();
  }, []);
  return (
    <div className="flex py-14 md:py-20 px-5 md:px-10 xl:px-24 flex-col items-start gap-10 bg-[#F1F3F4] w-full overflow-hidden">
      <div className="flex flex-col items-start gap-[18px] w-full md:max-w-[800px] overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="MORE THAN A CLASSROOM" />
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          Less watching. More making.
        </p>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] w-full">
          Learn in a way that turns a new concept into something you can
          actually use.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 w-full overflow-hidden">
        {formats.map((format, index) => (
          <ProgramFormat  
          id={format.id}
          name={format.name}
          description={format.description}
          icon={format.icon}
          cta={format.cta}
          />
        ))}
      </div>
    </div>
  );
}
