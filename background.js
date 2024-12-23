const imges =["0.jpeg","1.jpeg","2.jpeg"];

  const chosenImage = imges[Math.floor(Math.random()*imges.length)];
  document.body.style.backgroundColor = "white";
  const url = "img/"+chosenImage;
  document.body.style.backgroundImage = "url('" + url + "')";