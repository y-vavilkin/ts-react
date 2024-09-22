import { IOptionWithLabel, IOptionWithName } from '../interfaces';

import { TOptionID } from './mock/firstOptions';
import { request } from './request';

export const getFirstOptions = async (): Promise<IOptionWithName[]> => {
    return request<IOptionWithName>('/first');
};

export const getSecondOptions = async (payload: TOptionID): Promise<IOptionWithLabel[]> => {
    return request<IOptionWithLabel>('/second', payload);
};
