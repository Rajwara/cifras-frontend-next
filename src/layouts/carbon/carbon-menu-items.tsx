import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';
import {
  PiShoppingCartDuotone,
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiCurrencyDollarDuotone,
  PiSquaresFourDuotone,
  PiGridFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  PiMapPinLineDuotone,
  PiUserGearDuotone,
  PiBellSimpleRingingDuotone,
  PiUserDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiStepsDuotone,
  PiCreditCardDuotone,
  PiTableDuotone,
  PiBrowserDuotone,
  PiHourglassSimpleDuotone,
  PiUserCircleDuotone,
  PiShootingStarDuotone,
  PiRocketLaunchDuotone,
  PiFolderLockDuotone,
  PiBinocularsDuotone,
  PiHammerDuotone,
  PiNoteBlankDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiCalendarPlusDuotone,
  PiEnvelopeDuotone,
  PiCurrencyCircleDollarDuotone,
  PiBriefcaseDuotone,
  PiHouseLineDuotone,
  PiAirplaneTiltDuotone,
  PiFolderNotchDuotone,
  PiCaretCircleUpDownDuotone,
  PiListNumbersDuotone,
  PiCoinDuotone,
  PiUserSquareDuotone,
} from 'react-icons/pi';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    id: 1,
    name: 'Overview',
  },
  // label end
  {
    id: 2,
    name: 'File Manager',
    href: '/',
    icon: <PiFolderNotchDuotone />,
  },
  {
    id: 3,
    name: 'Executive',
    href: routes.executive.dashboard,
    icon: <PiBriefcaseDuotone />,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Financial',
    href: routes.financial.dashboard,
    icon: <PiCurrencyCircleDollarDuotone />,
    badge: 'New',
  },
  {
    id: 4,
    name: 'Logistics',
    href: routes.logistics.dashboard,
    icon: <PiPackageDuotone />,
  },
  {
    id: 5,
    name: 'E-Commerce',
    href: routes.eCommerce.dashboard,
    icon: <PiShoppingCartDuotone />,
  },
  {
    id: 6,
    name: 'Analytics',
    href: routes.analytics,
    icon: <PiChartBarDuotone />,
    badge: '',
  },
  {
    id: 7,
    name: 'Support',
    href: routes.support.dashboard,
    icon: <PiHeadsetDuotone />,
  },

  // label start
  {
    id: 8,
    name: 'Apps Kit',
  },
  // label end
  {
    id: 9,
    name: 'E-Commerce',
    href: '#',
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      // {
      //   id: 10,
      //   name: 'Products',
      //   href: routes.eCommerce.products,
      //   badge: '',
      // },
      // {
      //   id: 11,
      //   name: 'Product Details',
      //   href: routes.eCommerce.productDetails(DUMMY_ID),
      // },
      // {
      //   id: 12,
      //   name: 'Create Product',
      //   href: routes.eCommerce.createProduct,
      // },
      // {
      //   id: 13,
      //   name: 'Edit Product',
      //   href: routes.eCommerce.ediProduct(DUMMY_ID),
      // },
      {
        id: 14,
        name: 'Categories',
        href: routes.eCommerce.categories,
      },
      {
        id: 15,
        name: 'Create Category',
        href: routes.eCommerce.createCategory,
      },
      {
        id: 16,
        name: 'Edit Category',
        href: routes.eCommerce.editCategory(DUMMY_ID),
      },
      {
        id: 17,
        name: 'Orders',
        href: routes.eCommerce.orders,
      },
      {
        id: 18,
        name: 'Order Details',
        href: routes.eCommerce.orderDetails(DUMMY_ID),
      },
      {
        id: 19,
        name: 'Create Order',
        href: routes.eCommerce.createOrder,
      },
      {
        id: 20,
        name: 'Edit Order',
        href: routes.eCommerce.editOrder(DUMMY_ID),
      },
      {
        id: 21,
        name: 'Reviews',
        href: routes.eCommerce.reviews,
      },
      {
        id: 22,
        name: 'Shop',
        href: routes.eCommerce.shop,
      },
      {
        id: 23,
        name: 'Cart',
        href: routes.eCommerce.cart,
      },
      {
        id: 24,
        name: 'Checkout & Payment',
        href: routes.eCommerce.checkout,
      },
    ],
  },
  {
    id: 25,
    name: 'Support',
    href: '#',
    icon: <PiHeadsetDuotone />,
    dropdownItems: [
      {
        id: 26,
        name: 'Inbox',
        href: routes.support.inbox,
      },
      {
        id: 27,
        name: 'Snippets',
        href: routes.support.snippets,
      },
      {
        id: 28,
        name: 'Templates',
        href: routes.support.templates,
      },
    ],
  },
  {
    id: 29,
    name: 'Invoice',
    href: '#',
    icon: <PiCurrencyDollarDuotone />,
    dropdownItems: [
      {
        id: 30,
        name: 'List',
        href: routes.invoice.home,
      },
      {
        id: 31,
        name: 'Details',
        href: routes.invoice.details(DUMMY_ID),
      },
      {
        id: 32,
        name: 'Create',
        href: routes.invoice.create,
      },
      {
        id: 33,
        name: 'Edit',
        href: routes.invoice.edit(DUMMY_ID),
      },
    ],
  },
  {
    id: 34,
    name: 'Logistics',
    href: '#',
    icon: <PiPackageDuotone />,
    dropdownItems: [
      {
        id: 35,
        name: 'Shipment List',
        href: routes.logistics.shipmentList,
      },
      {
        id: 36,
        name: 'Shipment Details',
        href: routes.logistics.shipmentDetails(DUMMY_ID),
      },
      {
        id: 37,
        name: 'Create Shipment',
        href: routes.logistics.createShipment,
      },
      {
        id: 38,
        name: 'Edit Shipment',
        href: routes.logistics.editShipment(DUMMY_ID),
      },
      {
        id: 39,
        name: 'Customer Profile',
        href: routes.logistics.customerProfile,
      },
      {
        id: 40,
        name: 'Tracking',
        href: routes.logistics.tracking(DUMMY_ID),
      },
    ],
  },
  {
    id: 41,
    name: 'File Manager',
    href: routes.file.manager,
    icon: <PiFolderNotchDuotone />,
  },
  {
    id: 42,
    name: 'Event Calendar',
    href: routes.eventCalendar,
    icon: <PiCalendarPlusDuotone />,
  },
  {
    id: 43,
    name: 'Roles & Permissions',
    href: routes.rolesPermissions,
    icon: <PiFolderLockDuotone />,
  },
  {
    id: 44,
    name: 'Point of Sale',
    href: routes.pos.index,
    icon: <PiCreditCardDuotone />,
    badge: 'Update',
  },
  // label start
  {
    id: 45,
    name: 'Search & Filters',
  },
  {
    id: 46,
    name: 'Real Estate',
    href: routes.searchAndFilter.realEstate,
    icon: <PiHouseLineDuotone />,
  },
  {
    id: 47,
    name: 'Flight Booking',
    href: routes.searchAndFilter.flight,
    icon: <PiAirplaneTiltDuotone />,
    badge: 'Update',
  },
  {
    id: 48,
    name: 'NFT',
    href: routes.searchAndFilter.nft,
    icon: <PiCoinDuotone />,
  },
  // label end
  // label start
  {
    id: 49,
    name: 'Widgets',
  },
  // label end
  {
    id: 50,
    name: 'Cards',
    href: routes.widgets.cards,
    icon: <PiSquaresFourDuotone />,
  },
  {
    id: 51,
    name: 'Icons',
    href: routes.widgets.icons,
    icon: <PiFeatherDuotone />,
  },
  {
    id: 52,
    name: 'Charts',
    href: routes.widgets.charts,
    icon: <PiChartLineUpDuotone />,
  },
  // {
  //   name: 'Banners',
  //   href: routes.widgets.banners,
  //   icon: <PiImageDuotone />,
  // },
  {
    id: 53,
    name: 'Maps',
    href: routes.widgets.maps,
    icon: <PiMapPinLineDuotone />,
  },
  {
    id: 54,
    name: 'Email Templates',
    href: routes.emailTemplates,
    icon: <PiEnvelopeDuotone />,
  },
  // label start
  {
    id: 55,
    name: 'Forms',
  },
  // label end
  {
    id: 56,
    name: 'Account Settings',
    href: routes.forms.profileSettings,
    icon: <PiUserGearDuotone />,
  },
  {
    id: 57,
    name: 'Notification Preference',
    href: routes.forms.notificationPreference,
    icon: <PiBellSimpleRingingDuotone />,
  },
  {
    id: 58,
    name: 'Personal Information',
    href: routes.forms.personalInformation,
    icon: <PiUserDuotone />,
  },
  {
    id: 59,
    name: 'Newsletter',
    href: routes.forms.newsletter,
    icon: <PiEnvelopeSimpleOpenDuotone />,
  },
  {
    id: 60,
    name: 'Multi Step',
    href: routes.multiStep,
    icon: <PiStepsDuotone />,
  },
  {
    id: 61,
    name: 'Payment Checkout',
    href: routes.eCommerce.checkout,
    icon: <PiCreditCardDuotone />,
  },
  // label start
  {
    id: 62,
    name: 'Tables',
  },
  // label end
  {
    id: 63,
    name: 'Basic',
    href: routes.tables.basic,
    icon: <PiGridFourDuotone />,
  },
  {
    id: 64,
    name: 'Collapsible',
    href: routes.tables.collapsible,
    icon: <PiCaretCircleUpDownDuotone />,
  },
  {
    id: 65,
    name: 'Enhanced',
    href: routes.tables.enhanced,
    icon: <PiTableDuotone />,
  },
  {
    id: 66,
    name: 'Sticky Header',
    href: routes.tables.stickyHeader,
    icon: <PiBrowserDuotone />,
  },
  {
    id: 67,
    name: 'Pagination',
    href: routes.tables.pagination,
    icon: <PiListNumbersDuotone />,
  },
  {
    id: 68,
    name: 'Search',
    href: routes.tables.search,
    icon: <PiHourglassSimpleDuotone />,
  },
  // label start
  {
    id: 69,
    name: 'Pages',
  },
  {
    id: 70,
    name: 'Profile',
    href: routes.profile,
    icon: <PiUserCircleDuotone />,
  },
  {
    id: 71,
    name: 'Welcome',
    href: routes.welcome,
    icon: <PiShootingStarDuotone />,
  },
  {
    id: 72,
    name: 'Coming soon',
    href: routes.comingSoon,
    icon: <PiRocketLaunchDuotone />,
  },
  {
    id: 73,
    name: 'Access Denied',
    href: routes.accessDenied,
    icon: <PiFolderLockDuotone />,
  },
  {
    id: 74,
    name: 'Not Found',
    href: routes.notFound,
    icon: <PiBinocularsDuotone />,
  },
  {
    id: 75,
    name: 'Maintenance',
    href: routes.maintenance,
    icon: <PiHammerDuotone />,
  },
  {
    id: 76,
    name: 'Blank',
    href: routes.blank,
    icon: <PiNoteBlankDuotone />,
  },

  // label start
  {
    id: 77,
    name: 'Authentication',
  },
  // label end
  {
    id: 78,
    name: 'Sign Up',
    href: '#',
    icon: <PiUserPlusDuotone />,
    dropdownItems: [
      {
        id: 79,
        name: 'Modern Sign up',
        href: routes.auth.signUp1,
      },
      {
        id: 80,
        name: 'Vintage Sign up',
        href: routes.auth.signUp2,
      },
      {
        id: 81,
        name: 'Trendy Sign up',
        href: routes.auth.signUp3,
      },
      {
        id: 82,
        name: 'Elegant Sign up',
        href: routes.auth.signUp4,
      },
      {
        id: 83,
        name: 'Classic Sign up',
        href: routes.auth.signUp5,
      },
    ],
  },
  {
    id: 84,
    name: 'Sign In',
    href: '#',
    icon: <PiShieldCheckDuotone />,
    dropdownItems: [
      {
        id: 85,
        name: 'Modern Sign in',
        href: routes.auth.signIn1,
      },
      {
        id: 86,
        name: 'Vintage Sign in',
        href: routes.auth.signIn2,
      },
      {
        id: 87,
        name: 'Trendy Sign in',
        href: routes.auth.signIn3,
      },
      {
        id: 88,
        name: 'Elegant Sign in',
        href: routes.auth.signIn4,
      },
      {
        id: 89,
        name: 'Classic Sign in',
        href: routes.auth.signIn5,
      },
    ],
  },
  {
    id: 90,
    name: 'Forgot Password',
    href: '#',
    icon: <PiLockKeyDuotone />,
    dropdownItems: [
      {
        id: 91,
        name: 'Modern Forgot password',
        href: routes.auth.forgotPassword1,
      },
      {
        id: 92,
        name: 'Vintage Forgot password',
        href: routes.auth.forgotPassword2,
      },
      {
        id: 93,
        name: 'Trendy Forgot password',
        href: routes.auth.forgotPassword3,
      },
      {
        id: 94,
        name: 'Elegant Forgot password',
        href: routes.auth.forgotPassword4,
      },
      {
        id: 95,
        name: 'Classic Forgot password',
        href: routes.auth.forgotPassword5,
      },
    ],
  },
  {
    id: 96,
    name: 'OTP Pages',
    href: '#',
    icon: <PiChatCenteredDotsDuotone />,
    dropdownItems: [
      {
        id: 97,
        name: 'Modern OTP page',
        href: routes.auth.otp1,
      },
      {
        id: 98,
        name: 'Vintage OTP page',
        href: routes.auth.otp2,
      },
      {
        id: 99,
        name: 'Trendy OTP page',
        href: routes.auth.otp3,
      },
      {
        id: 100,
        name: 'Elegant OTP page',
        href: routes.auth.otp4,
      },
      {
        id: 101,
        name: 'Classic OTP page',
        href: routes.auth.otp5,
      },
    ],
  },
  {
    id: 102,
    name: 'Product',
    href: '#',
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        id: 103,
        name: 'Products',
        href: routes.eproduct.products,
        badge: '',
      },
      {
        id: 104,
        name: 'Product Details',
        href: routes.eproduct.productDetails(DUMMY_ID),
      },
      {
        id: 105,
        name: 'Create Product',
        href: routes.eproduct.createProduct,
      },
      {
        id: 106,
        name: 'Edit Product',
        href: routes.eproduct.ediProduct(DUMMY_ID),
      },
    ]},
    {
      id: 107,
      name: 'Order',
      href: '#',
      icon: <PiShoppingCartDuotone />,
      dropdownItems: [
        {
          id: 108,
          name: 'Orders',
          href: routes.order.orders,
        },
        {
          id: 109,
          name: 'Order Details',
          href: routes.order.orderDetails(DUMMY_ID),
        },
        {
          id: 110,
          name: 'Create Order',
          href: routes.order.createOrder,
        },
        {
          id: 111,
          name: 'Edit Order',
          href: routes.order.editOrder(DUMMY_ID),
        },
      ]},
];
