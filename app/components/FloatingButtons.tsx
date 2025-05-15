'use client';

import { useState } from 'react';
import { ChevronUpIcon, MailIcon, BookOpenIcon, GithubIcon, CheckIcon } from 'lucide-react';

export default function FloatingButtons() {
  const [copied, setCopied] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const email = 'wnsgud1997@gmail.com';

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 복사 완료 메시지 사라짐
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">

      {/* 노션 버튼 */}
      <a
        href="https://jun9708.notion.site/a50f28e34096497eae7c71e3a6968ab2?pvs=74"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-400 text-white rounded-full shadow-lg hover:bg-green-700 transition"
        aria-label="Notion"
      >
        <img src="/notionImg.png" alt="Notion" className="w-6 h-6" />
      </a>

      {/* 깃허브 버튼 */}
      <a
        href="https://github.com/jun9708"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="GitHub"
      >
        <img src="/gitImg.png" alt="git" className="w-6 h-6" />
      </a>

      {/* 이메일 버튼 */}
      <div className="relative flex items-center">
        {/* 말풍선 이메일 텍스트 */}
        {showEmail && (
          <div className="mr-2 px-3 py-1 bg-black text-white text-sm rounded shadow">
            {copied ? '복사되었습니다!' : email}
          </div>
        )}
        <button
          onClick={handleCopyEmail}
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => {
            setShowEmail(false);
            setCopied(false);
          }}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Email"
        >
          {copied ? <CheckIcon size={20} /> : <MailIcon size={20} />}
        </button>
      </div>

      {/* 맨 위로 가기 버튼 */}
      <button
        onClick={handleScrollTop}
        className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-black transition"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon size={20} />
      </button>
    </div>
  );
}
