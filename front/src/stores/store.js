import { createStore } from 'vuex';

export default createStore({
  state: {
    open:true // Aquí guardaremos nuestras tareas (puedes cambiar según tus necesidades)
  },
  mutations: {
    // Mutaciones para modificar el estado
    setOpen(state) {
      state.open = !state.open;
    },

  },
//   actions: {
//     // Acciones para realizar operaciones asíncronas
//     fetchTasks({ commit }) {
//       // Simulación de obtención de datos (esto normalmente viene de una API)
//       const tasks = [
//         { id: 1, title: 'Task 1', description: 'Complete the report' },
//         { id: 2, title: 'Task 2', description: 'Attend the meeting' },
//       ];
//       commit('setTasks', tasks);
//     },
//     addTask({ commit }, task) {
//       commit('addTask', task);
//     },
//     removeTask({ commit }, taskId) {
//       commit('removeTask', taskId);
//     }
//   },
//   getters: {
    // // Getters para acceder a los datos desde los componentes
    // allTasks(state) {
    //   return state.tasks;
    // }
//   }
});
