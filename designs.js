$(document).ready(function() {
	// Select color input
	let gridColor = '#000000';

	$('#colorPicker').change(function() {
		gridColor = $(this).val();
	});

	$('#pixel_canvas').click(function(event) {
		$(event.target).css('background-color', gridColor); // color only the tile the user clicked on
	});

	// Select size input
	let gridHeight = $('#input_height').val();
	let gridWidth = $('#input_width').val();

	$('#input_height').change(function() {
		gridHeight = $(this).val();
	});

	$('#input_width').change(function() {
		gridWidth = $(this).val();
	});

	// When size is submitted by the user, call makeGrid()
	$('#button_submit').click(function(event) {
		makeGrid();
		event.preventDefault(); // prevents console from reseting
	});

	function makeGrid() {
		// Your code goes here!
		$('tr').remove(); // clear the grid

		for (let r = 0; r < gridHeight; r++) {
			$('#pixel_canvas').append('<tr>');

			for (let c = 0; c < gridWidth; c++) {
				$('tr').last().append('<td></td>'); // always insert data at the last <tr>
			}

			$('#pixel_canvas').append('</tr>');
		}
	}
});
