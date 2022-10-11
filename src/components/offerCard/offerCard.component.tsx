import { Plan } from "../../Routes/offers/offers.component";

import "./offerCard.styles.css";

type OfferProps = {
  offer: Plan;
};

const OfferCard = ({ offer }: OfferProps) => {
  return (
    <div className="offer-card">
      <h4>Plano {offer.name} :</h4>
      <p>{offer.description}</p>
      <p className="price">R${offer.price / 100}</p>
      <button>Adquirir Plano</button>
    </div>
  );
};

export default OfferCard;
