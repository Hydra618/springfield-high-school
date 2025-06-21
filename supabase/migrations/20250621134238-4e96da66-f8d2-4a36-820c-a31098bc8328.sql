
-- Enable RLS and create policies for gallery_items table
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view gallery items (public gallery)
CREATE POLICY "Anyone can view gallery items" 
  ON public.gallery_items 
  FOR SELECT 
  USING (true);

-- Allow anyone to insert gallery items (for admin functionality)
CREATE POLICY "Anyone can insert gallery items" 
  ON public.gallery_items 
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to update gallery items (for admin functionality)
CREATE POLICY "Anyone can update gallery items" 
  ON public.gallery_items 
  FOR UPDATE 
  USING (true);

-- Allow anyone to delete gallery items (for admin functionality)
CREATE POLICY "Anyone can delete gallery items" 
  ON public.gallery_items 
  FOR DELETE 
  USING (true);

-- Also add policies for announcements table if they don't exist
CREATE POLICY "Anyone can view announcements" 
  ON public.announcements 
  FOR SELECT 
  USING (true);

CREATE POLICY "Anyone can insert announcements" 
  ON public.announcements 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can update announcements" 
  ON public.announcements 
  FOR UPDATE 
  USING (true);

CREATE POLICY "Anyone can delete announcements" 
  ON public.announcements 
  FOR DELETE 
  USING (true);
