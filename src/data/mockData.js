// 1. Header GNB 및 상세 메뉴
export const GNB_DATA = [
  {
    label: "개인",
    dropdown: [
      "조회",
      "이체",
      "공과금",
      "예금/신탁",
      "펀드",
      "보험",
      "대출",
      "외환/골드",
      "퇴직연금",
      "뱅킹관리",
      "ISA",
    ],
  },
  {
    label: "기업",
    dropdown: [
      "조회",
      "이체",
      "공과금",
      "전자결제",
      "수표어음",
      "자금관리",
      "예금/신탁",
      "대출",
      "펀드/보험",
      "외환",
      "퇴직연금",
      "뱅킹관리",
    ],
  },
  {
    label: "자산관리",
    dropdown: ["로보/전문가설계", "펀드마켓", "은퇴설계", "재무설계"],
  },
  {
    label: "금융상품",
    dropdown: [
      "추천상품",
      "예금",
      "펀드",
      "대출",
      "외환",
      "골드",
      "신탁",
      "보험",
      "퇴직연금",
      "We'llRich100",
      "ISA",
    ],
  },
];

// 2. 전체서비스 데이터
export const ALL_SERVICE_DATA = {
  shortcut: [
    "자산/펀드",
    "보험센터",
    "론센터",
    "외환센터",
    "주택도시기금(주택청약)",
  ],
  smart: ["스마트금융", "투체어스PB", "제휴우대클럽", "머핀", "이벤트"],
  customer: [
    "고객광장",
    "보안센터",
    "은행소개/IR",
    "영업점안내",
    "웹진좋은예감",
  ],
};

// 3. 언어 데이터
export const LANGUAGES = [
  "English",
  "Chinese (中國語 )",
  "Japanese (日本語)",
  "Filipino (Tagalog)",
  "Vietnamese (tiếng Việt)",
  "Mongolian (Монгол хэл)",
];

// 4. 슬라이더 및 탭 데이터
export const SLIDE_DATA = [
  {
    key: "special-day",
    bgColor: "#ebf8f6",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide01_20190131.png",
  },
  {
    key: "first-saving",
    bgColor: "#d7e7f8",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide02_20190123.png",
  },
  {
    key: "irp",
    bgColor: "#ebf7fe",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide03_20190123.png",
  },
  {
    key: "itouch",
    bgColor: "#fff5f5",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide04_20190123.png",
  },
  {
    key: "seomin",
    bgColor: "#ebf8f6",
    bgImg:
      "https://web.archive.org/web/20190227033832im_/https://simg.wooribank.com/img/intro/home/slide05_20190123.png",
  },
];
export const SLIDE_TABS = [
  "특별한 하루",
  "우리 첫거래 감사적금",
  "개인형IRP",
  "iTouch 우리예금",
  "서민금융 대표상품",
];

// 5. 뉴스 데이터
export const NEWS_ITEMS = [
  "[공지]3·1운동 및 대한민국임시정부 수립 100...",
  "[공지]「인터넷뱅킹 예금잔액증명 발급」시행 안내",
  "[공지] '#우리은행_역사찾기' 공모전",
];

// 6. 추천상품 데이터
export const RECOMMEND_ITEMS = [
  {
    img: "https://web.archive.org/web/20190225035628im_/https://www.wooribank.com/img/intro/news/product_20180907_4_1.png",
    title: "로보-전문가 포트폴리오",
    lines: ["로보-어드바이저/ 전문가가", "추천해드리는", "펀드 포트폴리오"],
  },
  {
    img: "https://web.archive.org/web/20190225035631im_/https://www.wooribank.com/img/intro/news/product_20180907_4_3.png",
    title: "추천펀드",
    lines: ["우리은행이 추천해드리는", "펀드 상품으로", "스마트한 자산관리!"],
  },
  {
    img: "https://web.archive.org/web/20190225035635im_/https://www.wooribank.com/img/intro/news/product_20180907_4_2.png",
    title: "인터넷/모바일 방카",
    lines: [
      "언제 어디서나 편리한 가입!",
      "저축보험, 연금보험,",
      "암보험, 여행보험, 레저보험",
    ],
  },
];

// 7. 푸터 데이터
export const FOOTER_LINKS = {
  others: [
    "법원환급금조회",
    "미교부국민주조회",
    "도시철도공채조회",
    "상조회사예치금조회",
    "예금잔액증명서발급조회",
    "지급보증서발급조회",
    "서울시예치금내역조회",
  ],
  family: [
    "우리금융지주",
    "우리에프아이에스",
    "우리신용정보",
    "우리다문화장학재단",
    "우리펀드서비스",
    "우리미소금융재단",
    "우리금융경영연구소",
    "우리종합금융",
  ],
  languages: [
    "English",
    "中國語",
    "日本語",
    "Tagalog",
    "tiếng Việt",
    "Монгол хэл",
  ],
  bottom: [
    "은행소개",
    "영업점안내",
    "고객광장",
    "개인정보처리방침",
    "개인정보처리보호",
    "사고신고",
    "전자민원접수",
    "보호금융상품등록부",
    "상품공시실",
    "보안센터",
    "웹접근성 이용안내",
  ],
};
