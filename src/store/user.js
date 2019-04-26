import firebase from '@firebase/app';
class User {
  constructor(uid) {
    this.id = uid;
    // this.name = name;
    // this.email = email;
    // this.photoUrl = photoUrl;
    // this.emailVerified = emailVerified;
  }
}

export default {
  state: {
    user: null,
    // online: false,
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    /*  setOnline(state, payload) {
      state.online = payload;
    }, */
  },
  actions: {
    async updateProfile(name, pass, email, photo) {
      if (name) this.updateName(name);
      if (pass) this.updatePassword(pass);
      if (name) this.updatePhoto(photo);
      if (email) this.updateEmail(email);
    },
    /**
     *
     * @param {URL} photo
     */
    async updatePhoto(photo) {
      if (!photo) throw new Error();
      const user = firebase.auth().currentUser;

      user
        .updateProfile({
          photoURL: photo,
        })
        .then(() => {
          // Update successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },
    async updateName(name) {
      const user = firebase.auth().currentUser;

      user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          // Update successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },
    async updatePassword(pass) {
      const user = firebase.auth().currentUser;

      user
        .updatePassword(pass)
        .then(() => {
          // Update successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },
    async updateEmail(email) {
      const user = firebase.auth().currentUser;

      user
        .updateEmail(email)
        .then(() => {
          // Update successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },
    async deleteUser() {
      const user = firebase.auth().currentUser;

      user
        .delete()
        .then(() => {
          // User deleted.
        })
        .catch((error) => {
          // An error happened.
        });
    },
    async sendVerificationEmail() {
      const user = firebase.auth().currentUser;

      user
        .sendEmailVerification()
        .then(() => {
          // Email sent.
        })
        .catch((error) => {
          // An error happened.
        });
    },
    async registerUser({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);
      try {
        //logic
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        commit('setUser', new User(user.user.uid));
        commit('setLoading', false);
        // commit('setOnline', true);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error;
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);
      try {
        //logic
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit('setUser', new User(user.user.uid));

        commit('setLoading', false);
        // commit('setOnline', true);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error;
      }
    },
    /* ****************** */
    /* Проверяем онлайн пользователя */

    async loggedUser({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          commit('setUser', new User(user.uid));
          console.log('User ONLINE');
          return;
        }
        console.log('No user is signed in');
      });
    },
    /* ****************** */
    async signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          commit('setUser', null);
          // commit('setOnline', false);
          console.log('Sign-out successful');
        })
        .catch((error) => {
          throw error;
          // An error happened.
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    checkUser(state) {
      return state.user !== null;
    },
    // online(state) {
    //   return state.online;
    // },
  },
};
