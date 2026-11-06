
type ButtonTypes = {
    cn?: string;
    caption: string;
    solid?: boolean;
    href: string;
    target?: "_blank" | "_self";
};

const Button = ({
    cn = "",
    caption,
    solid = true,
    href,
    target = "_self",
}: ButtonTypes) => {
    return (
        <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`
            flex py-0 px-6 items-center gap-4 rounded-lg
            w-fit h-[52px] overflow-hidden cursor-pointer
            transition-all duration-200
            ${solid
            ? "border border-transparent bg-[#4284F4] hover:bg-[#1967D2]"
            : "border border-[#DADCE0] bg-white hover:bg-[#F8F9FA]"
            }
            ${cn}
        `}
        >
        <p
            className={`text-base font-medium w-fit ${
            solid ? "text-white" : "text-[#1967D2]"
            }`}
        >
            {caption}
        </p>

        <i 
        style={{color: solid ? "white" : "#1967D2"}}
        className="bi bi-arrow-right text-white" />
        </a>
    );
};

export default Button;
