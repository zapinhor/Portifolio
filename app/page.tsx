import GameCarousel from "./GameCarousel";

const asset = (path: string) => `/Portfolio${path}`;

const smaugProjects = [
  {
    semester: "01",
    title: "Emovere",
    kind: "Plataforma 2D · Ação e aventura · Pixel art",
    stack: "Construct 3",
    description: "Um jogo de ação e aventura em plataforma 2D ambientado em um mundo pós-apocalíptico. Explore cenários em pixel art, enfrente perigos e avance por um ambiente marcado pelas consequências de um mundo em ruínas.",
    href: "https://zapinhor.itch.io/emovere",
    platform: "itch.io",
    images: [asset("/games/emovere/image.png"), asset("/games/emovere/2image.png"), asset("/games/emovere/3image.png"), asset("/games/emovere/4image.png")],
  },
  {
    semester: "02",
    title: "Mimada Sofia",
    kind: "Visual novel · Drama · Narrativa",
    stack: "Ren'Py · Python",
    description: "Uma visual novel focada na relação entre pai e filha, acompanhando os desafios de um pai de primeira viagem. A história aborda, de forma leve e emocional, as dificuldades, responsabilidades e aprendizados envolvidos na criação de uma criança.",
    href: "https://zapinhor.itch.io/mimada-sofia",
    platform: "itch.io",
    images: [asset("/games/mimada-sofia/image.png"), asset("/games/mimada-sofia/2image.png"), asset("/games/mimada-sofia/3image.png"), asset("/games/mimada-sofia/4image.png"), asset("/games/mimada-sofia/5image.png"), asset("/games/mimada-sofia/6image.png")],
  },
  {
    semester: "03",
    title: "Don't Be Scared",
    kind: "Terror psicológico · Exploração · Storytelling",
    stack: "Unity · C#",
    description: "Um jogo de terror psicológico baseado em exploração e narrativa ambiental. Conclua seu trabalho, participe de minigames e tente permanecer vivo enquanto investiga um condomínio aparentemente vazio. Explore seus corredores, descubra seus segredos e entenda por que restam tão poucos moradores.",
    href: "https://store.steampowered.com/app/3226550/Dont_Be_Scared__Episode_1_The_Lost_Soul/",
    platform: "Steam",
    callout: "Conclua seu trabalho, faça minigames e permaneça vivo.",
    images: [asset("/games/dont-be-scared/1.png"), asset("/games/dont-be-scared/2.png"), asset("/games/dont-be-scared/3.png"), asset("/games/dont-be-scared/4.png"), asset("/games/dont-be-scared/5.png")],
  },
  {
    semester: "04",
    title: "Dream",
    kind: "Terror psicológico · Espaços liminares · Exploração",
    stack: "Unreal Engine 5 · Blueprints",
    description: "Um jogo de terror psicológico com estética psicodélica e ambientes inspirados em espaços liminares e no conceito de Backrooms. Explore cenários surreais e inquietantes enquanto tenta compreender a estranha realidade ao seu redor.",
    href: "https://zapinhor.itch.io/dream",
    platform: "itch.io",
    images: [asset("/games/dream/1.png"), asset("/games/dream/2.png"), asset("/games/dream/3.png"), asset("/games/dream/4.png")],
  },
  {
    semester: "05—06",
    title: "Nefrakstein",
    kind: "Mistério · Terror · Exploração",
    stack: "Unity · C#",
    description: "Um jogo de mistério e exploração que combina elementos de terror com referências à cultura pop. Investigue uma cidade enigmática, conheça seus habitantes e reúna pistas para desvendar os acontecimentos e segredos escondidos por trás de Nefrakstein.",
    href: "https://zapinhor.itch.io/nefrakstein",
    platform: "itch.io",
    images: [asset("/games/nefrakstein/1.png"), asset("/games/nefrakstein/2.png"), asset("/games/nefrakstein/3.png"), asset("/games/nefrakstein/4.png")],
  },
];

const skills = ["C#", "Unity", "Unreal Engine", "Construct 3", "Ren'Py", "Python", "HTML", "CSS", "JavaScript", "WordPress"];

