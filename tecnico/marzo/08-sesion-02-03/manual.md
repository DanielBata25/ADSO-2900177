# 1-Emcabezados 

Para crear un encabezado, agrega entre uno y seis símbolos # antes del encabezado del texto. El número de # que utilices determinará el nivel jerárquico y el tamaño tipográfico del encabezado.

# daniel bata
## daniel bata 
### daniel bata 

# 2-Estilos de texto
Puedes indicar énfasis con texto en negrita, cursiva, tachado, o de subíndice o superíndice en los campos de comentarios y archivos .md.
<table><thead><tr><th scope="col">Estilo</th><th scope="col">Sintaxis</th><th scope="col">Métodos abreviados de teclado</th><th scope="col">Ejemplo</th><th scope="col">Resultados</th></tr></thead><tbody><tr><td>Bold</td><td><code>** **</code> o <code>__ __</code></td><td><kbd>Command</kbd>+<kbd>B</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)</td><td><code>**This is bold text**</code></td><td><strong>Esto es texto en negrita</strong>.</td></tr><tr><td>Cursiva</td><td><code>* *</code> o <code>_ _</code>     </td><td><kbd>Command</kbd>+<kbd>I</kbd> (Mac) o <kbd>CtrI</kbd>+ (Windows/Linux)<kbd></kbd></td><td><code>_This text is italicized_</code></td><td><em>Este texto está en cursiva</em></td></tr><tr><td>Tachado</td><td><code>~~ ~~</code></td><td>Ninguno</td><td><code>~~This was mistaken text~~</code></td><td><del>Este texto está equivocado</del></td></tr><tr><td>Cursiva en negrita y anidada</td><td><code>** **</code> y <code>_ _</code></td><td>Ninguno</td><td><code>**This text is _extremely_ important**</code></td><td><strong>Este texto es <em>extremadamente</em> importante</strong></td></tr><tr><td>Todo en negrita y cursiva</td><td><code>*** ***</code></td><td>Ninguno</td><td><code>***All this text is important***</code></td><td><em><strong>Todo este texto es importante</strong></em></td></tr><tr><td>Subscript</td><td><code>&lt;sub&gt; &lt;/sub&gt;</code></td><td>Ninguno</td><td><code>This is a &lt;sub&gt;subscript&lt;/<wbr>sub&gt; text</code></td><td>Se trata de un texto de <sub>subíndice</sub></td></tr><tr><td>Superscript</td><td><code>&lt;sup&gt; &lt;/sup&gt;</code></td><td>Ninguno</td><td><code>This is a &lt;sup&gt;superscript&lt;/<wbr>sup&gt; text</code></td><td>Se trata de un texto de <sup>superíndice</sup></td></tr></tbody></table>

# 3-Imagen

Puede mostrar una imagen agregando ! y ajustar el texto alternativo en [ ]. El texto alternativo es un texto corto equivalente a la información de la imagen. Luego, escribe el vínculo de la imagen entre paréntesis ().

