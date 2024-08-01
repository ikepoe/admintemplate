// Start Rright Navbar
const getsitesettings = document.getElementById('sitesettings');

getsitesettings.addEventListener('click',function(){
    document.body.classList.toggle('show-nav');
});
// End Rright Navbar


// start Navbar
        // strat top navbar
            function dropbtn(e){
                // console.log(e.target);
                // console.log(e.target.parentElement.nextElementSibling);
                e.target.parentElement.nextElementSibling.classList.toggle("show");
            }

        // end top navbar
// end Navbar


$(document).ready(function(){
    // start Navbar
        // strat top navbar
            $(".sidebarlinks").click(function(){
                $(".sidebarlinks").removeClass("currents");
                $(this).addClass("currents");
            });
         // end top navbar
     // end Navbar
});


// start Gauge area

var gaugeurs= new JustGage({
    id: "gaugeusers", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugecus = new JustGage({
    id: "gaugecoustomers", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugeemps = new JustGage({
    id: "gaugeemployees", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});

var gaugeinvs = new JustGage({
    id: "gaugeinvesters", // the id of the html element
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6
});


// update the value randomly
setInterval(() => {
    gaugeurs.refresh(Math.random() * 100);
    gaugecus.refresh(Math.random() * 100);
    gaugeemps.refresh(Math.random() * 100);
    gaugeinvs.refresh(Math.random() * 100);
}, 5000)

// start Gauge area


// Start expense area
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
      datasets: [{
      label: '# of Votes',
      data: [12, 15, 19],
      borderWidth: 1
    }]
  },
  options: {
      }
});
// End expense area

// Start Earning Area
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Sale Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

// End Earning Area

//Start Footer
const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;

//End Footer