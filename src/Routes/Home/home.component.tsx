import Footer from "../../components/footer/footer.component";
import CepForm from "../../components/cepForm/cepForm.component";

import "./home.styles.css";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <h1>Boas Vindas</h1>
        <p>
          Para acessar as ofertas disponíveis de acordo com a sua localidade,
          preencha seu cep abaixo!
        </p>
        <CepForm />
      </section>
      <Footer />
    </>
  );
};

export default Home;
