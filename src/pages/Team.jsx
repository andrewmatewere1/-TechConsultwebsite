import React from 'react';
import { team } from '../data/mockData';
import Card from '../components/Card';
import Button from '../components/Button';
import { Linkedin, Github, Mail, User } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, 
            business strategy, and innovation to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member) => (
              <Card key={member.id} className="text-center group">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full overflow-hidden">
                    {member.image && member.image !== "/api/placeholder/200/200" ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="text-primary-600" size={48} />
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-8 h-8 bg-secondary-800 text-white rounded-full flex items-center justify-center hover:bg-secondary-900 transition-colors duration-200"
                        aria-label="GitHub Profile"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Member Info */}
                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="text-primary-600 font-medium mb-3">
                  {member.role}
                </div>
                
                <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                {/* Contact Button */}
                <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm">
                  <Mail size={16} className="mr-1" />
                  Contact
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Our Culture & Values
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                At TechConsult, we foster a culture of innovation, collaboration, and continuous learning. 
                Our team is united by a shared passion for technology and a commitment to delivering excellence 
                in everything we do.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Innovation First</h3>
                    <p className="text-secondary-600">We embrace cutting-edge technologies and creative problem-solving approaches.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Client Success</h3>
                    <p className="text-secondary-600">Your success is our success. We're committed to delivering measurable results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Continuous Learning</h3>
                    <p className="text-secondary-600">We stay ahead of industry trends through ongoing education and certification.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Join Our Team
              </h3>
              <p className="text-secondary-600 mb-6">
                We're always looking for talented individuals who share our passion for technology 
                and innovation. Explore career opportunities and grow with us.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <div className="font-semibold text-secondary-900">Senior Developer</div>
                    <div className="text-secondary-600 text-sm">Full-time, Remote</div>
                  </div>
                  <Button variant="outline" size="sm">Apply</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <div className="font-semibold text-secondary-900">Cloud Architect</div>
                    <div className="text-secondary-600 text-sm">Full-time, Hybrid</div>
                  </div>
                  <Button variant="outline" size="sm">Apply</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <div className="font-semibold text-secondary-900">Security Analyst</div>
                    <div className="text-secondary-600 text-sm">Full-time, On-site</div>
                  </div>
                  <Button variant="outline" size="sm">Apply</Button>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button variant="ghost" className="text-primary-600">
                  View All Positions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Our Expert Team?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Connect with our specialists and discover how we can help transform your business with innovative IT solutions.
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;
