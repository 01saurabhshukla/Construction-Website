import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { projectDetailsData } from "../data/projectDetailsData";
import { MdLocationOn, MdCalendarToday, MdHome, MdPerson, MdPhone, MdEmail, MdArrowBack } from "react-icons/md";

function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = projectDetailsData.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
      setActiveImage(foundProject.mainImage);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
          <Link to="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-lightGray py-12">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/projects" className="text-primary flex items-center hover:underline">
            <MdArrowBack className="mr-1" /> Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-whitee rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
              <div className="flex items-center text-gray">
                <MdLocationOn className="mr-1" />
                <span>{project.location}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-[#e5e8eb] px-4 py-2 rounded-lg flex items-center">
                <MdCalendarToday className="mr-2 text-primary" />
                <div>
                  <span className="text-xs text-gray">Completion</span>
                  <p className="text-white font-medium">{project.completionDate}</p>
                </div>
              </div>
              <div className="bg-primary text-whitee px-4 py-2 rounded-lg">
                {project.status}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <div className="bg-whitee rounded-lg overflow-hidden shadow-lg mb-8">
              <img 
                src={activeImage} 
                alt={project.title} 
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4 flex gap-4 overflow-x-auto">
                <img 
                  src={project.mainImage} 
                  alt="Main" 
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${activeImage === project.mainImage ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setActiveImage(project.mainImage)}
                />
                {project.gallery.map(item => (
                  <img 
                    key={item.id}
                    src={item.image} 
                    alt={item.caption} 
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${activeImage === item.image ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setActiveImage(item.image)}
                  />
                ))}
                <img 
                  src={project.blueprintImage} 
                  alt="Blueprint" 
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${activeImage === project.blueprintImage ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setActiveImage(project.blueprintImage)}
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-whitee rounded-lg shadow-lg overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`px-6 py-3 font-medium ${activeTab === 'overview' ? 'text-primary border-b-2 border-primary' : 'text-gray'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`px-6 py-3 font-medium ${activeTab === 'flats' ? 'text-primary border-b-2 border-primary' : 'text-gray'}`}
                  onClick={() => setActiveTab('flats')}
                >
                  Available Units
                </button>
                <button 
                  className={`px-6 py-3 font-medium ${activeTab === 'features' ? 'text-primary border-b-2 border-primary' : 'text-gray'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
                <button 
                  className={`px-6 py-3 font-medium ${activeTab === 'location' ? 'text-primary border-b-2 border-primary' : 'text-gray'}`}
                  onClick={() => setActiveTab('location')}
                >
                  Location
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                    <p className="text-gray mb-6">{project.fullDescription}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#f8f9fa] p-4 rounded-lg">
                        <span className="text-sm text-gray">Category</span>
                        <p className="text-white font-medium">{project.category}</p>
                      </div>
                      <div className="bg-[#f8f9fa] p-4 rounded-lg">
                        <span className="text-sm text-gray">Status</span>
                        <p className="text-white font-medium">{project.status}</p>
                      </div>
                      <div className="bg-[#f8f9fa] p-4 rounded-lg">
                        <span className="text-sm text-gray">Location</span>
                        <p className="text-white font-medium">{project.location}</p>
                      </div>
                      <div className="bg-[#f8f9fa] p-4 rounded-lg">
                        <span className="text-sm text-gray">Completion Date</span>
                        <p className="text-white font-medium">{project.completionDate}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">Blueprint</h3>
                    <img 
                      src={project.blueprintImage} 
                      alt="Blueprint" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}

                {activeTab === 'flats' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Available Units</h3>
                    <div className="space-y-6">
                      {project.flats.map((flat, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-bold text-white">{flat.type}</h4>
                            <span className="text-primary font-bold">{flat.price}</span>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm text-gray">Size</span>
                              <p className="text-white">{flat.size}</p>
                            </div>
                            {flat.bedrooms && (
                              <div>
                                <span className="text-sm text-gray">Bedrooms</span>
                                <p className="text-white">{flat.bedrooms}</p>
                              </div>
                            )}
                            {flat.bathrooms && (
                              <div>
                                <span className="text-sm text-gray">Bathrooms</span>
                                <p className="text-white">{flat.bathrooms}</p>
                              </div>
                            )}
                          </div>
                          <p className="mt-3 text-gray">{flat.features}</p>
                          <button className="mt-4 bg-primary text-whitee px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                            Request Info
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Project Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center bg-[#f8f9fa] p-3 rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                            <MdHome className="text-primary" />
                          </div>
                          <span className="text-white">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'location' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Location</h3>
                    <p className="text-gray mb-4">{project.location}</p>
                    
                    <div className="rounded-lg overflow-hidden h-[400px] mb-4">
                      <iframe 
                        title="Project Location"
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        src={`https://maps.google.com/maps?q=${project.mapLocation}&z=15&output=embed`} 
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    <div className="bg-[#f8f9fa] p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Address</h4>
                      <p className="text-gray">{project.location}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Agent Info */}
          {/* <div className="lg:col-span-1">
            <div className="bg-whitee rounded-lg shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Agent</h3>
              
              <div className="flex items-center mb-6">
                <img 
                  src={project.agent.photo} 
                  alt={project.agent.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{project.agent.name}</h4>
                  <p className="text-gray text-sm">Property Consultant</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <MdPhone className="text-primary mr-3" />
                  <span className="text-white">{project.agent.phone}</span>
                </div>
                <div className="flex items-center">
                  <MdEmail className="text-primary mr-3" />
                  <span className="text-white">{project.agent.email}</span>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray text-sm mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-[#f8f9fa] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray text-sm mb-1">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 bg-[#f8f9fa] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray text-sm mb-1">Your Phone</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 bg-[#f8f9fa] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-gray text-sm mb-1">Message</label>
                  <textarea 
                    className="w-full p-3 bg-[#f8f9fa] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="I'm interested in this property"
                    rows="4"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-whitee py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
}

export default ProjectDetail;