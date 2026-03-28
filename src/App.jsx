import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, InstagramLogo, Phone, Scales, ShieldCheck, Gavel, FileText, Handshake, UserCircle, Trophy, ChartLineUp, Globe, MapPin, Clock } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/5548988283980?text=Ol%C3%A1!%20Gostaria%20de%20uma%20consulta%20sobre%20meu%20benef%C3%ADcio%20previdenci%C3%A1rio.'
const IG = 'https://www.instagram.com/cmpprevadvocacia/'
const TEL = 'tel:+5548999443144'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo"><Scales size={20} weight="duotone" /> CMP <span>ADVOCACIA</span></div>
      <div className="nav-links">
        <a href="#areas">Áreas</a>
        <a href="#equipe">Equipe</a>
        <a href="#resultados">Resultados</a>
      </div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <WhatsappLogo size={16} weight="duotone" /> Consultar
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="mx hero-inner">
        <div className="hero-content">
          <motion.div className="hero-trust" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Trophy size={14} weight="fill" /> 14+ anos em Direito Previdenciário
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Seus direitos<br />previdenciários<br /><span className="accent">garantidos</span>
          </motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            Escritório especializado exclusivamente em Direito Previdenciário. Aposentadorias, benefícios por incapacidade, BPC LOAS e planejamento previdenciário. Atendimento em todo o Brasil.
          </motion.p>
          <motion.div className="hero-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-prim">
              <WhatsappLogo size={18} weight="duotone" /> <span>Consulta Gratuita</span>
            </a>
            <a href={TEL} className="btn-sec">
              <Phone size={18} weight="duotone" /> <span>(48) 99944-3144</span>
            </a>
          </motion.div>
        </div>
        <motion.div className="hero-metrics" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          <div className="metric"><div className="metric-num">4.9</div><div className="metric-stars">{[0,1,2,3,4].map(i => <Star key={i} size={12} weight="fill" color="#D4A84B" />)}</div><span>Nota Google</span></div>
          <div className="metric"><div className="metric-num">247</div><span>Avaliações</span></div>
          <div className="metric"><div className="metric-num">14+</div><span>Anos atuando</span></div>
          <div className="metric"><Globe size={24} weight="duotone" /><span>Todo Brasil</span></div>
        </motion.div>
      </div>
    </section>
  )
}

const areas = [
  { icon: <FileText size={26} weight="duotone" />, title: 'Aposentadoria INSS', desc: 'Por idade, tempo de contribuição, especial e rural. Análise completa do seu caso.' },
  { icon: <ShieldCheck size={26} weight="duotone" />, title: 'Aposentadoria Especial', desc: 'Para quem trabalhou em condições insalubres ou periculosas. Garantimos seus direitos.' },
  { icon: <Gavel size={26} weight="duotone" />, title: 'BPC LOAS', desc: 'Benefício assistencial para idosos e pessoas com deficiência. Orientação completa.' },
  { icon: <Handshake size={26} weight="duotone" />, title: 'Benefícios por Incapacidade', desc: 'Auxílio-doença e aposentadoria por invalidez. Defesa técnica especializada.' },
  { icon: <ChartLineUp size={26} weight="duotone" />, title: 'Planejamento Previdenciário', desc: 'Análise estratégica para maximizar seu benefício. Simulações e melhores cenários.' },
  { icon: <Scales size={26} weight="duotone" />, title: 'Isenção de Imposto de Renda', desc: 'Para aposentados com doenças graves. Economia significativa no seu benefício.' },
]

