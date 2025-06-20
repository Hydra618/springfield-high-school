
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Star, Users, Trophy, GraduationCap, Laptop, BookOpen, Users2, Zap, Brain } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { getImageUrl } from '@/utils/imageUpload';
import type { Announcement, GalleryItem } from '@/types/school';

const Home = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [announcementsResponse, galleryResponse] = await Promise.all([
        supabase
          .from('announcements')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false })
          .limit(3),
        supabase
          .from('gallery_items')
          .select('*')
          .order('event_date', { ascending: false })
          .limit(6)
      ]);

      if (announcementsResponse.data) {
        setAnnouncements(announcementsResponse.data);
      }
      if (galleryResponse.data) {
        const typedData = galleryResponse.data.map(item => ({
          ...item,
          category: item.category as 'events' | 'academics' | 'sports' | 'cultural'
        }));
        setGalleryItems(typedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(galleryItems.length, 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(galleryItems.length - 1, 0) : prev - 1
    );
  };

  useEffect(() => {
    if (galleryItems.length > 0) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [galleryItems.length]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 animate-pulse"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to Springfield High School
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-100">
            A 21st Century Skilled School Since 2003
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50 animate-fade-in delay-200">
            Empowering students with modern technology, innovative teaching methods, and digital literacy 
            to thrive in the digital age in Mancherial, Telangana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <a
              href="tel:9849161512"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a
              href="/admissions"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Apply for Admission
            </a>
          </div>
        </div>
      </section>

      {/* 21st Century Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              21st Century Learning Environment
            </h2>
            <p className="text-xl text-gray-600 mb-6">Modern facilities and innovative teaching methods</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto animate-scale-in"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 animate-fade-in hover:scale-105 group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Laptop className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Digital Classrooms</h3>
              <p className="text-gray-600 text-center">Smart boards, tablets, and interactive learning tools in every classroom</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 animate-fade-in delay-100 hover:scale-105 group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Brain className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">AI-Assisted Learning</h3>
              <p className="text-gray-600 text-center">Personalized learning paths with artificial intelligence support</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-red-500 animate-fade-in delay-200 hover:scale-105 group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                <Zap className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">STEM Labs</h3>
              <p className="text-gray-600 text-center">State-of-the-art science, technology, engineering, and math laboratories</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-teal-500 animate-fade-in delay-300 hover:scale-105 group">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Digital Library</h3>
              <p className="text-gray-600 text-center">Access to thousands of e-books, journals, and online resources</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-pink-500 animate-fade-in delay-400 hover:scale-105 group">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                <Users2 className="h-8 w-8 text-pink-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Collaborative Spaces</h3>
              <p className="text-gray-600 text-center">Modern learning spaces designed for teamwork and project-based learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg animate-fade-in hover:scale-105 transition-all duration-300 group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                <GraduationCap className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2 group-hover:scale-110 transition-transform duration-300">20+</h3>
              <p className="text-gray-700">Years of Excellence</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg animate-fade-in delay-100 hover:scale-105 transition-all duration-300 group">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 transition-colors duration-300">
                <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-green-900 mb-2 group-hover:scale-110 transition-transform duration-300">500+</h3>
              <p className="text-gray-700">Happy Students</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg animate-fade-in delay-200 hover:scale-105 transition-all duration-300 group">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-700 transition-colors duration-300">
                <Trophy className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-900 mb-2 group-hover:scale-110 transition-transform duration-300">95%</h3>
              <p className="text-gray-700">Success Rate</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg animate-fade-in delay-300 hover:scale-105 transition-all duration-300 group">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-colors duration-300">
                <Star className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-purple-900 mb-2 group-hover:scale-110 transition-transform duration-300">50+</h3>
              <p className="text-gray-700">Qualified Teachers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      {announcements.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Announcements
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto animate-scale-in"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {announcements.map((announcement, index) => (
                <div key={announcement.id} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-105 group`} style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {announcement.content}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    {new Date(announcement.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Slider Section */}
      {galleryItems.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Events
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto animate-scale-in"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto animate-fade-in delay-200">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={getImageUrl(galleryItems[currentSlide]?.image_url)}
                  alt={galleryItems[currentSlide]?.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300 hover:translate-y-[-4px]">
                  <h3 className="text-2xl font-bold mb-2">
                    {galleryItems[currentSlide]?.title}
                  </h3>
                  <p className="text-lg opacity-90">
                    {galleryItems[currentSlide]?.description}
                  </p>
                  <p className="text-sm opacity-75 mt-2">
                    {new Date(galleryItems[currentSlide]?.event_date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="flex justify-center mt-6 space-x-2">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our School Family?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to learn more about admissions and our modern programs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <Phone className="h-5 w-5" />
              <a href="tel:9849161512" className="text-lg hover:text-yellow-300 transition-colors duration-300">
                +91 98491 61512
              </a>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <Mail className="h-5 w-5" />
              <a href="mailto:sfph2003@gmail.com" className="text-lg hover:text-yellow-300 transition-colors duration-300">
                sfph2003@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Mancherial, Telangana</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
