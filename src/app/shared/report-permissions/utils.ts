import { REPORT } from '@/config/reportconstants';
import { PERMISSIONS, STATUSES } from '@/data/users-data';

export const statuses = Object.values(STATUSES).map((status) => ({
  label: status,
  value: status,
}));

export const permissions = Object.values(PERMISSIONS).map((permission) => ({
  label: permission,
  value: permission,
}));

export const report = Object.entries(REPORT).map(([key, value]) => ({
  label: value,
  value: key,
}));
