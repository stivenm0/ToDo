import client from '@/lib/Client';
import router from '@/router';

export default {
  namespaced: true,
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
    },
    setErrors(state, errors){
      state.authErrors = errors;
    }
  },
  actions: {
      async handleLogin({ commit }, data) {
        this.authErrors = []
  
        console.log(data);
        
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
  
          router.go('/dashboard')
        } catch (error) {
          console.log(error);
          
          if (error.response?.status === 422) {
            commit('setErrors',error.response.data.errors)
          }
        }
      },
  
      async handleRegister({ commit }, data) {
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
  
          router.go('/dashboard')
        } catch (error) {
          if (error.response?.status === 422) {
             commit('setErrors',error.response.data.errors)
          }
        }
      },
  
      async handleLogout() {
        
        await client.post('/logout')
        this.authUser = null
        this.authToken = false
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        router.go('/')
  
    }
  }
    
};
