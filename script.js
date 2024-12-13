document.addEventListener('DOMContentLoaded', function(){
    /*Obtenemos los elementos del DOM*/
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalSpan = document.getElementById('close');
    
    document.querySelectorAll('.openModalBtn').forEach(button => { 
        button.addEventListener('click', (event) => { 

            /*Clonamos el contenido del div de y eliminamos el 
            boton para que no aparezca en el nuevo model*/
            const parentDiv = event.target.closest('.element-hotel'); 
            const clonedContent = parentDiv.cloneNode(true);
            clonedContent.querySelector('.openModalBtn').remove();

            /*Se inserta el contenido clonado al model y hacemos
            visible el model con un display block*/
            modalContent.innerHTML = clonedContent.innerHTML; 
            modal.style.display = "block"; 
        }); 
    });

    /*Funcion para cerrar el model con el span */
    closeModalSpan.onclick = function() { 
        modal.style.display = "none"; 
    } 

    /*Funcion para cerrar el model presionando fuera de el */
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = 'none';
        }
    }
})