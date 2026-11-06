import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fetchData } from "../../services/api";
import type { ApiResponse, InquiryCategoryTypes } from "../../types/types";
import SectionLabel from "../../components/SectionLabel";
import HyperLink from "../../components/HyperLink";

const controlClass =
  "w-full rounded-lg border border-[#DADCE0] bg-[#FFF] p-4 text-[#242424] font-googleSans text-base md:text-[15px] placeholder:text-[#5F6368] focus:outline-none focus:border-[#4284F4] focus:ring-2 focus:ring-[#4284F4]/20";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
  agreed: false,
};

type TopicsCardProps = InquiryCategoryTypes & {
  active: boolean;
  onSelect: (id: string) => void;
};

function TopicsCard({ id, label, description, icon, active, onSelect }: TopicsCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={active}
      className={`flex p-5 items-start gap-[18px] rounded-2xl border w-full overflow-hidden text-left ${
        active
          ? "border-[rgba(255,255,255,0.00)] bg-[#EAF2FF]"
          : "border-[#DADCE0] bg-[rgba(255,255,255,0.00)]"
      }`}
    >
      <p className="text-[#1967D2] font-inter text-[25px] font-medium w-fit">{icon}</p>
      <div className="flex flex-col items-start gap-1.5 w-full overflow-hidden">
        <p className="text-[#242424] font-googleSans text-[17px] font-medium w-fit">{label}</p>
        <p className="text-[#5F6368] font-googleSans text-sm leading-[1.55em] w-full">
          {description}
        </p>
      </div>
    </button>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-2.5 w-full">
      <label htmlFor={htmlFor} className="text-[#242424] font-googleSans text-sm font-medium w-fit">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Workspace() {
  const [categories, setCategories] = useState<InquiryCategoryTypes[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchData<ApiResponse<InquiryCategoryTypes[]>>(
          "/inquiry-categories" // change to your real endpoint
        );
        setCategories(response.data);
        setSelectedId(response.data[0]?.id ?? "");
      } catch (error) {
        console.error("Failed to fetch inquiry categories:", error);
      }
    };

    getCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ ...form, categoryId: selectedId }); // no API yet
    setSubmitted(true);
    // setForm(initialForm); // uncomment to clear the form after submit
  };

  return (
    <div className="flex flex-col lg:flex-row pt-0 pb-14 md:pb-20 px-5 md:px-10 xl:px-[max(6rem,calc((100%_-_1344px)/2))] items-start gap-8 lg:gap-12 xl:gap-16 w-full overflow-hidden">
      {/* Left column */}
      <div className="max-lg:contents lg:flex lg:flex-col items-start gap-8 lg:w-[340px] xl:w-[456px] lg:shrink-0">
        <div className="order-1 flex flex-col items-start gap-[18px] w-full overflow-hidden">
          <p className="text-[#242424] font-googleSans text-2xl md:text-[28px] font-bold leading-[1.12em] w-full">
            What brings you here?
          </p>
          <p className="text-[#5F6368] font-googleSans text-base leading-[1.55em] w-full">
            Pick the closest topic in the form. We’ll take it from there.
          </p>

          {categories.map((category) => (
            <TopicsCard
              key={category.id}
              {...category}
              active={category.id === selectedId}
              onSelect={setSelectedId}
            />
          ))}
        </div>

        {/* Updates card */}
        <div className="order-3 flex p-5 sm:p-[26px] flex-col items-start gap-4 rounded-3xl bg-[#FFF7DF] w-full overflow-hidden">
          <SectionLabel children="STAY CURIOUS, STAY CONNECTED" />
          <p className="text-[#242424] font-googleSans text-2xl md:text-[26px] font-bold leading-[1.12em] w-full">
            Looking for community updates?
          </p>
          <p className="text-[#5F6368] font-googleSans text-base font-bold leading-[1.55em] w-full">
            Follow @gdgoc.ugm for learning opportunities and what’s happening in the community.
          </p>
          <div className="flex items-center gap-3 w-fit overflow-hidden">
            <HyperLink caption="Find @gdgoc.ugm" href="https://www.instagram.com/gdgoc.ugm/" />
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="order-2 flex p-5 sm:p-7 md:p-9 flex-col items-start gap-6 rounded-3xl bg-[#F1F3F4] w-full lg:flex-1 lg:min-w-0"
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-[#242424] font-googleSans text-2xl md:text-3xl font-bold leading-[1.12em] w-full">
            Send us a message
          </p>
          <p className="text-[#1967D2] font-inter text-2xl md:text-[28px] w-fit shrink-0">↗</p>
        </div>
        <p className="text-[#5F6368] font-googleSans text-[13px] w-fit">
          Fields marked * are required.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-5 w-full">
          <Field label="First name *" htmlFor="firstName">
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className={`${controlClass} h-[54px]`}
            />
          </Field>
          <Field label="Last name" htmlFor="lastName">
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className={`${controlClass} h-[54px]`}
            />
          </Field>
        </div>

        <Field label="Email address *" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Where we can reply to you"
            className={`${controlClass} h-[54px]`}
          />
        </Field>

        <Field label="University / organization" htmlFor="organization">
          <input
            id="organization"
            name="organization"
            type="text"
            value={form.organization}
            onChange={handleChange}
            placeholder="Where you study or work (optional)"
            className={`${controlClass} h-[54px]`}
          />
        </Field>

        <Field label="Inquiry category *" htmlFor="category">
          <div className="relative w-full">
            <select
              id="category"
              name="category"
              required
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className={`${controlClass} h-[54px] appearance-none pr-12 cursor-pointer`}
            >
              {categories.length === 0 && <option value="">Loading…</option>}
              {categories.map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={20}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1967D2]"
            />
          </div>
        </Field>

        <Field label="Subject *" htmlFor="subject">
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder="A short introduction to your question"
            className={`${controlClass} h-[54px]`}
          />
        </Field>

        <Field label="Your message *" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us a little about your question or idea…"
            className={`${controlClass} h-[146px] resize-none`}
          />
        </Field>

        <label className="flex items-start gap-3 w-full cursor-pointer">
          <input
            type="checkbox"
            required
            checked={form.agreed}
            onChange={(e) => setForm((prev) => ({ ...prev, agreed: e.target.checked }))}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#4284F4]"
          />
          <span className="text-[#5F6368] font-googleSans text-[13px] leading-[1.55em] w-full">
            I agree that the information I share can be used to respond to this inquiry.
          </span>
        </label>

        <div className="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-4 w-full">
          <button
            type="submit"
            className="flex py-0 px-6 items-center justify-center gap-4 rounded-lg bg-[#4284F4] hover:bg-[#3b76db] w-full sm:w-fit h-[52px] text-[#FFF] font-googleSans text-base font-medium cursor-pointer"
          >
            Send message
            <ArrowRight size={20} className="text-white" />
          </button>
          <p className="text-[#5F6368] font-googleSans text-xs w-full sm:w-[230px]">
            Please don’t include passwords or sensitive personal information.
          </p>
        </div>

        {submitted && (
          <p role="status" className="text-[#34A853] font-googleSans text-sm">
            Thanks! Your message is ready to send (not connected to an API yet).
          </p>
        )}
      </form>
    </div>
  );
}