/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'apparel' | 'vinyl' | 'digital';
  image: string;
}

export interface Track {
  id: string;
  title: string;
  duration: string;
  isExclusive: boolean;
  previewUrl?: string;
}

export interface TourDate {
  id: string;
  date: string;
  venue: string;
  location: string;
  status: 'tickets' | 'sold-out' | 'exclusive';
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SHOY "CORE" HOODIE',
    price: 65,
    category: 'apparel',
    image: 'https://picsum.photos/seed/hoodie/600/800'
  },
  {
    id: '2',
    name: 'SHOY SONICS (LIMITED VINYL)',
    price: 35,
    category: 'vinyl',
    image: 'https://picsum.photos/seed/vinyl/600/600'
  },
  {
    id: '3',
    name: 'SHOY LOGO TEE',
    price: 30,
    category: 'apparel',
    image: 'https://picsum.photos/seed/tee/600/800'
  }
];

export const TRACKS: Track[] = [
  { 
    id: '1', 
    title: 'LAGOS NIGHT DRIVE', 
    duration: '3:45', 
    isExclusive: true,
    previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' 
  },
  { 
    id: '2', 
    title: 'SYSTEM SHOCK', 
    duration: '4:12', 
    isExclusive: false,
    previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
  },
  { 
    id: '3', 
    title: 'CONCRETE JUNGLE', 
    duration: '3:58', 
    isExclusive: true,
    previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'
  },
  { 
    id: '4', 
    title: 'TRIBAL BASS', 
    duration: '4:30', 
    isExclusive: true,
    previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },
  { 
    id: '5', 
    title: 'DESERT STORM', 
    duration: '4:05', 
    isExclusive: true,
    previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'
  },
];

export const TOUR_DATES: TourDate[] = [
  { id: '1', date: 'MAR 15', venue: 'PRINTWORKS', location: 'LONDON, UK', status: 'tickets' },
  { id: '2', date: 'MAR 22', venue: 'BERGHAIN', location: 'BERLIN, DE', status: 'sold-out' },
  { id: '3', date: 'APR 05', venue: 'TIME WARP', location: 'MANNHEIM, DE', status: 'exclusive' },
];
