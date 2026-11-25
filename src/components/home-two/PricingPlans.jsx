import { plans } from '../../data/layanan';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

function PricingPlans() {
  return (
    <section className="section-pad bg-blue-soft">
      <div className="container">
        <SectionHeading label="Pricing Plan" judul="Choose Your Pricing Plan" />
        <Reveal animasi="fadeInUp" className="table-responsive">
          <table className="table table-bordered table-hover table-striped text-center align-middle bg-white mb-0">
            <thead className="table-dark">
              <tr>
                <th scope="col" className="text-start">Package</th>
                {plans.map((plan) => (
                  <th scope="col" key={plan.name}>{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">Price</th>
                {plans.map((plan) => (
                  <td key={plan.name}>
                    <strong className="fs-4">$ {plan.harga}</strong>
                    <small> / Week</small>
                  </td>
                ))}
              </tr>
              {plans[0].fitur.map(([teks], baris) => (
                <tr key={teks}>
                  <th scope="row" className="text-start fw-normal">{teks}</th>
                  {plans.map((plan) => (
                    <td key={plan.name}>
                      {plan.fitur[baris][1] ? (
                        <>
                          <i className="bi bi-check-circle-fill text-success"></i>
                          <span className="visually-hidden">Included</span>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-x-circle-fill text-danger"></i>
                          <span className="visually-hidden">Not included</span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td></td>
                {plans.map((plan) => (
                  <td key={plan.name}>
                    <button type="button" className="btn btn-outline-info">Choose Plan</button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

export default PricingPlans;
