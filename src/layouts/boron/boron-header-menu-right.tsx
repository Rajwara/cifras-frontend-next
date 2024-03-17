'use client';
import { Badge, ActionIcon } from 'rizzui';
import cn from '@/utils/class-names';
import MessagesDropdown from '@/layouts/messages-dropdown';
import NotificationDropdown from '@/layouts/notification-dropdown';
import ProfileMenu from '@/layouts/profile-menu';
import SettingsButton from '@/components/settings/settings-button';
import { PiGearFill, PiChatText, PiBellRinging } from 'react-icons/pi';
import { useColorPresetName } from '@/hooks/use-theme-color';

export default function HeaderMenuRight() {
  const { colorPresetName } = useColorPresetName();
  return (
    <div className="ms-auto flex shrink-0 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-5">
      <MessagesDropdown>
        <ActionIcon
          aria-label="Messages"
          variant="text"
          className={cn(
            'relative text-gray-200 dark:text-gray-700',
            colorPresetName === 'black' &&
              'hover:text-gray-0 dark:hover:text-gray-900'
          )}
        >
          <PiChatText className="h-5 w-auto xl:h-5 3xl:h-6" />
          <Badge
            renderAsDot
            color="success"
            enableOutlineRing
            className="absolute right-2.5 top-2.5 -translate-y-1/3 translate-x-1/2"
          />
        </ActionIcon>
      </MessagesDropdown>
      <NotificationDropdown>
        <ActionIcon
          aria-label="Notification"
          variant="text"
          className={cn(
            'relative text-gray-200 dark:text-gray-700',
            colorPresetName === 'black' &&
              'hover:text-gray-0 dark:hover:text-gray-900'
          )}
        >
          <PiBellRinging className="h-5 w-auto xl:h-5 3xl:h-6" />
          <Badge
            renderAsDot
            color="warning"
            enableOutlineRing
            className="absolute right-2.5 top-2.5 -translate-y-1/3 translate-x-1/2"
          />
        </ActionIcon>
      </NotificationDropdown>
      <ProfileMenu
        username
        buttonClassName="w-[unset] sm:w-[unset] flex items-center gap-3 xl:ms-2"
        avatarClassName="!w-8 !h-8"
      />
      <SettingsButton
        className={cn(
          'inline-flex h-[unset] w-[unset] gap-2 rounded-md bg-primary px-2.5 py-2 text-gray-200 hover:bg-primary-dark hover:text-gray-200 md:ms-3 md:h-auto md:w-auto xl:ms-4 xl:px-3.5 xl:py-2.5 dark:bg-primary dark:text-gray-900 dark:hover:text-gray-900',
          colorPresetName === 'black' &&
            'bg-gray-0 text-gray-900 hover:bg-gray-0 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-0 dark:hover:bg-gray-900 dark:hover:text-gray-0'
        )}
      >
        <PiGearFill className="h-[18px] w-auto animate-spin-slow xl:h-5" />
        <span className="hidden xl:inline"> Customize</span>
      </SettingsButton>
    </div>
  );
}
