$(document).on('ready',function(){
var procesos = [];

  $('#add').on('click',function(){
    $('#note').fadeOut("fast");
    $('#form').fadeTo('fast',1);
  });
var x=0;
  $(form).submit(function(e){
    var name = $("input[name=name]").val();
    var quantum = $("input[name=quantum]").val();
    var prior = $("input[name=prioridad]").val();
    procesos[x]= {'nombre':name,'quantum':quantum,'prioridad':prior,'id':x,'estado':"En espera"};
    $('#table').removeClass('hide');
    $('#table').addClass('plistable');
    $('.tablew').empty();
    $('.tablew').append('<tr id="row"><th>Nombre</th><th>Duracion</th><th>Prioridad</th><th>Estado</th></tr>');
    print(procesos);
    x++;
    e.preventDefault();

  });


function fifo(p){

    for (var i = 0; i < p.length; i++) {
    for(var j=0; j < p.length - 1; j++){
     if (p[j].id > p[j + 1].id) {
       var a = p[j];
       p[j]= p[j+1];
       p[j + 1] = a;
      }
    }
   }
    return p;
  }

  function lifo(p){

      for (var i = 0; i < p.length; i++) {
      for(var j=0; j < p.length - 1; j++){
       if (p[j].id < p[j + 1].id) {
         var a = p[j];
         p[j]= p[j+1];
         p[j + 1] = a;
        }
      }
     }
    return p;
  }

function prioridad(p){
    for (var i = 0; i < p.length; i++) {
    for(var j=0; j < p.length - 1; j++){
     if (p[j].prioridad > p[j + 1].prioridad) {
       var a = p[j];
       p[j]= p[j+1];
       p[j + 1] = a;
      }
    }
   }
  return p;
}

function sjf(p){

  for (var i = 0; i < p.length; i++) {
  for(var j=0; j < p.length - 1; j++){
   if (p[j].quantum > p[j + 1].quantum) {
     var a = p[j];
     p[j]= p[j+1];
     p[j + 1] = a;
    }
  }
 }
  return p;
}

$("input[name=Iniciar]").on('click',function(){
  $('#seleccion').fadeTo('fast',1);
  $('#start').fadeTo('fast',1);
    $('#start').addClass('hei');
});



function print(p){
  for (var i = 0; i < p.length; i++) {
    $('.tablew').append('<tr><td>'+p[i].nombre+'</td><td>'+p[i].quantum+'</td><td>'+p[i].prioridad+'</td><td>'+p[i].estado+'</td></tr>');
  }
}
function printnew(p){
  $('.tablew').empty();
  $('.tablew').append('<tr id="row"><th>Nombre</th><th>Duracion</th><th>Prioridad</th><th>Estado</th></tr>');
  print(p);
}

$('#go').on('click',function(){
  switch ($('#seleccion').val()) {
    case "fifo":
    procesos = fifo(procesos);
    break;
    case "lifo":
    procesos = lifo(procesos);
    break;
    case "priority":
    procesos = prioridad(procesos);
    break;
    case "sjf":
    procesos = sjf(procesos);
    break;
    default:
  }
  printnew(procesos);
  $('.tablep').fadeTo('fast',1);
  //
  // $('#quantump').animateNumber({
  //   number:300
  // });
  printProcess(procesos);

});
function printProcess(p){
  var name = p[0].nombre;
  $('#nombrep').html(name);
  var time = p[0].quantum;
  for (var i = 0; i < time; i++) {
    $('#quantump').html(i);
  }
}

});
