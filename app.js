console.log('spark');
// https://plotly.com/javascript/plotly-fundamentals/
/*

https://plotly.com/javascript/responsive-fluid-layout/
https://plotly.com/javascript/uirevision/
https://plotly.com/javascript/react/
https://dash.plotly.com/?/
https://plotly.com/javascript/colorscales/
https://plotly.com/javascript/3d-axes/
https://plotly.com/javascript/layout-template/
https://plotly.com/javascript/static-image-export/
https://plotly.com/javascript/3d-hover/
https://plotly.com/javascript/configuration-options/
https://plotly.com/javascript/reference/

*/

var graphDiv = document.getElementById('id_of_the_div')

var data = [{
  x: [1999, 2000, 2001, 2002],
  y: [10, 15, 13, 17],
  type: 'scatter'
}];

var layout = {
  title: 'Sales Growth',
  xaxis: {
    title: 'Year',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Percent',
    showline: false
  }
};
Plotly.newPlot(graphDiv, data, layout);

var dataRetrievedLater = graphDiv.data;
var layoutRetrievedLater = graphDiv.layout;