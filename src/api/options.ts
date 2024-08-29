import { TOptionID } from "./mock/firstOptions";
import { request } from "./request";

export const getFirstOptions = async () => request("/first");

export const getSecondOptions = async (payload: TOptionID) =>
  request("/second", payload);
