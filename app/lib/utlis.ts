import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export const context = createContext(null);
export function Context(
  state: boolean,
  setstate: Dispatch<SetStateAction<boolean>>
) {
  return useContext(createContext([state, setstate]));
}
