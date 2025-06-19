
import React from 'react';
import { Phone, Mail, CheckCircle, Users, Clock, BookOpen } from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: 'Application Form',
      description: 'Fill out the admission application form with all required details',
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Submit all necessary documents including previous academic records',
    },
    {
      step: 3,
      title: 'Entrance Test',
      description: 'Appear for the entrance examination (for classes VI and above)',
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Attend the parent-student interview session',
    },
    {
      step: 5,
      title: 'Admission Confirmation',
      description: 'Complete fee payment and confirm admission',
    },
  ];

  const admissionCriteria = [
    {
      class: 'Pre-KG to Class II',
      age: '3-7 years',
      requirements: 'Age-appropriate assessment and parent interaction',
    },
    {
      class: 'Class III to Class V',
      age: '8-10 years',
      requirements: 'Written test in English and Mathematics + Previous school records',
    },
    {
      class: 'Class VI to Class VIII',
      age: '11-13 years',
      requirements: 'Entrance test in English, Mathematics, and Science + Interview',
    },
    {
      class: 'Class IX to Class XI',
      age: '14-16 years',
      requirements: 'Entrance test + Previous academic performance + Interview',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-blue-100 mb-8">
            Join the Springfield High School family and embark on a journey of excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9849161512"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call for Admission: +91 98491 61512</span>
            </a>
            <a
              href="mailto:sfph2003@gmail.com"
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to secure your child's future
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {admissionSteps.map((step, index) => (
                <div key={step.step} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden md:block w-8 h-8 text-blue-300">
                      <CheckCircle className="w-full h-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Admission Criteria
            </h2>
            <p className="text-xl text-gray-600">
              Requirements for different class levels
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {admissionCriteria.map((criteria, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{criteria.class}</h3>
                      <p className="text-sm text-gray-600">Age: {criteria.age}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{criteria.requirements}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Important Information
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Admission Season</h3>
                  <p className="text-gray-600">March - May</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Limited Seats</h3>
                  <p className="text-gray-600">25-30 per class</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Merit Based</h3>
                  <p className="text-gray-600">Selection Process</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Documents:</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Birth Certificate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Previous School Report Cards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Transfer Certificate (if applicable)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Passport Size Photographs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Parent/Guardian ID Proof</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Address Proof</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to begin your child's journey at Springfield High School
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9849161512"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 group"
            >
              <Phone className="h-5 w-5 group-hover:animate-pulse" />
              <span>Call Now: +91 98491 61512</span>
            </a>
            <a
              href="mailto:sfph2003@gmail.com?subject=Admission Inquiry"
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
