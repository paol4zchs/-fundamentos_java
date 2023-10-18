function java(){
  const texto = document.querySelector("h5");
  const descricao = document.querySelector("h6")
  const imagem = document.querySelector("img");
  const valor = document.querySelector('#valor').value;
 
 if((valor=="Objeto") ||(valor=="objeto")){
      texto.innerHTML = "Objetos em java";
      imagem.setAttribute("src","sos/objeto.jpg");
      imagem.setAttribute("width","500px");
      descricao.innerHTML="O que é Objeto? Um objeto é um elemento computacional que representa, no domínio da solução, alguma entidade (abstrata ou concreta) do domínio de interesse do problema sob análise. Objetos similares são agrupados em classes.No paradigma de orientação a objetos, tudo pode ser potencialmente representado como um objeto. Sob o ponto de vista da programação, um objeto não é muito diferente de uma variável no paradigma de programação convencional. "
  }

  else if((valor=="Classe") || (valor=="classe") ){
      texto.innerHTML = "Classe em java";
      imagem.setAttribute("src","sos/classe.jpg");
      imagem.setAttribute("width","500px");
      descricao.innerHTML="O que é Classe? Uma classe é um gabarito para a definição de objetos. Através da definição de uma classe, descreve-se que propriedades -- ou atributos -- o objeto terá.Além da especificação de atributos, a definição de uma classe descreve também qual o comportamento de objetos da classe, ou seja, que funcionalidades podem ser aplicadas a objetos da classe. Essas funcionalidades são descritas através de métodos."
  }


}








function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }