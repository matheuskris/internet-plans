import { useSelector } from "react-redux";
import { selectUserAdress } from "../../store/userAdressSlice/userAdress.selectors";
import Footer from "../../components/footer/footer.component";
import OfferCard from "../../components/offerCard/offerCard.component";
import { useNavigate } from "react-router-dom";

import "./offers.styles.css";

export type Plan = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export type InternetPlans = Plan[];

const internetPlans: InternetPlans = [
  {
    id: 1,
    name: "Light",
    price: 4299,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    id: 2,
    name: "Black",
    price: 7399,
    description:
      "Enim obcaecati natus eius odio praesentium commodi nam exercitationem ipsa sunt culpa esse earum et facere cupiditate.",
  },
  {
    id: 3,
    name: "Master",
    price: 9999,
    description: "magnam nam tempora aut voluptas.",
  },
];

const Offers = () => {
  const adress = useSelector(selectUserAdress);
  const navigate = useNavigate();
  console.log(adress);

  return (
    <>
      <section className="offers-container">
        <div className="header">
          <h2>Aqui estão as ofertas disponíveis na sua localidade</h2>
          <h4>Seu endereço:</h4>
          {adress == undefined || null ? (
            ""
          ) : (
            <>
              <p>Cep: {adress.cep}</p>
              <p>Rua: {adress.logradouro}</p>
              <p>
                Cidade: {adress.localidade}/{adress.uf}
              </p>
            </>
          )}
        </div>
        {adress ? (
          <div className="offersCard-container">
            {internetPlans.map((item) => (
              <OfferCard key={item.id} offer={item} />
            ))}
          </div>
        ) : (
          ""
        )}

        <button className="ops-btn" onClick={() => navigate("/")}>
          Ops, errei meu Cep
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Offers;
