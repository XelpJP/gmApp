import { atom } from 'recoil';

export const productsAtom = atom({
  key: 'productsAtom', // unique ID
  default: [], // default value
});
