<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="14" md="7">
              <h1 class="font-weight-bold mb-1 text">About Heabud</h1>
              <h1 class="font-weight-bold mb-3 text-2">
               Your Body's Buddy!
              </h1>
              <h3 class="font-weight-light">
                <!-- Don't be afraid of not being able to exercise during the
                pandemic! We are here to keep you fit and accompanied by a
                Professional Trainer from HEABUD. Starting from choosing a
                Trainer, consulting body fitness, to getting healthy food
                recipes, everything can be done through HEABUD. -->
                <!-- <br /> -->
                Heabud (Healthy Buddy) is a lifestyle - sport application to
                assist users towards or in their healthy habit. We provide a gate
                between users and trainer, healthy food, and healthy body.
              </h3>
              <v-btn
                rounded
                outlined
                large
                light
                @click="$vuetify.goTo('#contact')"
                class="mt-5"
              >
                CONTACT US
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="8" md="4" xl="2" class="hidden-sm-and-down">
              <v-img
                src="@/assets/img/trainer.png"
                id="hom"
                class="d-block ml-auto mr-auto"
                max-height="1000px"
                max-width="300px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f8f8f8;
  /* background-image: url("~@/assets/img/about.png"); */
  font-family: "Poppins";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 550px;
}
#about .row {
  height: 100%;
}

.font-weight {
  font-size: 40px;
  font-weight: bold;
}

.text {
  color: #00a86b;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 71.5%;
}

.text-2 {
  font-family: Poppins;
  font-style: bold;
  font-weight: 500;
  font-size: 32px;
  line-height: 128.5%;
  /* or 31px */
  letter-spacing: 0.03em;
  padding-bottom: 1px;
}
</style>
