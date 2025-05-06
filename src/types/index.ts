export interface EventDetails {
  date: string;
  time: string;
  venue: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface CoupleInfo {
  groom: {
    name: string;
    fatherName: string;
    motherName: string;
  };
  bride: {
    name: string;
    fatherName: string;
    motherName: string;
  };
}

export interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  attending: boolean;
  numberOfGuests: number;
  message: string;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}