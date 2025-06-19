
import React from 'react';
import { Award, Users, BookOpen, Target, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Springfield High School</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Committed to Excellence in Education and Character Building Since 2003
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a leading educational institution that nurtures young minds, 
                fosters creativity, and develops responsible citizens who contribute 
                positively to society while maintaining the highest standards of 
                academic excellence and moral values.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-yellow-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide quality education that empowers students with knowledge, 
                skills, and values necessary for success in life. We are committed 
                to creating a supportive learning environment that encourages 
                critical thinking, creativity, and holistic development.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Principal's Message
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                    "Education is not just about academic excellence; it's about shaping character, 
                    building confidence, and preparing our students for the challenges of tomorrow. 
                    At Springfield High School, we believe every child has the potential to excel, 
                    and our dedicated faculty works tirelessly to unlock that potential through 
                    innovative teaching methods and personalized attention."
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 text-lg">Dr. Sarah Johnson</p>
                    <p className="text-blue-600">Principal, Springfield High School</p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full p-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2003 - The Beginning</h3>
                  <p className="text-gray-700">
                    Springfield High School was established in 2003 with a vision to provide 
                    quality education in Mancherial, Telangana. Starting with just 50 students 
                    and 5 dedicated teachers, our school began its journey towards excellence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-green-600 text-white rounded-full p-3">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2010 - Expansion</h3>
                  <p className="text-gray-700">
                    By 2010, our school had grown significantly, with over 200 students and 
                    expanded infrastructure including new classrooms, science laboratories, 
                    and a well-equipped library.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-yellow-600 text-white rounded-full p-3">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2015 - Recognition</h3>
                  <p className="text-gray-700">
                    Our school received state-level recognition for academic excellence and 
                    innovative teaching methods. Our students began consistently achieving 
                    top ranks in board examinations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-purple-600 text-white rounded-full p-3">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Modern Era</h3>
                  <p className="text-gray-700">
                    Embracing technology and modern teaching methods, we introduced smart 
                    classrooms, digital learning platforms, and enhanced our curriculum to 
                    meet contemporary educational standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-red-600 text-white rounded-full p-3">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Today - Excellence Continues</h3>
                  <p className="text-gray-700">
                    Today, Springfield High School stands as a beacon of quality education 
                    in Telangana, with over 500 students, 50+ qualified teachers, and a 
                    95% success rate in board examinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-100">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
              <p className="text-blue-100">
                Striving for the highest standards in teaching and learning to ensure 
                every student reaches their full potential.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Character Building</h3>
              <p className="text-blue-100">
                Fostering moral values, integrity, and ethical behavior to develop 
                responsible and compassionate citizens.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Holistic Development</h3>
              <p className="text-blue-100">
                Nurturing not just academic growth but also physical, emotional, 
                and social development of every student.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
