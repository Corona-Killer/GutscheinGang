import { Sector } from '../sectors';
import { Voucher } from '../vouchers';

export interface Company {
  uuid: string;
  name: string;
  description?: string;
  sector?: Sector;
  logoUrl?: string;
  wallpaperUrl?: string;
  homepage?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  imageList?: string[];
  tags?: string[];
  voucherList?: Voucher[];
  needHelpBecause?: string;
  paypalAddress?: string;
  street?: string;
  postalCode: number;
  city?: string;
}