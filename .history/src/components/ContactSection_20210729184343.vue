<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="text-2">Contact Us</h1>
              <h3 class="font-weight-normal mt-3">
                PT. Healthy Buddy Nusantara ("Heabud")
              </h3>
              <p class="font-weight-light mt-3"> CoHive 101 9th Floor #1-9,17-20
                  Jl. Mega Kuningan Barat Kav. E.4.7
                  Kawasan Mega Kuningan, Jakarta Selatan 12950 </p> 
              <h4 class="font-weight-light mt-3">
                Telefone: +62 813-4567-8948
              </h4>
              <h4 class="font-weight-light">
                Email: cs@heabud.com
              </h4>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="textArea"
                    :rules="textAreaRules"
                    label="Message"
                    required
                />

                <v-btn
                    :disabled="!valid"
                    color="primary"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="submit"
                >
                  Send
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
    <v-snackbar
        v-model="snackbar.enabled"
        timeout="3000"
        right
        top
        :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar.enabled = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
#contact {
  background-color: #F8F8F8;
  height: 500px;
  font-family: 'Poppins';
  padding-top: 4%;
  padding-bottom: 5%;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
.text-2{
  font-family: Poppins;
  font-style: bold;
  font-size: 32px;
  line-height: 128.5%;
  /* or 31px */
  padding-bottom: 1px;
}

</style>

<script>
// import {db} from '@/main'

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name cannot be empty",
      (v) => (v && v.length >= 6) || "Name is not allowed less than 6 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail cannot be empty",
      (v) => /.+@.+\..+/.test(v) || "E-mail not valid",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "Message cannot be empty",
      (v) => (v && v.length >= 10) || "Minimum 10 characters",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    submit() {
      /*db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Mensagem enviada com sucesso"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Erro ao enviar mensagem"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })*/
    }
  }
};
</script>
