google.charts.load('current', {'packages':['bar','corechart','geochart']});
google.charts.setOnLoadCallback(bilheteria);
google.charts.setOnLoadCallback(rendabilheteria);
google.charts.setOnLoadCallback(drawChartGenero);
google.charts.setOnLoadCallback(drawSeriesChart);
 google.charts.setOnLoadCallback(drawRegionsMap);


  function bilheteria() {
        var data = google.visualization.arrayToDataTable([
          ['Ano', 'Público filmes brasileiros', 'Público filmes estrangeiros', 'Preço médio do ingresso'],
          ['2011', 17687772, 125518802, 10],
          ['2012', 15654862, 130943514, 11],
          ['2013', 27789804, 121728465, 11],
          ['2014', 19058142, 136552287, 12],
          ['2015', 22485736, 150457506, 13]
        ]);
      

     /*   var options = {
          chart: {
            title: 'Público de filmes brasileiros X estrangeiros e sua media de ingressos',
            subtitle: 'Dados disponíveis apenas até 2015',
          }
        };*/

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data);
      }

    

     function rendabilheteria() {
        var data = google.visualization.arrayToDataTable([
          ['Ano', 'Renda filmes brasileiros', 'Renda filmes estrangeiros'],
          ['2011', 161487064, 1288510556],
          ['2012', 158105660, 1455916562],
          ['2013', 297072056, 1456128515],
          ['2014', 221853128, 1734056567],
          ['2015', 277679147, 2072482154]
        ]);
      

        var options = {
          chart: {
            title: 'Renda de filmes brasileiros X estrangeiros',
            subtitle: 'Dados disponíveis apenas até 2015',
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('columnchart_materialRenda'));

        chart.draw(data, options);
      }


       function drawChartGenero() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'animacao', 'Documentario', 'Ficcao'],
          ['2012', 2, 35, 46],
          ['2013', 2, 50, 77],
          ['2014', 4, 36, 74],
          ['2015', 0, 50, 79]
        ]);
        var csv = google.visualization.dataTableToCsv(data);
        console.log(csv);

        var options = {
          chart: {
            title: 'Filmes produzidos no Brasil por gênero',
            subtitle: 'Fontes: ANCINE / SADIS (Sistema de Acompanhamento da Distribuição em Salas de Exibição) e Filme B.',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_materialGenero'));

        chart.draw(data, options);
      }

      function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
        ['UF', 'Complexos', 'salas'],
        ['AC',    1,             4,  ],
        ['AL',    6,             29,      ],
        ['AM',    8,               63,     ],
        ['AP',    4,             17,      ],
        ['BA',   27,              98,        ],
        ['CE',    22,             92,       ],
        ['DF',    15,             87,      ],
        ['ES',   18,              69,      ],
        ['GO',    29,              106,      ],
        ['MA',    9,              46,     ],
        
        ['MG',    76,              255,     ],
        ['MS',    7,             29,     ],
        ['MT',    10,              42,     ],
        ['PA',    18,              67,     ],
        ['PB',    9,              37,     ],
        ['PE',    20,              97,     ],
        ['PI',    4,              26,     ],
        ['PR',    43,              175,     ],
        ['RJ',    88,              358,     ],
         ['RN',    5,              31,     ],
          ['RO',    8,              15,     ],
           ['RR',    3,              14,     ],
            ['RS',    52,              164,     ],
             ['SC',    35,              127,     ],
              ['SP',    237,              1016,     ],
               ['TO',    4,              14,     ]
      ]);

     var options = {
          curveType: 'function',
          legend: { position: 'bottom' }
        };
      var chart = new google.visualization.AreaChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }



      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['País de produção', 'Quantidade de filmes lançados'],
          ['United States', 146],
          ['Brazil', 129],
          ['France', 45],
          
          ['Germany', 8],
          
        
          ['Canada', 3],
          
          ['RU', 10]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }