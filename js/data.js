const GENDER_CLUSTERS = {
  men: [
    { label: '러닝코어', key: 'running' },
    { label: '워크웨어', key: 'running' },
    { label: '스트릿',   key: 'running' },
    { label: '빈티지',   key: 'running' },
    { label: '아웃도어', key: 'running' },
    { label: '포멀',     key: 'running' },
  ],
};

const TRENDING_KEYWORDS = {
  running: ['#러닝코어', '#오버핏', '#한강런', '#스포티', '#트랙팬츠', '#고프코어', '#테크웨어', '#캠퍼스런', '#가을러닝'],
};

const HERO_SLIDES = [
  { gender: 'men', img: 'hero-1.jpg',  label: '2025 F/W',            title: '지금 서울이\n입는 것들',        sub: '이 계절을 가장 잘 아는 브랜드들',               btn: '쇼핑하기'      },
  { gender: 'men', img: 'hero-2.jpg',  label: '2025 F/W COLLECTION', title: '가을의 기준',                   sub: '사무실도, 주말도 — 하나의 코트로',             btn: '컬렉션 보기'   },
  { gender: 'men', img: 'hero-3.jpg',  label: '#빈티지',             title: '시간이 만든\n질감을 입다',      sub: 'TUOMIO · GILAARCHIVE 시즌 컬렉션',            btn: '빈티지 보기'   },
  { gender: 'men', img: 'hero-4.jpg',  label: '#러닝코어',           title: '달리는 서울의\n새 시즌',        sub: 'NOHANT · YESEYESEE 아우터 컬렉션',            btn: '러닝코어 보기' },

  { gender: 'women', img: 'snap-2.jpg',    label: '2025 F/W WOMEN',  title: '나만의 시즌을\n정의하다',    sub: '미니멀걸·워크웨어 — 코트로 완성하는 스타일',   btn: '둘러보기'       },
  { gender: 'women', img: 'feature-3.png', label: "EDITOR'S PICK",   title: '오피스룩의\n새 기준',        sub: '윈터 워크웨어 클러스터 에디터 추천',           btn: '에디터 픽 보기' },
  { gender: 'women', img: 'snap-4.jpg',    label: '#미니멀걸',       title: '덜어낼수록\n선명해지는',     sub: 'LINGSEOUL · MATIN KIM 레이어드 컬렉션',        btn: '미니멀걸 보기'  },
  { gender: 'women', img: 'feature-2.png', label: 'NEW DROP',        title: 'F/W 시즌의\n첫 번째 드롭',  sub: '이번 시즌 가장 주목받는 니트와 아우터',        btn: '신상품 보기'    },

  { gender: 'kids', img: 'hero-1.jpg',    label: '2025 F/W KIDS',   title: '작은 패션의\n큰 이야기',     sub: '아이부터 주니어까지, FW 신상',                 btn: '키즈 쇼핑하기'  },
  { gender: 'kids', img: 'hero-2.jpg',    label: 'KIDS NEW SEASON', title: '겨울 외출엔\n이 룩으로',     sub: '유아부터 초등까지 F/W 필수 아이템',            btn: 'FW 신상 보기'   },
  { gender: 'kids', img: 'feature-4.png', label: 'KIDS OUTDOOR',   title: '뛰어도 따뜻한\n아웃도어 룩', sub: '활동적인 아이를 위한 윈터 스포츠 스타일',      btn: '아웃도어 보기'  },
];

