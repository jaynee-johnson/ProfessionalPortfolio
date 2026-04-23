var getCheckBoxes = [];
var getClicked = [];
var previousStateAllChecked = false; //if you start with all boxes checked

var toggleAllCheckboxes = function (checkedValue) {
		var checkboxes = document.getElementsByName("listItem");
		checkboxes.forEach(function (cb) {
				cb.checked = checkedValue;
			});
		previousStateAllChecked = true;
	};

var validateToggleAll = function () {
		if (previousStateAllChecked === true) {
			var toggleAllBox = document.getElementById("ToggleAll");
			toggleAllBox.checked = false;
		}
	};

var clickHandlerCL = function (event) {
		var filter = event.target.getAttribute("DDchecklist");
		if (!filter) {
			return;
		} else {
			//console.log("Filter: " + filter + " " + event.target.checked);

			if (filter == "ToggleAll") {
				toggleAllCheckboxes(event.target.checked);
				getClicked = Array.from(document.querySelectorAll("div.forFilter"));
			} else {
				getClicked = Array.from(
					document.querySelectorAll('#DDchecklist [filterList="' + filter + '"]')
					);
				validateToggleAll();
			}

			//console.log(getCheckBoxes);

			//If checkbox is checked, show list item
			if (event.target.checked) {
				getClicked.forEach(function (cl) {
						cl.removeAttribute("hidden");
					});
			} else {
				getClicked.forEach(function (cl) {
						cl.setAttribute("hidden", "true");
					});
			}
		}
	};

document.documentElement.addEventListener("click", clickHandlerCL, false);