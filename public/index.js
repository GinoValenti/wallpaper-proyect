const contenedor = document.getElementById("asd")
fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    let wallpapers = data.wallpapers;
    wallpapers.forEach(createCard)
    console.log(wallpapers);
    let wallpapersNature = wallpapers.filter(x=>x.tags.includes("nature"))

    console.log(wallpapersNature);
    function createCard(x){
        contenedor.innerHTML += `
        <div class="separator" style="clear: both; text-align: center;">
          <a target="_BLANK" href="${x.url}" imageanchor="1" style="margin-left: 1em; margin-right: 1em;">
           <img class="img-galery" border="0" src="${x.url}"width="640" height="360" data-original-width="1600" data-original-height="900" />
          </a>
        </div>`  
    }
  })
  .catch(error => console.error(error));



  
