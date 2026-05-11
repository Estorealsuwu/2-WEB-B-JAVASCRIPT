/*ROYECTO DEL DÍA — App que consulta una API
=============================================
 Objetivo: construir una mini app de consola que:
   1) consulta una API pública (JSONPlaceholder)
   2) lista los primeros 5 usuarios
   3) para cada usuario, muestra cuántos posts tiene
   4) maneja errores si algo falla

 Se puede hacer con fetch o axios. Aquí va con fetch
 para que quede 100% estándar sin dependencias.
*/

console.log("🚀 Arrancando la app...");
const API_URL = "https://jsonplaceholder.typicode.com";

async function mostrarUsuariosYPosts() {
  try {
    // Paso 1: obtener los usuarios
    const resUsuarios = await fetch(`${API_URL}/users`);
    if (!resUsuarios.ok) throw new Error("Error al obtener usuarios");
    const usuarios = await resUsuarios.json();
    console.log("👥 Usuarios:")
    usuarios.slice(0, 5).forEach((u) => console.log(`- ${u.name} (ID: ${u.id})`))
        
    // Paso 2: para cada usuario, obtener sus posts
    // Usamos Promise.all para hacer las consultas en paralelo
    const postsPromises = usuarios.slice(0, 5).map((u) =>
      fetch(`${API_URL}/posts?userId=${u.id}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Error al obtener posts de ${u.name}`);
          return res.json();
        })
        .then((posts) => ({ nombre: u.name, cantidad: posts.length }))
    )
    const resultados = await Promise.all(postsPromises)
    console.log("\n📝 Cantidad de posts por usuario:")
    resultados.forEach((r) => console.log(`- ${r.nombre}: ${r.cantidad} posts`))
    } catch (error) {
    console.error("❌ Ocurrió un error:", error.message);
    }
}
mostrarUsuariosYPosts();
