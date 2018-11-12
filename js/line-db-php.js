$(document).ready(function(){
  $.ajax({
    url: "http://localhost/michart/api/data.php",
    type: "GET",
    success: function(data){
      console.log(data);
      let score={
        TeamA : [],
        TeamB : []
      };
      let len = data.length;
      for(let i=0;i<len;i++){
        if(data[i].team == "TeamA"){
            score.TeamA.push(data[i].score);
        }
        else if(data[i].team == "TeamB"){
          score.TeamB.push(data[i].score);
        }
      }
      console.log(score);
      let ctx = $("#line-chartcanvas");
      let dataChart = {
       labels: ["match1","match2","match3","match4","match5"],
       datasets: [
         {
           label: "Puntos Equipo A",
           data : score.TeamA,
           backgroundColor: "blue",
           borderColor: "lightblue",
           fill: false,
           lineTension: 0,
           pointRadius: 5
         },
         {
          label: "Puntos Equipo B",
          data : score.TeamB,
          backgroundColor: "green",
          borderColor: "lightgreen",
          fill: false,
          lineTension: 0,
          pointRadius: 5
        }
       ]    
      };
      let options = {
        title: {
          display: true,
          position: "top",
          text: "Gráfico de Líneas",
          fontSize: 18,
          fontColor: "#333"
        },
        legend : {
          display: true,
          position: "bottom"
        }
      };
      let chart = new Chart(ctx, {
        type : "bar",
        data : dataChart,
        options: options
      });
    },
    error: function(data){
      console.log(data);
    }
  })
})