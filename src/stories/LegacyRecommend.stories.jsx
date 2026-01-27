import LegacyRecommend from '../components/LegacyRecommend';

export default {
  // 요청하신 타이틀 규칙
  title: 'legacy/LegacyRecommend',
  component: LegacyRecommend,
  // 요청하신 태그 규칙
  tags: ['autodocs'],
  parameters: {
    // 섹션 단위 컴포넌트이므로 전체 화면 너비에서 확인
    layout: 'fullscreen',
    docs: {
      description: {
        component: '고정된 추천 상품 데이터(RECOMMEND_ITEMS)를 그리드 형태로 보여주는 섹션 컴포넌트입니다.',
      },
    },
    // 배경색을 약간 회색으로 두면 컴포넌트의 흰색 배경(bg-white)과 경계선이 더 잘 보입니다.
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
      ],
    },
  },
};

// 기본 스토리
export const Default = {
  // 상하 여백을 좀 더 명확히 보고 싶다면 decorators 활용 가능
  decorators: [
    (Story) => (
      <div className="bg-gray-100 min-h-[200px] flex flex-col justify-center">
        {/* 위아래 가상의 콘텐츠가 있다고 가정 */}
        <div className="text-center text-gray-400 py-4">이전 섹션 영역</div>
        
        <Story />
        
        <div className="text-center text-gray-400 py-4">다음 섹션 영역</div>
      </div>
    ),
  ],
};