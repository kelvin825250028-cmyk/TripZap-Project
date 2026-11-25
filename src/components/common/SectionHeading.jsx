function SectionHeading({ label, judul, className = 'text-center mb-5' }) {
  return (
    <div className={className}>
      <span className="label-script">{label}</span>
      <h2 className="section-title">{judul}</h2>
    </div>
  );
}

export default SectionHeading;
