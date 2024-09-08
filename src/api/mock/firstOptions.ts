import { IOptionWithName } from "../../interfaces";

export type TOptionID = Pick<IOptionWithName, 'id'>;

export const MOCK_FIST_OPTIONS: IOptionWithName[] = [
  { id: 1, name: "A", value: "a" },
  { id: 2, name: "B", value: "b" },
  { id: 3, name: "C", value: "c" },
];
