import LegacyFooter from '../components/LegacyFooter';

export default {
  // 요청하신 타이틀 규칙
  title: 'legacy/LegacyFooter',
  component: LegacyFooter,
  // 요청하신 태그 규칙
  tags: ['autodocs'],
  parameters: {
    // 푸터는 화면 전체 너비를 차지하므로 fullscreen 레이아웃 사용
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'jQuery 기반의 팝업 토글 기능이 포함된 레거시 푸터 컴포넌트입니다. (ARS, 기타서비스, 언어, 패밀리사이트)',
      },
    },
  },
};

// 기본 스토리
export const Default = {
  // 푸터가 화면 하단에 위치하는 것을 시뮬레이션하기 위해
  // 데코레이터를 사용하여 상단에 임시 콘텐츠 공간을 확보합니다.
  decorators: [
    (Story) => (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex-1 p-8 text-center text-gray-500">
          <h1 className="text-2xl font-bold mb-4">메인 콘텐츠 영역</h1>
          <p>스크롤을 내려 하단 푸터를 확인하세요.</p>
          <div className="h-[200px]"></div> {/* 여백 확보 */}
        </div>
        <Story />
      </div>
    ),
  ],
};