import LinkHome from './LinkHome';

function Brand() {
  return (
    <LinkHome className="navbar-brand">
      <i className="bi bi-life-preserver logo-icon"></i>
      <span>
        Trip<span className="zap">Zap</span>
      </span>
    </LinkHome>
  );
}

export default Brand;
