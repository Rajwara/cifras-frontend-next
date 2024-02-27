export type InitialStateType = {
  filter: string;
};

export const initialState: InitialStateType = {
  filter: '',
};

// Options
export const filterOptions = [
  {
    id: 1,
    label: 'Most Active',
    value: 'most-active',
  },
  {
    id: 2,
    label: 'Price: Lowest',
    value: 'price-lowest',
  },
  {
    id: 3,
    label: 'Price: Highest',
    value: 'price-highest',
  },
  {
    id: 4,
    label: 'Newest',
    value: 'newest',
  },
  {
    id: 5,
    label: 'Oldest',
    value: 'oldest',
  },
];

export function getOptionByValue(value: string, options: any[]) {
  return options.find((option) => option.value === value);
}
