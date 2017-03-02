google.charts.load('current', {'packages':['bar','corechart','geochart']});
google.charts.setOnLoadCallback(bilheteria);
google.charts.setOnLoadCallback(rendabilheteria);
google.charts.setOnLoadCallback(drawChartGenero);
google.charts.setOnLoadCallback(drawSeriesChart);
 google.charts.setOnLoadCallback(drawRegionsMap);
 google.charts.setOnLoadCallback(rankingEmpresasExibidoras);
 google.charts.setOnLoadCallback(rankingEmpresasDistribuidoras)
 
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
        // Quantidade de títulos lançados por país de origem (2009-2015)
        var data = google.visualization.arrayToDataTable([
          ['País de produção', 'Quant de filmes lançados'],
          ['United States', 134],
          ['Brazil', 129],
          ['France', 46],
          ['RU', 23],
          ['Germany', 8],
          ['argentina', 4],
          ['italy', 3],
          ['spain', 4],
          ['Canada', 1],
          ['japan', 6]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }


  function rankingEmpresasExibidoras() {
        var data = google.visualization.arrayToDataTable([
          ['Empresa', 'Total de salas'],
          ['cinemark', 592],
          ['cinepolis',341],
          ['GSR',186],
          ['Araujo',138],
          ['Cinesystem',135],
          ['UCI',109],
          ['Moviecom',104],
          ['Arcoplex',76],
          ['Cineflix',74],
          ['Cineart',69],
          ['UCI/GSR',62],
          ['SERCLA',61],
          ['Espaço',56],
          ['CenterPlex',54],
          ['Play', 53],
          ['Lumiere',48],
          ['Cinespaço',38],
          ['Multicine',38]
        ]);

        var options = {
          pieHole: 0.4,
          height:500,
          height:500,
          width: 900,
        };

        var chart = new google.visualization.PieChart(document.getElementById('rankingEmpresasExibidoras'));
        chart.draw(data, options);
      }


      function rankingEmpresasDistribuidoras() {
            //Ranking das distribuidoras por quantidade de títulos lançados (2009-2015)
            var data = google.visualization.arrayToDataTable([
            ['Distribuidora', '2012', '2013', '2014', '2015'],
            ['Imovision',  34,      37,         29,             43],
            ['Imagem',  29,      30,        29,             13],
            ['Paris',  31,      32,        26,             27],
            ['Sony',  19,      14,        13,             14],
            ['Fox',  15,      15,         19,             26]
          ]);

          var options = {
            //title : 'Monthly Coffee Production by Country',
            //vAxis: {title: 'Cups'},
            //hAxis: {title: 'Month'},
            seriesType: 'bars',
            series: {5: {type: 'line'}},
             height:500,
            width: 900,
          };

        var chart = new google.visualization.ComboChart(document.getElementById('rankingEmpresasDistribuidoras'));
        chart.draw(data, options);
    }