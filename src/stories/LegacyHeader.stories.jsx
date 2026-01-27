import LegacyHeader from '../components/LegacyHeader';

export default {
  // 요청하신 타이틀 규칙
  title: 'legacy/LegacyHeader',
  component: LegacyHeader,
  // 요청하신 태그 규칙
  tags: ['autodocs'],
  parameters: {
    // 헤더는 화면 너비를 꽉 채워야 하므로 fullscreen 레이아웃 사용
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'jQuery 이벤트 핸들링을 포함한 레거시 헤더 컴포넌트입니다. (로그인, 공인인증센터, GNB, 전체메뉴, 언어설정)',
      },
    },
  },
};

// 기본 스토리
export const Default = {
  // 헤더 아래에 콘텐츠가 있는 상황을 연출하기 위한 데코레이터
  decorators: [
    (Story) => (
      <div className="bg-gray-50 min-h-screen">
        <Story />
        <main className="mx-auto w-[980px] pt-10 text-center text-gray-500">
          <h2 className="text-xl font-bold mb-4">페이지 본문 영역</h2>
          <p>헤더 메뉴를 클릭하여 드롭다운 동작을 확인해 보세요.</p>
        </main>
      </div>
    ),
  ],
};