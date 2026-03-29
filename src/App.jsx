import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Scales, Shield, Phone, WhatsappLogo, MapPin, Clock, Star,
  CaretDown, List, X, ArrowRight, Certificate, Handshake,
  ChartLineUp, Users, Wheelchair, FirstAidKit, Money,
  Buildings, Gavel, CheckCircle, Envelope, InstagramLogo,
  CaretLeft, CaretRight, Heart, Brain, TreeStructure
} from '@phosphor-icons/react'
import './App.css'

const WHATSAPP = 'https://wa.me/5548999443144?text=Olá!%20Gostaria%20de%20uma%20consulta%20sobre%20meu%20benefício%20previdenciário.'
const PHONE = 'tel:+5548999443144'

function useAnimateOnView() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return [ref, isInView]
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
}

/* ==================== NAVBAR ==================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#areas' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__logo">
          <img src="./images/logo.png" alt="CMP Advocacia" />
        </a>
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar__cta-btn">
            <WhatsappLogo size={18} weight="duotone" /> Fale Conosco
          </a>
        </div>
        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={28} weight="duotone" /> : <List size={28} weight="duotone" />}
        </button>
      </div>
    </nav>
  )
}

/* ==================== HERO ==================== */
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="hero__text">
          <motion.span variants={fadeUp} className="section-label" style={{ color: 'var(--gold-light)' }}>
            Desde 2011 em Florianópolis
          </motion.span>
          <motion.h1 variants={fadeUp} className="hero__title">
            Seus Direitos Previdenciários<br/>
            <span className="gold-accent">Merecem Especialistas</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="hero__subtitle">
            Mais de 14 anos garantindo aposentadorias, benefícios e revisões do INSS.
            Atendimento presencial em Florianópolis e online para todo o Brasil.
          </motion.p>
          <motion.div variants={fadeUp} className="hero__buttons">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
              <WhatsappLogo size={22} weight="duotone" /> Consulta Gratuita
            </a>
            <a href="#areas" className="btn btn--outline-light">
              Nossos Serviços <ArrowRight size={18} weight="duotone" />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="hero__stats">
            <div className="hero__stat">
              <strong>4.9</strong>
              <span><Star size={14} weight="fill" style={{ color: 'var(--gold)' }} /> Google</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>247+</strong>
              <span>Avaliações</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>14+</strong>
              <span>Anos</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="hero__scroll">
        <CaretDown size={24} weight="duotone" />
      </div>
    </section>
  )
}

