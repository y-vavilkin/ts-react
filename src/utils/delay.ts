export const delay = (t: number): Promise<unknown> => {
  return new Promise((res) => setTimeout(res, t));
};
