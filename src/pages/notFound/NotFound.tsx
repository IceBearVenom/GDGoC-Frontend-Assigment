import { Link } from "react-router-dom";
import HyperLink from "../../components/common/HyperLink";

export default function NotFound() {
    return (
        <div className="flex flex-col items-start gap-6 w-full px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="text-[#1967D2] font-googleSans text-6xl md:text-8xl font-bold leading-none">
            404
        </p>
        <h1 className="text-[#242424] font-googleSans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12em] max-w-[720px]">
            We couldn’t find that page.
        </h1>
        <p className="text-[#5F6368] font-googleSans text-lg leading-[1.55em] max-w-[560px]">
            The link may be broken, or the page may have moved. Head back home or
            tell us what you were looking for.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mt-2">
            <Link
            to="/"
            className="flex h-[52px] items-center justify-center rounded-lg bg-[#4284F4] px-6 font-googleSans text-base font-medium text-white transition-colors hover:bg-[#3B78E7]"
            >
            Back to home
            </Link>
            <HyperLink caption="Contact us" href="/contact" />
        </div>
        </div>
    );
}