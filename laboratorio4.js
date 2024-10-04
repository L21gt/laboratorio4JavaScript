/**********    Laboratorio 04  ********************
 * 
 * 
 * Complementa el objeto images de la tarea anterior con dos nuevos 
 * métodos (sin reescribir todo el objeto):

    1.    edit- que toma tres argumentos ( title, artist, y date) y 
          si encuentra una imagen con el título dado en la lista, 
          cambia sus propiedades artist y date;
    2.    delete- que toma el argumento title y si encuentra una imagen 
          con este título en la lista, la elimina 
          (para eliminar un elemento de la lista, use el método splice)
*   

    Además, agregue un método show al Imageconstructor que mostrará 
    información sobre esta imagen. No reescriba el constructor.
    Utilice prototipos para este propósito. 
    Luego, modify el show método del objeto de imágenes de modo 
    que utilice el show método de imagen única recién creado para 
    mostrar la información.

    Pruebe el script llamando a la secuencia:
 */

      // Constructor para crear un objeto de imagen
      function Image(title, artist, date) {
            this.title = title;
            this.artist = artist;
            this.date = date;
        }


      // Añadir el método 'show' al prototipo de Image
      Image.prototype.show = function() {
            console.log(`${this.title} (${this.artist}, ${this.date})`);
      };

      // Objeto images con la lista de imágenes y métodos adicionales
      const images = {
            list: [], // Lista para almacenar las imágenes
            
            // Método contains: verifica si ya existe una imagen en la lista
            contains: function(title) {
            return this.list.some(image => image.title === title);
            },
            
            // Método add: agrega una nueva imagen si no existe
            add: function(title, artist, date) {
            if (!this.contains(title)) {
                  const newImage = new Image(title, artist, date);
                  this.list.push(newImage);
            } else {
                  console.log(`La imagen "${title}" ya está en la lista.`);
            }
            },
            
            // Método edit: edita la imagen si existe en la lista
            edit: function(title, newArtist, newDate) {
            const image = this.list.find(image => image.title === title);
            if (image) {
                  image.artist = newArtist;
                  image.date = newDate;
            } else {
                  console.log(`No se encontró una imagen con el título "${title}".`);
            }
            },
            
            // Método delete: elimina una imagen de la lista si existe
            delete: function(title) {
            const index = this.list.findIndex(image => image.title === title);
            if (index !== -1) {
                  this.list.splice(index, 1);
                  console.log(`La imagen "${title}" ha sido eliminada.`);
            } else {
                  console.log(`No se encontró una imagen con el título "${title}".`);
            }
            },
            
            // Método show: muestra todas las imágenes en la lista usando el método show del prototipo
            show: function() {
            if (this.list.length === 0) {
                  console.log("No hay imágenes en la lista.");
            } else {
                  this.list.forEach(image => image.show());
            }
            },
            
            // Método clear: elimina todas las imágenes de la lista
            clear: function() {
            this.list = [];
            console.log("Todas las imágenes han sido eliminadas.");
            }
      };



    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.add('The Last Supper', 'Leonardo da Vinci', 1495);
    images.add('The Starry Night', 'Vincent van Gogh', 1889);
    images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
    images.delete('The Last Supper');
    images.show();
    // -> Mona Lisa (Leonardo da Vinci, 1504)
    // -> The Starry Night (Vincent van Gogh, 1889)