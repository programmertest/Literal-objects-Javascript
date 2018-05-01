# Literal-objects-Javascript

Objetos literales en Javascript.

php        version: (5.6.30 o superior)
apache     version: (1.3 o superior)

## Requerimientos

- Apache Server >= 1.3 o superior
- PHP >= 5.0 o superior

## Instalación

Descarga paquete.

- https://httpd.apache.org/download.cgi
- http://php.net/downloads.php

## Documentación

- https://httpd.apache.org/docs/
- http://php.net/docs.php

## Configuración

Crear la instanciación de los archivos Objetos literales en Javascript en nuestro servidor local.


## Versión
v1.0

## Licencia
[MIT License](LICENSE)


# Documentación

#### Instalacion y ejecución
1. Descargar archivos del proyecto 

2. Colocar en ubicación del equipo donde este instalado el servidor web.

3. Ejecutar aplicación:
- Abrir navegador de preferencia y ejecutar url de acuerdo a configuración del servidor web instalado en el equipo.

4. Las repuestas a cada una de las preguntas del test se encuentran en los archivos del proyecto.


# Respuestas

#### Archivos
1. test-javascript.js

//I create a string type variable to convert it to the new outputObjectFixed object when we need it.
    var outputObject = '[';

    //The instruction for ... in iterated over the properties of the object: arrayTypeB.
    for (const indexArrayB in arrayTypeB) {

        //I create an iterator to verify the response index of what will be the new outputObjectFixed object.
        ite = 1;

        //The instruction for ... in iterated over the properties of the object: arrayTypeB [indexArrayB].
        for (const propArrayB in arrayTypeB[indexArrayB]) {

            //I verify the response rate.
            if(ite == 2){

                //I verify that arrayTypeB [indexArrayB] [propArrayB] is an object.
                if(typeof arrayTypeB[indexArrayB][propArrayB] == 'object') {

                    //If it is an object, we add a response to the string that will be the new outputObjectFixed.
                    outputObject += '{ "ans": "",';

                }
                else{

                    //If it is not an object, we add an empty response to the string that will be the new outputObjectFixed.
                    outputObject += '{ "ans": "' + arrayTypeB[indexArrayB][propArrayB] + '",';

                }
            }

            //If the index is different from a response and is equal to an object,
            else if (typeof arrayTypeB[indexArrayB][propArrayB] == 'object') {

                      //I add to the string that will be the new outputObjectFixed the properties: id, type and title.
                      outputObject += ' "id": "' + arrayTypeB[indexArrayB][propArrayB]['id'] + '",';
                      outputObject += ' "type": "' + arrayTypeB[indexArrayB][propArrayB]['type'] + '",';
                      outputObject += ' "title": "' + arrayTypeA[indexArrayB]['title'] + '"},';
            }

        //I incremented the index iterator of what will be the new outputObjectFixed object.
        ite++;

        }
    }

//I close what will be the new outputObjectFixed object.
outputObject += '];';

//I convert the outputObject string to an outputObjectFixed object.
outputObjectFixed = eval(outputObject);

//The instruction for ... in iterated over the properties of the object: outputObjectFixed.
for (const indexOutputObject in outputObjectFixed)

    //The instruction for ... in iterated over the properties of the object: outputObjectFixed [indexOutputObject].
    for (const propOutputObject in outputObjectFixed[indexOutputObject])

    //I print in the console the multiple objects of response with the information coming from the arrayTypeA and arrayTypeB objects.
    console.log(propOutputObject + '=' +outputObjectFixed[indexOutputObject][propOutputObject]);



2. test-php.php

<?php
/*
Wordpress Challenge
*/

/*----------
1. What is the purpose of the following code?
   Please explain who can view the results of this code
---------- */



/*-----------
What is the purpose of the following code?

In English
1. An action is added, in this case a personalized menu to the administrative menu.
2. A menu page is added to the personalized menu and this displays a personalized menu page screen.

In Spanish
1. Se agrega una acción, en este caso un menú personalizado al menú administrativo.
2. Al menú personlizado se agrega una página de menú y esta despliega una pantalla de página de menú personalizada.


Please explain who can view the results of this code

In English
A user with an administrative profile role who has access to a page or content.

In Spanish
Un usuario con rol de perfil administrativo que tengan acceso a una página o contenido.
------------- */



//add_action('admin_menu', 'custom_menu');

function custom_menu(){
    add_menu_page('Custom Menu', 'Custom Menu', 'manage_options', 'custom-menu-slug', 'custom_menu_page_display');
}


function custom_menu_page_display(){
    echo '<h1>Hello World</h1>';
    echo '<p>This is a custom page</p>';
}





/*----------
2. Please write a Javascript code that change the backgoround color of the body
   in a post Page.

---------- */
?>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
<script>
document.body.style.backgroundColor="#CDCDCD";
</script>





<!--
/*----------
3. What will be necessary to integrate the javascript in the theme?
   so that all the post pages "on load" change its background color.

---------- */

/*-----------
Answer third question:

In English
A js file with a function that changes the background color of the publication pages "on load",
this file is invoked on the main page of the project and the function changes color.

In Spanish
Un archivo js con una función que cambie el color de fondo de las páginas de publicación "en carga",
se invoca este archivo en la página principal del proyecto y se implementa la función cambia color.
------------- */





/*----------
4. What will be necessary to integrate the javascript in the theme?
   so that all the post pages "on load" change its background color.

---------- */

/*-----------
Answer fourth question:

In English
A js file with a function that changes the background color of the publication pages "on load",
this file is invoked on the main page of the project and the function changes color.

In Spanish
Un archivo js con una función que cambie el color de fondo de las páginas de publicación "en carga",
se invoca este archivo en la página principal del proyecto y se implementa la función cambia color.
------------- */





/*----------
5. What is a potential problem in the following snippet of code
   from a WordPress theme file named “footer.php”?

---------- */

        </section><!—end of body section- ->
        <footer>All rights reserved</footer>
    </body>
</html>

/*-----------
Answer fifth question:

In English
All the document's HTML goes first.
Then last, before closing the body tag, add: <footer></footer>

In Spanish
Todo el HTML del documento va primero.
Luego, antes de cerrar la etiqueta del cuerpo, se agrega: <footer></footer>
------------- */-->

