function PlayButton({ className, label, children }) {
  const handleKlik = () => {
    alert('Video TripZap akan diputar di sini.');
  };

  return (
    <button type="button" className={className} aria-label={label} onClick={handleKlik}>
      {children}
    </button>
  );
}

export default PlayButton;
