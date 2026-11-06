const navItems = [
  { label: "Learning tracks", active: true },
  { label: "Learning formats", active: false },
  { label: "Your learning journey", active: false },
  { label: "Find a starting point", active: false },
];

export default function Navigation() {
  return (
    <div className="flex py-6 px-24 items-start gap-12 border-t border-t-[#DADCE0] border-b border-b-[#DADCE0] w-full overflow-hidden">
      {navItems.map(({ label, active }) => (
        <div key={label} className="flex items-start gap-2.5 w-fit overflow-hidden">
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