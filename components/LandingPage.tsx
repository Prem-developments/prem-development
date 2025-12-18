
import React, { useEffect } from 'react';

interface LandingPageProps {
  projectId: string;
  onClose: () => void;
}

// --- SHARED COMPONENTS ---
const SectionHeader = ({ title, subtitle, centered = true, dark = false }: any) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
  </div>
);

// --- 1. CLEANING SERVICES (Minimal & Airy) ---
const CleaningLayout = () => (
  <div className="bg-white">
    {/* Hero: Split Screen */}
    <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch">
      <div className="flex-1 flex items-center px-8 lg:px-20 py-32 bg-teal-50/50">
        <div className="max-w-xl">
          <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4 block">Premium Home Care</span>
          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-none mb-8">Pure <span className="text-teal-500 underline decoration-4 underline-offset-8">Comfort</span> in Every Corner.</h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">Experience the highest standard of cleanliness with our bespoke residential sanitization services.</p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-teal-200 transition-all">Book Instant Cleaning</button>
        </div>
      </div>
      <div className="flex-1 relative min-h-[400px]">
        <img src="https://www.squeakycleannigeria.com/lovable-uploads/322c287b-8a97-46f4-8dba-d7d50278c075.png" alt="Cleaning" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </section>

    {/* Services: Floating Cards */}
    <section className="py-32 container mx-auto px-6">
      <SectionHeader title="Our Fresh Approach" subtitle="We don't just clean; we restore your home's natural serenity using eco-friendly methods." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { t: 'Eco-Deep Clean', d: 'Using 100% biodegradable products for a safe, toxin-free environment.', i: '🌿' },
          { t: 'Post-Party Prep', d: 'Quick, efficient restoration of your space after any event.', i: '🎉' },
          { t: 'Office Wellness', d: 'Commercial grade cleaning that boosts team morale and health.', i: '🏢' }
        ].map(s => (
          <div key={s.t} className="p-10 rounded-[3rem] border border-slate-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-100 transition-all group bg-white">
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{s.i}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.t}</h3>
            <p className="text-slate-500 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us: Zig-Zag Layout */}
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800" className="rounded-[4rem] shadow-2xl" alt="Quality" />
        <div className="space-y-8">
          <h2 className="text-5xl font-black text-slate-900">Why Elite Cleaning?</h2>
          {['Vetted Professionals', 'Customizable Checklists', 'Satisfaction Guaranteed'].map(f => (
            <div key={f} className="flex gap-6 items-center p-6 bg-white rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 font-bold">✓</div>
              <span className="text-xl font-bold text-slate-800">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-32 bg-teal-600 text-white text-center">
      <div className="container mx-auto px-6">
        <p className="text-6xl mb-8">"Definitely the best cleaning service I've ever used. My home feels like a sanctuary."</p>
        <p className="font-black text-xl tracking-widest uppercase">— Amanda S., Designer</p>
      </div>
    </section>

    {/* Gallery */}
    <section className="py-32 container mx-auto px-6">
      <SectionHeader title="Visual Perfection" subtitle="See the results of our meticulous attention to detail." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="https://eshinecleaning.com/wp-content/uploads/2025/04/young-contemporary-black-man-in-uniform-cleaning-k-2025-03-16-11-27-29-utc-1.jpg" className="rounded-3xl h-64 w-full object-cover" alt="G1" />
        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400" className="rounded-3xl h-64 w-full object-cover" alt="G2" />
        <img src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400" className="rounded-3xl h-64 w-full object-cover" alt="G3" />
        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=400" className="rounded-3xl h-64 w-full object-cover" alt="G4" />
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 text-center bg-slate-900 text-white">
      <h2 className="text-6xl font-black mb-8">Ready for a Fresh Start?</h2>
      <button className="bg-white text-slate-900 px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform">Get a Quote Now</button>
    </section>
  </div>
);

// --- 2. PLUMBER SERVICES (Solid & Industrial) ---
const PlumberLayout = () => (
  <div className="bg-slate-50">
    {/* Hero: Centered & Bold */}
    <section className="pt-40 pb-32 bg-gradient-to-b from-blue-700 to-blue-900 text-white text-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <span className="bg-red-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block animate-pulse">24/7 Emergency Service</span>
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">RAPID <span className="text-blue-400">FLOW</span></h1>
        <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-12">Expert plumbing solutions for commercial and residential emergencies. We fix it right, the first time.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white text-blue-900 px-10 py-5 rounded-lg font-black text-lg hover:bg-blue-50">Call (800) FLOW-NOW</button>
          <button className="border-2 border-white/20 hover:border-white px-10 py-5 rounded-lg font-bold text-lg">Schedule Maintenance</button>
        </div>
      </div>
    </section>

    {/* Services: Industrial Grid */}
    <section className="py-32 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {[
             {t: 'Leak Repair', d: 'Detecting and sealing hidden leaks fast.', c: 'bg-blue-600' },
             {t: 'Drainage', d: 'Advanced hydro-jetting for clear pipes.', c: 'bg-blue-500' },
             {t: 'Heating', d: 'Boiler installation and radiator repair.', c: 'bg-blue-400' },
             {t: 'Installations', d: 'Modern fixtures and appliance setup.', c: 'bg-blue-300' }
           ].map(s => (
             <div key={s.t} className="p-8 bg-white border-l-8 border-blue-600 shadow-xl rounded-r-2xl">
                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase">{s.t}</h3>
                <p className="text-slate-500">{s.d}</p>
             </div>
           ))}
        </div>
        <div className="space-y-8">
           <SectionHeader centered={false} title="Mastering the Flow" subtitle="Our team of certified master plumbers brings decades of experience to every project." />
           <p className="text-lg text-slate-600">We utilize the latest thermal imaging and acoustic leak detection technology to minimize damage and maximize efficiency.</p>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
         <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">Reliability You Can Feel</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {t: 'Licensed Techs', d: 'Every plumber is fully certified and insured.'},
              {t: 'Upfront Pricing', d: 'No hidden fees or surprise hourly spikes.'},
              {t: 'Parts Gaurantee', d: 'We only use premium, warrantied materials.'}
            ].map(f => (
              <div key={f.t} className="space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-3xl">🛠️</div>
                <h4 className="text-2xl text-black font-bold">{f.t}</h4>
                <p className="text-slate-500">{f.d}</p>
              </div>
            ))}
         </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="py-32 container mx-auto px-6">
      <SectionHeader title="Visual Perfection" subtitle="See the results of our meticulous attention to detail." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800" className="w-full h-full object-cover" alt="P1" />
          <img src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800" className="w-full h-full object-cover" alt="P2" />
          <img src="https://lirp.cdn-website.com/2914e64f/dms3rep/multi/opt/5+Important+Plumbing+Services+You+Should+Know+About-1920w.jpg" className="w-full h-full object-cover" alt="P3" />
          <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800" className="w-full h-full object-cover" alt="P3" />
        </div>
    </section>
     
  </div>
);

