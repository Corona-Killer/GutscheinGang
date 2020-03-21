import { Company } from './Company';

export interface Voucher {
  uuid?: string;
  company?: Company;
  valueInEurCt: number;
  defaultValueInEurCt: number;
  voucherId?: string;
  isUsed?: boolean;
}
