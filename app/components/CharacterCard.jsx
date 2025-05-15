import React, { useState, useRef } from 'react';
import '../styles/styles.css'; // 반짝임, glare 등 효과 포함된 CSS

const CharacterCard = ({ name, power, reward, tags, description, image }) => {
  const [isClicked, setIsClicked] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 12) * -1; // 부드러운 회전
    const rotateY = (x - centerX) / 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    card.style.transition = 'transform 0.15s ease'; // 짧은 진입 트랜지션
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transition = 'transform 0.6s ease'; // 자연스럽게 초기화
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const toggleCardEffect = () => {
    setIsClicked(!isClicked);
    const card = cardRef.current;
    if (!isClicked) {
      card.classList.add('clicked');
    } else {
      card.classList.remove('clicked');
    }
  };

  const closePopup = () => {
    setIsClicked(false);
  };

  const cardContent = (
    <div
      className="card-wrapper"
      onClick={toggleCardEffect}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={`card relative bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden ${isClicked ? 'clicked' : ''}`}
        data-rarity="amazing rare"
      >
        {/* 반짝임 & 광택 효과 */}
        <div className="card__shine" />
        <div className="card__glare" />

        <div className="card-face card-front p-4">
          <div className="relative w-full h-96 overflow-hidden rounded-md mb-4">
            <img
              src={image}
              alt={`${name} 이미지`}
              className="w-full h-full object-cover transform transition-transform duration-300"
              style={{
                objectPosition: 'center 10%',
                transform: 'scale(1.1)',
              }}
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <div className="my-2">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded mr-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return <>{cardContent}</>;

};

export default CharacterCard;
