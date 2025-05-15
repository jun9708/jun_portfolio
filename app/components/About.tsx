import { motion } from 'framer-motion';

interface Activity {
  period: string;
  organization: string;
  details: (string | React.ReactNode)[]; // JSX.Element 타입을 명시적으로 지정
}

const activities: Activity[] = [
  {
    period: '2021.03 ~ 2021.10',
    organization: '동명대학교 / 캡스톤 디자인',
    details: ['캡스톤 디자인', 'SW 융합 작품 경진대회 및 전시회'],
  },
  {
    period: '2021.06 ~ 2022.07',
    organization: '대한전자공학회',
    details: ['하계 종합 학술발표대회'],
  },
  {
    period: '2021.07',
    organization: '한국컴퓨터정보학회',
    details: [
      '하계 종합 학술발표대회',
      <motion.span
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold px-2 py-1 rounded-md inline-block whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        한국컴퓨터정보학회 21년도 하계 우수논문 상
      </motion.span>,
    ],
  },
  {
    period: '2021.10 ~ 2022.10',
    organization: '한국인터넷정보학회',
    details: ['추계 종합학술대회 발표'],
  },
  {
    period: '2021.10 ~ 2022.10',
    organization: '한국정보통신학회',
    details: ['하계 종합학술대회 발표'],
  },
  {
    period: '2020.12',
    organization: 'LINC+',
    details: [
      <motion.span
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold px-2 py-1 rounded-md inline-block whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        미라클오디션 장려상
      </motion.span>,
    ],
  },
];

export default function About() {
  return (
    <section className="py-20 bg-transparent text-white flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-4">관련 활동 내용</h2>
        <p className="text-gray-400">다양한 경험을 통해 지금의 저를 만들고있습니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-6xl w-full">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-sm text-gray-400 mb-1">{activity.period}</p>
            <h3 className="text-lg font-semibold mb-2">{activity.organization}</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {activity.details.map((detail, idx) => (
                <li key={idx} className="flex items-center">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
