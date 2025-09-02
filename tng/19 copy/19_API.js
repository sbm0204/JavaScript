// async 예시 -------------------------------------------------------------------------

/**
 * 플래그에 따라 로딩을 온(true)/오프(false)할 수 있음. 
 * @param {boolean} flg 
 */
function loadingToggle(flg) {
  const loading = document.querySelector('.loading');
  if(flg) {
    loading.classList.add('loading-on');
  } else {
    loading.classList.remove('loading-on');
  }
}

document.querySelector('.request-box > button').addEventListener('click', async () => {
  loadingToggle(true);
  const url = document.querySelector('#apiUrl').value;
  const cardBox = document.querySelector('.card-box');
  cardBox.textContent = '';

  try {
    const res = await axios.get(url);
    res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;

      cardBox.appendChild(newCard);
    });
  } catch (err) {
    console.error(err);
  } finally {
    loadingToggle(false);
    }
  });

// chaining 예시 -------------------------------------------------------------------------

// document.querySelector('.request-box > button').addEventListener('click', () => {
//   const loading = document.querySelector('.loading');
//   loading.classList.add('loading-on');

//   const url = document.querySelector('#apiUrl').value;
//   const cardBox = document.querySelector('.card-box');
//   cardBox.textContent = '';

//   axios.get(url)
//   .then(res => {
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundImage = `url(${item.download_url})`;

//       cardBox.appendChild(newCard);
//     });
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     loading.classList.remove('loading-on');
//   });
// });

// 보미의 예시 -------------------------------------------------------------------------

// const containerForImages = document.querySelector('.containerForImages');
// const containerForLoadingMessage = document.querySelector('#loadingMessage');
// btnForAPI.addEventListener('click',() => {
//     const InputForAPI = document.querySelector('#urlForAPI');
//     let urlForAPI = InputForAPI.value;

//     if(InputForAPI.value) {
//       containerForImages.innerHTML = '';
//       const loading = document.createElement('p')
//       loading.classList.add('loadingMessage');
//       loading.textContent = 'Please wait while the image loads...';
//       containerForLoadingMessage.appendChild(loading);

//       setInterval(() => { 
//         containerForLoadingMessage.removeChild(loading);
//       }, 1000);

//       axios.get(urlForAPI)
//      .then(response => {
//         response.data.forEach((item, index) => {
//         const newImg = document.createElement('img')
//         newImg.setAttribute('src', item.download_url);
//         newImg.classList.add('images');
//         containerForImages.appendChild(newImg);
//       });
//       })    
//       .catch(err => {
//         console.log(err);
//       });

//       InputForAPI.value = '';
//       }
// });
