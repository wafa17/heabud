<template>
  <section id="about">
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="fontstyle font-weight-bold">Advantages of Using Heabud</h1>
              <!-- <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1> -->
            </v-col>
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
  /* background-image: url("~@/assets/img/about.png"); */
  font-family: "Poppins";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}
#about .row{
  height: 500px;
}

.font-weight {
  font-size: 40px;
  font-weight: bold;

}

.text{
  color: #00A86B;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 71.5%;
}

.text-2{
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
