import { useReveal } from '../../hooks/useReveal';

function Reveal({ animasi, as: Tag = 'div', className = '', children, ...sisa }) {
  const { ref, kelas } = useReveal(animasi);
  const semuaKelas = [className, kelas].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={semuaKelas} {...sisa}>
      {children}
    </Tag>
  );
}

export default Reveal;
