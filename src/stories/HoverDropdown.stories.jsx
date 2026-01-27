// HoverDropdown.stories.js
import HoverDropdown from '../components/HoverDropdown';

export default {
  // 요청하신 타이틀 규칙 적용
  title: 'legacy/HoverDropdown',
  component: HoverDropdown,
  // 요청하신 태그 규칙 적용
  tags: ['autodocs'],
  parameters: {
    // 드롭다운이 잘 보이도록 중앙 정렬 및 여백 확보
    layout: 'centered',
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: '드롭다운 패널의 정렬 기준 (left, center, right)',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    trigger: {
      control: false, // 복잡한 JSX는 controls 패널에서 제외
      description: '마우스를 올렸을 때 드롭다운을 활성화하는 요소',
    },
    children: {
      control: false,
      description: '드롭다운 패널 내부에 표시될 컨텐츠',
    },
  },
};

// 공통으로 사용할 드롭다운 메뉴 아이템 예시
const DropdownMenu = () => (
  <ul className="py-2 text-sm text-gray-700">
    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">프로필 보기</li>
    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">계정 설정</li>
    <li className="border-t border-gray-100 my-1"></li>
    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
      로그아웃
    </li>
  </ul>
);

// 기본 스토리 (Left Align)
export const Default = {
  args: {
    align: 'left',
    trigger: (
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">
        메뉴 (Left)
      </button>
    ),
    children: <DropdownMenu />,
  },
};

// 중앙 정렬 스토리
export const CenterAlign = {
  args: {
    align: 'center',
    trigger: (
      <button className="px-4 py-2 font-bold text-white bg-emerald-500 rounded hover:bg-emerald-600 transition-colors">
        옵션 (Center)
      </button>
    ),
    children: <DropdownMenu />,
  },
};

// 우측 정렬 스토리
export const RightAlign = {
  args: {
    align: 'right',
    trigger: (
      <button className="px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600 transition-colors">
        더보기 (Right)
      </button>
    ),
    children: <DropdownMenu />,
  },
};