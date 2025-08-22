// ------------------ array ------------------

// 각 회원의 rank가 코드 형식으로 저장되어 있습니다. 
// 이 코드는 각각 아래와 같은 의미를 가집니다. 
// 1 = 관리자, 2 = 팀장, 3 = 주임, 4 = 사원
// 코드로 되어 있는 rank를 한글로 바꿔주세요. 

// result[0].rank = 'N/A';
// result[1].rank = '관리자';
// result[2].rank = '팀장';
// result[3].rank = '주임';

const result = [
  {
    userId: 1,
    email: 'admin1@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'jhon',
    rank: 1,
  },
  {
    userId: 2,
    email: 'admin2@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'suzan',
    rank: 2,
  },
  {
    userId: 3,
    email: 'admin3@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'ahoi',
    rank: 3,
  },
  {
    userId: 4,
    email: 'admin4@admin.com',
    password: 'ga3l5ikgbjaw4iptrvj304a9',
    name: 'yoho',
    rank: 2,
  },
];

// result.rank.val

// const ranks = result.map(({ rank }) => rank);

// result[0].rank = 'N/A';
// result[1].rank = '관리자';
// result[2].rank = '팀장';
// result[3].rank = '주임';

const resultMapForRank = result.map(rank => {
  if(rank === 1) {
    return '관리자';
  } else if(rank === 2) {
    return '팀장';
  } else if(rank === 3) {
    return '주임';
  } else {
    return '사원';
  }
});

console.log(resultMapForRank);