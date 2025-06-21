
import React, { useState, useEffect } from 'react';
import { Search, Calendar, Tag, Trophy, GraduationCap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { getImageUrl } from '@/utils/imageUpload';
import type { GalleryItem } from '@/types/school';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { value: 'all', label: 'All Events', icon: null },
    { value: 'ssc-results', label: 'SSC Results', icon: Trophy },
    { value: 'academics', label: 'Academic Activities', icon: GraduationCap },
    { value: 'events', label: 'School Events', icon: Calendar },
    { value: 'sports', label: 'Sports', icon: null },
    { value: 'cultural', label: 'Cultural Programs', icon: null },
  ];

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  useEffect(() => {
    filterItems();
  }, [galleryItems, selectedCategory, searchTerm]);

  const fetchGalleryItems = async () => {
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('event_date', { ascending: false });
    
    if (data && !error) {
      const typedData = data.map(item => ({
        ...item,
        category: item.category as 'events' | 'academics' | 'sports' | 'cultural' | 'ssc-results'
      }));
      setGalleryItems(typedData);
    }
  };

  const filterItems = () => {
    let filtered = galleryItems;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredItems(filtered);
  };

  const isSSCResult = (item: GalleryItem) => {
    return item.category === 'ssc-results' || 
           item.title.toLowerCase().includes('ssc') ||
           item.title.toLowerCase().includes('board result');
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Photo Gallery
          </h1>
          <p className="text-xl text-blue-100 animate-fade-in delay-200">
            Capturing moments, preserving memories
          </p>
          <div className="mt-8 animate-fade-in delay-400">
            <div className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold">
              <Trophy className="h-5 w-5" />
              <span>Featuring SSC 2024 & 2025 Results!</span>
            </div>
          </div>
        </div>
      </section>

      {/* SSC Results Highlight */}
      <section className="py-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-b-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
              <Trophy className="h-8 w-8 text-yellow-600" />
              <span>SSC Board Results 2024 & 2025</span>
              <Trophy className="h-8 w-8 text-yellow-600" />
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our students' outstanding achievements in SSC examinations. 
              View the complete results and success stories from our school.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                      selectedCategory === category.value
                        ? category.value === 'ssc-results'
                          ? 'bg-yellow-500 text-white shadow-lg transform scale-105'
                          : 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No photos found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter options.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                    isSSCResult(item) ? 'ring-2 ring-yellow-400 shadow-yellow-100' : ''
                  }`}
                  onClick={() => setSelectedImage(item)}
                >
                  {isSSCResult(item) && (
                    <div className="absolute top-2 right-2 z-10">
                      <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Trophy className="h-3 w-3" />
                        <span>SSC</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={getImageUrl(item.image_url)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className={`font-semibold text-gray-800 mb-2 line-clamp-2 ${
                      isSSCResult(item) ? 'text-yellow-700' : ''
                    }`}>
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(item.event_date).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span className="capitalize">{item.category.replace('-', ' ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-6xl max-h-full bg-white rounded-xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={getImageUrl(selectedImage.image_url)}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors text-xl"
              >
                ×
              </button>
              
              {isSSCResult(selectedImage) && (
                <div className="absolute top-4 left-4">
                  <div className="bg-yellow-500 text-white px-3 py-2 rounded-full font-bold flex items-center space-x-2">
                    <Trophy className="h-4 w-4" />
                    <span>SSC Board Results</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className={`text-3xl font-bold text-gray-800 mb-3 ${
                isSSCResult(selectedImage) ? 'text-yellow-700' : ''
              }`}>
                {selectedImage.title}
              </h3>
              
              {selectedImage.description && (
                <p className="text-gray-600 mb-4 text-lg">{selectedImage.description}</p>
              )}
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-base">{new Date(selectedImage.event_date).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Tag className="h-5 w-5" />
                  <span className="capitalize text-base">{selectedImage.category.replace('-', ' ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
