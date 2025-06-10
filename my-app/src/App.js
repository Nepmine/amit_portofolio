import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, User, FileText, Award, Mail, MapPin, Globe, Heart, Wrench, PenTool, Star, Quote, Menu, X } from 'lucide-react';

export default function AmitPortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollTop = useRef(0);
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'writing', label: 'Writing' },
    { id: 'poetry', label: 'Nepali Poetry' },
    { id: 'publications', label: 'Publications' },
    { id: 'achievements', label: 'Recognition' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };




  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // [Modified] Compare with ref value
      if (scrollTop > lastScrollTop.current && scrollTop > 100) {
        setShowHeader(false); // Scrolling down → hide header
      } else {
        setShowHeader(true); // Scrolling up → show header
      }

      // [Modified] Update ref
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;

      // Active section logic
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Fixed Header */}
      <header className={`fixed top-0 w-full bg-white shadow-lg z-50 border-b-2 border-red-600 transition-transform duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">
              Amit <span className="text-red-600">Khanal</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative inline-block px-3 py-2 font-medium text-black transition duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
        after:bg-red-600 after:transition-transform after:duration-300 after:ease-in-out
        after:scale-x-0 hover:after:scale-x-100 after:origin-left
        ${activeSection === item.id ? 'after:scale-x-100 text-red-600' : 'hover:text-red-600'}
      `}
                >
                  {item.label}
                </button>
              ))}
            </nav>



            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-fadeIn">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'text-red-600 font-semibold'
                    : 'text-black hover:text-red-600'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>


      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-red-600 flex items-center justify-center">
            <img
              src="/images/amit.jpg"
              alt="Amit Khanal"
              className="w-full h-full object-cover text-white rounded-full "
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Amit <span className="text-red-600">Khanal</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 mb-6">
            <div className="flex items-center space-x-2 text-red-400 mb-2 md:mb-0">
              <Wrench size={20} />
              <span className="text-lg">Mechatronics Engineer</span>
            </div>
            <div className="hidden md:block w-2 h-2 bg-white rounded-full"></div>
            <div className="flex items-center space-x-2 text-red-400">
              <PenTool size={20} />
              <span className="text-lg">Writer & Poet</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <p className="text-xl text-gray-200 italic leading-relaxed text-center">
              "सपना देख्नुहोस्, त्यसलाई पूरा गर्न कडा मेहनत गर्नुहोस्, र आफ्ना शब्दहरूले संसारलाई परिवर्तन गर्न दिनुहोस्।"
            </p>
            <p className="text-sm text-red-300 text-center mt-3">
              - एक लेखकको सपना
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-red-600">Me</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6">Professional Journey</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a mechatronics engineer, I bring technical precision to everything I do.
                  However, my true passion lies in the art of storytelling and the beauty of language,
                  particularly in capturing the essence of Nepali culture through poetry and prose.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  What started as a hobby has evolved into a recognized literary voice,
                  with my works being featured across major platforms and appreciated by diverse audiences,
                  including sharing and recognition by famous personalities.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Engineering', 'Poetry', 'Cultural Commentary', 'Nepali Literature', 'Technical Writing'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-red-100 text-red-800 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Writing Philosophy</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My writing bridges the analytical mindset of engineering with the emotional
                  depth of poetry. I believe in stories that not only entertain but also
                  preserve cultural heritage and inspire meaningful conversations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-red-400" />
                    <span>Published across major news platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-red-400" />
                    <span>Featured by influential personalities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-red-400" />
                    <span>Connecting cultures through language</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Writing <span className="text-red-600">Portfolio</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Featured Articles",
                  description: "In-depth analysis on engineering solutions and contemporary issues",
                  type: "Articles",
                  count: "15+"
                },
                {
                  title: "Cultural Commentary",
                  description: "Essays bridging technology, tradition, and modern society",
                  type: "Essays",
                  count: "20+"
                },
                {
                  title: "Technical Writing",
                  description: "Professional documentation and engineering perspectives",
                  type: "Technical",
                  count: "30+"
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
                  <div className="text-2xl font-bold text-red-600 mb-2">{category.count}</div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    {category.type}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-black text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Platform Recognition</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Kantipur Daily",
                    logo: "https://via.placeholder.com/120x60/FF0000/FFFFFF?text=Kantipur",
                    url: "https://kantipurdaily.com"
                  },
                  {
                    name: "The Himalayan Times",
                    logo: "https://via.placeholder.com/120x60/000080/FFFFFF?text=THT",
                    url: "https://thehimalayantimes.com"
                  },
                  {
                    name: "Online Khabar",
                    logo: "https://via.placeholder.com/120x60/008000/FFFFFF?text=OnlineKhabar",
                    url: "https://onlinekhabar.com"
                  }
                ].map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 text-center"
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-full h-12 object-contain mb-3"
                    />
                    <div className="text-black font-medium">{platform.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poetry Section */}
      <section id="poetry" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            नेपाली <span className="text-red-600">कविता</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Nepali Poetry Collection</p>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                title: "माया र सपना",
                english: "Love and Dreams",
                excerpt: "A heartfelt exploration of contemporary emotions in traditional verse",
                engagement: "500+ likes, widely shared across social media"
              },
              {
                title: "पहाडको कथा",
                english: "Tales of the Mountains",
                excerpt: "Capturing the essence of Himalayan life and enduring traditions",
                engagement: "Featured in poetry compilations and literary circles"
              },
              {
                title: "समयको धारा",
                english: "Flow of Time",
                excerpt: "Reflections on cultural evolution and the passage of generations",
                engagement: "Viral reach with celebrity endorsements"
              }
            ].map((poem, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  <Quote className="w-12 h-12 text-red-600 mb-4 md:mb-0 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-black mb-1">{poem.title}</h3>
                      <p className="text-red-600 font-medium italic">{poem.english}</p>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{poem.excerpt}</p>
                    <div className="flex items-center space-x-3 text-sm">
                      <Heart className="w-4 h-4 text-red-600" />
                      <span className="text-gray-600">{poem.engagement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-black text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">People Who Appreciated My Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Rajesh Hamal",
                  photo: "https://via.placeholder.com/100x100/FF0000/FFFFFF?text=RH",
                  quote: "अमितका कविताहरूमा गहिरो भावना र संस्कृतिको सुन्दर चित्रण छ।"
                },
                {
                  name: "Priyanka Karki",
                  photo: "https://via.placeholder.com/100x100/FF0000/FFFFFF?text=PK",
                  quote: "युवा लेखकको रूपमा अमितको योगदान प्रशंसनीय छ।"
                },
                {
                  name: "Bhuwan KC",
                  photo: "https://via.placeholder.com/100x100/FF0000/FFFFFF?text=BK",
                  quote: "अमितका शब्दहरूले मुटु छुन्छ र मन प्रभावित पार्छ।"
                }
              ].map((person, index) => (
                <div key={index} className="text-center">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-red-400"
                  />
                  <h4 className="font-bold text-red-400 mb-2">{person.name}</h4>
                  <p className="text-gray-300 text-sm italic leading-relaxed">"{person.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Published <span className="text-red-600">Works</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: "Engineering Perspectives in Modern Media",
                  description: "Technical insights for general audiences across major publications",
                  platform: "National Newspapers",
                  status: "Featured"
                },
                {
                  title: "Cultural Bridge Essays",
                  description: "Exploring the intersection of technology and traditional values",
                  platform: "Digital Platforms",
                  status: "Ongoing Series"
                },
                {
                  title: "Nepali Poetry Collections",
                  description: "Regular contributions to literary magazines and online platforms",
                  platform: "Literary Journals",
                  status: "Monthly"
                }
              ].map((pub, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <BookOpen className="w-6 h-6 text-red-600" />
                        <h3 className="text-xl font-bold">{pub.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-2">{pub.description}</p>
                      <p className="text-sm text-gray-500">{pub.platform}</p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full font-medium">
                      {pub.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-black text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Recognition Overview</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-4">Platform Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span>Featured in prestigious news publications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span>Shared by influential personalities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span>Regular digital platform contributor</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-4">Recognition</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span>Celebrity endorsements and shares</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span>Growing international readership</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span>Literary community appreciation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recognition & <span className="text-red-600">Achievements</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-600">
                <Award className="w-12 h-12 text-red-600 mb-6" />
                <h3 className="text-2xl font-bold mb-6">Professional Recognition</h3>
                <ul className="space-y-4">
                  {[
                    "Featured by prominent literary figures on social media",
                    "Articles shared by influential personalities",
                    "Regular contributor to major news platforms",
                    "Growing readership across digital platforms",
                    "Recognition for bilingual writing excellence"
                  ].map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-black text-white rounded-lg p-8">
                <Globe className="w-12 h-12 text-red-400 mb-6" />
                <h3 className="text-2xl font-bold mb-6">Community Impact</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400 mb-2">2000+</div>
                    <div className="text-gray-300">Poetry Readers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400 mb-2">75+</div>
                    <div className="text-gray-300">Published Pieces</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400 mb-2">10+</div>
                    <div className="text-gray-300">Platform Features</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Get In <span className="text-red-400">Touch</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-400">Let's Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing writing opportunities, collaborations,
                  or simply connecting with fellow writers and poetry enthusiasts.
                  Whether you're interested in my technical writing, Nepali poetry,
                  or cultural commentary, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-red-400" />
                    <span>Available for writing projects</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <PenTool className="w-6 h-6 text-red-400" />
                    <span>Poetry collaborations welcome</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="w-6 h-6 text-red-400" />
                    <span>Media interviews & features</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <BookOpen className="w-6 h-6 text-red-400" />
                    <span>Editorial contributions</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-6 text-red-400">Areas of Interest</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    'Technical Writing',
                    'Nepali Poetry',
                    'Cultural Commentary',
                    'Engineering Articles',
                    'Literary Collaborations',
                    'Media Contributions',
                    'Editorial Work',
                    'Creative Projects'
                  ].map((interest) => (
                    <span key={interest} className="px-3 py-2 bg-red-600 text-white rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-4">Ready to collaborate?</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-300">
                    Start a Conversation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-red-600 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">
            Amit <span className="text-red-600">Khanal</span>
          </div>
          <p className="text-gray-600 mb-4">
            Mechatronics Engineer • Writer • Poet
          </p>
          <p className="text-gray-500 text-sm">
            Bridging cultures through words, connecting minds through stories.
          </p>
        </div>
      </footer>
    </div>
  );
}