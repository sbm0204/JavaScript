// Asynchronous JavaScript And XML
{/* <xml>
  <data>
    <name></name>
  </data>
</xml>

const t = '{"data":{"name":"홍길동","age": 20}'
const result = JSON.stringify(t);
result.data.name; */}

const url = 'https://picsum.photos/v2/list?page=1&limit=10'

axios.get(url)
.then(response => {
  response.data.forEach((item, index) => {
    const newImg = document.createElement('img')
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '300px');

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
})    
.catch(err => {
  console.log(err);
});

// 첫번째 파라미터는 무조건 url
// put / post / delete는 2번째 파라미터 있어야한다. (백엔드하고 나서 알게된다.)

// <!-- get-조회 / post-생성 / put-포괄적 수정 / delete-삭제 / patch-하나의 데이터 수정 -->
//   <!-- REST의 특징 중 무상태성Stateless 안지킨다.  -->