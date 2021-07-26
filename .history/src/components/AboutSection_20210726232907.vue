<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="8">
              <h1 class="font-weight-bold mb-1 text">About Heabud</h1>
              <h1 class="font-weight-bold mb-3 text-2">
                We are your Healthy Buddy!
              </h1>
              <v-row align="center" justify="center">
                <v-col cols="12" class="d-flex align-center">
                  <!-- <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Find a professional trainer according to your needs
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Get healthy food recipes that can maintain your healthy lifestyle
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p> -->
                  <h3 class="font-weight-light"> Don't be afraid of not being able to exercise during the pandemic! We are here to keep you fit and accompanied by a Professional Couch from HEABUD.
                    Starting from choosing a couch, consulting body fitness, to getting healthy food recipes, everything can be done through HEABUD. </h3>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <!-- <v-img
                src="@/assets/img/launchscreen.png"
                class="d-block ml-auto mr-auto"
                max-width="100%"
              /> -->
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
  background-image: url("~@/assets/img/about.png");
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
