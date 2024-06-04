import { getToken } from "./token";

export const customFetch = (info: RequestInfo, init: RequestInit = {}) =>
  fetch(info, {
    ...init,
    headers: {
      ...(init.headers || {}),
      Authorization: getToken(),
    },
  });
