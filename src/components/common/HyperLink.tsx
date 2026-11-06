import { Link } from "react-router-dom";

type HyperLinkTypes = {
  caption: string;
  href: string;
};

const HyperLink = ({ caption, href }: HyperLinkTypes) => {
  return (
    <Link
      to={href}
      className="flex w-fit items-center gap-3 overflow-hidden"
    >
        <p className="w-fit font-googleSans text-base font-medium text-[#1967D2]">
            {caption}
        </p>

        <i className="bi bi-arrow-right text-[#1967D2]"></i>
    </Link>
  );
};

export default HyperLink;
