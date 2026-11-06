import { Link } from "react-router-dom";

type HyperLinkTypes = {
  caption: string;
  href: string;
  newTab?: boolean;
};

// Absolute URLs, mailto: and tel: can't go through react-router's <Link>
const isExternal = (href: string) => /^(https?:)?\/\/|^mailto:|^tel:/i.test(href);

const HyperLink = ({ caption, href, newTab = false }: HyperLinkTypes) => {
  const className = "flex w-fit items-center gap-3 overflow-hidden";

  const content = (
    <>
      <p className="w-fit font-googleSans text-base font-medium text-[#1967D2]">
        {caption}
        {newTab && <span className="sr-only"> (opens in a new tab)</span>}
      </p>

      <i className="bi bi-arrow-right text-[#1967D2]"></i>
    </>
  );

  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  // External links use a normal <a>; internal routes keep client-side routing
  if (isExternal(href)) {
    return (
      <a href={href} className={className} {...newTabProps}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className} {...newTabProps}>
      {content}
    </Link>
  );
};

export default HyperLink;