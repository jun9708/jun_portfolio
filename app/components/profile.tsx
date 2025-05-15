'use client';

import CharacterCard from './CharacterCard';
import { motion } from 'framer-motion';
import '../styles/foil.css';

export default function Profile() {
  return (
    <section className="py-20 bg-transparent text-white flex flex-col justify-center items-center">
      {/* 헤더 영역 */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4">My Profile</h2>
          <p className="text-gray-400 whitespace-pre-line">
                <span className="block mb-4">
                  저는 동명대학교 융합미디어학과에 진학하여 전공 수업인 ‘프로그래밍’을 통해 C언어를 처음 접했습니다.
                  컴퓨터 언어와 문제 해결 과정을 배우면서 예상치 못한 문제에 직면하는 일이 오히려 흥미로웠고, 이를 해결하며 성취감을 느꼈습니다.
                </span>

                <span className="block mb-4">
                  이후 학년이 올라갈수록 IoT 기술, 모델링, 데이터 분석 등 다양한 컴퓨터 기술을 접하게 되었고,
                  2021년에는 대한전자공학회에 참여하여 알고리즘 이해와 공학 논문 작성 경험을 통해 프로그래밍에 더욱 큰 매력을 느꼈습니다.
                </span>
                
                <span className="block mb-4">
                  이후 국비지원 개발자 양성과정에 참여하여 Java, SQL, Spring, 프레임워크 등 웹 개발에 필요한 다양한 기술을 배웠습니다.
                  특히 C언어나 Python 등 기존에 접했던 언어들과의 유사성을 발견하며 더 흥미롭게 학습할 수 있었고,
                  팀 프로젝트를 통해 협업과 실무 중심의 개발 경험을 쌓았습니다.
                </span>
          </p>
      </div>

      {/* 카드 + 이력 정보 영역 */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-4 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* 캐릭터 카드 */}
        <div className="w-full md:[width:40%] flex justify-center">
          <div className="foil-effect w-full max-w-[320px] h-auto p-4 rounded-lg overflow-hidden shadow-xl">
            <CharacterCard
              name="김준형"
              power
              reward
              tags={['#도전', '#경험', '#피드백_수용']}
              description
              image="/profile.jpg"
            />
          </div>
        </div>

        {/* 이력 정보 */}
        <div className="w-full md:[width:40%] px-4">
          <h3 className="text-2xl font-semibold mb-4">학력사항</h3>
          <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
            <li className="whitespace-nowrap overflow-hidden text-ellipsis">
              👨‍🎓 2016.03 ~ 2022.03 - 동명대학교 / ICT 융합미디어 전공
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">자격증</h3>
          <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
            <li>🐬 2024.04.05 - SQL 개발자(SQLD)</li>
            <li>✏️ 2024.03.13 - 정보처리기사(필기)</li>
            <li>🚗 2021.01.18 - 자동차 운전면허 2종 보통</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Skills & Tool</h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-300 text-sm leading-relaxed">
            <li className="flex items-center">
              <img src="/Develope skill icon/Java-Light.svg" alt="Java" className="w-6 h-6 mr-2" />
              Java
            </li>
            <li className="flex items-center">
              <img src="/Develope skill icon/JavaScript.svg" alt="JavaScript" className="w-6 h-6 mr-2" />
              JavaScript
            </li>
            <li className="flex items-center">
              <img src="/Develope skill icon/MySQL-Light.svg" alt="MySQL" className="w-6 h-6 mr-2" />
              MySQL
            </li>
            <li className="flex items-center">
              <img src="/Develope skill icon/Spring-Light.svg" alt="Spring" className="w-6 h-6 mr-2" />
              Spring
            </li>
            <li className="flex items-center">
              <img src="/Develope skill icon/AWS-Light.svg" alt="AWS" className="w-6 h-6 mr-2" />
              AWS
            </li>
            <li className="flex items-center">
              <img src="/Develope skill icon/Github-Light.svg" alt="Github" className="w-6 h-6 mr-2" />
              Git
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
