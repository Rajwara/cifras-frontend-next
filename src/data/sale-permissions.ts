import { SALE } from '@/config/saleconstants';
import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const users = [
  {
    
    id: 1,
    sale: SALE.GeneralSales,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 2,
    sale: SALE.GeneralSales,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 3,
    sale: SALE.GeneralSales,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 4,
    sale: SALE.GeneralSales,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 5,
    sale: SALE.GeneralSales,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    
    id: 6,
    sale: SALE.GeneralSales,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  
];

export const saleList = [
  {
    name: SALE.GeneralSales,
    color: '#2465FF',
    users,
  },
  {
    name: SALE.SalesPerItem,
    color: '#F5A623',
    users,
  },
  {
    name: SALE.SalesPerClient,
    color: '#FF1A1A',
    users,
  },
  {
    name: SALE.ProfitabilityPerItem,
    color: '#8A63D2',
    users,
  },
  {
    name: SALE.SalesPerVendor,
    color: '#FF1A1A',
    users,
  },
  {
    name: SALE.AccountStatus,
    color: '#11A849',
    users,
  },
 
];

export const saleActions = [
  {
    id: 1,
    name: 'Add User',
  },
  {
    id: 2,
    name: 'Rename',
  },
  {
    id: 3,
    name: 'Remove report',
  },
];
