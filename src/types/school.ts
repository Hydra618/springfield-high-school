
export interface Announcement {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  event_date: string;
  created_at: string;
  category: 'events' | 'academics' | 'sports' | 'cultural';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_at: string;
  status: 'new' | 'contacted' | 'resolved';
}
