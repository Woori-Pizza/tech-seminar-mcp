import React, { useState } from 'react';
import IconButton from './IconButton';

const ProductList = () => {
  // 현재 마우스가 올라간 아이템의 ID를 저장
  const [hoveredId, setHoveredId] = useState(null);

  // 왼쪽 그룹 아이템 (기존 8개)
  const leftItems = [
    { id: 'deposit', name: '예금', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_011.png' },
    { id: 'loan', name: '대출', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_022.png' },
    { id: 'fund', name: '펀드', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_033.png' },
    { id: 'exchange', name: '외환', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_044.png' },
    { id: 'trust', name: '신탁', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_055.png' },
    { id: 'pension', name: '퇴직연금', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_066.png' },
    { id: 'insurance', name: '보험', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_077.png' },
    { id: 'isa', name: 'ISA', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_088.png' }
  ];

  // 오른쪽 그룹 아이템 (신규 3개)
  // 규칙에 따라 099 -> 110 -> 121 순서로 설정했습니다.
  const rightItems = [
    { id: 'card', name: '카드신청', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_099.png' },
    { id: 'mycard', name: '나의카드', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_01010.png' },
    { id: 'event', name: '이벤트', icon: 'https://www.wooribank.com/img/common/etc/bg_btn/icon_set_01111.png' }
  ];

  // 렌더링 헬퍼 함수 (중복 제거)
  const renderItem = (item) => {
    const isHovered = hoveredId === item.id;
    
    const currentIcon = isHovered 
      ? item.icon.replace('.png', '_over.png') 
      : item.icon;

    const containerStyle = isHovered 
      ? "bg-[#0067AC] rounded-full w-[85px] h-[85px]" 
      : "w-[85px] h-[85px]";

    const textStyle = isHovered 
      ? "text-white font-bold" 
      : "text-black";

    return (
      <div key={item.id} className="w-[85px] h-[85px] flex items-center justify-center">
        <IconButton 
          icon={currentIcon} 
          text={item.name}
          className={containerStyle}
          textClassName={textStyle}
          onHover={(isHovering) => setHoveredId(isHovering ? item.id : null)}
        />
      </div>
    );
  };

  return (
    // 전체 컨테이너: flex로 가로 배치, 너비는 내용물에 맞게(fit) 혹은 전체(w-full)
    <div className="flex items-center w-fit h-[117px] gap-0">
      
      {/* 왼쪽 그룹 렌더링 */}
      <div className="flex">
        {leftItems.map(renderItem)}
      </div>

      {/* 파란색 구분선 (높이와 마진은 시안에 맞춰 조정) */}
      {/* h-[50px]: 아이콘 높이에 맞춰 적당히 설정 / my-auto: 수직 중앙 정렬 */}
      <div className="w-[1px] h-[50px] bg-[#dae4f3] mx-2 my-auto"></div>

      {/* 오른쪽 그룹 렌더링 */}
      <div className="flex">
        {rightItems.map(renderItem)}
      </div>

    </div>
  );
};

export default ProductList;