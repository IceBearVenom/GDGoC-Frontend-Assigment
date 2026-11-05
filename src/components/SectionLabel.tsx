import type { ReactNode } from "react";
export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex flex-row gap-2 justify-center items-center !text-[12px]">
      <div className="w-[7px] h-[7px] bg-blue-500 rounded-full" />
      {children}
    </p>);
}
