function replaceImageParameters() {
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    var src = images[i].src;
    if (src.includes('?rule=big')) {
      var newSrc = src.replace('?rule=big', '?rule=original');
      images[i].src = newSrc;
    }
  }
}

replaceImageParameters();
