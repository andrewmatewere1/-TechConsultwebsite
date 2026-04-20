import React, { useState } from 'react';
import { projects } from '../data/mockData';
import Card from '../components/Card';
import Button from '../components/Button';
import { ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'Cloud Solutions', 'Cybersecurity', 'Data Analytics', 'Mobile Development', 'Enterprise Solutions'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their operations with innovative IT solutions
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      className="opacity-0 group-hover:opacity-100 bg-white text-primary-600 border-white hover:bg-primary-600 hover:text-white transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Project Category */}
                  <div className="text-primary-600 text-sm font-medium mb-2">
                    {project.category}
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* View Project Link */}
                  <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/link">
                    View Project
                    <ChevronRight 
                      size={16} 
                      className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                    />
                  </button>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-secondary-400 text-lg mb-4">
                No projects found in this category.
              </div>
              <Button onClick={() => setActiveFilter('All')}>
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-secondary-600 mb-8">
            Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
