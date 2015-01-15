/**
 * ajax whth WTF
 */

function traditionalAjax() {

  function getWaterflows(images, successCallback, failCallback) {
    $.get('data2.json').success(function(waterflows) {
      images.forEach(function(image, index) {
        result = {};
        waterflows.some(function(waterflow) {
          if(waterflow.imageId === index) {
            result.waterflow = waterflow.text;
            result.src = image;
            return true;
          }
        });
        successCallback(result);
      });
    }).fail(failCallback);
  }

  function setWaterflow(image) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = image.src;
    img.onload = function () {
      var imgWidth = img.width;
      var imgHeight = img.height;
      canvas.width = imgWidth / 3;
      canvas.height = imgHeight / 3;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(123, 234, 12, 0.7)';
      ctx.font = '20px sans-serif';
      ctx.fillText(image.waterflow, canvas.width - (image.waterflow.length * 15), 90);
      $('#container').append(canvas);
      getData(doSometing, errorHandler);
    };
  }

  function getData(successCallback, failCallback) {
    $.get('data3.json').success(successCallback).fail(failCallback);
  }

  function doSometing(data) {
    console.info('----------------------');
    console.info('Do something after image loading: ' + data.foo);
    $.get('void 0').fail(failCallback);
  }

  function errorHandler(error) {
    console.error('Error message: ' + error.statusText);
  }

  $.get('data1.json').success(function(data) {
    getWaterflows(data, setWaterflow, errorHandler);
  }).fail(errorHandler);

}


/**
 * ajax with Promise
 */
function promiseAjax() {
  function get(url) {
    return new Promise(function(resolve, reject) {
      $.get(url).success(resolve).fail(reject);
    });
  }

  function getWaterflows(images) {
    // 返回设置了水印字符的images的promise
    return get('data2.json').then(function(waterflows) {
      return images.map(function(image, index) {
        result = {};
        waterflows.some(function(waterflow) {
          if(waterflow.imageId === index) {
            result.waterflow = waterflow.text;
            result.src = image;
            return true;
          }
        });
        return result;
      });
    }).catch(errorHandler);
  }

  function setWaterflow(image) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = image.src;

    return new Promise(function(resolve, reject) {
      img.onload = function () {
        var imgWidth = img.width;
        var imgHeight = img.height;
        canvas.width = imgWidth / 3;
        canvas.height = imgHeight / 3;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(123, 234, 12, 0.7)';
        ctx.font = '20px sans-serif';
        ctx.fillText(image.waterflow, canvas.width - (image.waterflow.length * 15), 90);
        $('#container').append(canvas);
        resolve();
      };
    });
  }

  function setWaterflows(images) {
    Promise.all(images.map(function(image) {
      setWaterflow(image)
        .then(getData)
        .then(doSometing)
        .catch(errorHandler);
    }));
  }

  function getData() {
    return get('data3.json');
  }

  function doSometing(data) {
    console.info('----------------------');
    console.info('Do something after image loading: ' + data.foo);
    return get('void 0');
  }

  function errorHandler(error) {
    console.error('Error message: ' + error.statusText);
  }

  get('data1.json')
    .then(getWaterflows)
    .then(setWaterflows)
    .catch(errorHandler);
}
// **** main ****
$(function() {
  $('#btn1').click(traditionalAjax);
  $('#btn2').click(promiseAjax);
});