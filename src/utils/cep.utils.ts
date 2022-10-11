import { AdressType } from "../store/userAdressSlice/userAdressSlice";

export const getCepData = async (cep: string): Promise<AdressType> => {
  const adress = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return adress;
};
