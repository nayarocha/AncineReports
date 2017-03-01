 // Load the Visualization API and the piechart package.
google.charts.load('current', {'packages':['table','corechart','bar']});
google.charts.load('current', {'packages':['table']});
      
    // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);  
  google.charts.setOnLoadCallback(drawTable);
  google.charts.setOnLoadCallback(drawTableNacionais);
  google.charts.setOnLoadCallback(drawChartNacionais);
  google.charts.setOnLoadCallback(bilheteriaPortugal);
  google.charts.setOnLoadCallback(bilheteriaFrança);

      
    function drawChart() {
      var jsonData = $.ajax({
          url: "getData.php",
          dataType: "json",
          async: false
          }).responseText;
          
      // Create our data table out of JSON data loaded from server.
      var data = new google.visualization.DataTable(jsonData);

      
      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, {width: 400, height: 240});
    }
    


     function drawTable() {
        var jsonData = $.ajax({
          url: "getData.php",
          dataType: "json",
          async: false
          }).responseText;
       
        var data = new google.visualization.DataTable(jsonData);
       

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }


       function drawChartNacionais() {
        var jsonData = $.ajax({
            url: "http://reports.linkest.dev/project/data/rankingNacional.json",
            dataType: "json",
            async: false
            }).responseText;
          
        // Create our data table out of JSON data loaded from server.
         var data = new google.visualization.DataTable(jsonData);

      
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div_nacionais'));
        chart.draw(data, {width: 400, height: 240});
    }


     function drawTableNacionais() {
        var jsonData = $.ajax({
          url: 'http://reports.linkest.dev/project/data/rankingNacional.json',
          dataType: "json",
          async: false
          }).responseText;
       
        var data = new google.visualization.DataTable(jsonData);
       

        var table = new google.visualization.Table(document.getElementById('table_div_nacionais'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }


  
       function bilheteriaPortugal() {
          var data = google.visualization.arrayToDataTable([
            ['Título', 'Publico acumulado'],
            ['Tropa de Elite 2', 52298],
            ['José e Pilar', 27236],
            ['Tabu',23571],
            ['Ensaio Sobre a Cegueira', 16737],
            ['Capitães da Areia', 11691]
          ]);

          var options = {
            chart: {
              height:500,
              width: 900,
            pieHole: 0.4,
            }
          };

          var chart = new google.visualization.PieChart(document.getElementById('bilheteriaPortugal'));

          chart.draw(data, options);
      }


      function bilheteriaFrança() {
          var data = google.visualization.arrayToDataTable([
            ['Título', 'Publico acumulado'],
            ['Na estrada - On the Road', 374996],
            ['Que Horas Ela Volta?', 160944],
            ['Trash', 124753],
            ['O Menino e o Mundo',74600],
            ['Linha De Passe', 67.167]
          
          ]);

          var options = {
            chart: {
            
             height:500,
            width: 900,
           pieHole: 0.4,
            }
          };

          var chart = new google.visualization.PieChart(document.getElementById('bilheteriaFrança'));

          chart.draw(data, options);
      }