
import React from 'react';
import { Phone, Mail, FileText, CheckCircle, Clock, Users, BookOpen, Star } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions Open</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join Springfield High School and be part of our excellence in education journey. 
            Limited seats available for Academic Year 2024-25.
          </p>
          <a
            href="tel:9849161512"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2"
          >
            <Phone className="h-6 w-6" />
            <span>Call Now for Admission</span>
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Springfield High School?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">95% Success Rate</h3>
              <p className="text-gray-700">
                Consistent excellence in board examinations with students securing top ranks.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Qualified Faculty</h3>
              <p className="text-gray-700">
                50+ experienced and dedicated teachers committed to student success.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Modern Curriculum</h3>
              <p className="text-gray-700">
                Updated syllabus with focus on both academics and practical skills.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-3">Holistic Development</h3>
              <p className="text-gray-700">
                Focus on academics, sports, arts, and character building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to secure admission for your child at Springfield High School
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Inquiry</h3>
                  <p className="text-gray-700 mb-3">
                    Contact us via phone or visit our school to express your interest in admission. 
                    Our admission counselor will provide you with detailed information about available seats, 
                    curriculum, and school facilities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:9849161512"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+91 98491 61512</span>
                    </a>
                    <a
                      href="mailto:sfph2003@gmail.com"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>sfph2003@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Document Submission</h3>
                  <p className="text-gray-700 mb-3">
                    Submit the required documents including previous academic records, 
                    transfer certificate, birth certificate, and other necessary documents.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Required Documents:</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Previous year mark sheets/report cards</li>
                      <li>• Transfer Certificate (if applicable)</li>
                      <li>• Birth Certificate</li>
                      <li>• Caste Certificate (if applicable)</li>
                      <li>• Address proof</li>
                      <li>• Passport size photographs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interview & Assessment</h3>
                  <p className="text-gray-700 mb-3">
                    Attend a brief interaction session with the student and parents. 
                    This helps us understand the student's academic background and learning needs.
                  </p>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>Duration: 20-30 minutes</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Admission Confirmation</h3>
                  <p className="text-gray-700 mb-3">
                    Upon successful completion of the process, you will receive admission confirmation. 
                    Complete the fee payment to secure your child's seat for the upcoming academic year.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 font-medium">
                      🎉 Welcome to the Springfield High School family!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Child's Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don't wait! Limited seats are available. Contact us today to begin the admission process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="tel:9849161512"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="h-6 w-6" />
              <span>Call Now: +91 98491 61512</span>
            </a>
            <a
              href="mailto:sfph2003@gmail.com"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="h-6 w-6" />
              <span>Email Us</span>
            </a>
          </div>

          <div className="text-blue-100">
            <p className="mb-2">📍 Springfield High School, Mancherial, Telangana</p>
            <p>🕒 Office Hours: Monday to Saturday, 9:00 AM - 4:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
