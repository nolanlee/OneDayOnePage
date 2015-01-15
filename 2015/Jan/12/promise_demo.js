/**
 * ajax whth WTF
 */

function traditionalAjax() {
  // traditional function
  function setWaterflow(imageSrc, text, callback) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = imageSrc;
    img.onload = function () {
      var imgWidth = img.width;
      var imgHeight = img.height;
      canvas.width = imgWidth / 3;
      canvas.height = imgHeight / 3;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(123, 234, 12, 0.7)';
      ctx.font = '20px sans-serif';
      ctx.fillText(text, canvas.width - (text.length * 15), 90);
      document.body.appendChild(canvas);

      callback();
    }
  }

  /**
   * traditional callback
   */
  // get image list
  $.get('data1.json').success(function(images) {
    // get waterflow list
    $.get('data2.json').success(function(waterflows) {
        //
        images.forEach(function(imageSrc, index) {
          waterflows.some(function(waterflow) {
            if(waterflow.imageId === index) {
              // set waterflow
              setWaterflow(imageSrc, waterflow.text, function() {
                // do someting after setting water flow
                $.get('data3.json').success(function(data) {
                  console.info('----------------------')
                  console.info('Do something after image loading: ' + data.foo);
                  // callback of callback
                  $.get('void0').fail(function(error) {
                    console.error('Error message: ' + error.statusText);
                  });
                });
              });
              return true;
            }
          });
        });
    });
  });
};

traditionalAjax();