import LegacyHero from '../components/LegacyHero';

export default {
  // 요청하신 타이틀 규칙
  title: 'legacy/LegacyHero',
  component: LegacyHero,
  // 요청하신 태그 규칙
  tags: ['autodocs'],
  parameters: {
    // 히어로 섹션은 화면 너비를 꽉 채워서 보여주는 것이 일반적이므로 fullscreen 사용
    layout: 'fullscreen',
    docs: {
      description: {
        component: '메인 슬라이더(LegacySlider)와 하단 탭(LegacySliderTabs)을 포함하는 히어로 섹션입니다.',
      },
    },
  },
};

// 기본 스토리
export const Default = {
  // 컴포넌트가 잘 보이도록 배경색 등을 조정하고 싶다면 decorators 추가 가능
  // 현재는 기본 상태로 충분해 보입니다.
};