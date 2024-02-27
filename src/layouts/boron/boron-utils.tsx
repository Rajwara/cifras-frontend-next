'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { routes } from '@/config/routes';

type NavigationKey = keyof typeof navigations;

const navigations = {
  '1': '/',
  '2': routes.executive.dashboard,
  '3': routes.financial.dashboard,
  '4': routes.logistics.dashboard,
  '5': routes.eCommerce.dashboard,
  '6': routes.analytics,
  '7': routes.support.dashboard,
};

const allowedNumKeys = Object.keys(navigations);

export function useBoronKbdShortcuts() {
  const router = useRouter();
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        allowedNumKeys.includes(event.key)
      ) {
        event.preventDefault();
        router.push(navigations[event.key as NavigationKey]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
