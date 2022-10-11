import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AdressType = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
};

export type UserAdressState = {
  readonly adress: AdressType | undefined;
};

const initialState: UserAdressState = {
  adress: undefined,
};

export const UserAdressSlice = createSlice({
  name: "userAdress",
  initialState,
  reducers: {
    setUserAdress: (state, action: PayloadAction<AdressType>) => {
      state.adress = action.payload;
    },
  },
});

export const { setUserAdress } = UserAdressSlice.actions;

export default UserAdressSlice.reducer;
