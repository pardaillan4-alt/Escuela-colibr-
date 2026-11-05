# Firebase de la Escuelita

La Escuelita guarda el avance en su propio proyecto de Firebase, **Escuela Colibrí** (`escuela-colibri`), en la colección `colibri`, con un documento por cuenta (`colibri/{uid}`). Está separado del proyecto del punto de venta.

## Configuración (una sola vez)

1. **Authentication → Método de acceso:** activa **Correo electrónico/contraseña**.
2. **Authentication → Users → Agregar usuario:** crea la cuenta de la familia.
3. **Firestore Database → Crear base de datos:** modo de producción, ubicación cercana a México (`nam5` o `us-central1`).
4. **Firestore Database → Reglas:** reemplaza todo por esto y toca **Publicar**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /colibri/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

Con esta regla, cada cuenta solo puede leer y escribir su propio documento.

## Si aparece algún error en la app

- **«Correo o contraseña incorrectos»**: revisa que la cuenta exista en **Authentication → Users**.
- **«Activa Correo/Contraseña»**: falta el paso 1.
- **«Falta crear la base de datos»**: falta el paso 3.
- **«Revisa la regla de la colección colibri»**: falta el paso 4, o la regla quedó distinta.
- **«Agrega pardaillan4-alt.github.io en Authorized domains»**: en **Authentication → Configuración → Dominios autorizados**, agrega `pardaillan4-alt.github.io`.
- **«La clave de Firebase no permite esta página»**: en Google Cloud → APIs y servicios → Credenciales, abre la clave de navegador del proyecto y agrega `pardaillan4-alt.github.io/*` a los sitios permitidos.

Si antes agregaste la regla `match /colibri/{uid}` en el proyecto del punto de venta (pulpito-pos), ya puedes borrarla.
