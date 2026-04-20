import React from 'react';
import { services } from '../data/mockData';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="text-primary-600 group-hover:text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full group-hover:bg-primary-700">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-secondary-600 mb-8">
            We specialize in tailoring our services to meet your unique business requirements. 
            Let's discuss how we can create a solution that drives your success.
          </p>
          <Button size="lg">
            Get Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
