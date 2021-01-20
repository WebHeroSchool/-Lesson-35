let body = document.body;
let url = window.location.href;
let getName = (url) => {
  let g = url.split ('=');
  let name = g[1];
  if (name == undefined) {
    name = 'RimmaMaybo'
  }
  return name;
}
fetch(`https://api.github.com/users/${getName(url)}`)
  .then(res => res.json())
  .then(json => {
    console.log(json.avatar_url);
    console.log(json.name);
    console.log(json.bio);
    console.log(json.html_url);
    
    let img = new Image();
    img.src = json.avatar_url;
    body.append(img);

    let name = document.createElement('p');
    if (json.name != null) {
      name.innerHTML = json.name;
    } else {
      name.innerHTML = 'RimmaMaybo';
    }
    body.append(name);
    name.addEventListener("click", () => window.location = json.html_url);

    let bio = document.createElement('p');
    if (json.bio != null) {
      bio.innerHTML = json.bio;
    } else {
      bio.innerHTML = 'Нет данных';
    }
    body.append(bio);
  })
  .catch(err => console.log(err));
