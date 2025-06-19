
-- Create announcements table for home page announcements
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create gallery_items table for photo gallery
CREATE TABLE public.gallery_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  event_date DATE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('events', 'academics', 'sports', 'cultural')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_inquiries table for contact form submissions
CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert some sample data
INSERT INTO public.announcements (title, content, is_active) VALUES
('Admissions Open for Academic Year 2024-25', 'We are pleased to announce that admissions are now open for the academic year 2024-25. Limited seats available. Contact us at +91 98491 61512 for more information.', true),
('Annual Sports Day - March 2024', 'Join us for our Annual Sports Day celebration on March 15th, 2024. Students will showcase their athletic talents in various sporting events.', true),
('Excellence in Board Results 2023', 'We are proud to announce that our students have achieved 95% success rate in the recent board examinations with several students securing distinction.', true);

INSERT INTO public.gallery_items (title, description, image_url, event_date, category) VALUES
('Annual Day Celebration 2023', 'Students performing cultural programs during our annual day celebration', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop', '2023-12-15', 'cultural'),
('Science Exhibition 2023', 'Students presenting their innovative science projects', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', '2023-11-20', 'academics'),
('Inter-School Cricket Championship', 'Our cricket team winning the inter-school championship', 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop', '2023-10-10', 'sports'),
('Teacher''s Day Celebration', 'Students honoring teachers on Teacher''s Day', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop', '2023-09-05', 'events'),
('Mathematics Olympiad Winners', 'Students receiving awards at the Mathematics Olympiad', 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop', '2023-08-25', 'academics');
