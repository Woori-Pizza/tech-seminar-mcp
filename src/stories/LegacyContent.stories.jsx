import LegacyContent from '../components/LegacyContent';

export default {
  // 요청하신 타이틀 규칙
  title: 'legacy/LegacyContent',
  component: LegacyContent,
  // 요청하신 태그 규칙
  tags: ['autodocs'],
  parameters: {
    // 너비가 넓은(980px) 컴포넌트이므로, 패딩 없이 꽉 찬 화면에서 보는 것이 좋습니다.
    layout: 'fullscreen',
    // 배경색을 약간 어둡게 설정하여 흰색 컴포넌트(bg-white)가 잘 보이게 할 수 있습니다.
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
      ],
    },
  },
};

// 별도의 Props(Args)가 없으므로 기본 스토리만 있으면 됩니다.
export const Default = {};