// --- 3. ELECTRICIAN SERVICES (High Contrast & Tech) ---
const ElectricianLayout = () => (
  <div className="bg-slate-900 text-white">
    {/* Hero: Modern Dark */}
    <section className="min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600" className="w-full h-full object-cover opacity-30 grayscale" alt="Electric" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="w-20 h-1 bg-amber-400 mb-8"></div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none italic">POWER <br/> <span className="text-amber-400 uppercase">Mastery</span></h1>
          <p className="text-2xl text-slate-400 mb-12 font-medium">Next-generation electrical contracting for smart homes and industrial facilities.</p>
          <button className="bg-amber-400 text-slate-900 px-12 py-5 rounded-none font-black text-xl hover:bg-amber-500 transition-colors uppercase tracking-widest">Connect Today</button>
        </div>
      </div>
    </section>

    {/* Services: Technical Specs */}
    <section className="py-32 bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionHeader dark title="System Capabilities" subtitle="Engineered solutions for complex infrastructure requirements." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {[
             {n: '01', t: 'Smart Integration', d: 'IoT home automation setup.'},
             {n: '02', t: 'Panel Upgrades', d: 'Safe, high-capacity load centers.'},
             {n: '03', t: 'EV Infrastructure', d: 'Rapid charging station installs.'},
             {n: '04', t: 'Safety Audits', d: 'Thermal imaging & code checks.'}
           ].map(s => (
             <div key={s.t} className="p-10 border border-slate-700 bg-slate-900 hover:border-amber-400 transition-all">
                <span className="text-amber-400 font-black text-3xl mb-4 block">{s.n}</span>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{s.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.d}</p>
             </div>
           ))}
        </div>
      </div>
    </section>

    {/* Gallery / Visuals */}
    <section className="py-32">
       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
          <img src="https://swiftcare.pk/wp-content/uploads/2021/12/8-Benefits-of-Electrical-Contractors-for-Your-Company-Featured.jpg" className="w-full h-full object-cover rounded-2xl" alt="E1" />
          <div className="grid grid-cols-1 gap-8">
             <img src="https://fatek.com.pk/wp-content/uploads/2020/07/electrical-1.jpg" className="w-full h-full object-cover rounded-2xl" alt="E2" />
             <img src="https://organicnaturalenergyllc.com/wp-content/uploads/2024/06/Electrical-Service-1608x804.jpg" className="w-full h-full object-cover rounded-2xl" alt="E3" />
          </div>
       </div>
    </section>
  </div>
);

