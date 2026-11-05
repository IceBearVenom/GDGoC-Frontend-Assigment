type Props = { className?: string; label?: string };
export default function ImageFrame({ className = "", label = "Image placeholder" }: Props) {
  return <div className={`image-frame ${className}`} role="img" aria-label={label}><span className="frame-label">IMAGE PLACEHOLDER</span><span className="frame-plus">+</span></div>;
}
