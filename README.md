# 📊 ExpenseControl - Planificador de Gastos

Una aplicación web moderna para el control y seguimiento de gastos personales, desarrollada con React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Gestión de Presupuesto**: Define y controla tu presupuesto mensual
- **Registro de Gastos**: Añade gastos con nombre, cantidad, categoría y fecha
- **Categorización**: Organiza gastos en 7 categorías predefinidas
- **Filtrado**: Filtra gastos por categoría para mejor organización
- **Seguimiento Visual**: Barra de progreso circular que muestra el porcentaje gastado
- **Persistencia**: Los datos se guardan automáticamente en el localStorage
- **Edición**: Modifica gastos existentes fácilmente
- **Validaciones**: Previene gastos que excedan el presupuesto
- **Diseño Responsivo**: Interfaz adaptada para móviles y escritorio

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Herramienta de construcción rápida
- **React Context API** - Gestión de estado global
- **React Hooks** - Gestión de estado y efectos
- **UUID** - Generación de identificadores únicos
- **React Circular Progressbar** - Componente de barra de progreso circular
- **React Date Picker** - Selector de fechas
- **Headless UI** - Componentes de interfaz accesibles

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de React
│   ├── AmountDisplay.tsx
│   ├── BudgetForm.tsx
│   ├── BudgetTraker.tsx
│   ├── ErrorMessage.tsx
│   ├── ExpenseDetail.tsx
│   ├── ExpenseForm.tsx
│   ├── ExpenseList.tsx
│   ├── ExpenseModal.tsx
│   └── FilterByCategory.tsx
├── context/            # Contexto de React
│   └── BudgetContext.tsx
├── data/              # Datos estáticos
│   └── categories.ts
├── hooks/             # Hooks personalizados
│   └── useBudget.ts
├── reducers/          # Reducers para gestión de estado
│   └── budget-reducer.ts
├── types/             # Definiciones de tipos TypeScript
│   └── index.ts
├── App.tsx            # Componente principal
└── main.tsx           # Punto de entrada
```

## 🎯 Funcionalidades Principales

### 1. Gestión de Presupuesto
- Formulario inicial para definir el presupuesto
- Validación de entrada numérica
- Persistencia automática en localStorage

### 2. Seguimiento de Gastos
- **Barra de Progreso Circular**: Muestra visualmente el porcentaje del presupuesto gastado
- **Resumen Financiero**: Presupuesto total, disponible y gastado
- **Indicadores Visuales**: Cambio de color cuando se alcanza el 100%

### 3. Registro de Gastos
- **Formulario Completo**: Nombre, cantidad, categoría y fecha
- **Validaciones**: Campos obligatorios y límite de presupuesto
- **Categorías Disponibles**:
  - 💰 Ahorro
  - 🍽️ Comida
  - 🏠 Casa
  - 💸 Gastos Varios
  - 🎮 Ocio
  - 🏥 Salud
  - 📱 Suscripciones

### 4. Gestión de Gastos
- **Listado Dinámico**: Muestra todos los gastos registrados
- **Filtrado por Categoría**: Filtra gastos específicos
- **Edición**: Modifica gastos existentes
- **Eliminación**: Borra gastos no deseados

### 5. Persistencia de Datos
- **localStorage**: Guardado automático de presupuesto y gastos
- **Recuperación**: Restauración automática al recargar la página
- **Reset**: Función para reiniciar toda la aplicación

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd ExpenseControl
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🎨 Características de la Interfaz

- **Diseño Moderno**: Interfaz limpia y profesional
- **Responsive**: Adaptada para dispositivos móviles y escritorio
- **Accesibilidad**: Componentes accesibles con Headless UI
- **Feedback Visual**: Indicadores claros de estado y progreso
- **Colores Intuitivos**: Esquema de colores que facilita la comprensión

## 🔧 Arquitectura del Estado

La aplicación utiliza **React Context API** con **useReducer** para la gestión del estado global:

### Estado Principal
```typescript
type BudgetState = {
    budget: number           // Presupuesto total
    modal: boolean          // Estado del modal
    expenses: Expense[]     // Lista de gastos
    editingId: string       // ID del gasto en edición
    currentCategory: string // Categoría filtrada actual
}
```

### Acciones Disponibles
- `add-budget` - Definir presupuesto
- `show-modal` / `close-modal` - Control del modal
- `add-expense` - Añadir nuevo gasto
- `remove-expense` - Eliminar gasto
- `update-expense` - Editar gasto existente
- `add-filter-category` - Filtrar por categoría
- `reset-app` - Reiniciar aplicación

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (versiones modernas)
- **Dispositivos**: Móviles, tablets y escritorio
- **Sistemas Operativos**: Windows, macOS, Linux

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ para el control eficiente de gastos personales.

---

**¡Comienza a controlar tus gastos de manera inteligente y visual!** 💰📊
