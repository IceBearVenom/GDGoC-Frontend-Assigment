const navItems = [
  { label: "Learning tracks", active: true },
  { label: "Learning formats", active: false },
  { label: "Your learning journey", active: false },
  { label: "Find a starting point", active: false },
];

export default function Navigation() {
  return (
    <div className="flex py-4 md:py-6 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] items-start gap-6 md:gap-12 border-t border-t-[#DADCE0] border-b border-b-[#DADCE0] w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {navItems.map(({ label, active }) => (
        <div key={label} className="flex shrink-0 items-start gap-2.5 w-fit whitespace-nowrap">
          <p
            className={`font-googleSans text-[15px] w-fit ${
              active ? "text-[#1967D2] font-bold" : "text-[#5F6368]"
            }`}
          >
            {label}
          </p>
          <p className="text-[#1967D2] font-inter text-base w-fit">↓</p>
        </div>
      ))}
    </div>
  );
}