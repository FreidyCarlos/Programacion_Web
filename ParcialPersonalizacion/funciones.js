/*-----------------------------------------CALCULADORA----------------------------------------------------------*/
// pego os elementos li e div input
// SACADA DE https://github.com/dougjuliao/Calculadora-javascript/commit/6018b96cc4b8bc4489ac9d37c0c1741faf386fcf
var btn 	  = document.querySelectorAll(".key li"),
	input 	  = document.querySelector(".input-valor"),
	operador  = document.querySelectorAll(".operador");

// Percorro o array para usar todas as informações

for(var i = 0; i < btn.length; i++){
	btn[i].addEventListener('click',function(){
		var btnVal 	 = this.innerHTML,
			inputVal = input.innerHTML;
		//console.log(btnVal);

		// crio um clear caso o c for clicado
		switch (btnVal){
			case "c":
				input.innerHTML = "";
				break;
			case "=":
				// Crio a variável de equação aqui eu utilizo a função eval do javascript
				var equacao = inputVal;

				if(equacao){
					input.innerHTML = eval(equacao);
				}
				break;
			default:
				input.innerHTML += btnVal;
				break;	
		}

	});
}