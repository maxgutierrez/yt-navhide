window.onload = app();
function app(){
	
	function btnCreate(){
		//btn create
		const btn = document.createElement('button');
		btn.innerText = "⬆";
		//btn style
		btn.setAttribute("style","background:red;");
		btn.style.color = "white";
		btn.style.border = "0px"
		btn.style.borderRadius = "3px";
		btn.style.fontSize = "15px"
		btn.addEventListener('click', ()=>{
			document.documentElement.scrollTop = 56;
		})	
		return btn
	}
	
	//YouTube ===========================================
	if (document.querySelector("#start") != null){
		const navYoutube = document.querySelector("#masthead-container");
		const leftHeader = document.querySelector("#start");
		leftHeader.appendChild(btnCreate());
		navYoutube.style = "position:absolute";
	}	
	//Udemy ============================================
	setTimeout(()=>{
		if (document.querySelector(".header--course-details--3Swxk") != null){
			const navUdemy = document.querySelector(".header--course-details--3Swxk");
			navUdemy.appendChild(btnCreate())			
		}// /if
	},1000);// /setTimeout


}	// /app
	
