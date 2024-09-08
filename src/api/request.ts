import { IOptionWithLabel, IOptionWithName } from '../interfaces';
import { delay } from '../utils';

import { MOCK_FIST_OPTIONS, MOCK_SECOND_OPTIONS } from './mock';
import { TOptionID } from './mock/firstOptions';

export const request = async <T extends IOptionWithName | IOptionWithLabel>(
    path: string,
    data?: TOptionID
): Promise<T[] | never> => {
  await delay(window.appSettings.requestDelay);
  const chanceToSuccess = Math.random();

  if (
    path === '/first' &&
    chanceToSuccess > window.appSettings.requestChanceToSuccess
  ) {
    return Promise.resolve(MOCK_FIST_OPTIONS as T[]);
  }

  if (path === '/second' && data) {
    return Promise.resolve(MOCK_SECOND_OPTIONS[data.id] as T[]);
  }

  return Promise.reject('Something went wrong...');
};
