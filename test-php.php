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

