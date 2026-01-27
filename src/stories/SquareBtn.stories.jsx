import { SquareBtn } from '../components/icons/SquareBtn'; // Named Export

export default {
  // 요청하신 대로 같은 폴더 구조 적용
  title: 'legacy/Button/SquareBtn',
  component: SquareBtn,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'text',
      description: '버튼 내부 아이콘 또는 텍스트',
    },
    dataIdx: {
      control: 'number',
      description: '데이터 인덱스 (data-idx)',
    },
    onMouse: {
      action: 'mouse-event',
      description: '마우스 진입(true)/이탈(false) 콜백',
    },
    className: {
      control: 'text',
      description: '추가 스타일 클래스',
    },
  },
};

// 기본 스토리 (검색 아이콘 예시)
export const Default = {
  args: {
    icon: '🔍',
    dataIdx: 0,
  },
};

// 텍스트 아이콘 예시
export const TextIcon = {
  args: {
    icon: '+',
    dataIdx: 1,
  },
};

// 여러 개가 모여있는 UI 시뮬레이션
export const ButtonGroup = {
  decorators: [
    (Story) => (
      <div className="flex gap-1 p-4 border rounded bg-gray-50">
        <SquareBtn icon="◀" dataIdx={0} />
        {/* 현재 선택된 스토리가 중간에 위치 */}
        <Story />
        <SquareBtn icon="▶" dataIdx={2} />
      </div>
    ),
  ],
  args: {
    icon: '⏸', // 일시정지 아이콘 예시
    dataIdx: 1,
  },
};