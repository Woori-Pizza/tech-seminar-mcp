import { CircularBtn } from '../components/icons/CircularBtn';

export default {
  // 요청하신 대로 계층 구조를 추가했습니다.
  title: 'legacy/Button/CircularBtn',
  component: CircularBtn,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    icon: {
      control: 'text',
      description: '버튼 안에 들어갈 아이콘 (문자열 또는 컴포넌트)',
    },
    dataIdx: {
      control: 'number',
      description: '인덱스 데이터',
    },
    onHover: {
      action: 'hovered',
      description: '마우스 진입/이탈 콜백',
    },
    className: {
      control: 'text',
      description: '추가 스타일 클래스',
    },
  },
};

export const Default = {
  args: {
    icon: '>', 
    dataIdx: 0,
  },
};

export const OnBackground = {
  decorators: [
    (Story) => (
      <div className="relative flex items-center justify-center w-64 h-40 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg">
        <span className="absolute text-white text-xs top-2 left-2">Background Simulation</span>
        <Story />
      </div>
    ),
  ],
  args: {
    icon: '➜',
    dataIdx: 1,
  },
};