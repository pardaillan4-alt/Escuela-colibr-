# Regla de Firestore para la Escuelita

La Escuelita guarda el avance en el proyecto de Firebase **pulpito-pos**, en la colección `colibri`, en un documento propio de cada cuenta (`colibri/{uid}`). No usa ni modifica ninguna colección del punto de venta.

## Agregar la regla

1. Entra a https://console.firebase.google.com y abre el proyecto **pulpito-pos**.
2. Ve a **Firestore Database → Reglas**.
3. Dentro del bloque `match /databases/{database}/documents { ... }`, junto a las reglas que ya tienes, pega esto:

```
    // Escuelita Colibrí: cada cuenta solo lee y escribe su propio documento
    match /colibri/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
```

4. Toca **Publicar**.

No borres ni cambies las reglas del punto de venta: esta regla solo se agrega.

## Si aparece algún error en la app

- **«Correo o contraseña incorrectos»**: usa una cuenta que exista en **Authentication → Users**. Puedes crear una nueva para la familia con **Add user**.
- **«Agrega pardaillan4-alt.github.io en Authorized domains»**: en **Authentication → Settings → Authorized domains**, toca **Add domain** y escribe `pardaillan4-alt.github.io`.
- **«La clave de Firebase no permite esta página»**: en Google Cloud → APIs y servicios → Credenciales, abre la clave de navegador del proyecto y agrega `pardaillan4-alt.github.io/*` a los sitios web permitidos.
