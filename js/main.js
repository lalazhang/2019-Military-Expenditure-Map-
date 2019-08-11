  /* 2. Tabletop.js */
 var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1qLvXZOBl4MSW_ochTYsuquadtk0_G8H25E5IOyQfDww/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }
  //var p1 = document.querySelector(".p1");
  //var p2 = document.querySelector(".p2")
  function showInfo(data, tabletop) {
   alert('Countries with military expenditure less than a billion are not demonstrated') //command+/ to comment out
    console.log(data);
    //data.forEach(function(e){
      /*p1 and p2 has to appear in html before refering the main.js*/
    	//p1.innerHTML = p1.innerHTML + e.CountryName + " ";
    	//p2.innerHTML = p2.innerHTML + e.millitaryExpenditure +" "; 

     drawRegionsMap(data);

    
    
    
    }

  window.addEventListener('DOMContentLoaded', init)


  /* 1. google charts*/
  google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap(sheet) {

        var array = [['Country', 'Military Expenditure in BIllion']];
        var array1 = [];

        sheet.forEach(function(e){
          array.push([e.CountryName,Number(e.militaryExpenditure)]);
        })
         console.log(array);


         array.forEach(function(e){
          array1.push([e[0],e[1]]);
        })
         for ( var i=0; i<2;i++)
          {
            array1.pop();
          }
         console.log(array1);

        var data = google.visualization.arrayToDataTable( array );
        var data1 = google.visualization.arrayToDataTable( array1 );
        
        console.log(data);


        var options = {

        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        var chart1 = new google.visualization.GeoChart(document.getElementById('regions_div1'));

        chart.draw(data, options);
        chart1.draw(data1, options);
      }




      