import logo from "../../assets/logo.svg";

export default function Brand() {
  return (
    <a href="/" className="flex flex-row items-center justify-center gap-2" aria-label="GDG on Campus UGM home">
      <img src={logo} alt="Brand" />
      <span className="flex flex-col text-xs">
        <p className="text-xl font-medium tracking-tighter">Google Developer Groups</p>
        <p className="flex flex-row">
          <p className="text-blue-500">On Campus</p>
          &nbsp;
          <p className="font-black">·</p> 
          &nbsp;
          Universitas Gadjah Mada
        </p>
      </span>
    </a>
  );
}
