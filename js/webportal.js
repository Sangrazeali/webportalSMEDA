$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("#main_header").addClass("active1");
    $(".nav-link").addClass('active2');
    $(".other").addClass('active2');
    $(".login-register").addClass('active2');
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("#main_header").removeClass("active1");
    $(".nav-link").removeClass('active2');
    $(".login-register").removeClass('active2');
    $(".other").removeClass('active2');

  }
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("#main_header1").addClass("active1");
    $(".nav-link").addClass('active2');
    $(".other").addClass('active2');
    $(".login-register").addClass('active2');
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("#main_header1").removeClass("active1");
    $(".nav-link").removeClass('active2');
    $(".login-register").removeClass('active2');
    $(".other").removeClass('active2');

  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 450) {
    $(".aa").addClass("fadeInRight");

  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".aa").addClass("fadeInRight");
  }
});

// optional
$('#blogCarousel').carousel({
  interval: 5000
});

/* chart 1 */
google.charts.load('current', {
  'packages': ['line', 'corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Day');
  data.addColumn('number', 'SMEs Registered');
  data.addColumn('number', 'Queries Entered');

  data.addRows([
    [1, 37.8, 80.8],
    [2, 30.9, 69.5],
    [3, 25.4, 57],
    [4, 11.7, 18.8],
    [5, 11.9, 17.6],
    [6, 8.8, 13.6],
    [7, 7.6, 12.3],
    [8, 12.3, 29.2],
    [9, 16.9, 42.9],
    [10, 12.8, 30.9],
    [11, 5.3, 7.9],
    [12, 6.6, 8.4],
    [13, 4.8, 6.3],
    [14, 4.2, 6.2]
  ]);
  let a;
  var options = {
    width: a,
    height: 400,
    axes: {
      x: {
        0: {
          side: 'top'
        }
      }
    }
  };

  var chart = new google.charts.Line(document.getElementById('line_top_x'));

  chart.draw(data, google.charts.Line.convertOptions(options));

  var data = google.visualization.arrayToDataTable([
    ['Month', 'FBR', 'Customs', 'SMEDA', 'Income Tax', 'Excise', 'SNGPL'],
    ['', 165, 938, 522, 998, 450, 614.6],
    ['', 135, 1120, 599, 1268, 288, 682],
    ['', 157, 1167, 587, 807, 397, 623],
    ['', 139, 1110, 615, 968, 215, 609.4],
    ['', 136, 691, 629, 1026, 366, 569.6]
  ]);

  var options = {

    vAxis: {},
    hAxis: {

    },
    seriesType: 'bars',
    series: {
      5: {
        type: 'line'
      }
    }
  };
  if (screen.width <= 1015) {
    a = 200;
  }
  else
  {
    a=800
  }
  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);

}