/* ==================== ABOUT ==================== */
function About() {
  const [ref, inView] = useAnimateOnView()

  return (
    <section id="sobre" className="about section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="about__grid">
          <div className="about__image">
            <motion.img variants={fadeUp} src="./images/socios-cmp.webp" alt="Sócios CMP Advocacia" />
            <div className="about__badge">
              <Scales size={28} weight="duotone" />
              <span>Fundada em 2011</span>
            </div>
          </div>
          <div className="about__text">
            <motion.span variants={fadeUp} className="section-label">Quem Somos</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">
              Referência Nacional em<br/><span className="gold-accent">Direito Previdenciário</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="about__desc">
              A CMP Advocacia é um escritório dedicado exclusivamente ao Direito Previdenciário,
              com sede em Florianópolis/SC. Somos pioneiros no atendimento digital, permitindo
              que você cuide da sua aposentadoria sem sair de casa.
            </motion.p>
            <motion.p variants={fadeUp} className="about__desc">
              Nossa equipe especializada vai além do cálculo básico: encontramos períodos perdidos,
              reconhecemos atividades especiais e definimos estratégias que outros métodos não identificam.
            </motion.p>
            <motion.div variants={fadeUp} className="about__highlights">
              <div className="about__highlight">
                <CheckCircle size={24} weight="duotone" style={{ color: 'var(--gold)' }} />
                <span>Atendimento presencial e online</span>
              </div>
              <div className="about__highlight">
                <CheckCircle size={24} weight="duotone" style={{ color: 'var(--gold)' }} />
                <span>Milhares de benefícios conquistados</span>
              </div>
              <div className="about__highlight">
                <CheckCircle size={24} weight="duotone" style={{ color: 'var(--gold)' }} />
                <span>Equipe 100% especializada em INSS</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
                <WhatsappLogo size={20} weight="duotone" /> Agendar Consulta
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== SERVICES ==================== */
const services = [
  { icon: ChartLineUp, title: 'Aposentadoria', desc: 'Análise completa do seu tempo de contribuição com estratégias para maximizar o valor do benefício.' },
  { icon: Certificate, title: 'Aposentadoria Especial', desc: 'Para profissionais expostos a agentes nocivos: químicos, físicos ou biológicos no trabalho.' },
  { icon: TreeStructure, title: 'Aposentadoria Rural', desc: 'Reconhecimento do trabalho rural para obtenção de aposentadoria por idade ou híbrida.' },
  { icon: Wheelchair, title: 'Benefícios por Incapacidade', desc: 'Auxílio-doença e aposentadoria por invalidez com laudos médicos corretos e bem fundamentados.' },
  { icon: FirstAidKit, title: 'Auxílio-Acidente', desc: 'Indenização para quem sofreu acidente e ficou com sequela que reduz a capacidade laboral.' },
  { icon: Heart, title: 'BPC LOAS', desc: 'Benefício de um salário mínimo para idosos 65+ e pessoas com deficiência de baixa renda.' },
  { icon: Brain, title: 'Planejamento Previdenciário', desc: 'Simulação detalhada para descobrir a melhor data e regra para sua aposentadoria.' },
  { icon: Money, title: 'Isenção de Imposto de Renda', desc: 'Aposentados e pensionistas com doenças graves podem ter isenção total do IR sobre o benefício.' },
]

function Services() {
  const [ref, inView] = useAnimateOnView()

  return (
    <section id="areas" className="services section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="services__header">
          <motion.span variants={fadeUp} className="section-label">Áreas de Atuação</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Soluções Completas em<br/><span className="gold-accent">Direito Previdenciário</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle" style={{ margin: '0 auto' }}>
            Cada caso é único. Analisamos minuciosamente seu histórico para encontrar a melhor estratégia.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="services__grid">
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="service-card">
              <div className="service-card__icon">
                <s.icon size={32} weight="duotone" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="service-card__link">
                Saiba mais <ArrowRight size={16} weight="duotone" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== WHY US ==================== */
const differentials = [
  { icon: Shield, title: 'Exclusividade', desc: '100% focados em Direito Previdenciário — essa é nossa única especialidade.' },
  { icon: Users, title: 'Atendimento Humanizado', desc: 'Cada cliente é acompanhado pessoalmente do início ao fim do processo.' },
  { icon: Buildings, title: 'Presencial + Online', desc: 'Escritório em Florianópolis com atendimento virtual para todo o Brasil e exterior.' },
  { icon: Gavel, title: '14+ Anos de Experiência', desc: 'Fundada em 2011, com milhares de benefícios conquistados junto ao INSS.' },
]

function WhyUs() {
  const [ref, inView] = useAnimateOnView()

  return (
    <section id="diferenciais" className="whyus section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger}>
          <motion.span variants={fadeUp} className="section-label">Por Que a CMP</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Diferenciais Que Fazem<br/><span className="gold-accent">Toda a Diferença</span>
          </motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="whyus__grid">
          {differentials.map((d, i) => (
            <motion.div key={i} variants={fadeUp} className="whyus-card">
              <div className="whyus-card__number">0{i + 1}</div>
              <div className="whyus-card__icon">
                <d.icon size={36} weight="duotone" />
              </div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== PROCESS ==================== */
const steps = [
  { num: '01', title: 'Contato Inicial', desc: 'Fale conosco por WhatsApp ou telefone. Avaliamos seu caso sem compromisso.' },
  { num: '02', title: 'Análise Documental', desc: 'Reunimos e analisamos toda documentação: CNIS, carteiras, laudos e mais.' },
  { num: '03', title: 'Planejamento', desc: 'Simulamos cenários e definimos a melhor estratégia para seu benefício.' },
  { num: '04', title: 'Ação e Acompanhamento', desc: 'Protocolo junto ao INSS e acompanhamento integral até a concessão.' },
]

function Process() {
  const [ref, inView] = useAnimateOnView()

  return (
    <section id="processo" className="process section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="process__header">
          <motion.span variants={fadeUp} className="section-label">Como Funciona</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Seu Caminho Para o<br/><span className="gold-accent">Benefício Garantido</span>
          </motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="process__steps">
          {steps.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="process-step">
              <div className="process-step__num">{s.num}</div>
              <div className="process-step__line" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
            <WhatsappLogo size={20} weight="duotone" /> Iniciar Minha Consulta
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== TEAM ==================== */
const team = [
  { name: 'Dr. Victor Hugo', role: 'CEO e Gestor Jurídico', img: './images/victor.webp' },
  { name: 'Dr. Thiago Pawlick', role: 'Cofundador — Direito Previdenciário', img: './images/thiago.webp' },
  { name: 'Dr. Kleber Coelho', role: 'Cofundador — Aposentadoria e Trabalhista', img: './images/kleber.webp' },
]

function Team() {
  const [ref, inView] = useAnimateOnView()

  return (
    <section id="equipe" className="team section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="team__header">
          <motion.span variants={fadeUp} className="section-label">Nossa Equipe</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Profissionais Dedicados ao<br/><span className="gold-accent">Seu Direito</span>
          </motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="team__grid">
          {team.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="team-card">
              <div className="team-card__img">
                <img src={t.img} alt={t.name} />
              </div>
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== TESTIMONIALS ==================== */
const testimonials = [
  { text: 'Trabalhei 28 anos em hospital e não sabia que tinha direito à aposentadoria especial. A CMP encontrou tudo e consegui meu benefício em poucos meses.', name: 'Dr. Carlos M.', role: 'Médico' },
  { text: 'Minha mãe tinha 67 anos e vivia com dificuldade. A equipe da CMP conseguiu o BPC LOAS para ela. Profissionalismo e humanidade que fazem a diferença.', name: 'Ana Paula S.', role: 'Professora' },
  { text: 'Tinha medo de entrar com processo contra o INSS. O Dr. Victor me explicou tudo com calma, e hoje recebo minha aposentadoria certinha todo mês.', name: 'José Roberto A.', role: 'Aposentado' },
  { text: 'Atendimento online impecável. Moro no exterior e consegui resolver tudo sem precisar ir ao Brasil. Recomendo de olhos fechados!', name: 'Mariana L.', role: 'Brasileira na Alemanha' },
]

function Testimonials() {
  const [ref, inView] = useAnimateOnView()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => c === 0 ? testimonials.length - 1 : c - 1)
  const next = () => setCurrent(c => c === testimonials.length - 1 ? 0 : c + 1)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="depoimentos" className="testimonials section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="testimonials__header">
          <motion.span variants={fadeUp} className="section-label">Depoimentos</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            O Que Nossos Clientes<br/><span className="gold-accent">Dizem Sobre Nós</span>
          </motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="testimonials__slider">
          <button onClick={prev} className="testimonials__arrow" aria-label="Anterior">
            <CaretLeft size={24} weight="duotone" />
          </button>
          <div className="testimonials__card">
            <div className="testimonials__stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" />)}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <p className="testimonials__text">"{testimonials[current].text}"</p>
                <div className="testimonials__author">
                  <strong>{testimonials[current].name}</strong>
                  <span>{testimonials[current].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`testimonials__dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Depoimento ${i + 1}`} />
              ))}
            </div>
          </div>
          <button onClick={next} className="testimonials__arrow" aria-label="Próximo">
            <CaretRight size={24} weight="duotone" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== FAQ ==================== */
const faqs = [
  { q: 'Quanto custa a consulta inicial?', a: 'A primeira análise do seu caso é gratuita e sem compromisso. Entre em contato pelo WhatsApp para agendarmos.' },
  { q: 'Vocês atendem todo o Brasil?', a: 'Sim! Temos atendimento presencial em Florianópolis/SC e atendimento 100% online para todo o Brasil e brasileiros no exterior.' },
  { q: 'Como funciona o planejamento previdenciário?', a: 'Analisamos seu CNIS, simulamos diferentes cenários de aposentadoria e indicamos a melhor data e regra para você se aposentar com o maior valor possível.' },
  { q: 'Posso me aposentar antes dos 65 anos?', a: 'Depende do seu caso. Existem regras de transição e categorias especiais que podem permitir aposentadoria antecipada. Avaliamos cada situação individualmente.' },
  { q: 'O que é aposentadoria especial?', a: 'É destinada a profissionais expostos a agentes nocivos no trabalho (químicos, físicos, biológicos). Permite aposentadoria mais cedo, com tempo reduzido de contribuição.' },
]

function FAQ() {
  const [ref, inView] = useAnimateOnView()
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="faq__header">
          <motion.span variants={fadeUp} className="section-label">Dúvidas Frequentes</motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Perguntas<br/><span className="gold-accent">Frequentes</span>
          </motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="faq__list">
          {faqs.map((f, i) => (
            <motion.div key={i} variants={fadeUp} className={`faq-item ${open === i ? 'faq-item--open' : ''}`}>
              <button className="faq-item__q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <CaretDown size={20} weight="duotone" className="faq-item__arrow" />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="faq-item__a">
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== CTA BANNER ==================== */
function CtaBanner() {
  const [ref, inView] = useAnimateOnView()

  return (
    <section className="cta-banner">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="cta-banner__content">
          <motion.h2 variants={fadeUp}>
            Não Deixe Seus Direitos<br/><span className="gold-accent">Prescreverem</span>
          </motion.h2>
          <motion.p variants={fadeUp}>
            Cada dia sem agir pode significar dinheiro perdido. Fale com um especialista agora e descubra quanto você pode receber.
          </motion.p>
          <motion.div variants={fadeUp} className="cta-banner__buttons">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--gold btn--lg">
              <WhatsappLogo size={24} weight="duotone" /> Quero Minha Consulta Gratuita
            </a>
            <a href={PHONE} className="btn btn--outline-light btn--lg">
              <Phone size={22} weight="duotone" /> (48) 99944-3144
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== CONTACT ==================== */
function Contact() {
  const [ref, inView] = useAnimateOnView()

  return (
    <section id="contato" className="contact section-padding">
      <div className="container">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className="contact__grid">
          <div className="contact__info">
            <motion.span variants={fadeUp} className="section-label">Contato</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">
              Fale Com<br/><span className="gold-accent">Nosso Time</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="contact__desc">
              Estamos prontos para analisar seu caso e encontrar o melhor caminho para garantir seus direitos previdenciários.
            </motion.p>
            <motion.div variants={fadeUp} className="contact__items">
              <div className="contact__item">
                <div className="contact__item-icon"><WhatsappLogo size={24} weight="duotone" /></div>
                <div>
                  <strong>WhatsApp</strong>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">(48) 99944-3144</a>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon"><Phone size={24} weight="duotone" /></div>
                <div>
                  <strong>Telefone</strong>
                  <a href={PHONE}>(48) 99944-3144</a>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon"><MapPin size={24} weight="duotone" /></div>
                <div>
                  <strong>Endereço</strong>
                  <span>R. Jerônimo Coelho, 170 — Sala 1001<br/>Centro, Florianópolis/SC — 88010-030</span>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon"><Clock size={24} weight="duotone" /></div>
                <div>
                  <strong>Horário</strong>
                  <span>Seg a Sex — 9h às 18h</span>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon"><InstagramLogo size={24} weight="duotone" /></div>
                <div>
                  <strong>Instagram</strong>
                  <a href="https://instagram.com/cmpprevadvocacia" target="_blank" rel="noopener noreferrer">@cmpprevadvocacia</a>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5502!3d-27.5945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCMP+Advocacia!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--radius-md)', minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização CMP Advocacia"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ==================== FOOTER ==================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="./images/logo.png" alt="CMP Advocacia" className="footer__logo" />
            <p>Especialistas em Direito Previdenciário desde 2011. Sua aposentadoria em boas mãos.</p>
          </div>
          <div className="footer__col">
            <h4>Serviços</h4>
            <a href="#areas">Aposentadoria</a>
            <a href="#areas">Aposentadoria Especial</a>
            <a href="#areas">BPC LOAS</a>
            <a href="#areas">Planejamento Previdenciário</a>
          </div>
          <div className="footer__col">
            <h4>Contato</h4>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={16} weight="duotone" /> WhatsApp
            </a>
            <a href={PHONE}>
              <Phone size={16} weight="duotone" /> (48) 99944-3144
            </a>
            <a href="https://instagram.com/cmpprevadvocacia" target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={16} weight="duotone" /> @cmpprevadvocacia
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 CMP Advocacia Previdenciária. Todos os direitos reservados.</p>
          <p>OAB/SC — R. Jerônimo Coelho, 170, Sala 1001 — Centro, Florianópolis/SC</p>
        </div>
      </div>
    </footer>
  )
}

/* ==================== FLOATING WHATSAPP ==================== */
function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="WhatsApp">
      <WhatsappLogo size={32} weight="fill" />
    </a>
  )
}

/* ==================== APP ==================== */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about-section"><About /></section>
      <section id="services-section"><Services /></section>
      <section id="whyus-section"><WhyUs /></section>
      <section id="process-section"><Process /></section>
      <section id="team-section"><Team /></section>
      <section id="testimonials-section"><Testimonials /></section>
      <section id="faq-section"><FAQ /></section>
      <section id="cta-section"><CtaBanner /></section>
      <section id="contact-section"><Contact /></section>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
