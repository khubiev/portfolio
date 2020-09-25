$( document ).ready(function() {
		
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.fas")
        .toggleClass('fa-caret-down fa-caret-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

		

   
   

	
});
	
