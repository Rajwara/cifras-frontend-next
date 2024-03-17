import { REPORT } from '@/config/reportconstants';
import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const users = [
  {
    
    id: 1,
    report: REPORT.AccountsReceivable,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 2,
    report: REPORT.AccountsReceivable,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 3,
    report: REPORT.AccountsReceivable,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 4,
    report: REPORT.AccountsReceivable,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 5,
    report: REPORT.AccountsReceivable,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    
    id: 6,
    report: REPORT.AccountsReceivable,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    
    id: 7,
    report: REPORT.AccountsReceivable,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    
    id: 8,
    report: REPORT.AccountsReceivable,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  
];

export const reportList = [
  {
    name: REPORT.AccountsReceivable,
    color: '#2465FF',
    users,
  },
  {
    name: REPORT.AccountsPayable,
    color: '#F5A623',
    users,
  },
  {
    name: REPORT.IncomeExpenses,
    color: '#FF1A1A',
    users,
  },
  {
    name: REPORT.InventoryValue,
    color: '#8A63D2',
    users,
  },
  {
    name: REPORT.Transactions,
    color: '#FF1A1A',
    users,
  },
  {
    name: REPORT.Purchases,
    color: '#11A849',
    users,
  },
  {
    name: REPORT.AnnualReport,
    color: '#4E36F5',
    users,
  },
 
];

export const reportActions = [
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
