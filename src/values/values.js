import brazil from './../public/assets/countries/brazil.png'
import argentina from './../public/assets/countries/argentina.png'
import australia from './../public/assets/countries/australia.png'
import austria from './../public/assets/countries/austria.png'
import belarus from './../public/assets/countries/belarus.png'
import belgium from './../public/assets/countries/belgium.png'
import bolivia from './../public/assets/countries/bolivia.png'
import canada from './../public/assets/countries/canada.png'
import chile from './../public/assets/countries/chile.png'
import china from './../public/assets/countries/china.png'
import colombia from './../public/assets/countries/colombia.png'
import costa from './../public/assets/countries/costa.png'
import dom from './../public/assets/countries/dom.png'
import ecuador from './../public/assets/countries/ecuador.png'
import el from './../public/assets/countries/el.png'
import france from './../public/assets/countries/france.png'
import germany from './../public/assets/countries/germany.png'
import guatemala from './../public/assets/countries/guatemala.png'
import honduras from './../public/assets/countries/honduras.png'
import hong from './../public/assets/countries/hong.png'
import india from './../public/assets/countries/india.png'
import ireland from './../public/assets/countries/ireland.png'
import israel from './../public/assets/countries/israel.png'
import italy from './../public/assets/countries/italy.png'
import japan from './../public/assets/countries/japan.png'
import kaz from './../public/assets/countries/kaz.png'
import korea from './../public/assets/countries/korea.png'
import malaysia from './../public/assets/countries/malaysia.png'
import mexico from './../public/assets/countries/mexico.png'
import netherlands from './../public/assets/countries/netherlands.png'
import nicaragua from './../public/assets/countries/nicaragua.png'
import panama from './../public/assets/countries/panama.png'
import paraguay from './../public/assets/countries/paraguay.png'
import peru from './../public/assets/countries/peru.png'
import philippines from './../public/assets/countries/philippines.png'
import poland from './../public/assets/countries/poland.png'
import portugal from './../public/assets/countries/portugal.png'
import rico from './../public/assets/countries/rico.png'
import russia from './../public/assets/countries/russia.png'
import singapore from './../public/assets/countries/singapore.png'
import spain from './../public/assets/countries/spain.png'
import switzerland from './../public/assets/countries/switzerland.png'
import taiwan from './../public/assets/countries/taiwan.png'
import turkey from './../public/assets/countries/turkey.png'
import uk from './../public/assets/countries/uk.png'
import uruguay from './../public/assets/countries/uruguay.png'
import venezuela from './../public/assets/countries/venezuela.png'
import usa from './../public/assets/countries/usa.png'
import ww from './../public/assets/countries/ww.png'

export const adjustColors = [
  { name: 'Deuteranomaly', value: 1 },
  { name: 'Protanomaly', value: 2 },
  { name: 'Protanopia', value: 3 },
  { name: 'Deuteranopia', value: 4 },
  { name: 'Tritanopia', value: 5 },
  { name: 'Tritanomaly', value: 6 },
  { name: 'Achromatopsia', value: 7 },
]

export const my13Rms = [
  { name: 'Products of your Interest', count: 0, divider: true, classNames: '' },
  { name: 'Business of your Interest', count: 0, divider: true, classNames: '' },
  { name: 'My Groups', count: 5, divider: true, classNames: '' },
  { name: 'Purchase history', count: 0, divider: true, classNames: '' },
  { name: 'Recent activity', count: 0, divider: true, classNames: '' },
  { name: 'Buy again', count: 0, divider: true, classNames: '' },
  { name: 'Selling', count: 0, divider: true, classNames: '' },
  { name: 'Saved searches', count: 10, divider: true, classNames: '' },
  { name: 'Saved sellers', count: 30, divider: true, classNames: '' },
  { name: 'Inbox', count: 1, divider: false, classNames: '' },
]

export const productsArray = [
  // { label: 'All', value: 'all' },
  { label: 'Products', value: 'products' },
  { value: 'bulk', label: 'Bulk Items' },
  { value: 'commercial', label: 'Commercial Agent' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'manufacturer', label: 'Manufacturer' },
  { value: 'supplier', label: 'Supplier' },
  { value: 'groups', label: 'Groups' },
  { value: 'businesses', label: 'Businesses' },
]

export const departmentsArray = [
  { value: 'all', label: 'All Departments' },
  { value: 'antiques', label: 'Antiques' },
  { value: 'art', label: 'Art' },
  { value: 'baby', label: 'Baby' },
  { value: 'books', label: 'Books' },
  { value: 'b&i', label: 'Business & Industrial' },
  { value: 'c&a', label: 'Cameras & Photo' },
  { value: 'phone', label: 'Cell Phones & Accessories' },
  { value: 'clothing', label: 'Clothing, Shoes & Accessories' },
  { value: 'coins', label: 'Coins & Paper Money' },
  { value: 'collectibles', label: 'Collectibles' },
  { value: 'computer', label: 'Computers/Tablets & Networking' },
  { value: 'consumer', label: 'Consumer Electronics' },
  { value: 'crafts', label: 'Crafts' },
  { value: 'dolls', label: 'Dolls & Bears' },
  { value: 'dvd', label: 'DVDs & Movies' },
  { value: 'entertainment', label: 'Entertainment Memorabilia' },
  { value: 'giftcard', label: 'Gift Cards & Coupons' },
  { value: 'health', label: 'Health & Beauty' },
  { value: 'home', label: 'Home & Garden' },
  { value: 'jewelry', label: 'Jewelry & Watches' },
  { value: 'music', label: 'Music' },
  { value: 'musical', label: 'Musical Instruments & Gear' },
  { value: 'pet', label: 'Pet Supplies' },
  { value: 'pottery', label: 'Pottery & Glass' },
  { value: 'realestate', label: 'Real Estate' },
  { value: 'specialty', label: 'Specialty Services' },
  { value: 'sporting', label: 'Sporting Goods' },
  { value: 'sports', label: 'Sports Mem, Cards & Fan Shop' },
  { value: 'stamps', label: 'Stamps' },
  { value: 'tickets', label: 'Tickets & Experiences' },
  { value: 'toys', label: 'Toys & Hobbies' },
  { value: 'travel', label: 'Travel' },
  { value: 'games', label: 'Video Games & Consoles' },
  { value: 'else', label: 'Everything Else' },
]

export const countries = [
  { countryCode: 'WW', label: 'WorldWide', flag: ww },
  { countryCode: 'AR', label: 'Argentina', flag: argentina },
  { countryCode: 'AU', label: 'Australia', flag: australia },
  { countryCode: 'AT', label: 'Austria', flag: austria },
  { countryCode: 'BY', label: 'Belarus', flag: belarus },
  { countryCode: 'BE', label: 'Belgium', flag: belgium },
  { countryCode: 'BO', label: 'Bolivia', flag: bolivia },
  { countryCode: 'BR', label: 'Brazil', flag: brazil },
  { countryCode: 'CA', label: 'Canada', flag: canada },
  { countryCode: 'CL', label: 'Chile', flag: chile },
  { countryCode: 'CN', label: 'China', flag: china },
  { countryCode: 'CO', label: 'Colombia', flag: colombia },
  { countryCode: 'CR', label: 'Costa Rica', flag: costa },
  { countryCode: 'DO', label: 'Dominican Republic', flag: dom },
  { countryCode: 'EC', label: 'Ecuador', flag: ecuador },
  { countryCode: 'SV', label: 'El Salvador', flag: el },
  { countryCode: 'FR', label: 'France', flag: france },
  { countryCode: 'DE', label: 'Germany', flag: germany },
  { countryCode: 'GT', label: 'Guatemala', flag: guatemala },
  { countryCode: 'HN', label: 'Honduras', flag: honduras },
  { countryCode: 'HK', label: 'Hong Kong', flag: hong },
  { countryCode: 'IN', label: 'India', flag: india },
  { countryCode: 'IE', label: 'Ireland', flag: ireland },
  { countryCode: 'IL', label: 'Israel', flag: israel },
  { countryCode: 'IT', label: 'Italy', flag: italy },
  { countryCode: 'JP', label: 'Japan', flag: japan },
  { countryCode: 'KZ', label: 'Kazakhstan', flag: kaz },
  { countryCode: 'KP', label: 'Korea', flag: korea },
  { countryCode: 'MY', label: 'Malaysia', flag: malaysia },
  { countryCode: 'MX', label: 'Mexico', flag: mexico },
  { countryCode: 'NL', label: 'Netherlands', flag: netherlands },
  { countryCode: 'NI', label: 'Nicaragua', flag: nicaragua },
  { countryCode: 'PA', label: 'Panama', flag: panama },
  { countryCode: 'PY', label: 'Paraguay', flag: paraguay },
  { countryCode: 'PE', label: 'Peru', flag: peru },
  { countryCode: 'PH', label: 'Philippines', flag: philippines },
  { countryCode: 'PL', label: 'Poland', flag: poland },
  { countryCode: 'PT', label: 'Portugal', flag: portugal },
  { countryCode: 'PR', label: 'Puerto Rico', flag: rico },
  { countryCode: 'RU', label: 'Russia', flag: russia },
  { countryCode: 'SG', label: 'Singapore', flag: singapore },
  { countryCode: 'ES', label: 'Spain', flag: spain },
  { countryCode: 'CH', label: 'Switzerland', flag: switzerland },
  { countryCode: 'TW', label: 'Taiwan', flag: taiwan },
  { countryCode: 'TR', label: 'Turkey', flag: turkey },
  { countryCode: 'GB', label: 'United Kingdom', flag: uk },
  { countryCode: 'UY', label: 'Uruguay', flag: uruguay },
  { countryCode: 'VE', label: 'Venezuela', flag: venezuela },
  { countryCode: 'US', label: 'United States', flag: usa },
]
