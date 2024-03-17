'use client';

import Link from 'next/link';
import HamburgerButton from '@/layouts/hamburger-button';
import SearchWidget from '@/components/search/search';
import Sidebar from '@/layouts/boron/boron-sidebar';
import Logo from '@/components/logo';
import HeaderMenuRight from '@/layouts/boron/boron-header-menu-right';
import StickyHeader from '@/layouts/sticky-header';
import cn from '@/utils/class-names';
import { useColorPresetName } from '@/hooks/use-theme-color';
import { useTheme } from 'next-themes';

export default function Header() {
  const { colorPresetName } = useColorPresetName();
  const { theme } = useTheme();
  return (
    <StickyHeader className="fixed start-0 top-0 z-[990] w-full bg-gray-900 2xl:py-5 3xl:px-8 4xl:px-10 dark:bg-gray-100/40 dark:backdrop-blur-3xl">
      <div className="flex w-full max-w-2xl items-center">
        <HamburgerButton
          className="text-gray-200 dark:text-gray-600"
          view={<Sidebar className="static w-full 2xl:w-full" />}
        />
        <Link
          href={'/'}
          aria-label="Site Logo"
          className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
        >
          <Logo iconOnly={true} className="invert dark:invert-0" />
        </Link>
        <div className="hidden w-[270px] xl:inline-block 2xl:w-72">
          <Link
            href={'/'}
            aria-label="Site Logo"
            className="w-[155px] text-gray-800 hover:text-gray-900 "
          >
            <Logo className="max-w-[155px] invert dark:invert-0" />
          </Link>
        </div>

        <SearchWidget
          className={cn(
            ' text-gray-400 xl:border-gray-700 xl:outline-gray-700 xl:hover:border-gray-200 xl:hover:outline-gray-0 dark:xl:border-gray-200 dark:xl:outline-gray-200 dark:xl:hover:border-gray-900 dark:xl:hover:outline-gray-900 [&_.magnifying-glass]:text-gray-400 dark:[&_.magnifying-glass]:text-gray-600',
            colorPresetName === 'black' &&
              theme === 'light' &&
              '[&_.search-command]:bg-gray-0 [&_.search-command]:text-gray-900'
          )}
          placeholderClassName="group-hover:text-gray-400 duration-150 dark:group-hover:text-gray-900 text-gray-400 dark:text-gray-600"
        />
      </div>

      <HeaderMenuRight />
    </StickyHeader>
  );
}
