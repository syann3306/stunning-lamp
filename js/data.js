export const questions = [
  {
    number: '01',
    question: '보기의 동물중 어디에 가깝나요?',
    choices: [
      { image: './img/animal-01.jpg', value: 'E' },
      { image: './img/animal-02.jpg', value: 'I' }
    ]
  },
  {
    number: '02',
    question: '뛰는것과 보는것 어디에 속하시나요?',
    choices: [
      { image: './img/animal-03.jpg', value: 'E' },
      { image: './img/animal-04.jpg', value: 'I' }
    ]
  },
  {
    number: '03',
    question: '같이 활동하는것이 좋다? 혼자가 좋다?',
    choices: [
      { image: './img/animal-05.jpg', value: 'E' },
      { image: './img/animal-06.jpg', value: 'I' }
    ]
  },
  {
    number: '04',
    question: '겨울 과 여름 당신의 선택은?',
    choices: [
      { image: './img/animal-07.jpg', value: 'N' },
      { image: './img/animal-08.jpg', value: 'S' }
    ]
  },
  {
    number: '05',
    question: '물 과 초원 어디가 좋으신가요?',
    choices: [
      { image: './img/animal-09.jpg', value: 'N' },
      { image: './img/animal-10.jpg', value: 'S' }
    ]
  },
  {
    number: '06',
    question: '당신은 어떤 스타일이 좋은가?',
    choices: [
      { image: './img/animal-11.jpg', value: 'N' },
      { image: './img/animal-12.jpg', value: 'S' }
    ]
  },
  {
    number: '07',
    question: '느긋한가요? 빠른가요?',
    choices: [
      { image: './img/animal-13.jpg', value: 'F' },
      { image: './img/animal-14.jpg', value: 'T' }
    ]
  },
  {
    number: '08',
    question: '평범한 스타일 vs 화려함 선택은?',
    choices: [
      { image: './img/animal-15.jpg', value: 'F' },
      { image: './img/animal-16.jpg', value: 'T' }  
    ]
  },
  {
    number: '09',
    question: '무덤덤함 vs 활발함 어떤스타일인가?',
    choices: [
      { image: './img/animal-17.jpg', value: 'F' },
      { image: './img/animal-18.jpg', value: 'T' }
    ]
  },
  {
    number: '10',
    question: ' 지켜보는스타일 vs 알려주는스타일 ',
    choices: [
      { image: './img/animal-19.jpg', value: 'P' },
      { image: './img/animal-20.jpg', value: 'J' }
    ]
  },
  {
    number: '11',
    question: '나는 생각하지 않는편이다 vs 많은편이다?',
    choices: [
      { image: './img/animal-21.jpg', value: 'P' },
      { image: './img/animal-22.jpg', value: 'J' }
    ]
  },
  {
    number: '12',
    question: '계획없는 여행 vs 계획있는 여행?',
    choices: [
      { image: './img/animal-23.jpg', value: 'P' },
      { image: './img/animal-24.jpg', value: 'J' }
    ]
  },
 ]
export const results = [
  {
    number: '1',
    title: '출근 시간은<br>내가 정해!',
    animal: './img/results/ENTJ.jpg',
    results: [
      '혼자서 멘탈 케어가 가능해요!<br>소속이 없어도, 벌이가 불안정해도 저는 지금이 좋아요!',
      '일에 대한 욕심이 많아요.<br>행복한 야근이라고 할 수 있어요!',
      '자유로운 환경에서 더 잘해요!<br>하지만 누구보다 스스로 시간 관리가 철저해요:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['프리랜서', '창업가'],
    lectureImg: '/images/result_lecture1.png',
    lectureUrl: 'https://bit.ly/3Wr0kt6'
  },
  {
    number: '2',
    title: '프로직진러!<br>진행력 갑',
    animal: './img/results/ENTP.jpeg',
    results: [
      '나는야 회사 사람들 멘탈 지킴이!<br>언제나 토닥토닥 으샤으샤 응원하며 다니는 파워 인싸!',
      '여러 사람과 협업이 필요한 직무에 찰떡!',
      '진행력 갑! 추진력 갑!<br>빠른 속도로 동시에 여러 업무를 해결할 수 있어요.',
      '회사 행사나 크리스마스 이벤트,<br>회사사람들 생일까지 우리가 다 챙길게요'
    ],
    jobs: ['마케터', '기획자'],
    lectureImg: '/images/result_lecture2.png',
    lectureUrl: 'https://bit.ly/3SZl1t9'
  },
  {
    number: '3',
    title: '우리 무기는<br>상상력!',
    animal: './img/results/ESTP.jpeg',
    results: [
      '이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!',
      '섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.',
      '가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ (프로긍정러)',
      '업무에 예민할 때도 있지만,<br>그래서 결과물은 완벽하죠!'
    ],
    jobs: ['디자이너', '예술가'],
    lectureImg: '/images/result_lecture3.png',
    lectureUrl: 'https://bit.ly/3DWlesG'
  },
  {
    number: '4',
    title: '인생은<br>한방!',
    animal: './img/results/ESFP.jpg',
    results: [
      '전략적으로 계획을 세우는 걸 좋아해요!',
      '평소 경제와 사회 이슈에 관심이 매우 많아요.',
      '꿈이 커요!<br>크게 성공할 수 있는 한 방을 이뤄낼 거예요~',
      '일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.'
    ],
    jobs: ['부동산<br>투자자', '주식<br>투자자'],
    lectureImg: '/images/result_lecture4.png',
    lectureUrl: 'https://bit.ly/3fvoTo5'
  },
  {
    number: '5',
    title: '한 번 집중하면<br>멈출 수 없지!',
    animal: './img/results/ESFJ.jpg',
    results: [
      '저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)',
      '혼자서 더 잘해요.<br>솔로 워커 최고!',
      '관심 분야가 생기면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.',
      '(이상) <<<<<< (현실)<br>가끔 이성에게 상처를 줄 때가 있어요, 그게 아닌데...'
    ],
    jobs: ['개발자', '데이터분석가'],
    lectureImg: '/images/result_lecture5.png',
    lectureUrl: 'https://bit.ly/3U0O3Kj'
  },
  {
    number: '6',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/ENFJ.jpg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '7',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/INFP.jpg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '8',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/ISFP.jpg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '9',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/ISFJ.jpeg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      // '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      // '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '10',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/INFJ.jpg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '11',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/ESTJ.jpeg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '12',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/ISTP.jpeg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '13',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/INTJ.jpg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '14',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/INTP.jpg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '15',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/ISTJ.jpg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
  {
    number: '16',
    title: '인생 욜로지~<br>일단 놀자 ><',
    animal: './img/results/ENFP.jpeg',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  },
]
export const mbtis = {
  ENTJ: 0,
  ENTP: 1,
  ESTP: 2,
  ESFP: 3,
  ESFJ: 4,
  ENFJ: 5,
  INFP: 6,
  ISFP: 7,
  ISFJ: 8,
  INFJ: 9,
  ESTJ: 10,
  ISTP: 11,
  INTJ: 12,
  INTP: 13,
  ISTJ: 14,
  ENFP: 15
}