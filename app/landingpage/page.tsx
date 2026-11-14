"use client";

import { useState, useEffect } from 'react';
// import { 
//   Search, 
//   MapPin, 
//   Calendar, 
//   Activity, 
//   ChevronRight, 
//   Star, 
//   Clock, 
//   Mountain,
//   Compass,
//   Phone,
//   Mail,
//   Map
// } from 'lucide-react';

const POPULAR_TREKS = [
  {
    id: 1,
    title: 'Everest Base Camp Trek',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '14 Days',
    difficulty: 'Strenuous',
    price: '$1,399',
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    title: 'Annapurna Base Camp',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '11 Days',
    difficulty: 'Moderate',
    price: '$950',
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    title: 'Manaslu Circuit Trek',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '16 Days',
    difficulty: 'Challenging',
    price: '$1,150',
    rating: 5.0,
    reviews: 42
  }
];

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <Mountain className="w-8 h-8 text-emerald-400" /> */}
          <span className="text-2xl font-black tracking-tight text-white drop-shadow-md">
            HikeOn<span className="text-emerald-400">Treks</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-white drop-shadow-sm">
          <a href="#" className="hover:text-emerald-300 transition-colors">Trekking</a>
          <a href="#" className="hover:text-emerald-300 transition-colors">Tours</a>
          <a href="#" className="hover:text-emerald-300 transition-colors">Activities</a>
        </div>

        {/* Action Button */}
        <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-emerald-600/50">
          Quick Inquiry
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Video (Mixkit CDN) & Overlay */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="bgvideo.mp4"
      ></video>
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
          Conquer the Himalayas
        </h1>
        <p className="text-xl md:text-2xl text-emerald-50 font-medium drop-shadow-lg">
          Trekking, Tours & Hiking in Nepal
        </p>
      </div>

      {/* Floating Smart Search near bottom */}
      <div className="absolute bottom-12 left-0 w-full z-20 px-4">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl md:rounded-full shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center gap-2 md:gap-0">
          
          <div className="flex-1 w-full flex items-center bg-white/95 px-4 py-3 md:py-4 md:rounded-l-full rounded-2xl md:mr-0.5">
            {/* <MapPin className="w-6 h-6 text-emerald-600 mr-3 shrink-0" /> */}
            <div className="flex flex-col flex-1 w-full">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Destination</span>
              <input 
                type="text" 
                placeholder="Where to? (e.g. Everest)" 
                className="bg-transparent border-none text-slate-800 font-bold focus:ring-0 p-0 text-sm md:text-base outline-none w-full placeholder:text-slate-400 placeholder:font-medium"
              />
            </div>
          </div>

          <div className="flex-1 w-full flex items-center bg-white/95 px-4 py-3 md:py-4 rounded-2xl md:rounded-none md:mr-0.5">
            {/* <Compass className="w-6 h-6 text-emerald-600 mr-3 shrink-0" /> */}
            <div className="flex flex-col flex-1 w-full">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Activity</span>
              <select className="bg-transparent border-none text-slate-800 font-bold focus:ring-0 p-0 text-sm md:text-base outline-none cursor-pointer w-full appearance-none">
                <option>All Activities</option>
                <option>Trekking</option>
                <option>Peak Climbing</option>
                <option>Cultural Tour</option>
              </select>
            </div>
          </div>

          <button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white p-4 md:px-10 md:py-5 rounded-2xl md:rounded-r-full font-bold shadow-lg transition-colors flex items-center justify-center gap-2 shrink-0 h-full">
            {/* <Search className="w-5 h-5" /> */}
            <span>Find Adventure</span>
          </button>

        </div>
      </div>
    </div>
  );
};

const PopularTreks = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Popular Treks</h2>
          <p className="text-slate-600 text-lg">Discover our most highly rated and breathtaking journeys through the Himalayas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_TREKS.map((trek) => (
            <div key={trek.id} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col cursor-pointer">
              {/* Card Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={trek.image} 
                  alt={trek.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                  {trek.difficulty}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col relative bg-white">
                <div className="absolute -top-6 right-6 bg-white p-2 rounded-2xl shadow-lg flex items-center gap-1">
                  {/* <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> */}
                  <span className="font-bold text-slate-800 text-sm">{trek.rating}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{trek.title}</h3>
                
                <div className="flex items-center gap-4 text-slate-500 mb-6 text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    {/* <Clock className="w-4 h-4 text-emerald-500" /> */}
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {/*  */}
                    <span>Nepal</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Price</span>
                    <p className="text-2xl font-black text-slate-900">{trek.price}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {/* <ChevronRight className="w-5 h-5" /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceNepal = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background Video (Mixkit CDN) & Overlay */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="bglower.mp4"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest mb-6 uppercase border border-emerald-500/30">
            Experience Nepal
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Over <span className="text-emerald-400">2 years</span> of creating lifelong memorable moments.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            We don't just guide you through the trails; we connect you with the soul of the Himalayas. Discover hidden valleys, majestic peaks, and rich local cultures with our expert team.
          </p>
          {/* <button className="bg-white text-slate-900 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
            Start Your Journey <ChevronRight className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start mb-8 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              {/* <Mountain className="w-6 h-6 text-emerald-500" /> */}
              <span className="text-xl font-black tracking-tight text-white">
                HikeOn<span className="text-emerald-500">Treks</span>
              </span>
            </div>
            <p className="text-sm max-w-xs">Your trusted partner for exploring the breathtaking landscapes of Nepal safely and comfortably.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Destinations</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                {/* <Phone className="w-4 h-4 text-emerald-500" /> */} +977 123 456 789
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                {/* <Mail className="w-4 h-4 text-emerald-500" /> */} info@hikeontreks.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-slate-500">
            &copy; {currentYear} HikeOnTreks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <PopularTreks />
      <ExperienceNepal />
      <Footer />
    </div>
  );
}