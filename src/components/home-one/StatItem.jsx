import { useCountUp } from '../../hooks/useCountUp';

function StatItem({ nilai, satuan, label, suara }) {
  const { ref, nilai: tampil } = useCountUp(nilai);

  return (
    <div className="col-6 col-md-3">
      <div className="stat-item">
        <h3 aria-label={suara}>
          <span className="count" ref={ref}>{tampil}</span>
          <span className="suffix">{satuan}</span>
        </h3>
        <small>{label}</small>
      </div>
    </div>
  );
}

export default StatItem;
