<template>
  <div class="wrapper-container">
    <div class="container" id="container">
      <div class="form-container sign-up-container" @submit.prevent="signUp">
        <form action="#">
          <h1>Criar Conta</h1>
          <div class="input-container">
            <div>
              <font-awesome-icon :icon="['fa-solid', 'user']" />
            </div>
            <input v-model="signUpData.name" type="text" placeholder="Name" />
          </div>
          <div class="input-container">
            <div>
              <font-awesome-icon :icon="['fa-solid', 'at']" />
            </div>
            <input
              v-model="signUpData.email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="input-container">
            <div>
              <font-awesome-icon :icon="['fa-solid', 'lock']" />
            </div>
            <input
              v-model="signUpData.password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button>Cadastrar</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form class="form-login" @submit.prevent="signIn">
          <h1>Entrar</h1>
          <div class="input-container">
            <div>
              <font-awesome-icon :icon="['fa-solid', 'at']" />
            </div>
            <input
              v-model="signInData.email"
              type="email"
              name="email"
              placeholder="Entre com seu email"
              required
            />
          </div>
          <div class="input-container">
            <div>
              <font-awesome-icon
                class="siderbar-icon"
                :icon="['fa-solid', 'lock']"
              />
            </div>
            <input
              v-model="signInData.password"
              type="password"
              name="password"
              placeholder="Entre com sua senha"
              required
            />
          </div>
          <button>Entrar</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Bem-vindo novamente!</h1>
            <p>
              Para permanecer conectado conosco, por favor faça login com suas
              informações pessoais.
            </p>
            <button class="ghost" id="signIn">Entrar</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Olá, Amigo!</h1>
            <p>Entre com suas informações e comece sua jornada conosco</p>
            <button class="ghost" id="signUp">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "@/store/useAuthStore";
export default {
  data() {
    return {
      signInData: {
        email: "",
        password: "",
      },
      signUpData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(useAuthStore, ["token"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["updateToken"]),
    async signIn() {
      try {
        const data = await $fetch("http://45.79.148.159/auth/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.signInData),
        });
        const token = data.token;
        console.log(token);
        this.updateToken(token);
        this.$router.push("/meus-resumos");

        const serializedValue = JSON.stringify(token);
        localStorage.setItem("token", serializedValue);
      } catch (err) {
        const errorMessage = err.response
          ? err.response._data.message
          : "Erro desconhecido";
      }
    },
    async signUp() {
      try {
        const data = await $fetch("http://45.79.148.159/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.signUpData),
        });
        const token = data.token;
        console.log("s");
        //this.$router.push("/meus-resumos");
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    const signUpButton = this.$el.querySelector("#signUp");
    const signInButton = this.$el.querySelector("#signIn");
    const container = this.$el.querySelector("#container");

    signUpButton.addEventListener("click", () =>
      container.classList.add("right-panel-active")
    );

    signInButton.addEventListener("click", () =>
      container.classList.remove("right-panel-active")
    );
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper-container {
  font-family: "Montserrat", sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;
  margin-top: 20px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 0 0 0 10px;
  width: 100%;
  outline: none;
}

.input-container {
  background: #eee;
  padding: 12px 15px;
  margin: 8px 0;
  display: flex;
  border-radius: 10px;
}

button {
  border-radius: 20px;
  border: 1px solid #37a9cf;
  background: #37a9ce;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #3498db;
  background: linear-gradient(to right, #3498db, #37a9ce) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

/* Move signin to right */
.container.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

/* Move overlay to left */
.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

/* Bring signup over signin */
.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to right */
.container.right-panel-active .overlay {
  transform: translateX(50%);
}

/* Bring back the text to center */
.container.right-panel-active .overlay-left {
  transform: translateY(0);
}

/* Same effect for right */
.container.right-panel-active .overlay-right {
  transform: translateY(20%);
}

.icons {
  display: flex;
  width: 30px;
  height: 30px;
  letter-spacing: 15px;
  align-items: center;
}
</style>
