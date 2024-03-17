import { ACCOUNTINGREPORT } from '@/config/accountingreportconstants';
import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const users = [
  {
    
    id: 1,
    accountingreport: ACCOUNTINGREPORT.ExportInvoices,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 2,
    accountingreport: ACCOUNTINGREPORT.ExportInvoices,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 3,
    accountingreport: ACCOUNTINGREPORT.ExportInvoices,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 4,
    accountingreport: ACCOUNTINGREPORT.ExportInvoices,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 5,
    accountingreport: ACCOUNTINGREPORT.ExportInvoices,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
 
  
];

export const accountingreportList = [
  {
    name: ACCOUNTINGREPORT.ExportInvoices,
    color: '#2465FF',
    users,
  },
  {
    name: ACCOUNTINGREPORT.AccountantReport,
    color: '#F5A623',
    users,
  },
 
 
];

export const accountingreportActions = [
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
