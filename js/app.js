/**
 * Abrimos la ventana modal para crear un nuevo elemento.
 * We open a modal window to create a new element.
 * @returns {undefined}
 */

/*  function newCbProductor(){
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });
  }
  function newDerecho(){
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });
  }
  function newMineral(){
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });
  }*/
/**
 * Abrimos la ventana modal para crear un nuevo elemento.
 * We open a modal window to create a new element.
 * @returns {undefined}
 */
function newCbProductor(){
    openCbProductor('new', null, null,null);
}

function newCbDerecho(){
    openCbDerecho('new', null, null, null);
}

function newCbMineral(){
    openCbMineral('new',null,null);
}

function newCbEstado(){
    openCbEstado('new',null,null);
}

function newCbCantera(){
    openCbCantera('new',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
}
/**
 * Abrimos la ventana modal teniendo en cuenta la acción (action) para
 * utilizarla como creación (Create), lectura (Read) o actualización (Update).
 * We opened the modal window considering the action (action) to use
 * as creation (Create), reading (Read) or upgrade (Update).
 */

 function openEditCantera(id, codificacion, partido, derecho, secuencia, expte, caracteristica, expediente, anio,
   nombre,mineral,titular,estado,productor,localidad,nomenclatura,reservas,unidad,sector) {
   document.formEdit.id.value = id;
   document.formEdit.codificacion.value = codificacion;
   document.formEdit.partido.value = partido;
   document.formEdit.derecho.value = derecho;
   document.formEdit.secuencia.value = secuencia;
   document.formEdit.expte.value = expte;
   document.formEdit.caracteristica.value = caracteristica;
   document.formEdit.expediente.value = expediente;
   document.formEdit.anio.value = anio;
   document.formEdit.nombre.value = nombre;
   document.formEdit.mineral.value = mineral;
   document.formEdit.titular.value = titular;
   document.formEdit.estado.value = estado;
   document.formEdit.productor.value = productor;
   document.formEdit.localidad.value = localidad;
   document.formEdit.nomenclatura.value = nomenclatura;
   document.formEdit.reservas.value = reservas;
   document.formEdit.unidad.value = unidad;
   document.formEdit.sector.value = sector;
   $('#myModalUpdate').on('shown.bs.modal', function () {
     var modal = $(this);
     modal.find('.modal-title').text('Editar Cantera');
     $('#update-language').show();
   });
 }

 function openCbCantera(action, id, codificacion, partido, derecho, secuencia, expte, caracteristica, expediente, anio,
   nombre,mineral,titular,estado,productor,localidad,nomenclatura,reservas,unidad,sector){
     document.formCbCantera.id.value = id;
     document.formCbCantera.codificacion.value = codificacion;
     document.formCbCantera.partido.value = partido;
     document.formCbCantera.derecho.value = derecho;
     document.formCbCantera.secuencia.value = secuencia;
     document.formCbCantera.expte.value = expte;
     document.formCbCantera.caracteristica.value = caracteristica;
     document.formCbCantera.expediente.value = expediente;
     document.formCbCantera.anio.value = anio;
     document.formCbCantera.nombre.value = nombre;
     document.formCbCantera.mineral.value = mineral;
     document.formCbCantera.titular.value = titular;
     document.formCbCantera.estado.value = estado;
     document.formCbCantera.productor.value = productor;
     document.formCbCantera.localidad.value = localidad;
     document.formCbCantera.nomenclatura.value = nomenclatura;
     document.formCbCantera.reservas.value = reservas;
     document.formCbCantera.unidad.value = unidad;
     document.formCbCantera.sector.value = sector;

     document.formCbCantera.id.disabled = (action === 'see')?true:false;
     document.formCbCantera.codificacion.disabled = (action === 'see')?true:false;
     document.formCbCantera.partido.disabled = (action === 'see')?true:false;
     document.formCbCantera.derecho.disabled = (action === 'see')?true:false;
     document.formCbCantera.secuencia.disabled = (action === 'see')?true:false;
     document.formCbCantera.expte.disabled = (action === 'see')?true:false;
     document.formCbCantera.caracteristica.disabled = (action === 'see')?true:false;
     document.formCbCantera.expediente.disabled = (action === 'see')?true:false;
     document.formCbCantera.anio.disabled = (action === 'see')?true:false;
     document.formCbCantera.nombre.disabled = (action === 'see')?true:false;
     document.formCbCantera.mineral.disabled = (action === 'see')?true:false;
     document.formCbCantera.titular.disabled = (action === 'see')?true:false;
     document.formCbCantera.estado.disabled = (action === 'see')?true:false;
     document.formCbCantera.productor.disabled = (action === 'see')?true:false;
     document.formCbCantera.localidad.disabled = (action === 'see')?true:false;
     document.formCbCantera.nomenclatura.disabled = (action === 'see')?true:false;
     document.formCbCantera.reservas.disabled = (action === 'see')?true:false;
     document.formCbCantera.unidad.disabled = (action === 'see')?true:false;
     document.formCbCantera.sector.disabled = (action === 'see')?true:false;

     $('#myModal').on('shown.bs.modal', function () {
         var modal = $(this);
         if (action === 'new'){
             document.formCbCantera.id.disabled = true;
             modal.find('.modal-title').text('Creación de Cantera');
             $('#save-language').show();
             $('#update-language').hide();
         }else if (action === 'see'){
             modal.find('.modal-title').text('Ver Cantera');
             $('#save-language').hide();
             $('#update-language').hide();
         }
         $('#idlanguage').focus()

     });
 }
/*------------Productores---------------*/
 function openEditProductor(id, codigo, nombre){
   document.formEdit.id.value = id;
   document.formEdit.codigo.value = codigo;
   document.formEdit.nombre.value = nombre;
   $('#myModalUpdate').on('shown.bs.modal', function () {
     var modal = $(this);
     modal.find('.modal-title').text('Editar Productor');
     $('#update-language').show();
   });
 }

function openCbProductor(action, id, codigo, nombre){
    document.formCbProductor.id.value = id;
    document.formCbProductor.codigo.value = codigo;
    document.formCbProductor.nombre.value = nombre;

    document.formCbProductor.id.disabled = (action === 'see')?true:false;
    document.formCbProductor.codigo.disabled = (action === 'see')?true:false;
    document.formCbProductor.nombre.disabled = (action === 'see')?true:false;

    $('#myModal').on('shown.bs.modal', function () {
        var modal = $(this);
        if (action === 'new'){
            document.formCbProductor.id.disabled = true;
            modal.find('.modal-title').text('Creación de Productor');
            $('#save-language').show();
            $('#update-language').hide();
        }else if (action === 'see'){
            modal.find('.modal-title').text('Ver Productor');
            $('#save-language').hide();
            $('#update-language').hide();
        }
        $('#idlanguage').focus()

    });
}

function openEditMineral(id, descripcion) {
  document.formEditMineral.id.value = id;
  document.formEditMineral.descripcion.value = descripcion;
  $('#myModalUpdate').on('shown.bs.modal', function () {
    var modal = $(this);
    modal.find('.modal-title').text('Editar Mineral');
    $('#update-language').show();
    //$('#idlanguage').focus();
  });
}

function openCbMineral(action, id, descripcion) {
    document.formCbMineral.id.value = id;
    document.formCbMineral.descripcion.value = descripcion;

    document.formCbMineral.id.disabled = (action === 'see')?true:false;
    document.formCbMineral.descripcion.disabled = (action === 'see')?true:false;

    $('#myModal').on('shown.bs.modal', function () {
        var modal = $(this);
        if (action === 'new'){
            document.formCbMineral.id.disabled = true;
            modal.find('.modal-title').text('Creación de Mineral');
            $('#save-language').show();
            $('#update-language').hide();
        }else if (action === 'see'){
            modal.find('.modal-title').text('Ver Mineral');
            $('#save-language').hide();
            $('#update-language').hide();
        }
        $('#idlanguage').focus()

    });
}

function openEditDerecho(id, codigo, descripcion) {
  document.formEdit.id.value = id;
  document.formEdit.codigo.value = codigo;
  document.formEdit.descripcion.value = descripcion;
  $('#myModalUpdate').on('shown.bs.modal', function () {
    var modal = $(this);
    modal.find('.modal-title').text('Editar Derecho');
    $('#update-language').show();
  });
}

function openCbDerecho(action, id, codigo, descripcion){
   document.formCbDerecho.id.value = id;
   document.formCbDerecho.codigo.value = codigo;
   document.formCbDerecho.descripcion.value = descripcion;

   document.formCbDerecho.id.disabled = (action === 'see')?true:false;
   document.formCbDerecho.codigo.disabled = (action === 'see')?true:false;
   document.formCbDerecho.descripcion.disabled = (action === 'see')?true:false;

   $('#myModal').on('shown.bs.modal', function () {
       var modal = $(this);
       if (action === 'new'){
           document.formCbDerecho.id.disabled = true;
           modal.find('.modal-title').text('Creación de Derecho');
           $('#save-language').show();
           $('#update-language').hide();
       }else if (action === 'see'){
           modal.find('.modal-title').text('Ver Derecho');
           $('#save-language').hide();
           $('#update-language').hide();
       }
       $('#idlanguage').focus()

   });
}

function openEditEstado(id, descripcion) {
  document.formEdit.id.value = id;
  document.formEdit.descripcion.value = descripcion;
  $('#myModalUpdate').on('shown.bs.modal', function () {
    var modal = $(this);
    modal.find('.modal-title').text('Editar Estado');
    $('#update-language').show();
    //$('#idlanguage').focus();
  });
}

function openCbEstado(action, id, descripcion) {
    document.formCbEstado.id.value = id;
    document.formCbEstado.descripcion.value = descripcion;

    document.formCbEstado.id.disabled = (action === 'see')?true:false;
    document.formCbEstado.descripcion.disabled = (action === 'see')?true:false;

    $('#myModal').on('shown.bs.modal', function () {
        var modal = $(this);
        if (action === 'new'){
            document.formCbEstado.id.disabled = true;
            modal.find('.modal-title').text('Creación de Estado');
            $('#save-language').show();
            $('#update-language').hide();
        }else if (action === 'see'){
            modal.find('.modal-title').text('Ver Estado');
            $('#save-language').hide();
            $('#update-language').hide();
        }
        $('#idlanguage').focus()

    });
}
/**
* Para borrar el idioma seleccionado abrimos una ventana modal para
* que el usuario confirme si quiere eliminar el registro.
* To delete the selected language we open a modal window for
* the user to confirm whether to delete the record.
* @param {type} idlanguage
* @returns {undefined}
*/
  function deleteCbCantera(id,codificacion,nombre){
    document.formDelete.id.value = id;
    document.formDelete.codificacion.value = codificacion;
    document.formDelete.nombre.value = nombre;
    $('#myModalDelete').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
}

  function deleteCbProductor(id,nombre){
    document.formDeleteCbProductor.idproductordelete.value = id;
    document.formDeleteCbProductor.nombre.value = nombre;
    alert(id);
    $('#myModalDelete').on('shown.bs.modal', function () {
      $('#myInput').focus();
  });
}

function deleteCbDerecho(id,codigo,descripcion){
  document.formDelete.id.value = id;
  document.formDelete.codigo.value = codigo;
  document.formDelete.descripcion.value = descripcion;
  $('#myModalDelete').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
}

function deleteCbMineral(id,descripcion){
    document.formDeleteCbMineral.idmineraldelete.value = id;
    document.formDeleteCbMineral.descripcion.value = descripcion;
    $('#myModalDelete').on('shown.bs.modal', function () {
      $('#myInput').focus();
    });
}

function deleteCbEstado(id,descripcion){
    document.formDelete.id.value = id;
    document.formDelete.descripcion.value = descripcion;
    $('#myModalDelete').on('shown.bs.modal', function () {
      $('#myInput').focus();
    });
}