const CLUSTER_PRODUCTS = {
  running: [
    { img: 'product-1.jpg',  brand: 'TYPESERVICE',      name: 'Ruffled Stripe Zip Hoodie [Black]',  price: '₩148,000', priceHint: '▼ 6개월 최저가', review: '★ 4.9 · 892 리뷰', url: 'detail.html'  },
    { img: 'product-2.jpg',  brand: 'YESEYESEE',        name: 'Breeze Windbreaker [White]',         price: '₩198,000', priceHint: '▼ 6개월 최저가', review: '★ 4.8 · 1,204 리뷰' },
    { img: 'product-3.jpg',  brand: 'NOHANT',           name: 'Hood Zip-up Jacket [Black]',         price: '₩228,000', priceHint: '▼ 6개월 최저가', review: '★ 4.9 · 445 리뷰'   },
    { img: 'product-4.jpg',  brand: 'MUSINSA STANDARD', name: 'Running Shorts [Navy]',              price: '₩39,000',                               review: '★ 4.6 · 3,812 리뷰' },
    { img: 'product-5.jpg',  brand: 'GILAARCHIVE',      name: 'Archive Tech Jacket [Olive]',        price: '₩318,000',                              review: '★ 4.7 · 312 리뷰'   },
    { img: 'product-6.jpg',  brand: 'SALOMON',          name: 'Speedcross 6 Running Cap',           price: '₩45,000',                               review: '★ 4.8 · 152 리뷰'   },
    { img: 'product-7.jpg',  brand: 'TUOMIO',           name: 'Lightweight Mesh Running Vest',      price: '₩128,000',                              review: '★ 4.9 · 89 리뷰'    },
    { img: 'product-8.jpg',  brand: 'MUSINSA STANDARD', name: 'Cushion Running Ankle Socks 3-Pack', price: '₩12,000',                               review: '★ 4.7 · 2,104 리뷰' },
  ],
};

const CLUSTER_LATEST_PRODUCTS = {
  running: [
    { img: 'latest-1.jpg',  brand: 'TYPESERVICE',      name: 'Ruffled Stripe Zip Hoodie [Black]',  price: '₩148,000', priceHint: '▼ 6개월 최저가', review: '★ 4.9 · 892 리뷰'   },
    { img: 'latest-2.jpg',  brand: 'YESEYESEE',        name: 'Breeze Windbreaker [White]',         price: '₩198,000', priceHint: '▼ 6개월 최저가', review: '★ 4.8 · 1,204 리뷰' },
    { img: 'latest-3.jpg',  brand: 'NOHANT',           name: 'Hood Zip-up Jacket [Black]',         price: '₩228,000', priceHint: '▼ 6개월 최저가', review: '★ 4.9 · 445 리뷰'   },
    { img: 'latest-4.jpg',  brand: 'MUSINSA STANDARD', name: 'Running Shorts [Navy]',              price: '₩39,000',                               review: '★ 4.6 · 3,812 리뷰' },
    { img: 'latest-5.png',  brand: 'GILAARCHIVE',      name: 'Archive Tech Jacket [Olive]',        price: '₩318,000',                              review: '★ 4.7 · 312 리뷰'   },
    { img: 'latest-6.jpg',  brand: 'Y.ARCHIVE',        name: 'Washed Cotton Run Bucket Hat',       price: '₩38,000',                               review: '★ 4.6 · 203 리뷰'   },
    { img: 'latest-7.jpg',  brand: 'GENERAL IDEA',     name: 'Packable Trail Wind Vest',           price: '₩112,000',                              review: '★ 4.8 · 74 리뷰'    },
    { img: 'latest-8.jpg',  brand: 'MUSINSA STANDARD', name: 'Terry Crew Sports Socks',            price: '₩9,900',                                review: '★ 4.7 · 3,481 리뷰' },
  ],
};

const CLUSTER_BRAND_STORIES = {
  running: [
    { img: 'brand-story-1.jpg', title: 'TYPESERVICE × 러닝코어 — 스포티와 스트릿의 경계',              date: '2026.04.10', url: 'brand-story.html' },
    { img: 'brand-story-2.jpg', title: 'NOHANT의 시그니처 후드 재킷, 이번 시즌 베스트셀러를 만나다',  date: '2026.04.09' },
    { img: 'brand-story-3.jpg', title: 'F/W 한강런 필수 아이템 — 스포티 캐주얼 완성 가이드',          date: '2026.04.07' },
    { img: 'brand-story-4.jpg', title: 'YESEYESEE — 달리는 서울의 새 시즌, 러닝코어 필수 아이템',     date: '2026.04.05' },
    { img: 'brand-story-5.jpg', title: '고프코어 입문 가이드 — 기능성과 스타일을 동시에',             date: '2026.04.03' },
    { img: 'brand-story-6.jpg', title: '도심 속 러닝을 위한 완벽한 기어, 이번 시즌 필수 리스트',      date: '2026.04.01' },
    { img: 'brand-story-7.jpg', title: 'Night Run: 밤을 밝히는 리플렉티브 스타일링',                  date: '2026.03.30' },
    { img: 'brand-story-8.jpg', title: '트레일 러닝 vs 시티 러닝, 당신의 선택은?',                    date: '2026.03.28' },
  ],
};

