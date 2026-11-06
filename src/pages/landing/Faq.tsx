import { useEffect, useState } from "react";
import HyperLink from "../../components/HyperLink";
import SectionLabel from "../../components/SectionLabel";
import { fetchData } from "../../services/api";
import type { ApiResponse, FaqsTypes } from "../../types/types";

type FaqItemProps = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

function FaqItem({ question, answer, open, onToggle }: FaqItemProps) {
  return (
    <div className="flex flex-col items-start gap-3.5 w-full overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex items-center gap-6 w-full text-left cursor-pointer"
      >
        <span className="text-[#242424] font-googleSans text-lg md:text-xl font-medium w-full">
          {question}
        </span>
        <i
          className={`bi bi-chevron-down text-[#1967D2] text-xl transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid w-full transition-[grid-template-rows] duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            {answer}
          </p>
        </div>
      </div>

      <div className="bg-[#DADCE0] w-full h-px"></div>
    </div>
  );
}

export default function Faq() {

  const [faqs, setFaqs] = useState<FaqsTypes[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
      
  useEffect(() => {
    const getFaqs = async () => {
      try {
        const response = await fetchData<ApiResponse<FaqsTypes[]>>("/faqs");
        setFaqs(response.data);
      } catch (error) {
        console.error("Failed to fetch values:", error);
      }
    };

    getFaqs();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row py-14 md:py-[88px] px-5 md:px-10 xl:px-24 items-start gap-10 lg:gap-12 xl:gap-24 w-full overflow-hidden">
      <div className="flex flex-col items-start self-center gap-5 w-full lg:w-[340px] xl:w-[400px] lg:shrink-0 overflow-hidden">
        <div className="flex items-center gap-2.5 w-fit overflow-hidden">
          <SectionLabel children="A FEW GOOD QUESTION" />
        </div>
        <p className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] w-full">
          Wondering where to begin?
        </p>
        <HyperLink caption="Ask us a question" href="/contact" />
      </div>

      <div className="flex flex-col items-start gap-6 w-full overflow-hidden">
        {faqs.map(({ question, answer }, index) => (
          <FaqItem
            key={question}
            question={question}
            answer={answer}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}