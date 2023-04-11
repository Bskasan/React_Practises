import { INCREASE } from "../types/counterTypes";

export const inc = () => {
  return {
    type: INCREASE,
  };
};

export const dec = () => ({ type: DECREASE });

export const reset = () => ({ type: RESET });