const SNAP_LOOK = {
  snapIdx: 0,
  items: [
    { img: 'product-2.jpg', brand: 'YESEYESEE',        name: 'Breeze Windbreaker [White]',  price: '₩198,000', url: 'detail.html' },
    { img: 'product-3.jpg', brand: 'NOHANT',            name: 'Hood Zip-up Jacket [Black]',  price: '₩228,000', url: 'detail.html' },
    { img: 'product-4.jpg', brand: 'MUSINSA STANDARD',  name: 'Running Shorts [Navy]',       price: '₩39,000',  url: 'detail.html' },
  ],
};

const STREET_SNAPS = [
  { img: 'snap-1.jpg', username: '@yeseyesee_official', tag: '#오버핏후드',   size: 'large' },
  { img: 'snap-2.jpg', username: '@tuomio_kr',          tag: '#캐주얼후드',   size: 'tall'  },
  { img: 'snap-3.jpg', username: '@nohant_official',    tag: '#레이어드룩'                  },
  { img: 'snap-4.jpg', username: '@gilaarchive',        tag: '#스포티캐주얼'                },
  { img: 'snap-5.jpg', username: '@typeservice_kr',     tag: '#스트릿룩'                    },
  { img: 'snap-6.jpg', username: '@y.archive',          tag: '#고프코어'                    },
  { img: 'snap-7.jpg', username: '@lingseoul',          tag: '#러닝룩'                      },
  { img: 'snap-8.jpg', username: '@generalidea',        tag: '#그래픽캐주얼'                },
];

const CLUSTER_RANKINGS = {
  running: [
    { img: 'ranking-1.jpg', brand: 'YESEYESEE',        price: '₩198,000', priceHint: '▼ 6개월 최저가', review: '★ 4.8 · 8,420 리뷰'  },
    { img: 'ranking-2.png', brand: 'NOHANT',           price: '₩228,000', priceHint: '▼ 6개월 최저가', review: '★ 4.9 · 6,204 리뷰'  },
    { img: 'ranking-3.jpg', brand: 'TYPESERVICE',      price: '₩158,000', priceHint: '▼ 6개월 최저가', review: '★ 4.9 · 5,891 리뷰'  },
    { img: 'ranking-4.png', brand: 'MUSINSA STANDARD', price: '₩58,000',                              review: '★ 4.6 · 12,304 리뷰' },
    { img: 'ranking-5.jpg', brand: 'GILAARCHIVE',      price: '₩318,000',                             review: '★ 4.7 · 4,102 리뷰'  },
    { img: 'ranking-6.png', brand: 'MUSINSA STANDARD', price: '₩145,000',                             review: '★ 4.5 · 7,845 리뷰'  },
    { img: 'ranking-7.png', brand: 'TYPESERVICE',      price: '₩189,000',                             review: '★ 4.8 · 4,980 리뷰'  },
    { img: 'ranking-8.jpg', brand: 'NOHANT',           price: '₩210,000',                             review: '★ 4.7 · 3,217 리뷰'  },
  ],
};

const CLUSTER_PREORDERS = {
  running: [
    { img: 'preorder-1.jpg', brand: 'NOHANT',           price: '₩198,000', deadline: 2,  ship: '8월 초'   },
    { img: 'preorder-2.jpg', brand: 'YESEYESEE',        price: '₩89,000',  deadline: 5,  ship: '8월 중순' },
    { img: 'preorder-3.jpg', brand: 'TYPESERVICE',      price: '₩268,000', deadline: 7,  ship: '8월 말'   },
    { img: 'preorder-4.jpg', brand: 'MUSINSA STANDARD', price: '₩58,000',  deadline: 1,  ship: '8월 초'   },
    { img: 'preorder-5.jpg', brand: 'GILAARCHIVE',      price: '₩318,000', deadline: 10, ship: '9월 초'   },
    { img: 'preorder-6.jpg', brand: 'YESEYESEE',        price: '₩145,000', deadline: 3,  ship: '8월 중순' },
    { img: 'preorder-7.jpg', brand: 'NOHANT',           price: '₩189,000', deadline: 6,  ship: '8월 말'   },
    { img: 'preorder-8.jpg', brand: 'TYPESERVICE',      price: '₩210,000', deadline: 14, ship: '9월 중순' },
  ],
};

