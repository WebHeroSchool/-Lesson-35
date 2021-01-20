let body = document.body;
let string = window.location.search;
let url = 'https://api.github.com/users/RimmaMaybo';
fetch(url)
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
  })
  .catch(err => console.log(err));
