import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaMicroscope,
  FaAward,
  FaCheckCircle,
  FaBars,
  FaTimes,
  FaPhone,
  FaWhatsapp,
  FaPlay,
  FaChevronDown,
  FaUser,
  FaUsers,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaInstagram,
  FaFacebookF,
  FaCalendarAlt,
  FaVideo,
  FaMinus,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openModalFaq, setOpenModalFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Handle Navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const faqs = [
    {
      q: "¿Cuánto cuesta la consulta?",
      a: "Los costos varían según la especialidad urológica y si se requieren exámenes de diagnóstico por imágenes. Contáctanos por WhatsApp para brindarte la información exacta y sin compromiso.",
    },
    {
      q: "¿Aceptan seguros?",
      a: "Trabajamos con las principales aseguradoras mediante la modalidad de reembolso (EPS). Te proporcionaremos todos los informes y comprobantes detallados para que gestiones tu trámite de manera ágil.",
    },
    {
      q: "¿Cuál es el tiempo de espera para una cita?",
      a: "Gracias a nuestro amplio equipo médico (+15 urólogos), generalmente podemos asignarte un especialista dentro de las próximas 24 a 48 horas. En casos de urgencia, tenemos atención prioritaria.",
    },
    {
      q: "¿Cuentan con estacionamiento?",
      a: "Sí, nuestra sede en San Borja cuenta con estacionamiento privado gratuito y seguridad permanente para la total comodidad de nuestros pacientes y sus familiares.",
    },
  ];

  const SERVICES = [
    {
      id: "general",
      title: "Urología General y de la Próstata",
      shortTitle: "Urología General",
      img: "https://www.urozen.pe/web/image/509103-7a560409/Urodinamia%20-%20Dr.%20Postigo.png",
      tagline: "#Esmomentodecuidarte",
      description:
        "Nos especializamos en el estudio, diagnóstico y tratamiento de diversas patologías relacionadas al sistema urinario. La detección oportuna de cualquier patología y el correcto tratamiento, brinda mayores oportunidades de recuperación y mejora la calidad de vida.",
      important:
        "Seguramente pensabas que los urólogos se ocupaban exclusivamente de temas que afectan a los hombres, y es absolutamente falso. Es una especialidad que se ocupa de temas que afectan a todos, hombres, mujeres y niños.",
      pathologies: [
        "Hiperplasia benigna de próstata",
        "Incontinencia urinaria",
        "Balanitis",
        "Orquitis",
        "Litiasis renal",
        "Prostatitis",
        "Infección urinaria",
      ],
      procedures: [
        { title: "Cistometría", icon: <FaMicroscope /> },
        { title: "Cistoscopia", icon: <FaVideo /> },
        { title: "Urodinamia", icon: <FaHeartbeat /> },
        { title: "Litroticia Extracorpórea", icon: <FaShieldAlt /> },
        { title: "Biopsias", icon: <FaMicroscope /> },
      ],
      faqs: [
        {
          q: "¿Cuáles son los síntomas?",
          a: "Los síntomas más comunes incluyen dificultad para orinar, aumento de la frecuencia nocturna, dolor lumbar o presencia de sangre en la orina. Si presentas cualquiera de estos, es vital una evaluación inmediata.",
        },
        {
          q: "¿Cómo puedo agendar una consulta médica?",
          a: "Puedes agendar mediante nuestro botón de WhatsApp directo o completando el formulario de contacto al final de esta página. Un coordinador te atenderá en minutos.",
        },
        {
          q: "¿Puedo realizarme un procedimiento urológico sin pasar consulta médica?",
          a: "No. Por seguridad del paciente, todo procedimiento invasivo o diagnóstico avanzado requiere una orden médica previa de nuestros especialistas.",
        },
        {
          q: "¿Cuánto cuesta un procedimiento en Urozen?",
          a: "Los costos varían según la complejidad y la tecnología láser o robótica empleada. Te brindaremos un presupuesto detallado tras tu primera evaluación.",
        },
        {
          q: "¿Las mujeres pueden ir al urólogo?",
          a: "¡Por supuesto! El urólogo es el especialista del sistema urinario tanto en hombres como en mujeres (riñones, vejiga y uretra), además del sistema reproductor masculino.",
        },
      ],
    },
    {
      id: "endourologia",
      title: "Endourología y Mínima Invasión",
      shortTitle: "Endourología",
      img: "https://www.urozen.pe/web/image/509105-ba7df721/Litotricia.jpg",
      tagline: "Tecnología láser avanzada",
      description:
        "La endourología permite tratar cálculos y problemas de la vía urinaria mediante orificios naturales o incisiones milimétricas, reduciendo el dolor y el tiempo de recuperación.",
      important:
        "Urozen es pionero en el uso de láser Holmium y Thulium en el Perú para el tratamiento definitivo de litiasis renal.",
      pathologies: [
        "Cálculos renales",
        "Cálculos ureterales",
        "Cálculos vesicales",
        "Estenosis de uretra",
      ],
      procedures: [
        { title: "Ureteroscopia Flexible", icon: <FaMicroscope /> },
        { title: "Nefrolitotomía Percutánea", icon: <FaShieldAlt /> },
        { title: "Litroticia Láser", icon: <FaPlay /> },
      ],
      faqs: [
        {
          q: "¿La cirugía láser duele?",
          a: "No, se realiza bajo sedación o anestesia conductiva. El postoperatorio es significativamente menos doloroso que la cirugía abierta tradicional.",
        },
        {
          q: "¿Cuánto tiempo dura la recuperación?",
          a: "La mayoría de nuestros pacientes retornan a sus actividades en 48 a 72 horas, gracias a nuestra tecnología de mínima invasión.",
        },
      ],
    },
    {
      id: "funcional",
      title: "Urología Funcional y Piso Pélvico",
      shortTitle: "Urología Funcional",
      img: "https://www.urozen.pe/web/image/581726-9dbf4ce6/el-urologo-senala-la-estructura-del-rinon-en-un-modelo-anatomico%20copia.jpg",
      tagline: "Recupera tu control",
      description:
        "Tratamiento de disfunciones del vaciado vesical e incontinencia, tanto en hombres como en mujeres, mejorando drásticamente su vida social y personal.",
      important:
        "La incontinencia urinaria no es una parte normal del envejecimiento, tiene solución y tratamiento.",
      pathologies: [
        "Incontinencia urinaria de esfuerzo",
        "Vejiga hiperactiva",
        "Prolapso de órganos pélvicos",
      ],
      procedures: [
        { title: "Estudio Urodinámico", icon: <FaHeartbeat /> },
        { title: "Colocación de Mallas", icon: <FaCheckCircle /> },
        { title: "Toxina Botulínica Vesical", icon: <FaShieldAlt /> },
      ],
      faqs: [
        {
          q: "¿Existen ejercicios para el piso pélvico?",
          a: "Sí, los ejercicios de Kegel y la fisioterapia pélvica son fundamentales y los realizamos en nuestra unidad especializada.",
        },
        {
          q: "¿Qué tan efectiva es la cirugía de malla?",
          a: "Tiene una tasa de éxito superior al 90% para corregir la incontinencia de esfuerzo cuando es realizada por manos expertas.",
        },
      ],
    },
    {
      id: "estetica",
      title: "Estética Íntima Masculina",
      shortTitle: "Estética Íntima",
      img: "https://www.urozen.pe/web/image/509107-f9c71680/tratamiento%20para%20la%20disfuncion%20erectil.jpg",
      tagline: "Confidencialidad y perfección",
      description:
        "Procedimientos diseñados para mejorar la estética y funcionalidad de la zona genital masculina, realizados con las técnicas más modernas y discretas.",
      important:
        "Todos nuestros procedimientos estéticos son ambulatorios y garantizan el retorno rápido a las actividades diarias.",
      pathologies: ["Fimosis", "Escroto redundante", "Inestética genital"],
      procedures: [
        { title: "Circuncisión estética", icon: <FaMicroscope /> },
        { title: "Engrosamiento peneano", icon: <FaShieldAlt /> },
        { title: "Escrotoplastia", icon: <FaCheckCircle /> },
      ],
      faqs: [
        {
          q: "¿Quedan cicatrices notables?",
          a: "Nuestras técnicas de sutura intradérmica y láser minimizan las marcas, volviéndose imperceptibles con el tiempo.",
        },
        {
          q: "¿Afecta la sensibilidad?",
          a: "Al contrario, muchos pacientes reportan una mejora en su higiene y confianza, sin afectar la sensibilidad sexual.",
        },
      ],
    },
    {
      id: "oncologica",
      title: "Urología Oncológica de Alta Complejidad",
      shortTitle: "Urología Oncológica",
      img: "https://www.urozen.pe/web/image/509104-79cbf097/Consultorio%20Urozen.png",
      tagline: "Lucha contra el cáncer",
      description:
        "Abordaje quirúrgico y multidisciplinario de tumores en el tracto urogenital, priorizando la curación y la preservación de funciones vitales.",
      important:
        "El diagnóstico temprano del cáncer de próstata tiene una tasa de curación superior al 95%.",
      pathologies: [
        "Cáncer de próstata",
        "Cáncer de riñón",
        "Cáncer de vejiga",
        "Cáncer de testículo",
      ],
      procedures: [
        { title: "Prostatectomía Radical", icon: <FaShieldAlt /> },
        { title: "Nefrectomía Parcial", icon: <FaMicroscope /> },
        { title: "Cistectomía Radical", icon: <FaCheckCircle /> },
      ],
      faqs: [
        {
          q: "¿Qué es la biopsia por fusión?",
          a: "Es la tecnología más precisa del mundo que combina Resonancia y Ecografía para detectar tumores que antes eran invisibles.",
        },
        {
          q: "¿Ofrecen cirugía robótica?",
          a: "Sí, contamos con especialistas certificados en plataforma robótica para cirugías de alta precisión.",
        },
      ],
    },
    {
      id: "andrologia",
      title: "Andrología y Disfunciones Sexuales",
      shortTitle: "Andrología",
      img: "https://www.urozen.pe/web/image/509106-7298ff51/romantic-happy-couple-embraced-window.jpg",
      tagline: "Pasión y salud",
      description:
        "Especialidad dedicada a la salud reproductiva y sexual del varón, tratando desde disfunción eréctil hasta infertilidad masculina.",
      important:
        "La salud sexual es un indicador clave de la salud cardiovascular en el hombre.",
      pathologies: [
        "Disfunción eréctil",
        "Eyaculación precoz",
        "Infertilidad masculina",
        "Andropausia",
      ],
      procedures: [
        { title: "Ondas de Choque", icon: <FaPlay /> },
        { title: "Implante de Prótesis", icon: <FaShieldAlt /> },
        { title: "Varicocelectomía Microquirúrgica", icon: <FaMicroscope /> },
      ],
      faqs: [
        {
          q: "¿Son seguras las ondas de choque?",
          a: "Absolutamente. Es un tratamiento no invasivo, sin fármacos, que regenera los vasos sanguíneos para recuperar erecciones naturales.",
        },
        {
          q: "¿Cuándo se recomienda una prótesis?",
          a: "En casos de disfunción eréctil severa que no responde a tratamientos convencionales; es la solución definitiva.",
        },
      ],
    },
    {
      id: "femenina",
      title: "Urología Femenina Especializada",
      shortTitle: "Urología Femenina",
      img: "https://www.urozen.pe/web/image/509102-b0de073e/Foto%20nutricionista%20con%20paciente%20nuevo.jpg",
      tagline: "Salud para la mujer",
      description:
        "Servicios enfocados exclusivamente en patologías urológicas que afectan a la mujer, desde infecciones recurrentes hasta prolapsos.",
      important:
        "Las mujeres no deben normalizar el dolor pélvico o las infecciones constantes; ameritan evaluación experta.",
      pathologies: [
        "Cistitis de repetición",
        "Vejiga caída",
        "Uretoplastia femenina",
      ],
      procedures: [
        { title: "Rejuvenecimiento Vaginal", icon: <FaMicroscope /> },
        { title: "Colocación de TOT", icon: <FaCheckCircle /> },
        { title: "Fisioterapia Pélvica", icon: <FaHeartbeat /> },
      ],
      faqs: [
        {
          q: "¿Por qué tengo infecciones siempre?",
          a: "Las infecciones recurrentes suelen deberse a bacterias persistentes o factores anatómicos que deben ser evaluados mediante urocultivos y ecografías.",
        },
        {
          q: "¿Qué médico me atiende?",
          a: "Contamos con urólogas especializadas en patología femenina para brindarte la mayor comodidad.",
        },
        {
          q: "¿Las niñas también pueden venir?",
          a: "Sí, brindamos atención en urología pediátrica para niñas con total delicadeza.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans text-[#4B4D54] border-x-[12px] border-t-[12px] border-slate-50 selection:bg-[#ffaa00] selection:text-[#4B4D54] pb-20 md:pb-0 lg:border-b-[12px]">
      {/* 📱 FLOATING ELEMENTS */}
      <a
        href="https://wa.me/51970896337"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <FaWhatsapp className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-[#4B4D54] px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp ahora
        </span>
      </a>

      {/* 📱 MOBILE BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 z-50 flex shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a
          href="tel:017131153"
          className="flex-1 flex justify-center items-center py-4 text-[#4B4D54] font-bold gap-2 hover:bg-slate-50 transition-colors"
        >
          <FaPhone className="w-5 h-5" /> Llamar
        </a>
        <button
          onClick={scrollToContact}
          className="flex-1 flex justify-center items-center py-4 bg-[#ffaa00] text-white font-bold gap-2"
        >
          <FaCalendarAlt className="w-5 h-5" /> Agenda
        </button>
      </div>

      {/* 1. 🔝 HEADER FIJO */}
      <nav
        className={`flex items-center justify-between px-6 lg:px-12 py-5 bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all ${isScrolled ? "border-b border-slate-100 shadow-sm" : ""}`}
      >
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <a href="#">
              <img
                src="https://www.urozen.pe/web/image/website/1/logo/Urozen?unique=e95eb16"
                alt="Urozen Logo"
                className="h-[42px] w-auto drop-shadow-sm transition-transform hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="tel:017131153"
              className="flex items-center gap-2 text-[#4B4D54] hover:text-[#ffaa00] transition-colors font-bold group"
            >
              <FaPhone className="w-4 h-4 group-hover:animate-bounce" />
              (01) 7131153
            </a>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#ffaa00] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:shadow-[0_8px_20px_rgba(255,170,0,0.3)] transition-all hover:scale-105"
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-[#4B4D54]" />
            ) : (
              <FaBars className="text-[#4B4D54]" />
            )}
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
            <a
              href="tel:017131153"
              className="flex items-center gap-4 text-[#4B4D54] text-xl font-bold border-b border-slate-100 pb-6"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                <FaPhone className="w-6 h-6 text-[#ffaa00]" />
              </div>
              (01) 7131153
            </a>
            <button
              onClick={() => {
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-[#4B4D54] text-xl font-medium text-left"
            >
              Nuestros Servicios
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("equipo")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-[#4B4D54] text-xl font-medium text-left"
            >
              Equipo Médico
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("testimonios")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
              className="text-[#4B4D54] text-xl font-medium text-left"
            >
              Testimonios
            </button>

            <button
              onClick={scrollToContact}
              className="bg-[#ffaa00] text-white font-bold px-6 py-4 rounded-full text-center mt-8 w-full uppercase tracking-wider text-sm"
            >
              Agendar Cita Ahora
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 🦸 HERO SECTION */}
      <section className="relative flex flex-col justify-center bg-white overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffaa00]/10 via-transparent to-transparent z-0"></div>

        <div className="max-w-7xl w-full mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 flex flex-col justify-start"
          >
            {/* Trust Badge Hero */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#ffaa00]/20 rounded-full px-5 py-2 mb-8 w-fit shadow-[0_4px_20px_rgba(255,170,0,0.1)] hover:border-[#ffaa00]/40 transition-colors group">
              <div className="flex items-center justify-center w-6 h-6 bg-[#ffaa00]/10 rounded-full group-hover:scale-110 transition-transform">
                <FaAward className="w-3.5 h-3.5 text-[#ffaa00]" />
              </div>
              <span className="text-[#4B4D54] font-bold text-xs uppercase tracking-widest">
                18 años de experiencia • San Borja, Lima
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[#4B4D54] leading-[1.05] tracking-tight mb-6">
              Recupera tu salud <br />
              <span className="font-bold text-[#ffaa00]">urológica con</span>
              <br />
              <span className="">tecnología de punta.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed mb-10 ">
              +15 urólogos especializados, 60K+ pacientes atendidos y
              galardonados como{" "}
              <strong className="text-[#4B4D54] ">
                Premio Empresa del Año
              </strong>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#ffaa00] text-white font-black rounded-full flex items-center justify-center gap-3 group shadow-[0_8px_25px_rgba(255,170,0,0.3)] hover:shadow-[#ffaa00]/50 hover:scale-105 transition-all text-sm uppercase tracking-widest"
              >
                <FaCalendarAlt className="w-5 h-5" />
                Agenda tu cita
              </button>
              <a
                href="https://wa.me/51970896337"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-black rounded-full flex items-center justify-center gap-3 hover:bg-[#20bd5a] hover:scale-105 transition-all text-sm uppercase tracking-widest group shadow-[0_8px_25px_rgba(37,211,102,0.2)]"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                WhatsApp ahora
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3 text-[#ffaa00]" />
                ))}
                <span className="ml-2 text-[10px] font-black text-[#4B4D54] uppercase tracking-[0.2em] opacity-70">
                  Excelencia médica comprobada
                </span>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full border-[3px] border-white bg-slate-100 overflow-hidden shadow-lg hover:translate-y-[-4px] transition-transform duration-300 cursor-pointer"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 20}`}
                        alt="Paciente"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-11 h-11 rounded-full border-[3px] border-white bg-[#ffaa00] text-white flex items-center justify-center text-[10px] font-black shadow-lg">
                    +10K
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-black text-[#4B4D54]  tracking-tight">
                    Únete a nuestros pacientes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 h-[500px] lg:h-[700px] w-full relative"
          >
            <div className="w-full h-full rounded-[40px] overflow-hidden relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop"
                alt="Profesional Urozen con Tecnología"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ⚡ PROBLEMA -> SOLUCIÓN (Pain Points) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[#4B4D54] mb-12 tracking-tight">
            ¿Sufres de alguno de estos{" "}
            <span className="font-bold text-[#ffaa00]">síntomas?</span>
          </h2>

          <div className="mb-16 relative px-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="symptoms-swiper !pb-20"
            >
              {[
                {
                  title: "Próstata",
                  desc: "Cáncer de Próstata, Hiperplasia Benigna de Próstata y Prostatitis",
                  img: "https://www.urozen.pe/web/image/615650-7c673412/ICONO-PROSTATA.png",
                },
                {
                  title: "Uretra",
                  desc: "Uretritis, Estenosis, Hipospadias y Traumatismos",
                  img: "https://www.urozen.pe/web/image/615651-7cd620c2/ICONO-URETRA.png",
                },
                {
                  title: "Riñón y Vías Urinarias",
                  desc: "Cáncer de Riñón, Cáncer de uréter, Pielonefritis, Quiste Renal y Cálculos Renales",
                  img: "https://www.urozen.pe/web/image/615653-33344422/ICONO-RI%C3%91ON.png",
                },
                {
                  title: "Pene",
                  desc: "Pene Pequeño, Disfunción Eréctil, Eyaculación Precoz, VPH, Pene Curvo, ETS y Fimosis",
                  img: "https://www.urozen.pe/web/image/615652-30125e73/ICONO-PENE.png",
                },
                {
                  title: "Testículos",
                  desc: "Cáncer, Varicocele, Hidrocele, Epididimitis, Infertilidad, Orquitis y Torsión",
                  img: "https://www.urozen.pe/web/image/615654-062c42c9/ICONO-TESTICULOS.png",
                },
                {
                  title: "Vejiga",
                  desc: "Infección Urinaria, Cáncer de Vejiga, Cistitis Crónica, Incontinencia y Prolapso",
                  img: "https://www.urozen.pe/web/image/615655-5057a251/ICONO-VEJIGA.png",
                },
                {
                  title: "Piso Pélvico",
                  desc: "Incontinencia Urinaria y Prolapso",
                  img: "https://www.urozen.pe/web/image/615656-85aff05b/ICONO-SUELO%20PELVICO.png",
                },
                {
                  title: "Útero y Ovarios",
                  desc: "Cáncer de Cuello Uterino, Endometriosis, Histerectomía y Traumatismos",
                  img: "https://www.urozen.pe/web/image/615657-b7697368/ICONO-UTERO%20Y%20OVARIO.png",
                },
                {
                  title: "Balance Hormonal",
                  desc: "Desequilibrio Hormonal",
                  img: "https://www.urozen.pe/web/image/615658-a13302fc/ICONO-BALANCE%20HORMONAL.png",
                },
              ].map((cat, i) => (
                <SwiperSlide key={i} className="!h-auto">
                  <div className="bg-white p-8 rounded-[40px] h-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center text-center gap-6 hover:border-[#ffaa00]/30 transition-all group hover:shadow-2xl hover:translate-y-[-8px] duration-500">
                    <div className="w-24 h-24 bg-slate-50/50 rounded-[30px] flex items-center justify-center p-5 group-hover:bg-[#ffaa00]/5 transition-colors duration-500">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="w-full h-full object-contain"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(73%) sepia(87%) saturate(2253%) hue-rotate(1deg) brightness(105%) contrast(105%)",
                        }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="font-heading font-black text-2xl lg:text-3xl text-[#4B4D54] leading-tight">
                        {cat.title}
                      </h3>
                      <div className="h-1 w-12 bg-[#ffaa00]/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-[#ffaa00] transition-all duration-500"></div>
                      <p className="text-[#4B4D54] text-md font-medium leading-relaxed px-2">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <style>{`
              .symptoms-swiper .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background: #cbd5e1;
                opacity: 0.5;
                transition: all 0.3s ease;
              }
              .symptoms-swiper .swiper-pagination-bullet-active {
                width: 32px;
                background: #ffaa00;
                border-radius: 6px;
                opacity: 1;
              }
            `}</style>
          </div>

          <div className="bg-gradient-to-r from-[#4B4D54] to-[#3a3c42] rounded-[48px] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden text-left flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Decorative background elements */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#ffaa00] rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#ffaa00] rounded-full blur-[100px] opacity-10"></div>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            ></div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#ffaa00]/10 border border-[#ffaa00]/20 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-[#ffaa00] rounded-full animate-pulse"></div>
                <span className="text-[#ffaa00] font-black text-[10px] uppercase tracking-[0.2em]">
                  atención prioritaria
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-light text-white mb-6 leading-[1.1] tracking-tight">
                Recupera tu tranquilidad. <br />
                <span className="font-bold text-[#ffaa00]">
                  En Urozen tenemos la solución.
                </span>
              </h3>
              <p className="text-slate-300 text-lg md:text-xl font-normal max-w-xl">
                Detén las molestias hoy mismo con el equipo de
                super-especialistas que lidera la urología en el Perú.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              <button
                onClick={scrollToContact}
                className="px-10 py-5 bg-[#ffaa00] text-white font-black rounded-full shadow-[0_10px_30px_rgba(255,170,0,0.4)] hover:shadow-[#ffaa00]/60 hover:scale-105 transition-all whitespace-nowrap text-sm uppercase tracking-widest group"
              >
                Solicitar Evaluación Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🏥 SERVICIOS DESTACADOS */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-[#ffaa00]"></span>
                <span className="text-[#4B4D54] font-bold text-xs uppercase tracking-widest">
                  Especialidades Médicas
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[#4B4D54] tracking-tight">
                Nuestros{" "}
                <span className="font-bold text-[#ffaa00]">Servicios.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] rounded-[40px] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all"
                onClick={() => setSelectedService(service)}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B4D54] via-[#4B4D54]/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-[#ffaa00] w-12 h-[2px] mb-4 group-hover:w-24 transition-all duration-500"></div>
                  <h3 className="text-white text-2xl font-black mb-2 leading-tight uppercase">
                    {service.shortTitle}
                  </h3>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest leading-loose mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 line-clamp-2">
                    {service.description}
                  </p>
                  <button className="text-white font-black text-xs uppercase tracking-[0.2em] inline-flex items-center gap-3">
                    Ver Detalle{" "}
                    <FaArrowRight className="w-4 h-4 text-[#ffaa00]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE MODAL - REDISEÑADO SEGÚN REFERENCIA */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedService(null);
                setOpenModalFaq(null);
              }}
              className="absolute inset-0 bg-[#4B4D54]/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-5xl bg-white rounded-none md:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
            >
              <button
                onClick={() => {
                  setSelectedService(null);
                  setOpenModalFaq(null);
                }}
                className="absolute top-4 right-4 z-[110] w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#ffaa00] transition-colors"
              >
                <FaTimes />
              </button>

              {/* 1. Header con Background Image y Overlay Blur */}
              <div className="relative h-64 md:h-80 flex flex-col items-center justify-center text-white text-center px-4 flex-shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                  style={{ backgroundImage: `url(${selectedService.img})` }}
                ></div>
                <div className="absolute inset-0 bg-[#4B4D54]/70 backdrop-blur-sm"></div>
                <div className="relative z-10 w-full max-w-4xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 tracking-tight drop-shadow-lg">
                    {selectedService.title}
                  </h2>
                  <span className="text-[#ffaa00] font-bold text-sm uppercase tracking-[0.3em] italic opacity-90">
                    {selectedService.tagline}
                  </span>
                </div>
              </div>

              {/* 2. Scrollable Content Area */}
              <div className="flex-grow overflow-y-auto custom-scrollbar bg-white">
                <div className="max-w-5xl mx-auto">
                  {/* Intro Description */}
                  <div className="p-8 md:p-12">
                    <p className="text-[#4B4D54] text-lg md:text-xl font-medium leading-[1.6] mb-12 text-left md:text-center max-w-4xl mx-auto">
                      {selectedService.description}
                    </p>

                    {/* Dato Importante Box */}
                    <div className="border-[1.5px] border-[#ffaa00] rounded-2xl p-6 md:p-10 mb-16 shadow-sm flex items-start gap-6 bg-yellow-50/10">
                      <div className="w-10 h-10 bg-[#ffaa00] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                        <FaAward className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[#ffaa00] font-bold text-2xl mb-3">
                          Dato Importante
                        </h4>
                        <p className="text-[#4B4D54] text-lg leading-relaxed">
                          {selectedService.important}
                        </p>
                      </div>
                    </div>

                    {/* Image & Pathologies Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-start mb-20 px-4 md:px-0">
                      <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-50 rotate-[-1deg]">
                        <img
                          src={selectedService.img}
                          alt={selectedService.title}
                          className="w-full h-full object-cover aspect-[4/3] transform hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="pt-4">
                        <h4 className="text-[#ffaa00] font-bold text-3xl mb-8 border-b-2 border-[#ffaa00] pb-2 w-fit">
                          Principales Patologías
                        </h4>
                        <ul className="space-y-5">
                          {selectedService.pathologies.map(
                            (path: string, i: number) => (
                              <li
                                key={i}
                                className="group flex items-center gap-4 text-[#4B4D54] font-bold text-lg hover:translate-x-2 transition-transform cursor-default"
                              >
                                <span className="w-2 h-2 rounded-full bg-[#ffaa00] shadow-[0_0_8px_rgba(255,170,0,0.5)]"></span>
                                <span className="underline decoration-[#ffaa00]/30 underline-offset-4 group-hover:decoration-[#ffaa00] transition-colors">
                                  {path}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 3. Orange Procedures Section (Tira Naranja) */}
                  <div className="bg-[#ffaa00] py-16 px-8 relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)",
                        backgroundSize: "16px 16px",
                      }}
                    ></div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                      <h4 className="text-[#4B4D54] font-bold text-3xl mb-12">
                        Principales Procedimientos Urológicos
                      </h4>
                      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-16">
                        {selectedService.procedures.map(
                          (proc: any, i: number) => (
                            <div
                              key={i}
                              className="flex flex-col items-center gap-4 w-32 group"
                            >
                              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-white shadow-inner group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                                <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center text-[#ffaa00] text-3xl shadow-lg border border-white/40">
                                  {proc.icon}
                                </div>
                              </div>
                              <span className="text-[#4B4D54] font-bold text-[10px] md:text-xs uppercase tracking-wider leading-tight text-center px-1">
                                {proc.title}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 4. Symptoms Accordion Section (Footer Estilo Referencia) */}
                  <div className="p-8 md:p-16 max-w-4xl mx-auto bg-white mb-10">
                    <h4 className="text-[#ffaa00] font-bold text-3xl md:text-4xl mb-12 text-center md:text-left">
                      ¿Cuáles son los síntomas?
                    </h4>
                    <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                      {selectedService.faqs.map((faq: any, i: number) => (
                        <div
                          key={i}
                          className="border-b border-slate-100 last:border-0"
                        >
                          <button
                            onClick={() =>
                              setOpenModalFaq(openModalFaq === i ? null : i)
                            }
                            className={`w-full p-6 flex items-center gap-5 text-left font-bold transition-all ${openModalFaq === i ? "bg-slate-50 text-[#ffaa00]" : "bg-white text-[#4B4D54] hover:bg-slate-50/50"}`}
                          >
                            <div
                              className={`w-6 h-6 border-2 rounded flex items-center justify-center text-lg leading-none transition-colors ${openModalFaq === i ? "border-[#ffaa00] bg-[#ffaa00] text-white" : "border-slate-300 text-slate-300"}`}
                            >
                              {openModalFaq === i ? "-" : "+"}
                            </div>
                            <span className="text-sm md:text-base">
                              {faq.q}
                            </span>
                          </button>
                          <AnimatePresence>
                            {openModalFaq === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-white border-t border-slate-50"
                              >
                                <div className="p-8 text-[#4B4D54] text-base leading-relaxed pl-16 opacity-80 bg-slate-50/30">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>

                    {/* Mini CTA al final del scroll */}
                    <div className="mt-16 text-center">
                      <button
                        onClick={() => {
                          setSelectedService(null);
                          setOpenModalFaq(null);
                          scrollToContact();
                        }}
                        className="px-12 py-5 bg-[#ffaa00] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all text-sm uppercase tracking-[0.2em]"
                      >
                        Agendar consulta ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. 🏆 PRUEBA SOCIAL & VIDEO */}
      <section className="bg-[#4B4D54] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats & Badges */}
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white mb-12 tracking-tight">
                Números que respaldan <br />
                <span className="font-bold text-[#ffaa00]">tu confianza.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-5xl font-black text-[#ffaa00] mb-2">
                    60,000+
                  </div>
                  <div className="text-white/80 font-medium uppercase tracking-wider text-sm">
                    Pacientes atendidos
                  </div>
                </div>
                <div>
                  <div className="text-5xl font-black text-[#ffaa00] mb-2">
                    15+
                  </div>
                  <div className="text-white/80 font-medium uppercase tracking-wider text-sm">
                    Urólogos especializados
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex items-center gap-6">
                <div className="w-16 h-16 bg-[#ffaa00] rounded-full flex justify-center items-center flex-shrink-0 shadow-lg">
                  <FaAward className="w-8 h-8 text-[#4B4D54]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Premio Empresa del Año 2022
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Reconocidos internacionalmente por nuestra excelencia
                    médica.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Testimonial */}
            <div className="relative">
              <div className="aspect-video w-full bg-slate-800 rounded-[32px] overflow-hidden relative shadow-2xl group cursor-pointer border-4 border-slate-700 hover:border-[#ffaa00] transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
                  alt="Testimonio Urozen"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#ffaa00] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,170,0,0.5)] group-hover:scale-110 transition-transform">
                    <FaPlay className="w-8 h-8 text-[#4B4D54] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-2 mb-1">
                    <FaVideo className="w-4 h-4 text-[#ffaa00]" />
                    <span className="text-[#ffaa00] font-bold text-xs uppercase tracking-widest">
                      Testimonio Doc.
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-lg">
                    Caso de Éxito: Fístula Vesicovaginal
                  </h4>
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
              <span className="text-[#4B4D54] font-bold text-xs uppercase tracking-widest">
                Autoridad Médica
              </span>
              <span className="h-[1px] w-8 bg-[#ffaa00]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#4B4D54] mb-6 tracking-tight">
              Mentes brillantes detrás de <br />
              <span className="font-black text-[#ffaa00]">tu salud.</span>
            </h2>
          </div>

          {/* Dr Grandez Feature */}
          <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 overflow-hidden mb-8 grid md:grid-cols-2">
            <div className="h-80 md:h-auto relative">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
                alt="Dr. Luis Grandez"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1 mb-4 w-fit">
                <FaShieldAlt className="w-4 h-4 text-[#ffaa00]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#4B4D54]">
                  Director Médico
                </span>
              </div>
              <h3 className="text-3xl font-heading font-black text-[#4B4D54] mb-2">
                Dr. Luis Grandes
              </h3>
              <p className="text-[#ffaa00] font-bold uppercase tracking-widest text-sm mb-6">
                CEO & CIO Urozen
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Pionero en cirugía urológica mínimamente invasiva en el Perú.
                Lidera nuestra junta médica garantizando que cada diagnóstico
                sea preciso y cada tratamiento emplee la máxima innovación
                posible a nivel mundial.
              </p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <FaCheckCircle className="w-8 h-8 text-[#ffaa00]" />
                <span className="text-[#4B4D54] font-bold text-sm">
                  Certificación Internacional en Robótica Da Vinci
                </span>
              </div>
            </div>
          </div>

          {/* Grid Specialists */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm text-center hover:-translate-y-2 transition-transform"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-50">
                  <img
                    src={`https://images.unsplash.com/photo-${1559839734 + i}-2b71ea197ec2?q=80&w=200&auto=format&fit=crop`}
                    alt="Medico Especialista"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-bold text-[#4B4D54] mb-1">
                  Especialista {i}
                </h5>
                <p className="text-xs text--[#4B4D54] font-semibold uppercase tracking-widest">
                  Urólogo Staff
                </p>
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-[#4B4D54] tracking-tight">
              Diseñado para ser{" "}
              <span className="font-black text-[#ffaa00]">sencillo.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0"></div>

            {[
              {
                num: "1",
                title: "Agenda tu cita online",
                desc: "Completa el formulario en segundos y un coordinador te contactará para confirmar.",
              },
              {
                num: "2",
                title: "Evaluación personalizada",
                desc: "Visitanos para ser evaluado por especialistas con equipos de diagnóstico premium.",
              },
              {
                num: "3",
                title: "Tratamiento avanzado",
                desc: "Recupera tu tranquilidad con procedimientos de mínima invasión y rápida recuperación.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-full border-8 border-slate-50 shadow-xl flex items-center justify-center mb-6 group-hover:border-[#ffaa00]/20 transition-colors">
                  <span className="text-3xl font-black text-[#ffaa00]">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-xl font-heading font-bold text-[#4B4D54] mb-3">
                  {step.title}
                </h4>
                <p className="text-[#4B4D54] max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ❓ PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#4B4D54] tracking-tight">
              Preguntas <span className="text-[#ffaa00]">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between font-bold text-[#4B4D54] text-left hover:bg-slate-50 focus:outline-none"
                >
                  {faq.q}
                  {openFaq === i ? (
                    <FaMinus className="w-5 h-5 text-[#ffaa00] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text--[#4B4D54] flex-shrink-0" />
                  )}
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
      <section
        id="form"
        className="bg-[#4B4D54] py-24 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ffaa00] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-[#4B4D54] mb-4">
                Da el primer paso hacia tu{" "}
                <span className="text-[#ffaa00]">bienestar urológico</span>
              </h2>
              <p className="text-[#4B4D54]">
                Déjanos tus datos. Te aseguramos total confidencialidad.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Cita Agendada Correctamente.");
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#4B4D54] uppercase tracking-widest mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 focus:outline-none focus:border-[#ffaa00] focus:ring-1 focus:ring-[#ffaa00] transition-all rounded-2xl text-[#4B4D54]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#4B4D54] uppercase tracking-widest mb-2">
                    Teléfono Móvil *
                  </label>
                  <input
                    type="tel"
                    placeholder="987 654 321"
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 focus:outline-none focus:border-[#ffaa00] focus:ring-1 focus:ring-[#ffaa00] transition-all rounded-2xl text-[#4B4D54]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4B4D54] uppercase tracking-widest mb-2">
                  Motivo de consulta *
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full bg-slate-50 border border-slate-200 px-5 py-4 focus:outline-none focus:border-[#ffaa00] focus:ring-1 focus:ring-[#ffaa00] transition-all rounded-2xl text-[#4B4D54] appearance-none"
                  >
                    <option value="" disabled selected>
                      Selecciona una opción
                    </option>
                    <option value="general">Urología General</option>
                    <option value="prostata">Problemas de Próstata</option>
                    <option value="disfuncion">Disfunción Eréctil</option>
                    <option value="femenina">Urología Femenina</option>
                    <option value="oncologia">Oncología Urológica</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                  <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text--[#4B4D54] pointer-events-none" />
                </div>
              </div>

              <div className="flex items-start gap-3 mt-8">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 w-4 h-4 text-[#ffaa00] border-slate-300 rounded focus:ring-[#ffaa00]"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-[#4B4D54] leading-tight cursor-pointer"
                >
                  Acepto la{" "}
                  <a
                    href="#"
                    className="font-bold text-[#ffaa00] hover:underline"
                  >
                    política de privacidad
                  </a>{" "}
                  y el uso de mis datos para ser contactado.
                </label>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#ffaa00] text-white font-black text-lg uppercase tracking-widest py-6 rounded-full hover:shadow-[0_8px_30px_rgba(255,170,0,0.3)] transition-all flex justify-center items-center gap-3 group"
                >
                  <FaCheckCircle className="w-6 h-6" /> Agendar Ahora
                </button>
                <p className="text-center text-xs text--[#4B4D54] font-bold uppercase tracking-widest mt-4">
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
            <img
              src="https://www.urozen.pe/web/image/website/1/logo/Urozen?unique=e95eb16"
              alt="Urozen Logo"
              className="h-[48px] w-auto drop-shadow-sm mix-blend-multiply opacity-80 mb-6"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-[#4B4D54] mb-8 leading-relaxed">
              Dedicados a devolverte la calidad de vida que mereces con la mayor
              innovación urológica de Sudamérica.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full text-[#4B4D54] flex items-center justify-center hover:bg-[#ffaa00] transition-colors shadow-sm border border-slate-100"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full text-[#4B4D54] flex items-center justify-center hover:bg-[#ffaa00] transition-colors shadow-sm border border-slate-100"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              {/* Note: TikTok icon is not standard in lucide-react, using Play as fallback representation for video social */}
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full text-[#4B4D54] flex items-center justify-center hover:bg-[#ffaa00] transition-colors shadow-sm border border-slate-100"
              >
                <FaPlay className="w-4 h-4 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-[#4B4D54] font-black text-sm uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">
              Contacto & Ubicación
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-600 text-sm">
                <FaMapMarkerAlt className="w-5 h-5 text-[#ffaa00] flex-shrink-0" />
                <p>
                  Av. Javier Prado Este 3028,
                  <br />
                  San Borja - Lima, Perú
                </p>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <FaClock className="w-5 h-5 text-[#ffaa00] flex-shrink-0" />
                <p>Lun-Vie 8am-8pm | Sáb 8am-1pm</p>
              </div>
              <a
                href="tel:017131153"
                className="flex items-center gap-3 text-slate-600 text-sm hover:text-[#ffaa00] transition-colors"
              >
                <FaPhone className="w-5 h-5 text-[#ffaa00] flex-shrink-0" />
                <p>Central: (01) 7131153</p>
              </a>
              <a
                href="https://wa.me/51970896337"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-600 text-sm hover:text-[#ffaa00] transition-colors font-bold"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <p>WhatsApp: 970 896 337</p>
              </a>
            </div>
          </div>

          {/* Links Legales */}
          <div className="md:col-span-4">
            <h4 className="text-[#4B4D54] font-black text-sm uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">
              Enlaces Útiles
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicios"
                  className="text-sm text-[#4B4D54] hover:text-[#ffaa00] transition-colors"
                >
                  Nuestras Especialidades
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-sm text-[#4B4D54] hover:text-[#ffaa00] transition-colors"
                >
                  Staff Médico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#4B4D54] hover:text-[#ffaa00] transition-colors"
                >
                  Trabaja con nosotros
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="#"
                  className="text-xs text--[#4B4D54] hover:text-[#ffaa00] transition-colors"
                >
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs text--[#4B4D54] hover:text-[#ffaa00] transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
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