function Areas() {
  return (
    <section className="sp areas-sec" id="areas">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Áreas de Atuação</span>
          <h2>Especialistas em previdência</h2>
          <p>Atuação exclusiva em Direito Previdenciário com metodologia própria e resultados comprovados</p>
        </motion.div>
        <motion.div className="areas-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {areas.map((a, i) => (
            <motion.div key={i} className="area-card" variants={fadeUp} custom={i}>
              <div className="area-icon">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const equipe = [
  { name: 'Dr. Victor Hugo', role: 'CEO & Gestor Jurídico', desc: 'Líder da estratégia e crescimento do escritório.' },
  { name: 'Dr. Thiago Pawlick', role: 'Sócio-Fundador', desc: 'Especialista com mais de uma década em Direito Previdenciário.' },
  { name: 'Dr. Kleber Coelho', role: 'Sócio-Fundador', desc: 'Pós-graduado em Direito Previdenciário.' },
]

function Equipe() {
  return (
    <section className="sp" id="equipe">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Equipe</span>
          <h2>Advogados especializados</h2>
          <p>Pós-graduados e dedicados exclusivamente aos seus direitos previdenciários</p>
        </motion.div>
        <motion.div className="eq-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {equipe.map((e, i) => (
            <motion.div key={i} className="eq-card" variants={fadeUp} custom={i}>
              <UserCircle size={40} weight="duotone" className="eq-icon" />
              <h3>{e.name}</h3>
              <span className="eq-role">{e.role}</span>
              <p>{e.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'Consegui minha aposentadoria rural graças ao trabalho impecável da equipe CMP. Sou muito grato!', author: 'José M.' },
  { text: 'Atendimento excepcional do início ao fim. Conseguiram minha aposentadoria especial quando outros escritórios desistiram.', author: 'Carlos S.' },
  { text: 'Profissionais sérios e competentes. Minha isenção de IR foi aprovada rapidamente. Economia enorme!', author: 'Maria A.' },
  { text: 'Dr. Thiago é um profissional de excelência. Explicou tudo com clareza e paciência. Resultado perfeito.', author: 'Ana R.' },
  { text: 'Escritório de confiança. Atendimento 100% online funcionou perfeitamente. Recomendo para todo Brasil.', author: 'Pedro L.' },
  { text: 'Planejamento previdenciário mudou completamente minha perspectiva. Valeu muito a pena investir na consultoria.', author: 'Roberto F.' },
]

function Resultados() {
  return (
    <section className="sp res-sec" id="resultados">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Resultados</span>
          <h2>Clientes satisfeitos</h2>
          <p>4.9 estrelas no Google com 247 avaliações reais</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rev-card" variants={fadeUp} custom={i}>
              <div className="rev-stars">{[0,1,2,3,4].map(j => <Star key={j} size={14} weight="fill" color="#D4A84B" />)}</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <span className="rev-author">{r.author}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta sp">
      <div className="mx cta-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Garanta seus<br /><span className="accent">direitos agora</span></h2>
          <p>Consulta inicial gratuita. Atendimento em todo o Brasil, 100% online.</p>
          <div className="cta-btns">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-prim">
              <WhatsappLogo size={18} weight="duotone" /> <span>Consulta Gratuita</span>
            </a>
            <a href={TEL} className="btn-sec">
              <Phone size={18} weight="duotone" /> <span>Ligar Agora</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand"><Scales size={16} weight="duotone" /> CMP Advocacia Previdenciária</div>
        <div className="footer-info">R. Jerônimo Coelho, 170, Sala 1001 — Centro, Florianópolis, SC<br />(48) 99944-3144 • (48) 98828-3980</div>
        <div className="footer-links">
          <a href={IG} target="_blank" rel="noopener noreferrer" className="fl"><InstagramLogo size={14} weight="duotone" /> @cmpprevadvocacia</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="fl"><WhatsappLogo size={14} weight="duotone" /> WhatsApp</a>
          <a href={TEL} className="fl"><Phone size={14} weight="duotone" /> Telefone</a>
        </div>
        <div className="footer-copy">&copy; 2026 CMP Advocacia Previdenciária. Desde 2011. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

function FloatingWa() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={18} weight="duotone" /> Consultar
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>CMP Advocacia Previdenciária | Florianópolis</title>
        <meta name="description" content="CMP Advocacia - Especialistas em Direito Previdenciário. Nota 4.9 com 247 avaliações. Aposentadoria, BPC LOAS, auxílio-acidente. Todo Brasil." />
      </Helmet>
      <Navbar />
      <Hero />
      <Areas />
      <Equipe />
      <Resultados />
      <Cta />
      <Footer />
      <FloatingWa />
    </>
  )
}

export default App
