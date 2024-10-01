import client from "@/lib/Client";

export default {
  namespaced: true,
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
    notes: [],
    note: {}
  },
  mutations: {
    setOpen(state) {
      state.isOpen = !state.isOpen;
    },
    setType(state, data){
      state.type = data.type;
      state.note = data.note;
    },
    setNotes(state, notes){
      state.notes = notes;
    }
  },
  actions: {
    async getNotes({commit}){
      let res = await client.get('/notes', { 
        // params:{
        //     page: newQ.page ? newQ.page : 1 
        // }
    });
    console.log(res.data.data);
    commit('setNotes', res.data.data)
    


    
    }
  }
};
