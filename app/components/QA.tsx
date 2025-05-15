'use client';

import { motion } from 'framer-motion';

interface QA {
  question: string;
  answer: string;
}

const qaItems: QA[] = [
  {
    question: '1. WEB 개발자를 하려는 이유가 뭔가요?',
    answer: '다양한 화면과 기능적인 동작을 구현하는데 있어 재미를 느끼고있습니다. 제가 만든 웹페이지를 다른 누군가가 사용하고 경험하는것에 있어 성취감을 느끼는것에 있어 WEB 개발자가 되어야겠다고 생각헀습니다.',
  },
  {
    question: '2. 일에 있어 가장 중요하게 생각하는 것이 있다면?',
    answer: '시간이라고 생각합니다. 다같이 진행하는 프로젝트 혹은 사용자 관점에 있어서도 피해를 끼치면 안된다고 생각합니다.',
  },
  {
    question: '3. 자기계발을 위해 어떤 것들을 해왔나요?',
    answer: '조금 늦은 나이에 개발자로서 취업을 하려다보니 남들과 다른 차별점과 자격증이 필요하다고 느꼈습니다. 회사에서 필요로 한 기술과 역량을 기르기위해 직접 구현해보고 스터디를 통해 기능적인 작동원리를 깊게 공부해보았습니다.',
  },
];

export default function QA() {
  return (
    <section className="py-20 bg-transparent text-white flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4">Q&A</h2>
        <p className="text-gray-400">자주 묻는 질문을 모아봤습니다.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 max-w-6xl w-full">
        {qaItems.map((qa, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-lg text-gray-400 mb-2">{qa.question}</p> {/* 폰트 크기 키움 */}
            <p className="text-base text-gray-300">{qa.answer}</p> {/* 폰트 크기 키움 */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
