
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Award, BookOpen, Target } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { Announcement, GalleryItem } from '@/types/school';

const Home = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [recentEvents, setRecentEvents] = useState<GalleryItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchAnnouncements();
    fetchRecentEvents();
  }, []);

  const fetchAnnouncements = async () => {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })
      .limit(3);
    
    if (data && !error) {
      setAnnouncements(data);
    }
  };

  const fetchRecentEvents = async () => {
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('event_date', { ascending: false })
      .limit(5);
    
    if (data && !error) {
      setRecentEvents(data);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recentEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recentEvents.length) % recentEvents.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Springfield High School
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Nurturing Excellence, Building Tomorrow's Leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply for Admission
            </a>
            <a
              href="tel:9849161512"
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Springfield High School?
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in education with a commitment to holistic development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
              <p className="text-gray-600">Comprehensive curriculum designed for academic excellence</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3>
              <p className="text-gray-600">Dedicated teachers committed to student success</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Consistent academic achievements and university placements</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
              <p className="text-gray-600">Focus on academics, sports, and extracurricular activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Carousel */}
      {recentEvents.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Recent Events
              </h2>
              <p className="text-xl text-gray-600">
                Highlights from our school activities and achievements
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {recentEvents.map((event, index) => (
                    <div key={event.id} className="w-full flex-shrink-0">
                      <div className="relative h-64 md:h-96">
                        <img
                          src={event.image_url}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                          {event.description && (
                            <p className="text-gray-200">{event.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {recentEvents.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  <div className="flex justify-center mt-4 space-x-2">
                    {recentEvents.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Announcements */}
      {announcements.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Latest Announcements
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{announcement.content}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(announcement.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
