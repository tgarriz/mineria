/**
 * Abrimos la ventana modal para crear un nuevo elemento.
 * We open a modal window to create a new element.
 * @returns {undefined}
 */
  function newProductor(){
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
  }
/**
 * Abrimos la ventana modal para crear un nuevo elemento.
 * We open a modal window to create a new element.
 * @returns {undefined}
 */
function newCbProductor(){
    openCbProductor('new', null, null, null, null);
}

function newCbDerecho(){
    openCbDerecho('new', null, null, null);
}

function newCbMineral(){
    openCbMineral('new',null);
}
/**
 * Abrimos la ventana modal teniendo en cuenta la acción (action) para
 * utilizarla como creación (Create), lectura (Read) o actualización (Update).
 * We opened the modal window considering the action (action) to use
 * as creation (Create), reading (Read) or upgrade (Update).
 * @param {type} action las acciones que utilizamos son : new para Create, see para Read y edit para Update.
 *      Actions we use are :  new for Create, see for Read and edit for Update.
 * @param {type} id
 * @param {type} codigo
 * @param {type} nombre
 * @returns {undefined}
 */
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
            modal.find('.modal-title').text('Creación de Productor');
            $('#save-language').show();
            $('#update-language').hide();
        }else if (action === 'edit'){
            modal.find('.modal-title').text('Actualizar Productor');
            $('#save-language').hide();
            $('#update-language').show();
        }else if (action === 'see'){
            modal.find('.modal-title').text('Ver Productor');
            $('#save-language').hide();
            $('#update-language').hide();
        }
        $('#idlanguage').focus()

    });
}

function openEditMineral(id, descripcion){
  alert(id);
  alert(descripcion);
  document.formEditMineral.id.value = id;
  document.formEditMineral.descripcion.value = descripcion;
  $('#myModalUpdate').on('shown.bs.modal', function () {
    var modal = $(this);
    modal.find('.modal-title').text('Editar Mineral');
    //$('#idlanguage').focus();
  });
}

function openCbMineral(action, id, descripcion){
    document.formCbMineral.id.value = id;
    document.formCbMineral.descripcion.value = descripcion;

    document.formCbMineral.id.disabled = (action === 'see')?true:false;
    document.formCbMineral.descripcion.disabled = (action === 'see')?true:false;

    $('#myModal').on('shown.bs.modal', function () {
        var modal = $(this);
        if (action === 'new'){
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
            modal.find('.modal-title').text('Creación de Derecho');
            $('#save-language').show();
            $('#update-language').hide();
        }else if (action === 'edit'){
            modal.find('.modal-title').text('Actualizar Derecho');
            $('#save-language').hide();
            $('#update-language').show();
        }else if (action === 'see'){
            modal.find('.modal-title').text('Ver Derecho');
            $('#save-language').hide();
            $('#update-language').hide();
        }
        //$('#idlanguage').focus()

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
  function deleteCbProductor(id,nombre){
    alert('entro');
    document.formDeleteCbProductor.idproductordelete.value = id;
    document.formDeleteCbProductor.nombre.value = nombre;
    alert(id);
    $('#myModalDelete').on('shown.bs.modal', function () {
      $('#myInput').focus();
  });
}
function deleteCbDerecho(id,codigo,descripcion){
  alert('entro');
  document.formDeleteCbDerecho.idproductordelete.value = id;
  document.formDeleteCbDerecho.codigo.value = codigo;
  document.formDeleteCbDerecho.descripcion.value = descripcion;
  alert(id);
  $('#myModalDelete').on('shown.bs.modal', function () {
    $('#myInput').focus();
});
}
  function deleteCbMineral(id,descripcion){
    alert('entro');
    document.formDeleteCbMineral.idmineraldelete.value = id;
    document.formDeleteCbMineral.descripciondelete.value = descripcion;
    alert(id);
    $('#myModalDelete').on('shown.bs.modal', function () {
      $('#myInput').focus();
  });
}
