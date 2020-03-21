import { AnyAction, Dispatch } from 'redux';
import { User } from './index';
import * as reducer from './reducer';
import { AxiosResponse } from 'axios';
import api from '../../api';
import { Voucher } from '../vouchers';

/**
 * Add user
 * @param {User} user User data to add
 */
export const addUser = (user: User) => async (dispatch: Dispatch<AnyAction>) => { };

/**
 * Get user by ID
 * @param {string} uuid User ID
 */
export const getUser = (uuid: string) => async (dispatch: Dispatch<AnyAction>) => { };

/**
 * Get companies for user with given ID
 * @param {string} uuid User ID
 */
export const getCompanies = (uuid: string) => async (dispatch: Dispatch<AnyAction>) => { };

/**
 * 
 * @param uuid User ID
 * @param voucher Voucher to add
 */
export const addVoucher = (uuid: string, voucher: Voucher) => async (dispatch: Dispatch<AnyAction>) => { };

export const deleteUser = (uuid: string) => async (dispatch: Dispatch<AnyAction>) => { };

export const updateUser = (uuid: string) => async (dispatch: Dispatch<AnyAction>) => { };