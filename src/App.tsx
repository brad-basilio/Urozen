import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, Activity, ShieldCheck, Microscope, Stethoscope, Award, 
  CheckCircle2, Menu, X, Star, Phone, MessageCircle, Play, ChevronDown, 
  Check, User, Users, MapPin, Clock, ArrowRight, Instagram, Facebook, 
  Calendar, CheckCircle, Video, Minus
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Handle Navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const faqs = [
    { q: "¿Cuánto cuesta la consulta?", a: "Los costos varían según la especialidad urológica y si se requieren exámenes de diagnóstico por imágenes. Contáctanos por WhatsApp para brindarte la información exacta y sin compromiso." },
    { q: "¿Aceptan seguros?", a: "Trabajamos con las principales aseguradoras mediante la modalidad de reembolso (EPS). Te proporcionaremos todos los informes y comprobantes detallados para que gestiones tu trámite de manera ágil." },
    { q: "¿Cuál es el tiempo de espera para una cita?", a: "Gracias a nuestro amplio equipo médico (+15 urólogos), generalmente podemos asignarte un especialista dentro de las próximas 24 a 48 horas. En casos de urgencia, tenemos atención prioritaria." },
    { q: "¿Cuentan con estacionamiento?", a: "Sí, nuestra sede en San Borja cuenta con estacionamiento privado gratuito y seguridad permanente para la total comodidad de nuestros pacientes y sus familiares." },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans text-[#4B4D54] border-x-[12px] border-t-[12px] border-slate-50 selection:bg-[#ffaa00] selection:text-[#4B4D54] pb-20 md:pb-0 lg:border-b-[12px]">
      
      {/* 📱 FLOATING ELEMENTS */}
      <a href="https://wa.me/51970896337" target="_blank" rel="noreferrer" className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group">
         <MessageCircle className="w-8 h-8" />
         <span className="absolute right-full mr-4 bg-white text-[#4B4D54] px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
           WhatsApp ahora
         </span>
      </a>

      {/* 📱 MOBILE BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-50 flex shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
         <a href="tel:017131153" className="flex-1 flex justify-center items-center py-4 text-[#4B4D54] font-bold gap-2 hover:bg-slate-50 transition-colors">
           <Phone className="w-5 h-5"/> Llamar
         </a>
         <button onClick={scrollToContact} className="flex-1 flex justify-center items-center py-4 bg-[#ffaa00] text-[#4B4D54] font-bold gap-2">
           <Calendar className="w-5 h-5"/> Agenda
         </button>
      </div>

      {/* 1. 🔝 HEADER FIJO */}
      <nav className={`flex items-center justify-between px-6 lg:px-12 py-5 bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all ${isScrolled ? 'border-b border-slate-100 shadow-sm' : ''}`}>
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <a href="#">
               <img src="https://www.urozen.pe/web/image/website/1/logo/Urozen?unique=e95eb16" alt="Urozen Logo" className="h-[42px] w-auto drop-shadow-sm transition-transform hover:scale-105" referrerPolicy="no-referrer" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="tel:017131153" className="flex items-center gap-2 text-[#4B4D54] hover:text-[#ffaa00] transition-colors font-bold group">
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              (01) 7131153
            </a>
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 bg-[#ffaa00] text-[#4B4D54] font-bold text-xs uppercase tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(255,170,0,0.4)] transition-all hover:scale-105"
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-2xl p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-[#4B4D54]" /> : <Menu className="text-[#4B4D54]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-28 px-6 flex flex-col gap-6 md:hidden border-[12px] border-slate-50"
          >
             <a href="tel:017131153" className="flex items-center gap-4 text-[#4B4D54] text-xl font-bold border-b border-slate-100 pb-6">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#ffaa00]" />
                </div>
                (01) 7131153
             </a>
             <button onClick={() => { document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }} className="text-[#4B4D54] text-xl font-medium text-left">Nuestros Servicios</button>
             <button onClick={() => { document.getElementById('equipo')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }} className="text-[#4B4D54] text-xl font-medium text-left">Equipo Médico</button>
             <button onClick={() => { document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }} className="text-[#4B4D54] text-xl font-medium text-left">Testimonios</button>
             
             <button 
                onClick={scrollToContact}
                className="bg-[#ffaa00] text-[#4B4D54] font-bold px-6 py-4 rounded-full text-center mt-8 w-full uppercase tracking-wider text-sm"
              >
                Agendar Cita Ahora
              </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 🦸 HERO SECTION */}
      <section className="relative flex flex-col justify-center bg-white overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffaa00]/10 via-transparent to-transparent z-0"></div>

        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 flex flex-col justify-start"
          >
            {/* Trust Badge Hero */}
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-2 mb-8 w-fit shadow-sm">
              <Award className="w-4 h-4 text-[#ffaa00]" />
              <span className="text-[#4B4D54] font-bold text-xs uppercase tracking-wider">18 años de experiencia • San Borja, Lima</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[#4B4D54] leading-[1.05] tracking-tight mb-6">
              Recupera tu salud <br/>
              <span className="font-black text-[#ffaa00]">urológica con</span><br/>
              <span className="font-black">tecnología de punta.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed mb-10 font-medium">
              +15 urólogos especializados, 60K+ pacientes atendidos y galardonados como <strong className="text-[#4B4D54] font-black">Premio Empresa del Año</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#ffaa00] text-[#4B4D54] font-black rounded-full flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(255,170,0,0.4)] hover:scale-105 transition-all text-sm uppercase tracking-widest"
              >
                <Calendar className="w-5 h-5" />
                Agenda tu cita 
              </button>
              <a 
                href="https://wa.me/51970896337"
                target="_blank" rel="noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-[#4B4D54] text-[#4B4D54] font-black rounded-full flex items-center justify-center gap-3 hover:bg-[#4B4D54] hover:text-white transition-all text-sm uppercase tracking-widest group"
              >
                <MessageCircle className="w-5 h-5 group-hover:text-[#25D366] transition-colors" />
                WhatsApp ahora
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Paciente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Únete a nuestros miles de pacientes satisfechos</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 h-[500px] lg:h-[700px] w-full relative"
          >
            <div className="w-full h-full rounded-[40px] overflow-hidden relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" alt="Profesional Urozen con Tecnología" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-[#4B4D54]/10 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B4D54]/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-white/95 border border-white/50 rounded-3xl shadow-2xl flex items-center gap-4">
              <div className="w-14 h-14 bg-[#ffaa00] rounded-full flex items-center justify-center shadow-lg text-[#4B4D54] flex-shrink-0">
                <Activity className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-[#4B4D54] font-black text-lg">Precisión Milimétrica</h4>
                <p className="text-sm text-slate-500 font-medium">Cirugía Robótica Da Vinci</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ⚡ PROBLEMA -> SOLUCIÓN (Pain Points) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-heading font-light text-[#4B4D54] mb-12 tracking-tight">
              ¿Sufres de alguno de estos <span className="font-black text-[#ffaa00]">síntomas?</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                "Infecciones urinarias recurrentes",
                "Disfunción eréctil",
                "Dolor pélvico crónico",
                "Problemas de próstata"
              ].map((pain, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 hover:border-[#ffaa00]/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="font-bold text-[#4B4D54] text-sm">{pain}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#4B4D54] rounded-[32px] p-8 md:p-12 shadow-xl relative overflow-hidden text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute right-0 top-0 w-64 h-64 bg-[#ffaa00] rounded-full blur-[100px] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-light text-white mb-2">
                  En Urozen tenemos <span className="font-black text-[#ffaa00]">la solución.</span>
                </h3>
                <p className="text-slate-300">Detén las molestias hoy mismo con nuestro equipo de super-especialistas.</p>
              </div>
              <button 
                onClick={scrollToContact}
                className="relative z-10 px-8 py-4 bg-[#ffaa00] text-[#4B4D54] font-black rounded-full shadow-lg hover:scale-105 transition-transform whitespace-nowrap text-sm uppercase tracking-widest"
              >
                Quiero una evaluación
              </button>
            </div>
        </div>
      </section>

      {/* 4. 🏥 SERVICIOS DESTACADOS */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-[#ffaa00]"></span>
                <span className="text-[#4B4D54] font-bold text-xs uppercase tracking-widest">Atención Integral</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#4B4D54] tracking-tight">
                Servicios <span className="font-black text-[#ffaa00]">Destacados.</span>
              </h2>
            </div>
            <button className="text-sm font-bold text-[#4B4D54] border-b-2 border-[#ffaa00] pb-1 hover:text-[#ffaa00] transition-colors">
              Ver todas las especialidades
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users />, title: "Urología General", desc: "Diagnóstico y tratamiento de enfermedades del tracto urinario masculino y femenino con la más alta precisión." },
              { icon: <Award />, title: "Urología Oncológica", desc: "Abordaje multidisciplinario para el cáncer de próstata, riñón y vejiga utilizando tecnología robótica." },
              { icon: <CheckCircle2 />, title: "Estética Íntima Masculina", desc: "Procedimientos avanzados y seguros para mejorar la estética y funcionalidad con total discreción." },
              { icon: <User />, title: "Urología Femenina", desc: "Soluciones definitivas para incontinencia urinaria y prolapso pélvico por especialistas dedicados." },
              { icon: <Activity />, title: "Andrología y Disfunciones", desc: "Tratamientos vanguardistas para recuperar tu vida sexual y problemas de infertilidad masculina." },
              { icon: <Microscope />, title: "Cirugía Láser Mínimamente Invasiva", desc: "Procedimientos sin cortes grandes, recuperación rápida y menor dolor para cálculos renales y próstata." }
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:border-[#ffaa00]/30 transition-all group flex flex-col">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#ffaa00] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-heading font-bold text-[#4B4D54] mb-3">{service.title}</h4>
                <p className="text-slate-500 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <button className="text-[#ffaa00] font-bold text-sm uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-4 transition-all w-fit">
                  Más info <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 🏆 PRUEBA SOCIAL & VIDEO */}
      <section className="bg-[#4B4D54] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats & Badges */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-white mb-12 tracking-tight">
                Números que respaldan <br/><span className="font-black text-[#ffaa00]">tu confianza.</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-5xl font-black text-[#ffaa00] mb-2">60,000+</div>
                  <div className="text-white/80 font-medium uppercase tracking-wider text-sm">Pacientes atendidos</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-[#ffaa00] mb-2">15+</div>
                  <div className="text-white/80 font-medium uppercase tracking-wider text-sm">Urólogos especializados</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex items-center gap-6">
                 <div className="w-16 h-16 bg-[#ffaa00] rounded-full flex justify-center items-center flex-shrink-0 shadow-lg">
                   <Award className="w-8 h-8 text-[#4B4D54]" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-lg">Premio Empresa del Año 2022</h4>
                   <p className="text-slate-300 text-sm">Reconocidos internacionalmente por nuestra excelencia médica.</p>
                 </div>
              </div>
            </div>

            {/* Video Testimonial */}
            <div className="relative">
              <div className="aspect-video w-full bg-slate-800 rounded-[32px] overflow-hidden relative shadow-2xl group cursor-pointer border-4 border-slate-700 hover:border-[#ffaa00] transition-colors">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" alt="Testimonio Urozen" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#ffaa00] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,170,0,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#4B4D54] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-2 mb-1">
                    <Video className="w-4 h-4 text-[#ffaa00]" />
                    <span className="text-[#ffaa00] font-bold text-xs uppercase tracking-widest">Testimonio Doc.</span>
                  </div>
                  <h4 className="text-white font-bold text-lg">Caso de Éxito: Fístula Vesicovaginal</h4>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 6. 👨‍⚕️ EQUIPO MÉDICO */}
      <section id="equipo" className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-[#ffaa00]"></span>
                <span className="text-[#4B4D54] font-bold text-xs uppercase tracking-widest">Autoridad Médica</span>
                <span className="h-[1px] w-8 bg-[#ffaa00]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#4B4D54] mb-6 tracking-tight">
                Mentes brillantes detrás de  <br/><span className="font-black text-[#ffaa00]">tu salud.</span>
              </h2>
            </div>

            {/* Dr Grandez Feature */}
            <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 overflow-hidden mb-8 grid md:grid-cols-2">
              <div className="h-80 md:h-auto relative">
                 <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" alt="Dr. Luis Grandez" className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                 <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1 mb-4 w-fit">
                    <ShieldCheck className="w-4 h-4 text-[#ffaa00]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4B4D54]">Director Médico</span>
                 </div>
                 <h3 className="text-3xl font-heading font-black text-[#4B4D54] mb-2">Dr. Luis Grandes</h3>
                 <p className="text-[#ffaa00] font-bold uppercase tracking-widest text-sm mb-6">CEO & CIO Urozen</p>
                 <p className="text-slate-600 mb-8 leading-relaxed">Pionero en cirugía urológica mínimamente invasiva en el Perú. Lidera nuestra junta médica garantizando que cada diagnóstico sea preciso y cada tratamiento emplee la máxima innovación posible a nivel mundial.</p>
                 <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                    <CheckCircle className="w-8 h-8 text-[#ffaa00]" />
                    <span className="text-[#4B4D54] font-bold text-sm">Certificación Internacional en Robótica Da Vinci</span>
                 </div>
              </div>
            </div>

            {/* Grid Specialists */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm text-center hover:-translate-y-2 transition-transform">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-50">
                     <img src={`https://images.unsplash.com/photo-${1559839734 + i}-2b71ea197ec2?q=80&w=200&auto=format&fit=crop`} alt="Medico Especialista" className="w-full h-full object-cover" />
                  </div>
                  <h5 className="font-bold text-[#4B4D54] mb-1">Especialista {i}</h5>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Urólogo Staff</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-4 border-2 border-[#4B4D54] text-[#4B4D54] font-black rounded-full hover:bg-[#4B4D54] hover:text-white transition-all text-sm uppercase tracking-widest">
                Conoce a todo el equipo
              </button>
            </div>
         </div>
      </section>

      {/* 7. 💡 PROCESO DE ATENCIÓN (3 Pasos) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-heading font-light text-[#4B4D54] tracking-tight">
                Diseñado para ser <span className="font-black text-[#ffaa00]">sencillo.</span>
              </h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8 relative">
             {/* Desktop connecting line */}
             <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0"></div>

             {[
               { num: "1", title: "Agenda tu cita online", desc: "Completa el formulario en segundos y un coordinador te contactará para confirmar." },
               { num: "2", title: "Evaluación personalizada", desc: "Visitanos para ser evaluado por especialistas con equipos de diagnóstico premium." },
               { num: "3", title: "Tratamiento avanzado", desc: "Recupera tu tranquilidad con procedimientos de mínima invasión y rápida recuperación." }
             ].map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                 <div className="w-24 h-24 bg-white rounded-full border-8 border-slate-50 shadow-xl flex items-center justify-center mb-6 group-hover:border-[#ffaa00]/20 transition-colors">
                    <span className="text-3xl font-black text-[#ffaa00]">{step.num}</span>
                 </div>
                 <h4 className="text-xl font-heading font-bold text-[#4B4D54] mb-3">{step.title}</h4>
                 <p className="text-slate-500 max-w-xs">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 8. ❓ PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-heading font-black text-[#4B4D54] tracking-tight">
                Preguntas <span className="text-[#ffaa00]">Frecuentes</span>
              </h2>
           </div>

           <div className="space-y-4">
             {faqs.map((faq, i) => (
               <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all">
                 <button 
                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
                   className="w-full px-6 py-5 flex items-center justify-between font-bold text-[#4B4D54] text-left hover:bg-slate-50 focus:outline-none"
                 >
                   {faq.q}
                   {openFaq === i ? 
                     <Minus className="w-5 h-5 text-[#ffaa00] flex-shrink-0" /> : 
                     <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                   }
                 </button>
                 <AnimatePresence>
                   {openFaq === i && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="px-6 pb-5 text-slate-600 leading-relaxed text-sm"
                     >
                       {faq.a}
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 9. 📋 FORMULARIO DE CONVERSIÓN */}
      <section id="form" className="bg-[#4B4D54] py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ffaa00] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16">
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-[#4B4D54] mb-4">
                Da el primer paso hacia tu <span className="text-[#ffaa00]">bienestar urológico</span>
              </h2>
              <p className="text-slate-500">Déjanos tus datos. Te aseguramos total confidencialidad.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Cita Agendada Correctamente."); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#4B4D54] uppercase tracking-widest mb-2">Nombre Completo *</label>
                  <input type="text" placeholder="Ej. Juan Pérez" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 focus:outline-none focus:border-[#ffaa00] focus:ring-1 focus:ring-[#ffaa00] transition-all rounded-2xl text-[#4B4D54]" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#4B4D54] uppercase tracking-widest mb-2">Teléfono Móvil *</label>
                  <input type="tel" placeholder="987 654 321" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 focus:outline-none focus:border-[#ffaa00] focus:ring-1 focus:ring-[#ffaa00] transition-all rounded-2xl text-[#4B4D54]" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4B4D54] uppercase tracking-widest mb-2">Motivo de consulta *</label>
                <div className="relative">
                  <select required className="w-full bg-slate-50 border border-slate-200 px-5 py-4 focus:outline-none focus:border-[#ffaa00] focus:ring-1 focus:ring-[#ffaa00] transition-all rounded-2xl text-[#4B4D54] appearance-none">
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="general">Urología General</option>
                    <option value="prostata">Problemas de Próstata</option>
                    <option value="disfuncion">Disfunción Eréctil</option>
                    <option value="femenina">Urología Femenina</option>
                    <option value="oncologia">Oncología Urológica</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-start gap-3 mt-8">
                <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 text-[#ffaa00] border-slate-300 rounded focus:ring-[#ffaa00]" />
                <label htmlFor="privacy" className="text-sm text-slate-500 leading-tight cursor-pointer">
                  Acepto la <a href="#" className="font-bold text-[#ffaa00] hover:underline">política de privacidad</a> y el uso de mis datos para ser contactado.
                </label>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-[#ffaa00] text-[#4B4D54] font-black text-lg uppercase tracking-widest py-6 rounded-full hover:shadow-[0_0_30px_rgba(255,170,0,0.4)] transition-all flex justify-center items-center gap-3 group">
                  <CheckCircle className="w-6 h-6" /> Agendar Ahora
                </button>
                <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest mt-4">
                  Te contactamos en menos de 24h • Confidencialidad garantizada
                </p>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* 10. 🗺️ FOOTER + UBICACIÓN */}
      <footer className="bg-slate-50 pt-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand & Socials */}
          <div className="md:col-span-4 flex flex-col items-start">
             <img src="https://www.urozen.pe/web/image/website/1/logo/Urozen?unique=e95eb16" alt="Urozen Logo" className="h-[48px] w-auto drop-shadow-sm mix-blend-multiply opacity-80 mb-6" referrerPolicy="no-referrer" />
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              Dedicados a devolverte la calidad de vida que mereces con la mayor innovación urológica de Sudamérica.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full text-[#4B4D54] flex items-center justify-center hover:bg-[#ffaa00] transition-colors shadow-sm border border-slate-100">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full text-[#4B4D54] flex items-center justify-center hover:bg-[#ffaa00] transition-colors shadow-sm border border-slate-100">
                <Instagram className="w-5 h-5" />
              </a>
              {/* Note: TikTok icon is not standard in lucide-react, using Play as fallback representation for video social */}
              <a href="#" className="w-10 h-10 bg-white rounded-full text-[#4B4D54] flex items-center justify-center hover:bg-[#ffaa00] transition-colors shadow-sm border border-slate-100">
                <Play className="w-4 h-4 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-[#4B4D54] font-black text-sm uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">Contacto & Ubicación</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-600 text-sm">
                <MapPin className="w-5 h-5 text-[#ffaa00] flex-shrink-0" />
                <p>Av. Javier Prado Este 3028,<br/>San Borja - Lima, Perú</p>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Clock className="w-5 h-5 text-[#ffaa00] flex-shrink-0" />
                <p>Lun-Vie 8am-8pm | Sáb 8am-1pm</p>
              </div>
              <a href="tel:017131153" className="flex items-center gap-3 text-slate-600 text-sm hover:text-[#ffaa00] transition-colors">
                <Phone className="w-5 h-5 text-[#ffaa00] flex-shrink-0" />
                <p>Central: (01) 7131153</p>
              </a>
              <a href="https://wa.me/51970896337" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 text-sm hover:text-[#ffaa00] transition-colors font-bold">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <p>WhatsApp: 970 896 337</p>
              </a>
            </div>
          </div>

          {/* Links Legales */}
          <div className="md:col-span-4">
            <h4 className="text-[#4B4D54] font-black text-sm uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">Enlaces Útiles</h4>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-sm text-slate-500 hover:text-[#ffaa00] transition-colors">Nuestras Especialidades</a></li>
              <li><a href="#equipo" className="text-sm text-slate-500 hover:text-[#ffaa00] transition-colors">Staff Médico</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-[#ffaa00] transition-colors">Trabaja con nosotros</a></li>
              <li className="pt-4"><a href="#" className="text-xs text-slate-400 hover:text-[#ffaa00] transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-[#ffaa00] transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Footer Ticker / Bottom Line */}
        <div className="w-full bg-[#4B4D54] py-4 text-center">
          <p className="text-white/50 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Urozen. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
