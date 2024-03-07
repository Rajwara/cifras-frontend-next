export const routes = {


  facturaelectroncia: {
  
 
    // electronicbiling : '/electronicbiling', 
    
    
  },



  client:{
    clients: '/clients',
    createClient: '/clients/create',
    clientDetails: (slug: string) => `/clients/${slug}`,
    ediClient: (slug: string) => `/clients/${slug}/edit`,
  },

  inventory:{
    inventory: '/inventory',
    createInventory: '/inventory/create',
    inventoryDetails: (slug: string) => `/inventory/${slug}`,
    ediInventory: (slug: string) => `/inventory/${slug}/edit`,
  },


  purchaseorders:{
    purchaseorders: '/purchaseorders',
    createPurchaseOrder: '/purchaseorders/create',
    purchaseOrderDetails: (slug: string) => `/purchaseorders/${slug}`,
    ediPurchaseOrder: (slug: string) => `/purchaseorders/${slug}/edit`,
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


  quote:{
    quotes: '/quotes',
    createQuote: '/quotes/create',
    quoteDetails: (slug: string) => `/quotes/${slug}`,
    editQuote: (slug: string) => `/quotes/${slug}/edit`,
  },

  supplier:{
    supplier: '/supplier',
      createSupplier: '/supplier/create',
      supplierDetails: (slug: string) => `/supplier/${slug}`,
      editSupplier: (slug: string) => `/supplier/${slug}/edit`,
  },
  vendor:{
    vendor: '/vendor',
      createVendor: '/vendor/create',
      vendorDetails: (slug: string) => `/vendor/${slug}`,
      editVendor: (slug: string) => `/vendor/${slug}/edit`,
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

  reportPermissions: '/report-permissions',
  rolesPermiss: {
    dashboard: '/report',
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