const CLUSTER_BRANDS = {
  running: [
    { logo: '<img src="assets/brand-underarmour.svg" alt="Under Armour" />',         name: 'Under Armour'     },
    { logo: '<img src="assets/brand-adidas.png" alt="adidas" />',                    name: 'adidas'           },
    { logo: '<img src="assets/brand-musinsa-standard.png" alt="MUSINSA STANDARD" />', name: 'MUSINSA STANDARD' },
    { logo: '<img src="assets/brand-nike.png" alt="Nike" />',                        name: 'Nike'             },
    { logo: '<img src="assets/brand-salomon.png" alt="Salomon" />',                  name: 'Salomon'          },
    { logo: '<img src="assets/brand-lululemon.png" alt="lululemon" />',              name: 'lululemon'        },
  ],
};

const CATEGORY_ITEMS = {
  men: [
    '전체 상품','티셔츠','셔츠','니트/가디건','후드/스웨트','아우터/재킷',
    '코트','패딩/점퍼','슈트/포멀','팬츠','청바지','반바지',
    '트레이닝웨어','조끼','신발/스니커즈','샌들/슬리퍼','가방/백팩','모자/캡',
    '시계','지갑/벨트','선글라스','액세서리','스포츠/아웃도어','속옷/파자마',
    '수영복','향수','뷰티','라이프스타일','스카프/장갑','세일',
  ],
  women: [
    '전체 상품','티셔츠/탑','블라우스/셔츠','니트/가디건','후드/스웨트','원피스',
    '투피스/세트','아우터/재킷','코트','패딩/점퍼','스커트','팬츠',
    '청바지','레깅스','트레이닝웨어','신발/힐','스니커즈','샌들/뮬',
    '가방/클러치','백팩/숄더백','모자/헤어','주얼리','선글라스','시계',
    '스카프/장갑','속옷/파자마','수영복','뷰티/향수','라이프스타일','세일',
  ],
  kids: [
    '전체 상품','티셔츠','셔츠','니트/가디건','후드/스웨트','아우터/재킷',
    '패딩/점퍼','팬츠','청바지','원피스/스커트','트레이닝웨어','신발/스니커즈',
    '샌들/부츠','가방/백팩','모자/캡','속옷/파자마','장갑/목도리','세일',
  ],
};

const PHOTOBLOG_ENTRIES = {
  men: [
    {
      img: 'trend-1.jpg', tag: '#SPECIAL', readtime: '3분 읽기',
      title: '코드그라피가 포착한 기현의 특별한 겨울 무드',
      text: '몬스타엑스 기현이 다시 코드그라피(CGP)와 만난다. 지난 시즌 좋은 반응을 이끌어낸 협업의 흐름을 이어, 이번 겨울에는 좀 더 깊어진 무드와 여유로운 표정으로 돌아왔다. 후드 티셔츠, 패딩, 니트 등 일상에 바로 스며드는 아이템들은 도심에서도, 주말의 여유로운 분위기에서도 무리 없이 어울린다.',
      avatar: 'K', author: '에디터 권현근', date: '2025.11.19',
    },
    {
      img: 'trend-2.jpg', tag: '#SPECIAL', readtime: '3분 읽기',
      title: '릭 오웬스의 손끝에서 다시 태어난 원스타',
      text: '컨버스와 다크쉐도우의 새로운 협업 컬렉션을 공개한다. 다크쉐도우는 릭 오웬스의 세컨드 라인으로, 더 실험적인 실루엣과 과감한 비율을 특징으로 한다. 헤어 온 하이드 레더 어퍼를 사용해 질감과 존재감을 강조했으며, 컬러는 애시드·다크 더스트 두 가지로 전개된다.',
      avatar: 'K', author: '에디터 권현근', date: '2025.11.18',
    },
    {
      img: 'trend-3.jpg', tag: '#워크&포멀', readtime: '4분 읽기',
      title: '무신사 워크&포멀 올해 마지막 득템 찬스',
      text: '현명한 소비로 더욱 가치를 높이는 쇼핑 공략을 소개한다. 클래식한 포멀웨어부터 트렌디한 워크웨어까지, 한층 폭넓어진 라인업으로 겨울 스타일링에 신선한 변화를 더할 시간이다. 무신사 무진장 25 겨울 블랙프라이데이가 11월 16일부터 26일까지 11일간 진행된다.',
      avatar: 'R', author: '에디터 류예지', date: '2025.11.17',
    },
  ],
};
