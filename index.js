// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

//Lanzar un modal autmáticamente
$(document).ready(function () {
  $("#IdDelModal").modal("show");
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
