export const routes = {


  facturaelectroncia: {
    electronic: '/electronicbiling',
    // products: '/ecommerce/products',
    // createProduct: '/ecommerce/products/create',
    // productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    // ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
 
    electronicbiling : '/electronicbiling', 
    
    
  },





  eproduct:{
    products: '/products',
    createProduct: '/products/create',
    productDetails: (slug: string) => `/products/${slug}`,
    ediProduct: (slug: string) => `/products/${slug}/edit`,
  },
  order:{
    orders: '/orders',
    createOrder: '/orders/create',
    orderDetails: (id: string) => `/orders/${id}`,
    editOrder: (id: string) => `/orders/${id}/edit`,

  },







  
  eCommerce: {
    dashboard: '/ecommerce',
    // products: '/ecommerce/products',
    // createProduct: '/ecommerce/products/create',
    // productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    // ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
    categories: '/ecommerce/categories',
    createCategory: '/ecommerce/categories/create',
    editCategory: (id: string) => `/ecommerce/categories/${id}/edit`,
    orders: '/ecommerce/orders',
    createOrder: '/ecommerce/orders/create',
    orderDetails: (id: string) => `/ecommerce/orders/${id}`,
    editOrder: (id: string) => `/ecommerce/orders/${id}/edit`,
    reviews: '/ecommerce/reviews',
    shop: '/ecommerce/shop',
    cart: '/ecommerce/cart',
    checkout: '/ecommerce/checkout',
    trackingId: (id: string) => `/ecommerce/tracking/${id}`,
  },
  reports: '/reports',
  repo: {
    dashboard: '/repo',
  },



  inventory: '/inventory',
  invent: {
    dashboard: '/invent',
  },


  clients: '/clients',
  client: {
    dashboard: '/client',
  },
  quotes: '/quotes',
  quote: {
    dashboard: '/quotes',
  },


  option: {
    dashboard: '/option',
    // products: '/ecommerce/products',
    // createProduct: '/ecommerce/products/create',
    // productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    // ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
 
    companydata : '/option/companydata',
    vendor : '/option/vendor'
    
  },






  suppliers: {
    dashboard: '/suppliers',
    // products: '/ecommerce/products',
    // createProduct: '/ecommerce/products/create',
    // productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    // ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
 
    suppliers : '/suppliers/suppliers',
    purchaseorders : '/suppliers/purchaseorders'
    
  },
  searchAndFilter: {
    realEstate: '/search/real-estate',
    nft: '/search/nft',
    flight: '/search/flight',
  },
  support: {
    dashboard: '/support',
    inbox: '/support/inbox',
    supportCategory: (category: string) => `/support/inbox/${category}`,
    messageDetails: (id: string) => `/support/inbox/${id}`,
    snippets: '/support/snippets',
    createSnippet: '/support/snippets/create',
    viewSnippet: (id: string) => `/support/snippets/${id}`,
    editSnippet: (id: string) => `/support/snippets/${id}/edit`,
    templates: '/support/templates',
    createTemplate: '/support/templates/create',
    viewTemplate: (id: string) => `/support/templates/${id}`,
    editTemplate: (id: string) => `/support/templates/${id}/edit`,
  },
  logistics: {
    dashboard: '/logistics',
    shipmentList: '/logistics/shipments',
    customerProfile: '/logistics/customer-profile',
    createShipment: '/logistics/shipments/create',
    editShipment: (id: string) => `/logistics/shipments/${id}/edit`,
    shipmentDetails: (id: string) => `/logistics/shipments/${id}`,
    tracking: (id: string) => `/logistics/tracking/${id}`,
  },

 


  executive: {
    dashboard: '/executive',
  },
  analytics: '/analytics',
  financial: {
    dashboard: '/financial',
  },

 
  
  file: {
    dashboard: '/file',
    manager: '/file-manager',
    upload: '/file-manager/upload',
    create: '/file-manager/create',
  },
  pos: {
    index: '/point-of-sale',
  },
  eventCalendar: '/event-calendar',
  rolesPermissions: '/roles-permissions',
  invoice: {
    home: '/invoice',
    create: '/invoice/create',
    details: (id: string) => `/invoice/${id}`,
    edit: (id: string) => `/invoice/${id}/edit`,
  }, 
  widgets: {
    cards: '/widgets/cards',
    icons: '/widgets/icons',
    charts: '/widgets/charts',
    maps: '/widgets/maps',
    banners: '/widgets/banners',
  },
  tables: {
    basic: '/tables/basic',
    collapsible: '/tables/collapsible',
    enhanced: '/tables/enhanced',
    pagination: '/tables/pagination',
    search: '/tables/search',
    stickyHeader: '/tables/sticky-header',
  },
  multiStep: '/multi-step',
  forms: {
    profileSettings: '/forms/profile-settings',
    notificationPreference: '/forms/profile-settings/notification',
    personalInformation: '/forms/profile-settings/profile',
    newsletter: '/forms/newsletter',
  },
  emailTemplates: '/email-templates',
  profile: '/profile',
  welcome: '/welcome',
  comingSoon: '/coming-soon',
  accessDenied: '/access-denied',
  notFound: '/not-found',
  maintenance: '/maintenance',
  blank: '/blank',
  auth: {
    signUp1: '/auth/sign-up-1',
    signUp2: '/auth/sign-up-2',
    signUp3: '/auth/sign-up-3',
    signUp4: '/auth/sign-up-4',
    signUp5: '/auth/sign-up-5',
    // sign in
    signIn1: '/auth/sign-in-1',
    signIn2: '/auth/sign-in-2',
    signIn3: '/auth/sign-in-3',
    signIn4: '/auth/sign-in-4',
    signIn5: '/auth/sign-in-5',
    // forgot password
    forgotPassword1: '/auth/forgot-password-1',
    forgotPassword2: '/auth/forgot-password-2',
    forgotPassword3: '/auth/forgot-password-3',
    forgotPassword4: '/auth/forgot-password-4',
    forgotPassword5: '/auth/forgot-password-5',
    // OTP
    otp1: '/auth/otp-1',
    otp2: '/auth/otp-2',
    otp3: '/auth/otp-3',
    otp4: '/auth/otp-4',
    otp5: '/auth/otp-5',
  },
  signIn: '/signin',
};
