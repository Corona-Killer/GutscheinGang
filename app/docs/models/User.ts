import { Voucher } from './Voucher';
import { Company } from './Company';

export interface User {
  uuid?: string;
  email?: string;
  password?: string;
  jwtToken?: string;
  companyList?: Company[];
  voucherList?: Voucher[];
}
