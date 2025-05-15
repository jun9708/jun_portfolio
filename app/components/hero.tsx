import FallingStar from './FallingStar';
import '../globals.css'; // CSS 위치 맞게 조절하세요

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 별 색깔 후보 (선택 사항)
  const colors = ['#ffffff', '#ffd700', '#00ffff', '#ff69b4', '#87cefa'];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 py-8">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900 z-[-5] fixed" />

      {[...Array(50)].map((_, i) => (
        <FallingStar
          key={i}
          color={colors[Math.floor(Math.random() * colors.length)]}
        />
      ))}

      <h1 className="fade-up whitespace-pre-line text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-center">
        <span className="hello">Hello!</span>{'\n'}
        안녕하세요{'\n'}
        저는 김준형입니다.
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 text-center max-w-xl">
        WEB/APP 개발자 포트폴리오에 오신 걸 환영합니다!
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-xl w-full">
        {[
          { id: 'profile', label: 'MyProfile' },
          { id: 'about', label: '관련활동' },
          { id: 'project', label: 'Project' },
          { id: 'qa', label: 'QnA' },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="
              flex-1 
              min-w-[120px] 
              max-w-[180px]
              px-6 py-3 
              bg-white 
              text-black 
              rounded-full 
              shadow-md 
              hover:text-blue-600 
              hover:scale-105 
              transition 
              duration-300 
              ease-in-out
              border 
              border-gray-300
              focus:outline-none
              focus:ring-2 
              focus:ring-blue-400
              text-center
            "
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
