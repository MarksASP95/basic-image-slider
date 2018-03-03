var img_count = 1;

function slide(x){
  var image = document.getElementById('img');
  img_count = img_count + x;
  if(img_count == 7){
    img_count = 1;
  }else if(img_count == 0){
    img_count = 6;
  }
  image.src = "img/img" + img_count + ".jpg";
}
