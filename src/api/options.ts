import { TOptionID } from "./mock/firstOptions";
import { request } from "./request";
import { IOptionWithLabel, IOptionWithName } from "../interfaces";

export const getFirstOptions = async (): Promise<IOptionWithName[]> => {
    return request<IOptionWithName>("/first");
};

export const getSecondOptions = async (payload: TOptionID): Promise<IOptionWithLabel[]> => {
    return request<IOptionWithLabel>("/second", payload);
};
