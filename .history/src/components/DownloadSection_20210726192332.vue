<template>
  <section id="download">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <!-- <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="@/assets/img/ill2.svg"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col> -->
            <v-col cols="14" sm="8" class="white--text text-left">
              <h1 class="mainfont">Download Now!</h1>
              <h3 class="font-weight-light">
                We are already available on various application stores. What still makes you doubt? <br>
                Just download it and enjoy the amazing features.
              </h3>
              <v-btn rounded outlined href="https://github.com/Joabsonlg/Landing-Page" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Git Hub
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/download2.png");
  font-family: 'Poppins';
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}

.mainfont{
  font-size: 50px;
  font-weight: bold;
}
</style>
