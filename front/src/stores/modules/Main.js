import { useToast } from "@/components/ui/toast";
import client from "@/lib/Client";

const { toast } = useToast();

export default {
  namespaced: true,
  state: {
    isOpen: false,
    type: "",
    categories: [
      { id: 1, name: "Work" },
      { id: 2, name: "Personal" },
      { id: 3, name: "Shopping" },
      { id: 4, name: "Health" },
      { id: 5, name: "Fitness" },
      { id: 6, name: "Travel" },
      { id: 7, name: "Education" },
      { id: 8, name: "Finance" },
      { id: 9, name: "Projects" },
      { id: 10, name: "Miscellaneous" },
    ],
    notes: false,
    note: {},
    errors: [],
    orderBy: 'created_at'
  },
  mutations: {
    setOpen(state) {
      state.isOpen = !state.isOpen;
    },
    setType(state, data) {
      state.type = data.type;
      state.note = data.note;
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    setErrors(state, errors) {
      state.errors = errors;
    },
    setOrderBy(state, orderBy) {
      state.orderBy = orderBy;
    },

  },
  actions: {
    setOrder({ commit, dispatch }, order){
      commit('setOrderBy', order)
      dispatch('getNotes');
    },
    async getNotes({ commit, state }) {
      let res = await client.get("/notes", {
        params:{ sort: state.orderBy }
      });
      
      commit("setNotes", res.data.data);
    },

    async createNote({ commit, dispatch }, data) {
      let res = await client.post("/notes", data);

      if (res.status === 201) {
        commit("setOpen");
        dispatch('getNotes')
        toast({title: 'Success Created'});
        return;
      } 
      toast({title: 'Failed Created'});
    },

    async editNote({ commit,dispatch, state }, data) {
      let res = await client.put(`/notes/${state.note.id}`, data);

      if (res.status === 200) {
        commit("setOpen");
        dispatch("getNotes");
        toast({title: 'Success Edited'});
        return;
      } 
      toast({title: 'Failed Edited'});
    },

    async deleteNote({ state, commit, dispatch }) {
      let res = await client.delete(`/notes/${state.note.id}`);

      if (res.status === 204) {
        commit("setOpen");
        dispatch("getNotes");
        toast({title: 'Success Deleted'});
        return;
      } 

      toast({title: 'Failed Delete'});
    },

    async uploadImage({ state, commit, dispatch }, data){
      commit('setErrors', [])
  
      try {
        await client.post(`/notes/${state.note.id}?_method=PUT`, data)

        commit("setOpen");
        dispatch('getNotes');
        toast({title: 'Success Add Image'});
        
      } catch (error) {
        if (error.response?.status === 422) {
           commit('setErrors',error.response.data.errors)
        }
        toast({title: 'Failed Add Image'});
      }
    }
  },
};
