console.log("hello DS10! ✨✨✨");

let viz;

const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
//create a variable to store the dashbaord options
const options = {
  device: "desktop",
  height: "600px",
  width: "1200px",
};
//Create a variable to stire the viz container
const vizContainer = document.getElementById("vizContainer");

//Create function that shows the dashboards
function initViz() {
  console.log("hello");
  viz = new tableau.Viz(vizContainer, url, options);
}

const showVizButton = document.getElementById("showViz");

const hideVizButton = document.getElementById("hideViz");

function showViz() {
  viz.show();
}

function hideViz() {
  viz.hide();
}

showVizButton.addEventListener("click", showViz);

hideVizButton.addEventListener("click", hideViz);
const exportPDFbutton = document.getElementById("exportPDF");
const exportPPTbutton = document.getElementById("exportPPT");

function exportPDFfunction() {
  viz.showExportPDFDialog();
}
function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}
exportPDFbutton.addEventListener("click", exportPDFfunction);
exportPPTbutton.addEventListener("click", exportPPTfunction);

function getRangeValues() {
  //getvalues
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  //getworkbookobject

  const workbook = viz.getWorkbook();
  const activesheet = workbook.getActiveSheet();
  const sheets = activesheet.getWorksheets();
  const sheetToFilter = sheets[1];
  sheetToFilter.applyRangeFilterAsync("SUM(Sales)", {
    min: minValue,
    max: maxValue,
  });
}

document
  .getElementById("applybutton")
  .addEventListener("click", getRangeValues);

document.addEventListener("DOMContentLoaded", initViz);
