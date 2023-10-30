import { createSlice } from '@reduxjs/toolkit';

//Actions
// 1. Crear la accion en el slice
// 2. Exportar la accion
// 3. Importarla en el componente donde se utilizara
// 4. Importar y ejecutar useDispatch
// 5. Despachamos la accion

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
  name: 'user',
  initialState: "",
  reducers: {
    changeUser: (state, action) => {
      return action.payload //es userName

    }

  }
})

export const { changeUser } = userSlice.actions; //Se exporta el accion

export default userSlice.reducer;