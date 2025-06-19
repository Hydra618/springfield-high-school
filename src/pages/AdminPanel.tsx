
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Upload, Edit, Trash2, Plus, Eye, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { Announcement, GalleryItem, ContactInquiry } from '@/types/school';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<'announcements' | 'gallery' | 'inquiries'>('announcements');
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setIsLoading(true);
    await Promise.all([
      fetchAnnouncements(),
      fetchGalleryItems(),
      fetchInquiries()
    ]);
    setIsLoading(false);
  };

  const fetchAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      if (data) setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const fetchGalleryItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .order('event_date', { ascending: false });
      
      if (error) throw error;
      if (data) setGalleryItems(data);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    }
  };

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      if (data) setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  const handleSaveAnnouncement = async (announcementData: Partial<Announcement>) => {
    try {
      if (editingItem && editingItem.id) {
        // Update existing announcement
        const { error } = await supabase
          .from('announcements')
          .update({
            title: announcementData.title,
            content: announcementData.content,
            is_active: announcementData.is_active,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingItem.id);

        if (error) throw error;
        toast({ title: "Announcement updated successfully!" });
      } else {
        // Create new announcement
        const { error } = await supabase
          .from('announcements')
          .insert([{
            title: announcementData.title!,
            content: announcementData.content!,
            is_active: announcementData.is_active ?? true
          }]);

        if (error) throw error;
        toast({ title: "Announcement created successfully!" });
      }

      setEditingItem(null);
      fetchAnnouncements();
    } catch (error) {
      console.error('Error saving announcement:', error);
      toast({
        title: "Error",
        description: "Failed to save announcement",
        variant: "destructive"
      });
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;

    try {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Announcement deleted successfully!" });
      fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting announcement:', error);
      toast({
        title: "Error",
        description: "Failed to delete announcement",
        variant: "destructive"
      });
    }
  };

  const handleImageUpload = async (file: File): Promise<string> => {
    // This is a placeholder for image upload functionality
    // In a real implementation, you would upload to Supabase Storage or another service
    return URL.createObjectURL(file);
  };

  const handleSaveGalleryItem = async (galleryData: Partial<GalleryItem>, file?: File) => {
    try {
      let imageUrl = galleryData.image_url;
      
      if (file) {
        imageUrl = await handleImageUpload(file);
      }

      if (editingItem && editingItem.id) {
        // Update existing gallery item
        const { error } = await supabase
          .from('gallery_items')
          .update({
            title: galleryData.title,
            description: galleryData.description,
            image_url: imageUrl,
            event_date: galleryData.event_date,
            category: galleryData.category
          })
          .eq('id', editingItem.id);

        if (error) throw error;
        toast({ title: "Gallery item updated successfully!" });
      } else {
        // Create new gallery item
        const { error } = await supabase
          .from('gallery_items')
          .insert([{
            title: galleryData.title!,
            description: galleryData.description,
            image_url: imageUrl!,
            event_date: galleryData.event_date!,
            category: galleryData.category!
          }]);

        if (error) throw error;
        toast({ title: "Gallery item created successfully!" });
      }

      setEditingItem(null);
      fetchGalleryItems();
    } catch (error) {
      console.error('Error saving gallery item:', error);
      toast({
        title: "Error",
        description: "Failed to save gallery item",
        variant: "destructive"
      });
    }
  };

  const handleDeleteGalleryItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;

    try {
      const { error } = await supabase
        .from('gallery_items')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Gallery item deleted successfully!" });
      fetchGalleryItems();
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      toast({
        title: "Error",
        description: "Failed to delete gallery item",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600">Springfield High School</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('announcements')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'announcements'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Announcements
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'gallery'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'inquiries'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Inquiries
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'announcements' && (
          <AnnouncementsTab
            announcements={announcements}
            onEdit={setEditingItem}
            onDelete={handleDeleteAnnouncement}
            onSave={handleSaveAnnouncement}
            editingItem={editingItem}
            onCancelEdit={() => setEditingItem(null)}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryTab
            galleryItems={galleryItems}
            onEdit={setEditingItem}
            onDelete={handleDeleteGalleryItem}
            onSave={handleSaveGalleryItem}
            editingItem={editingItem}
            onCancelEdit={() => setEditingItem(null)}
          />
        )}

        {activeTab === 'inquiries' && (
          <InquiriesTab inquiries={inquiries} />
        )}
      </main>
    </div>
  );
};

// Announcements Tab Component
const AnnouncementsTab = ({ announcements, onEdit, onDelete, onSave, editingItem, onCancelEdit }: any) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    is_active: true
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title || '',
        content: editingItem.content || '',
        is_active: editingItem.is_active ?? true
      });
    } else {
      setFormData({ title: '', content: '', is_active: true });
    }
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ title: '', content: '', is_active: true });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Announcements</h2>
        <button
          onClick={() => onEdit({})}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>New Announcement</span>
        </button>
      </div>

      {/* Form */}
      {editingItem !== null && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">
            {editingItem.id ? 'Edit Announcement' : 'Create New Announcement'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
                Active (visible on website)
              </label>
            </div>
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button
                type="button"
                onClick={onCancelEdit}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Announcements List */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-medium">All Announcements</h3>
        </div>
        <div className="divide-y">
          {announcements.map((announcement: Announcement) => (
            <div key={announcement.id} className="p-6 flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    announcement.is_active 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {announcement.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{announcement.content}</p>
                <p className="text-sm text-gray-500">
                  Created: {new Date(announcement.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => onEdit(announcement)}
                  className="text-blue-600 hover:text-blue-800 p-2"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onDelete(announcement.id)}
                  className="text-red-600 hover:text-red-800 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Gallery Tab Component
const GalleryTab = ({ galleryItems, onEdit, onDelete, onSave, editingItem, onCancelEdit }: any) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    category: 'events' as const,
    image_url: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title || '',
        description: editingItem.description || '',
        event_date: editingItem.event_date ? editingItem.event_date.split('T')[0] : '',
        category: editingItem.category || 'events',
        image_url: editingItem.image_url || ''
      });
    } else {
      setFormData({
        title: '',
        description: '',
        event_date: '',
        category: 'events',
        image_url: ''
      });
    }
    setSelectedFile(null);
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData, selectedFile);
    setFormData({ title: '', description: '', event_date: '', category: 'events', image_url: '' });
    setSelectedFile(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Gallery</h2>
        <button
          onClick={() => onEdit({})}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add Photo</span>
        </button>
      </div>

      {/* Form */}
      {editingItem !== null && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">
            {editingItem.id ? 'Edit Photo' : 'Add New Photo'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                <input
                  type="date"
                  value={formData.event_date}
                  onChange={(e) => setFormData(prev => ({ ...prev, event_date: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="events">School Events</option>
                <option value="academics">Academic Activities</option>
                <option value="sports">Sports</option>
                <option value="cultural">Cultural Programs</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required={!editingItem.id}
              />
            </div>
            
            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button
                type="button"
                onClick={onCancelEdit}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item: GalleryItem) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  <p>{new Date(item.event_date).toLocaleDateString()}</p>
                  <p className="capitalize">{item.category}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inquiries Tab Component
const InquiriesTab = ({ inquiries }: { inquiries: ContactInquiry[] }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Contact Inquiries</h2>
      
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-medium">Recent Inquiries</h3>
        </div>
        <div className="divide-y">
          {inquiries.map((inquiry: ContactInquiry) => (
            <div key={inquiry.id} className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{inquiry.name}</h4>
                  <p className="text-sm text-gray-600">{inquiry.email}</p>
                  {inquiry.phone && (
                    <p className="text-sm text-gray-600">{inquiry.phone}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    inquiry.status === 'new' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : inquiry.status === 'contacted'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {inquiry.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-sm font-medium text-gray-700">Subject: {inquiry.subject}</p>
              </div>
              <p className="text-gray-600 text-sm">{inquiry.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
