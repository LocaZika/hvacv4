/***LAYOUT***/
  /**HEADER**/
  type TSchedule = string;
  type TContactEmail = string;
  type TContactPhone = string;
  type TSocials = {
    id: number,
    facebook: string,
    twitter: string,
    instagram: string,
    skype: string,
    google: string,
  };
  type TNavbarItem = {
    id: number,
    name: string,
    path: string,
  };
  type TContactInfo = {
    email: TContactEmail,
    phone: TContactPhone,
    schedule: TSchedule,
    socials: TSocials,
  }
  type TNavbar = TNavbarItem[];
  type THeader = {
    navbar: TNavbar,
    contactInfo: TContactInfo,
  }
  /**HEADER**/
  /**FOOTER**/
  type TTopCarTypeItem = {
    id: number,
    type: string,
  };
  type TTopCarBrandItem = {
    id: number,
    brand: string,
  };
  type TFooter = {
    contactTitle: string,
    aboutContent: string,
    imgs: {bg: string, logo: string},
    topCarTypes: TTopCarTypeItem[],
    topCarBrands: TTopCarBrandItem[],
    contactInfo: TContactInfo,
  }
  /**FOOTER**/
type TLayout = {
  navbar: TNavbar,
  footer: TFooter,
  contactInfo: TContactInfo,
};
/***LAYOUT***/
/***HOMEPAGE***/
  /**HERO**/
  type THero = {
    title: string,
    hotRent: {
      id: number,
      name: string,
      price: number,
      model: number,
      imgs: TImg[],
    },
    filterForm: {
      models: number[],
      brands: string[],
      types: string[],
      transmissions: string[],
    }
  };
  /**SERVICE**/
  type TServiceItem = {
    id: number,
    title: string,
    text: string,
    img: string,
  };
  type TServices = {
    title: string,
    subTitle: string,
    text: string,
    items: TServiceItem[],
  };
  /**FEATURE**/
  type TFeatureHomepageItem = {
    id: number,
    text: string,
    img: string,
  };
  type TFeaturesHomepage = {
    id: number,
    title: string,
    subTitle: string,
    text: string[],
    items: TFeatureHomepageItem[],
  };
  /**CAR**/
  type TCarItemMinData = {
    id: number,
    name: string,
    price: number,
    tradeType: string,
    hp: number,
    mileage: number,
    transmission: string,
    model: number,
    imgs: TImg[],
  }
  type TCarHomepage = {
    id: number,
    title: string,
    subTitle: string,
    items: TCarItemMinData[],
  };
  /**ChooseUs**/
  type TChooseUsItem = {
    id: number,
    text: string,
  };
  type TChooseUs = {
    id: number,
    title: string,
    text: string,
    items: TChooseUsItem[],
    videoUrl: string,
  };
  /**CTA**/
  type TCtaItem = {
    id: number,
    title: string,
    text: string,
    img: string,
  };
  type TCta = {
    id: number,
    items: TCtaItem[],
  };
type THomepage = {
  hero: THero,
  services: TServices,
  features: TFeaturesHomepage,
  car: TCarHomepage,
  chooseus: TChooseUs,
  cta: TCta,
};
/***HOMEPAGE***/
/***CARPAGE***/
type TCarItem = TCarItemMinData & {
  brand: string,
  fuelType: string,
  type: string,
  detailImgs: TImg[],
};
type TCarFilterFormItem = {
  id: number,
  name: string,
  label: string,
  options: string[] | number[],
}
type TCarFilterForm = TCarFilterFormItem[];
type TCarspage = {
  id: number,
  filterForm: TCarFilterForm,
}
/***CARPAGE***/
/***ABOUTPAGE***/
  /**Features**/
  type TFeatureAboutItem = {
    id: number,
    title: string,
    text: string,
    img: string,
  };
  /**About**/
  type TAboutItem = {
    id: number,
    title: string,
    text: string,
  };
  type TAbout = {
    title: string[];
    text: string;
    img: string;
    features: TFeatureAboutItem[];
    items: TAboutItem[];
  };
  /**Team**/
  type TTeamItem = {
    id: number,
    name: string,
    position: string,
    img: string,
  };
  type TTeams = {
    id: number,
    title: string,
    subTitle: string,
    items: TTeamItem[],
  };
  /**Testimonials**/
  type TTestimonialItem = {
    id: number,
    name: string,
    position: string,
    text: string,
    img: string,
    rate: number,
  };
  type TTestimonials = {
    id: number,
    title: string,
    subTitle: string,
    text: string,
    items: TTestimonialItem[],
  };
  /**Quantities**/
  type TQuantityItem = {
    id: number,
    name: string,
    value: number,
  };
  type TQuantities = {
    id: number,
    items: TQuantityItem[],
  };
  /**Clients**/
  type TClientItem = {
    id: number,
    img: string,
    alt?: string,
  };
  type TClients = {
    id: number,
    title: string,
    subTitle: string,
    items: TClientItem[],
  };
type TAboutpage = TAbout & {
  id: number,
  teams: TTeam,
  testimonials: TTestimonial,
  quantities: TQuantities,
  clients: TClients,
};
/***ABOUTPAGE***/
/***CONTACTPAGE***/
type TContactSchdule = {
  id: number,
  weekdays: string,
  saturday: string,
  sunday: string,
};
type TShowroomItem = {
  id: number,
  name: string,
  address: string,
  phone: string,
  email: string,
}
type TContactpage = {
  id: number,
  title: string,
  text: string,
  schedule: TContactSchdule,
  showrooms: TShowroomItem[],
}
/***CONTACTPAGE***/