import { ACCOUNTING } from '@/config/accountingconstants';
import { avatarIds } from '@/utils/get-avatar';
import { getRandomArrayElement } from '@/utils/get-random-array-element';

export const users = [
  {
    
    id: 1,
    accounting: ACCOUNTING.IncomeStatement,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 2,
    accounting: ACCOUNTING.IncomeStatement,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 3,
    accounting: ACCOUNTING.IncomeStatement,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 4,
    accounting: ACCOUNTING.IncomeStatement,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    id: 5,
    accounting: ACCOUNTING.IncomeStatement,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  {
    
    id: 6,
    accounting: ACCOUNTING.IncomeStatement,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`,
  },
  
];

export const accountingList = [
  {
    name: ACCOUNTING.IncomeStatement,
    color: '#2465FF',
    users,
  },
  {
    name: ACCOUNTING.StatementofFinancialPosition,
    color: '#F5A623',
    users,
  },
  {
    name: ACCOUNTING.TaxesWithholding,
    color: '#FF1A1A',
    users,
  },
  {
    name: ACCOUNTING.MovementsPerAccount,
    color: '#8A63D2',
    users,
  },
  {
    name: ACCOUNTING.AccountingJournalReport,
    color: '#FF1A1A',
    users,
  },
  {
    name: ACCOUNTING.AuxiliaryPerThirdParties,
    color: '#11A849',
    users,
  },
  {
    name: ACCOUNTING.GeneralLedgerReport,
    color: '#8A63D2',
    users,
  },
  {
    name: ACCOUNTING.TrialBalance,
    color: '#F5A623',
    users,
  },
  {
    name: ACCOUNTING.DetailedTaxReport,
    color: '#11A849',
    users,
  },
 
];

export const accountingActions = [
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
