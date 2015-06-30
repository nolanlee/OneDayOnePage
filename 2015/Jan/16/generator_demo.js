function generatorAjax() {
  var get = function* (uri) {
    var xhr = new XMLHttpRequest();

    xhr.open('get', uri, true);

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        //yield xhr;
      }
    };

    xhr.send();

  };

  console.log('****************')
  console.log(get('data1.json').next());
}

$(function() {
  $('#btn').click(generatorAjax);
});