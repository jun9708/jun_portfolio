'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import '../styles/foil.css';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string; // GitHub
  notionLink?: string; // Notion
}

const projects: Project[] = [
  {
    title: '롯데온 쇼핑몰 사이트 구현',
    description: '통합형 API 개발 사이트입니다. 롯데온 쇼핑몰 사이트의 회원가입, 주문, 상품등록과 같은 기능을 구현하여 프로젝트를 진행하였습니다.',
    image: '/롯데온.jpg',
    techStack: ['Spring', 'Java', 'JavaScript', 'MySQL', 'MyBatis', 'JPA', 'AWS'],
    link: 'https://github.com/jun9708/lotteON',
    notionLink: 'https://jun9708.notion.site/LotteOn-Project-8f03b883b4944ddfa5dfc84093d05d3c?pvs=74',
  },
  {
    title: '사내 커뮤니티 게시판 사이트',
    description: '분리형 API 개발 사이트입니다. 칸반보드, 실시간 캘린더 수정, 회원간 채팅 기능을 구현하였습니다.',
    image: '/일름보.png',
    techStack: ['React', 'Spring', 'Java', 'JavaScript', 'MySQL', 'JPA', 'QueryDSL', 'AWS'],
    link: 'https://github.com/jun9708/community-site-back-team2',
    notionLink: 'https://jun9708.notion.site/f5887b1d8a8b41b2bb43c4188701be1f?pvs=74',
  },
  {
    title: '토닥토닥 헬스케어 백엔드',
    description: '모바일 애플리케이션으로 사용자의 건강 점수를 MRS 체크하여 호르몬요법을 알려주는 기능을 구현하였습니다.',
    image: '/토닥토닥.png',
    techStack: ['Flutter', 'Java', 'Spring', 'MySQL'],
    link: 'https://github.com/jun9708/todoctodoc_back',
    notionLink: 'https://jun9708.notion.site/70527389969e4b8a9f7d7bb1e2f7106c?pvs=4',
  }
];

export default function Projects() {
  const handleMouseMove = (
    e: React.MouseEvent,
    cardRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / 12) * -1;
      const rotateY = (x - centerX) / 12;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    }
  };

  const handleMouseEnter = (cardRef: React.RefObject<HTMLDivElement | null>) => {
    const card = cardRef.current;
    if (card) card.style.transition = 'transform 0.15s ease';
  };

  const handleMouseLeave = (cardRef: React.RefObject<HTMLDivElement | null>) => {
    const card = cardRef.current;
    if (card) {
      card.style.transition = 'transform 0.6s ease';
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <section className="py-20 bg-transparent text-white flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400">나의 프로젝트를 소개합니다.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-7xl"> {/* gap-8 -> gap-4 */}
        {projects.map((project, index) => {
          const cardRef = useRef<HTMLDivElement | null>(null);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{ perspective: '1000px' }}
              onMouseEnter={() => handleMouseEnter(cardRef)}
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              onMouseLeave={() => handleMouseLeave(cardRef)}
              className="w-[320px] h-[460px]"
            >
                <div
                  ref={cardRef}
                  className="foil-effect transform-style preserve-3d bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-transform duration-500 ease-in-out h-full"
                >
                <div className="card-face card-front p-4 flex flex-col h-full">
                  <div className="relative w-full h-40 overflow-hidden rounded-md mb-4 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 10%', transform: 'scale(1.1)' }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-2 text-center">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 text-center flex-grow">{project.description}</p>
                  <div className="text-sm text-gray-300 mb-4 flex flex-wrap justify-center space-x-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-500 text-gray-300 rounded-full px-3 py-1 mb-2 inline-block"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto w-full flex justify-around">
                    {project.notionLink && (
                      <a
                        href={project.notionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:brightness-110 transition"
                      >
                        자세히 보기
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-gray-600 to-gray-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:brightness-110 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
