# 📲 Proyecto de Migración: MiSaldito (Android Java ➔ React Native)

Este repositorio documenta el proceso de refactorización y migración técnica del módulo **MiSaldito** (Consulta de Saldo y Lista de Movimientos Bancarios / Recargas de Servicios) desde una arquitectura nativa en **Java (Android SDK)** hacia un ecosistema multiplataforma con **React Native (TypeScript)**.

---

## 🏗️ Estructura del Repositorio

* `legacy-android-java/`: Aplicación móvil original en Java que implementa patrones tradicionales de Android (Activity, Adapter, Retrofit).
* `modern-react-native/`: Reimplantación de la aplicación en React Native con componentes funcionales, Hooks y consumo de servicios REST.


---

## 🔄 Tabla Comparativa de Arquitectura e Implementación

| Módulo / Requisito | Android Nativo (Java) | React Native (TypeScript) |
| :--- | :--- | :--- |
| **Pantalla Principal** | `MainActivity.java` + Layout XML | `App.tsx` / `HomeScreen.tsx` |
| **Lista de Movimientos** | `RecyclerView` + `TransactionAdapter` | `<FlatList />` |
| **Consumo API REST** | Retrofit 2 + Gson | Axios / Fetch API |
| **Persistencia de Sesión** | `SharedPreferences` | `@react-native-async-storage` |
| **Alertas / Notificaciones** | `Toast` / `AlertDialog` | `Alert.alert()` / Custom Modals |

---

## 💡 Ventajas Clave Identificadas en la Migración

1. **Reducción de Código Repetitivo (Boilerplate):** Simplificación en la creación de listas dinámicas evitando la declaración explícita de `ViewHolder` y `Adapters`.
2. **Multiplataforma Nativa:** Código unificado listo para ser publicado tanto en **Google Play Store** como en **Apple App Store**.
3. **Optimización en Tiempo de Desarrollo:** Reducción de tiempos de compilación mediante *Fast Refresh* / *Hot Reloading*.


## Estructura de las Carpetas

```text
migrate_MiSaldito_to_react/
├── legacy-android-java/       # Proyecto Nativo Android (Java/XML)
│   ├── app/src/main/java/     # MainActivity, Models, Adapters
│   └── app/src/main/res/      # Layouts XML y Recursos
└── modern-react-native/       # Proyecto React Native (TypeScript)
    ├── App.tsx                # Contenedor Principal
    └── src/                   # Componentes, Tipos e Interfaces

```
---

## 🚀 Cómo Ejecutar
## Módulo Legacy (Java)
* Abrir legacy-android-java en IntelliJ IDEA / Android Studio.

* Configurar JDK en Eclipse Temurin 17.

* Ejecutar Build > Rebuild Project y lanzar en emulador o dispositivo físico.

----

## Módulo Moderno (React Native)
* Navegar a la carpeta: cd modern-react-native

* Instalar dependencias: npm install

* Iniciar entorno: npx expo start

