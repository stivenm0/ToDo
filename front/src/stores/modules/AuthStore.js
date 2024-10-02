import client from "@/lib/Client";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    authUser: JSON.parse(sessionStorage.getItem("user") || null),
    authErrors: [],
    authToken: sessionStorage.getItem("token") || null,
  },
  mutations: {
    setOpen(state) {
      state.isOpen = !state.isOpen;
    },
    setType(state, type) {
      state.type = type;
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    setErrors(state, errors) {
      state.authErrors = errors;
    },
  },
  actions: {
    async handleLogin({ commit }, data) {
      this.authErrors = [];
      try {
        const res = await client.post("/login", {
          email: data.email,
          password: data.password,
        });
        const resD = res.data;
        this.authUser = resD.user;
        this.authToken = resD.token;

        sessionStorage.setItem("token", resD.token);
        sessionStorage.setItem("user", JSON.stringify(resD.user));

        router.go("/dashboard");
      } catch (error) {
        console.log(error);

        if (error.response?.status === 422) {
          commit("setErrors", error.response.data.errors);
        }
      }
    },

    async handleRegister({ commit }, data) {
      this.authErrors = [];

      try {
        const res = await client.post("/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        const resD = res.data;
        this.authUser = resD.user;
        this.authToken = resD.token;

        localStorage.setItem("token", resD.token);
        localStorage.setItem("user", JSON.stringify(resD.user));

        router.go("/dashboard");
      } catch (error) {
        if (error.response?.status === 422) {
          commit("setErrors", error.response.data.errors);
        }
      }
    },

    async handleLogout() {
      let res = await client.post("/logoutt");

      if (res.status === 200) {
        this.authUser = null;
        this.authToken = false;
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");

        router.go("/");
      }
    },
  },
};
