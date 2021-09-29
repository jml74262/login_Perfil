$(document).ready(function () {
  $(function () {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      pager: false
    });
  });
  //posts
  var posts = [
    {
      title: "Los incendios forestales de California alcanzan el hogar de los árboles más grandes del mundo",
      date: "Publicado el dia " + moment().format("DD") 
      + " de " 
      + moment().format("MM") 
      + " del año " + moment().format("YYYY"),
      content: "El Parque Nacional de las Secuoyas, hogar de algunos de los seres vivos más grandes y longevos del planeta, es un área natural más amenazada por los estragos de la emergencia climática. Con los incendios Colony, Paradise y Walkers creciendo al sur del Parque, las secuoyas gigantes (el ser vivo más grande del mundo) enfrentan un panorama inédito: A pesar de que son uno de los árboles mejor adaptados al fuego (gracias a una corteza que alcanza más de 50 centímetros de grosor) y en ocasiones los pequeños incendios controlados resultan beneficiosos para la propagación de sus semillas contenidas en los conos, las condiciones extremas de los incendios de este verano en California están consumiendo a decenas de ejemplares de la especie. secuoyas incendios California Foto: Al Seib / Los Angeles Times El aumento de las llamas el fin de semana pasado provocó la imagen más icónica de los últimos incendios del verano en California: la base de General Sherman, el árbol de mayor volumen de todo el mundo, fue cubierta por un grupo de más de 300 bomberos con una fina capa de aluminio, con el fin de evitar que las llamas lo consuman en caso de que alcancen la zona. Con 2 mil toneladas de peso y 83.8 metros de altura, General Sherman es la atracción principal del Parque Nacional de las Secuoyas, ubicado a 260 kilómetros al norte de Los Angeles. Esta secuoya gigante tiene una circunferencia de 31 metros en su base y una placa que indica a sus visitantes que están ante el ser vivo de mayor biomasa en el planeta.",
      link:"https://www.ngenespanol.com/ecologia/incendios-forestales-california-secuoya-gigante/",
    },
    {
      title: "GALERÍA: la lava del volcán en La Palma arrasa con más de 180 viviendas a su paso",
      date: "Publicado el dia " + moment().format("DD")
      + " de " + moment().format("MM")
      + " del año " 
      + moment().format("YYYY"),
      content: "A 700 metros por hora, así avanza la enorme pared de lava del volcán en La Palma, consumiendo todo a su paso. La tarde del domingo 19 de septiembre, el volcán Cumbre Vieja ubicado en la isla de La Palma en Canarias, España, entró en erupción La primera explosión estuvo acompañada de una violenta expulsión de flujo piroclástico y columnas de humo, después de que un enjambre sísmico de casi 7,000 temblores delatara el aumento de la actividad volcánica en la parte sur de La Palma, una isla geológicamente joven y de origen volcánico.",
      link:"https://www.ngenespanol.com/el-mundo/galeria-continua-la-violenta-erupcion-del-nuevo-volcan-de-cumbre-vieja-en-la-palma-espana/",
    }, 
    {
      title: "La capa de ozono está sufriendo los efectos del hidrógeno molecular emitido por humanos",
      date: "Publicado el dia " + moment().format("DD") 
      + " de " 
      + moment().format("MM") 
      + " del año " + moment().format("YYYY"),
      content: "A pesar del daño que el hidrógeno molecular está generando en la atmósfera, pocos estudios abordan su comportamiento y consecuencias. El dióxido de carbono y el metano han antagonizado la lucha por preservar la capa de ozono. Éste es el recubrimiento natural con el que cuenta nuestro planeta para filtrar la radiación ultravioleta del Sol que, de otra manera, sería nociva para la vida como la conocemos. La capa ha sufrido agujeros en el pasado como consecuencia de la actividad humana; sin embargo, el hidrógeno molecular podría estar entre los actores más graves y había pasado desapercibido —hasta ahora.",
      link:"https://www.ngenespanol.com/ecologia/la-capa-de-ozono-esta-sufriendo-los-efectos-del-hidrogeno-molecular-emitido-por-humanos/",
    }, 
    // {
    //   title: "Titulo 3",
    //   date: "Publicado el dia " + moment().format("DD") 
    //   + " de " 
    //   + moment().format("MM") 
    //   + " del año " + moment().format("YYYY"),
    //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at placerat velit. Integer at sem ornare, pulvinar mi vestibulum, hendrerit eros. Maecenas posuere nulla lectus, et malesuada tortor feugiat non. Phasellus porttitor, odio a accumsan viverra, libero tellus imperdiet leo, et maximus tellus nunc quis libero. Maecenas nisl sapien, porttitor vitae leo vel, scelerisque pellentesque dui. Mauris eget diam a ligula consequat rutrum. Ut feugiat vulputate laoreet. Nulla imperdiet, tortor eget placerat feugiat, elit nisl euismod est, eu vulputate elit quam et orci. Integer condimentum id quam et sodales. In euismod metus ut ligula commodo ultricies. Vestibulum lorem dui, aliquet et leo nec, aliquam malesuada eros. Curabitur eu pharetra purus, sed tempus ex. Maecenas condimentum nisi at lectus elementum, quis ultricies sapien malesuada.",
    // }, 
  ];
  console.log(posts);
  //Recorrer el JSON para enviar al index.html

  posts.forEach((item,index)=>{
    var post = `<article class="post">
                  <h2>${item.title}</h2>
                  <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                  <a href=${item.link} class="button-more">Articulo completo</a>
                </article>`;
    // console.log(post);
    $("#posts").append(post);
  });

  //selector de temas
  var theme = $("#theme");
  
  $("#to-red").click(function(){
    theme.attr("href","css/red.css");
  });
  $("#to-green").click(function(){
    theme.attr("href","css/green.css");
  });
  $("#to-blue").click(function(){
    theme.attr("href","css/blue.css");
  });

//cuando login form haga una accion de submit
  

  $("#login form").submit(function(){
    let form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
    // alert(form_name);
    

  });

  //login LocalStorage
  var form_name = localStorage.getItem("form_name");
  
  if(form_name!=null && form_name !="undefined"){
    //si el nombre existe
    let about_parrafo = $("#about p");
    $("#about p").html("<b>Bienvenido" + " " +form_name +"</b>");
    about_parrafo.append("<br> <a href = '#' id = 'logout'>Cerrar Sesión</a>");
    
    $("#login").hide();

    $("#saludo").html("<b> Bienvenido " + form_name + "</b>")
    $("#saludo").append("<br> <a href = '#' id = 'logout'>Cerrar Sesión</a>");

    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    });
  }
  




});



