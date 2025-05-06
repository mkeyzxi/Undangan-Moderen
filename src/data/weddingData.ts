import { CoupleInfo, EventDetails, GalleryImage } from '../types';

export const coupleInfo: CoupleInfo = {
  groom: {
    name: 'Zandi Satriawan. I',
    fatherName: 'Ilman, S.IP',
    motherName: 'Haslita. N',
  },
  bride: {
    name: 'Suci Ramadhani',
    fatherName: 'Basri',
    motherName: 'Suriani',
  },
};

export const eventDetails: EventDetails = {
  date: '2025-05-15',
  time: '11:00 WITA, lanjut 19:30 sampai selesai',
  venue: 'Lingkungan Tambi',
  location: 'Kelurahan Mamuju, Kec. Mamuju',
  coordinates: {
    lat: -2.6748, // This is an example coordinate - replace with actual
    lng: 118.8622, // This is an example coordinate - replace with actual
  },
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/galery/galery7.webp',
    alt: 'Wedding couple',
  },
  {
    id: 2,
    src: '/galery/galery2.webp',
    alt: 'Engagement photo',
  },
  {
    id: 3,
    src: '/galery/galery3.webp',
    alt: 'Couple moment',
  },
  {
    id: 4,
    src: '/galery/galery4.webp',
    alt: 'Traditional ceremony',
  },
  {
    id: 5,
    src: '/galery/galery5.webp',
    alt: 'Wedding details',
  },
  {
    id: 6,
    src: '/galery/galery6.webp',
    alt: 'Beautiful moment',
  },
];

export const especialInvitees = [
  'Yuslifar Yunus Jafar',
  'Abd. Rajab Rahim',
  'Andi Fahri Andi Rauf',
  'Abd. Syukur, S.Pd',
  'Hasrat. N',
  'Andi Lukman',
  'Brigpol Noldy Selan, S.Sos',
  'Firman, S.M',
];