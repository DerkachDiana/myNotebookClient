import { AxiosError } from 'axios';
import jwt_decode from 'jwt-decode';

import { UserType } from '../types/types';

import { host } from './networkClient';

interface ILogin {
   token: string,
}

export const registration = async (email, password): Promise<UserType> => {
  try {
    const { data } = await host.post<ILogin>('api/user/registration', { email, password });

    return jwt_decode(data.token);
  } catch (e) {
    throw (e as AxiosError).response?.status;
  }
};

export const login = async (email, password): Promise<UserType> => {
  try {
    const { data } = await host.post<ILogin>('api/user/login', { email, password });

    return jwt_decode(data.token);
  } catch (e) {
    throw (e as AxiosError).response?.status;
  }
};
