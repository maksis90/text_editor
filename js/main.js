'use strict';

(function(){

	var text = document.getElementById("text"),
		origin = document.getElementById("origin");

	addEventListener("keydown",function() {
		// save
		if (event.keyCode == 83 && event.ctrlKey) {
            // console.log('ctrl+s');
            text.style.display = "";
            origin.style.display = "block";
            origin.textContent = text.value;

		}
		// edit
		if (event.keyCode == 69 && event.ctrlKey) {
            //  console.log('ctrl+e');
			text.style.display = "block";
            origin.style.display = "none";
            text.value = origin.textContent;
            text.focus();
			}
		// cancel
        if (event.keyCode == 27) {
            // console.log('esc');
			text.style.display = "none";
			origin.style.display = "block";

        }

	});
})();


