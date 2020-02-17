$("#cat1").click(function () {
    $('.tovar-kanc').removeClass('plaha-line')
    $('.tovar-kanc').removeClass('plaha-smal-line')
    return false;

  });

$("#cat2").click(function () {
    $('.tovar-kanc').removeClass('plaha-line')
    $('.tovar-kanc').removeClass('plaha-smal-line')
    $('.tovar-kanc').addClass('plaha-line');
    return false;
  });

$("#cat3").click(function () {
    $('.tovar-kanc').removeClass('plaha-line')
    $('.tovar-kanc').removeClass('plaha-smal-line')
    $('.tovar-kanc').addClass('plaha-smal-line');
    return false;
  });