// --- 4. ROOFING SERVICES (Structural & Bold) ---
const RoofingLayout = () => (
  <div className="bg-white">
    {/* Hero: Majestic & Protective */}
    <section className="relative h-screen flex items-end py-32 text-white">
      <img src="https://www.thepinnaclelist.com/wp-content/uploads/2025/05/Professional-Roofer-with-Roof-Tiles.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Roof" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter uppercase">Summit <br/> <span className="text-slate-400">Shelter</span></h1>
        <p className="text-2xl max-w-2xl text-slate-300 font-light mb-12">Engineered for the elements. Architectural roofing solutions built to last a lifetime.</p>
        <button className="bg-white text-slate-900 px-12 py-6 rounded-sm font-black text-xl hover:bg-slate-200 transition-colors">Start Free Quote</button>
      </div>
    </section>

    {/* Why Choose Us / Quality */}
    <section className="py-16 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-12">Unmatched Durability.</h2>
              <div className="space-y-12">
                 {[
                   {t: 'Storm Shield Technology', d: 'Our roofs are tested against 150mph winds and heavy impact.'},
                   {t: 'Lifetime Material Warranty', d: 'Confidence backed by the industry\'s strongest guarantees.'},
                   {t: 'Rapid Installation', d: 'Most residential roofs completed in just 48 hours.'}
                 ].map(f => (
                   <div key={f.t} className="flex gap-8 group">
                      <div className="w-1 bg-slate-900 group-hover:bg-blue-600 transition-colors"></div>
                      <div>
                         <h4 className="text-2xl text-black font-bold mb-4">{f.t}</h4>
                         <p className="text-slate-500 text-lg leading-relaxed">{f.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative">
              <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=800" className="rounded-3xl shadow-2xl scale-105" alt="Detail" />
           </div>
        </div>
      </div>
    </section>

    {/* Services: Material Showcase */}
    <section className="py-16 md:py-32">
       <div className="container mx-auto px-6">
          <SectionHeader title="Our Structural Spectrum" subtitle="Choose from premium materials designed for aesthetics and endurance." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               {t: 'Asphalt Shingle', d: 'Economical, durable, and highly versatile.', i: '🏠' },
               {t: 'Architectural Slate', d: 'The pinnacle of luxury and longevity.', i: '🏛️' },
               {t: 'Standing Seam Metal', d: 'Maximum energy efficiency and modern look.', i: '⛰️' }
             ].map(s => (
               <div key={s.t} className="text-center group">
                  <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{s.i}</div>
                  <h3 className="text-2xl text-black mb-4 uppercase">{s.t}</h3>
                  <p className="text-slate-500 leading-relaxed">{s.d}</p>
               </div>
             ))}
          </div>
       </div>
    </section>
  </div>
);

// --- 5. CAR DETAILING (Luxury & Glossy) ---
const DetailingLayout = () => (
  <div className="bg-zinc-950 text-white selection:bg-red-600">
    {/* Hero: High End / Fast */}
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1600" className="w-full h-full object-cover scale-110" alt="Car" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="text-red-600 font-black tracking-[0.5em] uppercase mb-6 block">Ultimate Precision</span>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] mb-12 tracking-tighter">REFLECT <br/> <span className="text-transparent stroke-text">YOUR PASSION</span></h1>
          <button className="bg-red-600 text-white px-12 py-6 font-black text-xl uppercase italic tracking-widest hover:bg-red-700 transition-all hover:skew-x-2">Secure Reservation</button>
        </div>
      </div>
      <style>{`.stroke-text { -webkit-text-stroke: 2px white; }`}</style>
    </section>

    {/* Packages: Table Style */}
    <section className="py-16 md:py-32 container mx-auto px-6">
      <SectionHeader dark title="Service Tiers" subtitle="Tailored maintenance for vehicles of distinction." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
         {[
           {t: 'Enthusiast', p: '$199', d: 'Thorough interior/exterior sanitization.', f: ['Foam Wash', 'Interior Steam', 'Paint Sealant'] },
           {t: 'Preservation', p: '$499', d: 'Advanced correction and protection.', f: ['1-Step Polishing', 'Fabric Guard', 'Carnauba Wax'], h: true },
           {t: 'Showroom', p: '$1200+', d: 'The ultimate restorative experience.', f: ['Full Correction', 'Ceramic Coating', 'Leather Feeding'] }
         ].map(pkg => (
           <div key={pkg.t} className={`p-16 border border-zinc-800 ${pkg.h ? 'bg-zinc-900 border-red-600/50 scale-105 z-10' : ''} transition-all`}>
              <h3 className="text-3xl font-black mb-4 italic uppercase">{pkg.t}</h3>
              <p className="text-6xl font-black text-red-600 mb-8">{pkg.p}</p>
              <p className="text-zinc-400 mb-10 leading-relaxed">{pkg.d}</p>
              <ul className="space-y-4 mb-12">
                 {pkg.f.map(item => <li key={item} className="flex gap-3 text-zinc-300 font-medium"> <span className="text-red-600">▶</span> {item}</li>)}
              </ul>
              <button className="w-full py-4 border border-zinc-700 hover:bg-red-600 hover:border-red-600 transition-all font-bold uppercase tracking-widest">Select Tier</button>
           </div>
         ))}
      </div>
    </section>

    {/* Testimonials / Trust */}
    <section className="py-16 md:py-32 bg-white text-zinc-950">
       <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-black mb-12 italic tracking-tighter uppercase">Showroom <span className="text-red-600">Standard</span>.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
             <img src="https://formulauae.com/wp-content/uploads/2024/10/Polish-and-detailing-service.jpg" className="aspect-square object-cover grayscale hover:grayscale-0 transition-all" alt="D1" />
             <img src="https://www.mkvalet.co.nz/assets/bg-DFey8DJu.jpg" className="aspect-square object-cover grayscale hover:grayscale-0 transition-all" alt="D2" />
             <img src="https://resources.servicemycar.com/upimages/blogs/Car-Detailing-20230620020823.png" className="aspect-square object-cover grayscale hover:grayscale-0 transition-all" alt="D3" />
             <img src="https://easterncardetailing.co.nz/wp-content/uploads/2025/08/auto-detailing-5-1024x684.jpg" className="aspect-square object-cover grayscale hover:grayscale-0 transition-all" alt="D4" />
          </div>
          <div className="mt-20 max-w-4xl mx-auto italic text-3xl font-light">
             "The mirror finish they achieved on my 911 was beyond belief. Absolute professionals who treat every car like a piece of art."
          </div>
       </div>
    </section>
  </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ projectId, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const renderLayout = () => {
    switch (projectId) {
      case 'cleaning': return <CleaningLayout />;
      case 'plumber': return <PlumberLayout />;
      case 'electrician': return <ElectricianLayout />;
      case 'roofing': return <RoofingLayout />;
      case 'detailing': return <DetailingLayout />;
      default: return <CleaningLayout />;
    }
  };

  return (
    <div className="relative">
      {/* Universal Floating Header */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-[90%] max-w-4xl">
         <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-full flex justify-between items-center shadow-2xl">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
               <span className="text-[10px] font-black tracking-widest uppercase opacity-80 text-white mix-blend-difference">Live Project Demo</span>
            </div>
            <button 
              onClick={onClose}
              className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all"
            >
              Exit Demo
            </button>
         </div>
      </div>

      {renderLayout()}

      {/* Universal Contact Section for Landing Pages */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl text-black mb-8">Let's Discuss Your Needs</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">Contact our professional team today for a customized consultation and detailed quote.</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center">
              <span className="text-4xl mb-4">📞</span>
              <p className="text-black text-2xl">(555) 012-3456</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center">
              <span className="text-4xl mb-4">✉️</span>
              <p className="text-black text-2xl">service@example.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-xs md:hidden">
         <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-2xl">BOOK NOW</button>
      </div>
    </div>
  );
};

export default LandingPage;
