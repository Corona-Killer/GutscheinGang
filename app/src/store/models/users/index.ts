import { Company } from '../companies';
import { Voucher } from '../vouchers';

export interface User {
  uuid?: string;
  email?: string;
  password?: string;
  jwtToken?: string;
  companyList?: Company[];
  voucherList?: Voucher[];
}