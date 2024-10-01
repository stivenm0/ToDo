import { createStore } from 'vuex';

export default createStore({
  state: {
    isOpen: false ,
    type: '' ,
    categories: [
      { id: 1, name: 'Work' },
      { id: 2, name: 'Personal' },
      { id: 3, name: 'Shopping' },
      { id: 4, name: 'Health' },
      { id: 5, name: 'Fitness' },
      { id: 6, name: 'Travel' },
      { id: 7, name: 'Education' },
      { id: 8, name: 'Finance' },
      { id: 9, name: 'Projects' },
      { id: 10, name: 'Miscellaneous' },
  ],
    notes: []
  },
  mutations: {
    setOpen(state) {
      state.isOpen = !state.isOpen;
    },
    setType(state, type){
      state.type = type;
    },
    setNotes(state, notes){
      state.notes = notes;
    }
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
