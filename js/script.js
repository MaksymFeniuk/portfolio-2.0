var polygon = document.getElementById("polygon");
			if(polygon) {
				polygon.addEventListener("click", function () {
						var anchor = document.querySelector("[data-scroll-to='projectsText']");
						if(anchor) {
							var offset = -100; // Adjust this value to stop scrolling higher
							var position = anchor.getBoundingClientRect().top + window.pageYOffset + offset;
							window.scrollTo({"top": position, "behavior": "smooth"});
						}
				});
			}
			
			var polygon1 = document.getElementById("polygon1");
			if(polygon1) {
				polygon1.addEventListener("click", function () {
						var anchor = document.querySelector("[data-scroll-to='afd221668cb30908ca591c407115aImage']");
						if(anchor) {
							var position = anchor.getBoundingClientRect().bottom + window.pageYOffset; // Scroll to the bottom of the element
							window.scrollTo({"top": position, "behavior": "smooth"});
						}
				});
			}
			
			var whiteBackground = document.querySelector(".portfolio-child");
			if(whiteBackground) {
				var offset = -100; // Adjust this value to stop scrolling higher
				var position = whiteBackground.getBoundingClientRect().top + window.pageYOffset + offset;
				window.scrollTo({"top": position, "behavior": "smooth"});
			}

			var polygon2 = document.getElementById("polygon2");
    if (polygon2) {
        polygon2.addEventListener("click", function () {
            window.scrollTo({ "top": 0, "behavior": "smooth" }); // Scroll to the very top of the page
        });
    }