import { ChangeEvent, useState } from "react";
import "./cepForm.styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { setUserAdress } from "../../store/userAdressSlice/userAdressSlice";
import { useDispatch } from "react-redux";

import { getCepData } from "../../utils/cep.utils";

const CepForm = () => {
  const [cep, setCep] = useState<string>("");
  const [validate, setValidate] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setCep(value);
  };

  const handleSubmit = async (
    event: ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    let isCEP = (cep: string) => /^[0-9]{8}$/.test(cep.toString());

    if (!isCEP(cep)) {
      setValidate(false);
      setCep("");
      return;
    }

    const data = await getCepData(cep);

    dispatch(setUserAdress(data));
    navigate("/offers");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="cep">
          Insira aqui seu cep:
          <input
            className={validate ? "" : "error"}
            type="number"
            name="cep"
            value={cep}
            onChange={handleChange}
            required
            pattern="\d{5}-?\d{3}"
          />
          {validate ? "" : <span>Insira um cep válido</span>}
        </label>
        <button>Ver Planos!</button>
      </form>
    </div>
  );
};

export default CepForm;
