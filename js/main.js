$(document).on('ready',function(){
var procesos = [];

  $('#add').on('click',function(){
    if (!$('#form').hasClass('formulario')) {

      $('#form').removeClass('hide');
    $('#form').addClass('formulario');
    $('#add').removeClass('icon');
    $('#add').addClass('hide');
  }
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
$('#go').on('click',function(){
  console.log('si funciona!');
  console.log(procesos);
  switch ($('#seleccion').val()) {
    case "fifo":
      procesos = fifo(procesos);
      break;
      case "lifo":
        procesos = lifo(procesos);
        break;
        case "prioridad":
          procesos = priority(procesos);
          break;
          case "sjf":
          procesos = sjf(procesos);
            break;
    default:
  }
  console.log(procesos);
  printnew(procesos);
});



function fifo(p){
    for (var i = 0; i < p.length; i++) {
      if (p[i].id>p[i+1].id) {
        var aux = p[i];
        p[i]=p[i+1];
        p[i+1]=aux;
      }
    }
    return p;
  }

  function lifo(p){
    return p;
  }

function prioridad(p){
  for (var i = 0; i < p.length; i++) {
    if (p[i].prior<p[i].prior) {
    var aux = p[i];
    p[i] = p[i+1];
    p[i+1] = aux;
    }
  }
  return p;
}

function sjf(p){
  for (var i = 0; i < p.length; i++) {
    if (p[i].quantum<p[i].quantum) {
    var aux = p[i];
    p[i] = p[i+1];
    p[i+1] = aux;
    }
  }
  return p;
}

$("input[name=Iniciar]").on('click',function(){
  $('#start').removeClass('hide');
  $('#start').addClass('start');
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
});