function Arrow() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" /></svg>;
}

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="name" href="#inicio">Danilo Petraglia</a>
        <nav aria-label="Navegação principal">
          <a href="#smaug">SMAUG</a>
          <a href="#pokemon-tamagotchi">Pokémon Tamagotchi</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="availability" href="mailto:danilohp2011@hotmail.com"><span /> Disponível para projetos</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-meta"><span>Game Developer</span><span>Web Developer</span><span>Osasco · SP</span></div>
        <h1>Desenvolvedor de jogos<br />e experiências <span>digitais.</span></h1>
        <div className="hero-bottom">
          <p>Formado em Jogos Digitais pela FATEC Carapicuíba, transformo conceitos em protótipos jogáveis, interfaces e produtos para a web.</p>
          <a className="circle-link" href="#smaug" aria-label="Ver projetos SMAUG">↓</a>
        </div>
      </section>

      <section className="intro" id="sobre">
        <p className="label">01 / Perfil</p>
        <div className="intro-content">
          <h2>Entre código, narrativa<br />e interação.</h2>
          <div className="intro-copy">
            <p>Sou desenvolvedor com foco em games e criação de sites. Minha formação me permitiu trabalhar em diferentes etapas da produção de jogos — da ideia ao protótipo jogável — enquanto o desenvolvimento web ampliou minha experiência com interfaces e experiências digitais.</p>
            <p>Gosto de aprender novas tecnologias, resolver problemas e construir projetos que tenham uma identidade clara.</p>
          </div>
        </div>
        <div className="skills" aria-label="Tecnologias">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="smaug" id="smaug">
        <div className="section-title">
          <p className="label">02 / Projetos acadêmicos</p>
          <h2>SMAUG</h2>
          <p className="smaug-description">Sistema acadêmico da FATEC que propõe, a cada semestre, o desenvolvimento colaborativo de um protótipo jogável.</p>
        </div>

        <div className="project-list">
          {smaugProjects.map((project) => (
            <article className="project-entry compact" key={project.title}>
              <div className="compact-project-heading">
                <div className="semester"><span>{project.semester}</span><small>semestre</small></div>
                <div className="project-name"><h3>{project.title}</h3><p>{project.kind}</p></div>
                <a href={project.href} target="_blank" rel="noreferrer">Ver no {project.platform} <Arrow /></a>
              </div>
              <div className="compact-project-body">
                <GameCarousel title={project.title} images={project.images} />
                <div className="compact-project-copy">
                  {project.callout && <p className="project-callout">“{project.callout}”</p>}
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="compact-project-stack"><span>Tecnologias usadas</span><strong>{project.stack}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-project" id="pokemon-tamagotchi">
        <div className="featured-heading">
          <p className="label">03 / Projeto em destaque</p>
          <div>
            <span className="featured-kicker">Aplicação de console · C#</span>
            <h2>Pokémon<br />Tamagotchi</h2>
          </div>
        </div>
        <div className="featured-grid">
          <figure className="featured-visual">
            <img src={asset("/pokemon-tamagotchi.png")} alt="Interface em console do Pokémon Tamagotchi mostrando o mascote Dreepy e seus status" />
            <figcaption>Interface do jogo em execução</figcaption>
          </figure>
          <div className="featured-copy">
            <p>Um tamagotchi inspirado no universo Pokémon, desenvolvido em C#. A experiência roda no terminal e permite adotar um mascote, acompanhar seus atributos e interagir por meio de ações como alimentar, brincar e dormir.</p>
            <p>O projeto explora lógica de programação, orientação a objetos, persistência de dados e construção de menus interativos.</p>
            <div className="featured-tags" aria-label="Tecnologias e recursos"><span>C#</span><span>.NET</span><span>Console</span><span>POO</span></div>
            <a className="download-button" href="https://drive.google.com/file/d/1pybqrFdF97QAyaLOGlf2yHx1GyXW3GKI/view?usp=sharing" target="_blank" rel="noreferrer">Download para Windows <span>Google Drive</span></a>
            <small>Executável hospedado no Google Drive.</small>
          </div>
        </div>
      </section>

      <section className="web-section">
        <p className="label">04 / Desenvolvimento web</p>
        <div className="web-content">
          <h2>Sites claros, responsivos<br />e pensados para pessoas.</h2>
          <div><p>Desenvolvimento de páginas e interfaces para a web com atenção à estrutura, hierarquia visual e adaptação entre desktop e dispositivos móveis.</p><div className="web-stack"><span>Front-end</span><span>WordPress</span><span>UI / UX</span></div></div>
        </div>
        <a className="web-project" href="https://www.canva.com/design/DAFT1FEBIFU/opW7u-kxTWT3RjzeynqKUA/edit" target="_blank" rel="noreferrer" aria-label="Abrir apresentação do projeto acadêmico de e-commerce no Canva">
          <div><span>Projeto acadêmico</span><h3>E-commerce de moda</h3></div>
          <p>Projeto de site para uma loja virtual de roupas. Embora não esteja mais publicado, a apresentação registra a proposta visual e a experiência desenvolvida.</p>
          <strong>Ver apresentação <Arrow /></strong>
        </a>
      </section>

      <section className="contact" id="contato">
        <p className="label">05 / Contato</p>
        <h2>Vamos construir<br />algo juntos.</h2>
        <a className="email" href="mailto:danilohp2011@hotmail.com">danilohp2011@hotmail.com <Arrow /></a>
        <div className="links">
          <a href="https://www.linkedin.com/in/danilopetraglia/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://zapinhor.itch.io/" target="_blank" rel="noreferrer">itch.io <Arrow /></a>
        </div>
      </section>

      <footer><span>Danilo Petraglia</span><span>Game & Web Developer</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </main>
  );
}
