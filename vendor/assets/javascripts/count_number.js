


function update_counts($tr) {
  var count = $tr.find('.selectedCell').length;
  $tr.find('.tdoutput').html(count + " selected");
}