![Ejemplo](https://th.bing.com/th/id/OIP.eTCbdR_AFzbqHMPXhrJWUQHaEK?w=268&h=180&c=7&r=0&o=5&pid=1.7)

# 4-Enlaces para pegar imagenes

<table><thead><tr><th scope="col">Context</th><th scope="col">Enlace Relativo</th></tr></thead><tbody><tr><td>En un archivo <code>.md</code> de la misma rama</td><td><code>/<wbr>assets/<wbr>images/<wbr>electrocat.png</code></td></tr><tr><td>En un archivo <code>.md</code> de otra rama</td><td><code>/<wbr>../<wbr>main/<wbr>assets/<wbr>images/<wbr>electrocat.png</code></td></tr><tr><td>En propuestas, solicitudes de cambio y comentarios del repositorio</td><td><code>../<wbr>blob/<wbr>main/<wbr>assets/<wbr>images/<wbr>electrocat.png?raw=true</code></td></tr><tr><td>En un archivo <code>.md</code> de otro repositorio</td><td><code>/<wbr>../<wbr>../<wbr>../<wbr>../<wbr>github/<wbr>docs/<wbr>blob/<wbr>main/<wbr>assets/<wbr>images/<wbr>electrocat.png</code></td></tr><tr><td>En propuestas, solicitudes de cambios y comentarios de otro repositorio</td><td><code>../<wbr>../<wbr>../<wbr>github/<wbr>docs/<wbr>blob/<wbr>main/<wbr>assets/<wbr>images/<wbr>electrocat.png?raw=true</code></td></tr></tbody></table>

# 5-listas

 Puedes crear una lista sin ordenar. Para ello, coloca -, * o + antes de una o más líneas de texto.

- George Washington
* John Adams
+ Thomas Jefferson


Para ordenar tu lista, antecede cada línea con un número.

1. James Madison
2. James Monroe
3. John Quincy Adams

# Listas Animadas

Puedes crear una lista anidada al dejar sangría en uno o más elementos de la lista debajo de otro elemento.

Para crear una lista anidada mediante el editor web en GitHub o un editor de texto que usa una fuente monoespaciada, como Visual Studio Code, puedes alinear la lista visualmente. Escribe los caracteres con espacio frente al elemento de la lista anidada hasta que el carácter del marcador de lista (- o *) se encuentre directamente debajo del primer carácter del texto en el elemento que se encuentra debajo.

1. First list item
   - First nested list item
     - Second nested list items

 # Lista De Tareas

 Para crear una lista de tareas, debe añadir como prefijo un guion y espacio, seguido de [ ] a los elementos de la lista. Para marcar una tarea como completada, use [x].

 - [x] Lo mas bonito es verte otra vez
- [x] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

# Mencionar personas y equipos

Puede mencionar a una persona o equipo en GitHub, Para ello, escriba @ junto con su nombre de usuario o equipo. Esto activará una notificación y llamará su atención hacia la conversación. Las personas también recibirán una notificación si editas un comentario para mencionar su nombre de usuario o el nombre del equipo. Para obtener más información sobre las notificaciones, consulte "Acerca de las notificaciones."

@github/support What do you think about these updates?

# Cargar archivos

Puedes cargar activos como imágenes si las arrastras y sueltas, las seleccionas de un buscador de archivos o si las pegas. Puede cargar recursos en las incidencias, solicitudes de incorporación de cambios, comentarios y archivos .md en el repositorio.

# Usar Emojis

@octocat :+1: This PR looks great - it's ready to merge! :shipit:

# Parrafos

Puedes crear un nuevo párrafo al dejar una línea en blanco entre las líneas de texto.

# Notas de pie

Puedes agregar notas al pie para tu contenido si utilizas esta sintaxis de corchetes:

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.

 ## Nota: La posición de una nota al pie de página en Markdown no influye en dónde se representará la nota al pie de página. Puedes escribir una nota al pie después de referenciarla y esta aún se interpretará en la parte inferior del archivo con lenguaje de marcado.

Las notas al pie no se admiten en las wikis.

# Alertas

Las alertas son una extensión Markdown basada en la sintaxis blockquote que puede utilizar para resaltar la información crítica. En GitHub, se muestran con colores e iconos distintivos para indicar la importancia del contenido.

Deben usarse las alertas solo cuando sean cruciales para el éxito del usuario y limitarlas a una o dos por artículo para evitar sobrecargar al lector. Además, debe evitarse colocar alertas consecutivamente. Las alertas no se pueden anidar dentro de otros elementos.

Para agregar una alerta, debe usarse una línea blockquote especial que especifique el tipo de alerta, seguida de la información de alerta en un blockquote estándar. Existen cinco tipos de alertas.

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

# Ocultar contenido en los comentarios

Puedes decirle a GitHub que oculte el contenido del lenguaje de marcado interpretado colocando el contenido en un comentario de HTML.

<!-- This content will not appear in the rendered Markdown -->

