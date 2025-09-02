const btnForAPI = document.querySelector('#btnForAPI')
const containerForImages = document.querySelector('.containerForImages');
const containerForLoadingMessage = document.querySelector('#loadingMessage');
btnForAPI.addEventListener('click',() => {
    const InputForAPI = document.querySelector('#urlForAPI');
    let urlForAPI = InputForAPI.value;
 
    if(InputForAPI.value) {
      containerForImages.innerHTML = '';
      const loading = document.createElement('p')
      loading.classList.add('loadingMessage');
      loading.textContent = 'Please wait while the image loads...';
      containerForLoadingMessage.appendChild(loading);

      setInterval(() => { 
        containerForLoadingMessage.removeChild(loading);
      }, 1000);

      axios.get(urlForAPI)
     .then(response => {
        response.data.forEach((item, index) => {
        const newImg = document.createElement('img')
        newImg.setAttribute('src', item.download_url);
        newImg.classList.add('images');
        containerForImages.appendChild(newImg);
      });
      })    
      .catch(err => {
        console.log(err);
      });

      InputForAPI.value = '';
      }
});
