window.onload = app();
function app(){


	
	
	function btnCreateYT(selectedElement){
		//btn create
		const btn = document.createElement('button');
		if (selectedElement == "#masthead-container") {
			btn.innerHTML = "<img src='https://icomoon.io/iconsabf18a1/15/63.svg' >";
		} else {
			btn.innerHTML = "<img src='https://icomoon.io/iconsabf18a1/9/49.svg' >";
		}
		btn.id = "pin-btn";
		//btn style
		btn.setAttribute("style","background:gray;");
		btn.style.color = "white";
		btn.style.border = "0px"
		btn.style.borderRadius = "3px";
		btn.style.fontSize = "15px"
		btn.style.width = "25px"
		btn.style.height = "25px"
		btn.style.padding = "0px"
		btn.style.top = "0px"
		btn.style.left = "0px"
		btn.style.position = "fixed"
		btn.style.zIndex = '2';

		// youtube
		if (selectedElement == "#masthead-container"){
			document.querySelector('ytd-app').style.zIndex = '1'; // go to back 

			const navYoutube = document.querySelector(selectedElement);
			btn.addEventListener('click', ()=>{			
				if (navYoutube.style.position == "absolute") {
					navYoutube.style.position = "";
					document.querySelector('#pin-btn').innerHTML = "<img src='https://icomoon.io/iconsabf18a1/15/63.svg' >";					
				} else { 	
					navYoutube.style.position = "absolute";
					document.documentElement.scrollTop = 56;
					document.querySelector('#pin-btn').innerHTML =  "<img src='https://icomoon.io/iconsabf18a1/15/192.svg' >";
				}
			})	
		}		
		
		// udemy
		if (selectedElement == "img[alt='Udemy']"){				
			const navUdemy = document.querySelector(selectedElement);
			btn.addEventListener('click', ()=>{			
				document.documentElement.scrollTop = 56;
			})	
		}
		return btn
	}
	
	//YouTube ===========================================
	if (document.querySelector("#start") != null){
		document.querySelector("body")
		.appendChild(btnCreateYT("#masthead-container"));		
	}	
	//Udemy ============================================
	setTimeout(()=>{
		const element = document.querySelector("img[alt='Udemy']");
		if (element != null){
			document.querySelector('body')
			.appendChild(btnCreateYT("img[alt='Udemy']"))			
		}// /if
	},1000);// /setTimeout


}	// /app
	
