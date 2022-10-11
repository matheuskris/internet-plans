import { RootState } from "../store";

export const selectUserAdress = (state: RootState) => state.userAdress.adress;
