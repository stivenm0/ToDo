import client from '@/lib/Client';
import { createStore } from 'vuex';

export default createStore({
  state: {
    authUser: JSON.parse(localStorage.getItem('user') || null),
    authErrors: [],
    authToken: localStorage.getItem('token') || null,
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
  actions: {
      async handleLogin(data) {
        this.authErrors = []
  
        try {
          const res = await client.post('/login', {
            email: data.email,
            password: data.password
          })
          const resD = res.data;
          this.authUser = resD.user;
          this.authToken = resD.token;
  
          localStorage.setItem('token', resD.token)
          localStorage.setItem('user', JSON.stringify(resD.user))
  
        } catch (error) {
          if (error.response?.status === 422) {
            this.authErrors = error.response.data.errors
          }else{
            this.authErrors[0] = [error.response?.data.error]
          }
        }
      },
  
      async handleRegister(data) {
        this.authErrors = []
  
        try {
          const res = await client.post('/register', {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation
          })
          const resD = res.data;
          this.authUser = resD.user;
          this.authToken = resD.token;
  
          localStorage.setItem('token', resD.token)
          localStorage.setItem('user', JSON.stringify(resD.user))
  
        } catch (error) {
          if (error.response?.status === 422) {
            this.authErrors = error.response.data.errors
          }
        }
      },
  
      async handleLogout() {
        await client.post('/logout')
        this.authUser = null
        this.authToken = false
        localStorage.removeItem('user');
        localStorage.removeItem('token');
  
    }
  }
    
});
