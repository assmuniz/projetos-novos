//e --> enter  chave da encriptação
//o --> ober   chave da encriptação
//i --> imes   chave da encriptação
//a --> ai     chave da encriptação
//u --> ufat   chave da encriptação


   function encriptar() {
      var texto = document.getElementById("input-texto").value
      // i e para que afete tanto maisculas quanto minusculas
      // g para toda a linha e oração
      // m e para que afete todas as linhas do paragrafo
      var txtCifrado = texto.replace(/e/igm,"enter");
      var txtCifrado = txtCifrado.replace(/o/igm,"ober");
      var txtCifrado = txtCifrado.replace(/i/igm,"imes");
      var txtCifrado = txtCifrado.replace(/a/igm,"ai");
      var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

      document.getElementById("imgLupa").style.display = "none";
      document.getElementById("texto").style.display = "none";
      document.getElementById("texto2").innerHTML = txtCifrado;
      document.getElementById("copiar").style.display ="show";
      document.getElementById("copiar").style.display = "inherit";
    }

    function desencriptar() {
      var texto = document.getElementById("input-texto").value
      // i e para que afete tanto maisculas quanto minusculas
      // g para toda a linha e a oração
      // m e para que afete todas as linhas do paragrafo
      // efetuar a inversão da chave para descriptografar
      var txtCifrado = texto.replace(/enter/igm,"e");
      var txtCifrado = txtCifrado.replace(/ober/igm,"o");
      var txtCifrado = txtCifrado.replace(/imes/igm,"i");
      var txtCifrado = txtCifrado.replace(/ai/igm,"a");
      var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
      document.getElementById("imgLupa").style.display = "none";
      document.getElementById("texto").style.display = "none";
      document.getElementById("texto2").innerHTML = txtCifrado;
      document.getElementById("copiar").style.display ="show";
      document.getElementById("copiar").style.display = "inherit";
    }

    function copy() {

	  var caixaTextoDois = document.querySelector("#texto2");
	  caixaTextoDois.select();
	  document.execCommand("copy");
	  alert("Copiado!");
    }

    