import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title" style={{ fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontWeight: 700, color: '#ffb300', letterSpacing: '0.01em' }}>Projects</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {projects.map((project) => (
            <div 
              className="card" 
              key={project.id} 
              style={{ 
                width: '420px', 
                minHeight: '380px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid #333',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              {/* Project Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Project Title */}
                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    color: '#ffffff',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif',
                    lineHeight: '1.3'
                  }}>
                    {project.title.includes('(Final Year Project)') 
                      ? project.title.replace(' (Final Year Project)', '')
                      : project.title.includes('(Healthcare AI)')
                      ? project.title.replace(' (Healthcare AI)', '')
                      : project.title.includes('(Online GameStore)')
                      ? project.title.replace(' (Online GameStore)', '')
                      : project.title.includes('(Cricket Analytics Platform)')
                      ? project.title.replace(' (Cricket Analytics Platform)', '')
                      : project.title.includes('(Energy Consumption Analysis)')
                      ? project.title.replace(' (Energy Consumption Analysis)', '')
                      : project.title.includes('(Image Editor Mobile App)')
                      ? project.title.replace(' (Image Editor Mobile App)', '')
                      : project.title.includes('(Courier Management System - CMS)')
                      ? project.title.replace(' (Courier Management System - CMS)', '')
                      : project.title.includes('(Digital Image Processing Project)')
                      ? project.title.replace(' (Digital Image Processing Project)', '')
                      : project.title.includes('(E-commerce Application)')
                      ? project.title.replace(' (E-commerce Application)', '')
                      : project.title
                    }
                  </h3>
                  {project.title.includes('(Final Year Project)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      Final Year Project
                    </div>
                  )}
                  {project.title.includes('(Healthcare AI)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      Healthcare AI
                    </div>
                  )}
                  {project.title.includes('(Online GameStore)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      Online GameStore
                    </div>
                  )}
                  {project.title.includes('(Cricket Analytics Platform)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      Cricket Analytics Platform
                    </div>
                  )}
                  {project.title.includes('(Energy Consumption Analysis)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      Energy Consumption Analysis
                    </div>
                  )}
                  {project.title.includes('(Image Editor Mobile App)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      Image Editor Mobile App
                    </div>
                  )}
                  {project.title.includes('(Courier Management System - CMS)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      Courier Management System - CMS
                    </div>
                  )}
                  {project.title.includes('(Digital Image Processing Project)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      Digital Image Processing Project
                    </div>
                  )}
                  {project.title.includes('(E-commerce Application)') && (
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: '#ffb300', 
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontFamily: 'Times New Roman, Times, serif'
                    }}>
                      E-commerce Application
                    </div>
                  )}
                </div>

                {/* Project Description */}
                <div style={{ 
                  flex: 1, 
                  color: '#e0e0e0',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  {project.description.includes('Engineered') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Engineered a mobile and web app using React Native and FERN stack, enabling users to virtually try on outfits based on real-time body data.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Integrated pose estimation through OpenCV and MediaPipe for accurate measurements from live camera input.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Implemented 3D clothing visualization using Unity for realistic virtual try-on experience.
                      </li>
                    </ul>
                  ) : project.description.includes('Designed and implemented') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Designed and implemented an advanced NLP-based chatbot utilizing Retrieval-Augmented Generation (RAG) to deliver precise and trustworthy medical responses.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Seamlessly integrated document retrieval with context-aware generation, ensuring highly accurate and contextually relevant healthcare guidance for users.
                      </li>
                    </ul>
                  ) : project.description.includes('Built a full-stack MERN') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Built a full-stack MERN platform for digital game and accessory sales with secure transactions and personalized user dashboards.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Integrated real-time order tracking and seamless delivery system for both digital downloads and physical products.
                      </li>
                    </ul>
                  ) : project.description.includes('Developed predictive models') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Developed predictive models using regression and classification to estimate IPL auction prices based on historical player data.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Integrated the models into a responsive web app for interactive visualization and exploration of player insights and auction trends.
                      </li>
                    </ul>
                  ) : project.description.includes('Built a predictive energy') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Built a predictive energy management system using Linear Regression and Neural Networks to forecast consumption patterns.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Implemented data preprocessing, clustering, and interactive visualizations for data-driven energy optimization.
                      </li>
                    </ul>
                  ) : project.description.includes('Built a Kotlin-based image editor') ? (
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      Built a Kotlin-based image editor using Jetpack Compose, featuring real-time filters, cropping, and enhancement tools for an intuitive user experience.
                    </p>
                  ) : project.description.includes('Developed a mobile image editor app') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Developed a mobile image editor app using Kotlin and Jetpack Compose.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Included features like real-time filters, cropping, and enhancement tools.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Focused on responsive UI and smooth performance for an intuitive user experience.
                      </li>
                    </ul>
                  ) : project.description.includes('Developed a desktop-based Courier Management System') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Developed a desktop-based Courier Management System in Java using NetBeans to automate parcel delivery operations.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Built core modules for user management, parcel booking/tracking, and admin reporting to optimize logistics workflows.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Integrated delivery scheduling, inventory handling, and secure user authentication for a scalable and efficient system.
                      </li>
                    </ul>
                  ) : project.description.includes('Developed a JPEG image compression system') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Developed a JPEG image compression system for grayscale images using Python and NumPy.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Implemented encoding and decoding with DCT, quantization, and zig-zag scanning to achieve compression.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Visualized each stage of the process using Matplotlib to demonstrate effectiveness and accuracy of reconstruction.
                      </li>
                    </ul>
                  ) : project.description.includes('Built a full-stack e-commerce platform') ? (
                    <ul style={{ 
                      margin: 0, 
                      padding: '0 0 0 20px', 
                      listStyle: 'none', 
                      fontSize: '0.9rem', 
                      color: '#e0e0e0',
                      lineHeight: '1.5'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Built a full-stack e-commerce platform using MERN stack for online electronics and gadgets sales.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Implemented user authentication, product catalog, shopping cart, payment integration, and order management system.
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '-15px',
                          top: '6px',
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: '#ffb300'
                        }}></span>
                        Developed responsive UI with real-time inventory tracking and secure payment processing for seamless shopping experience.
                      </li>
                    </ul>
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>

                {/* Technologies */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#ffb300', 
                    fontWeight: 600, 
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    fontStyle: 'italic',
                    fontFamily: 'Times New Roman, Times, serif'
                  }}>
                    Technologies
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} style={{ 
                        background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%)', 
                        color: 'white', 
                        borderRadius: '16px', 
                        padding: '4px 10px', 
                        fontSize: '0.8rem',
                        border: '1px solid #555',
                        fontWeight: 500
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Source Code Button */}
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, #ffb300 0%, #e09e00 100%)',
                    color: '#222',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    marginTop: 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #e09e00 0%, #d08e00 100%)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffb300 0%, #e09e00 100%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaGithub />
                  View Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 