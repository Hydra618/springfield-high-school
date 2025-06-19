
import React from 'react';
import { Users, Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Springfield High School</h1>
          <p className="text-xl text-blue-100">
            Committed to Excellence in Education Since 2003
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a leading educational institution that nurtures young minds, fosters creativity, 
                and develops responsible global citizens who contribute positively to society.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide quality education that combines academic excellence with moral values, 
                preparing students for higher education and life challenges through innovative 
                teaching methods and holistic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Principal's Message
              </h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "At Springfield High School, we believe that every child is unique and has the potential 
                    to excel. Our dedicated faculty and staff work tirelessly to create an environment 
                    where students can discover their talents, develop their skills, and build confidence 
                    for their future endeavors.
                    
                    We are committed to providing not just academic excellence, but also instilling 
                    strong moral values and life skills that will serve our students throughout their lives. 
                    Our goal is to prepare young minds not just for examinations, but for life itself."
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">Mrs. Priya Sharma</p>
                    <p className="text-gray-600">Principal, Springfield High School</p>
                    <p className="text-sm text-gray-500">M.Ed, M.A. (English), B.Ed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our History
              </h2>
              <p className="text-xl text-gray-600">
                Two decades of educational excellence in Mancherial
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Springfield High School was established in 2003 with a vision to provide quality 
                  education to the students of Mancherial and surrounding areas. What started as 
                  a small institution with just 50 students has now grown into one of the most 
                  respected educational institutions in the region.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Over the years, we have consistently maintained high academic standards while 
                  adapting to modern educational methodologies. Our school has produced numerous 
                  successful graduates who have excelled in various fields including medicine, 
                  engineering, business, and public service.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Today, Springfield High School stands as a beacon of educational excellence, 
                  serving over 800 students from classes I to XII. Our commitment to quality 
                  education, combined with state-of-the-art facilities and experienced faculty, 
                  continues to make us the preferred choice for parents seeking the best education 
                  for their children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">
              Recognition and awards that make us proud
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">95%</h3>
              <p className="text-blue-100">Board Exam Success Rate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">800+</h3>
              <p className="text-blue-100">Happy Students</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">Academic Awards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">21</h3>
              <p className="text-blue-100">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
