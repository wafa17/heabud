<template>
  <section id="download">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col md="3" sm="3">
              <v-img
                src="@/assets/img/mockup.png"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col  cols="14" md="8"  class="white--text text-left">
              <h1 class="mainfont mb-2">Download Now!</h1>
              <h3 class="font-weight-light" >
                We are already available on various application stores. 
                <br>What still makes you doubt? <br />
                Just download it and enjoy the amazing features.
              </h3>
              <div id="icon">
                <v-row>
                  <v-col md="5" sm="4" >
                    <a href="">
                      <v-img
                        src="@/assets/img/googleplay.svg"
                        class=" d-block ml-auto mr-auto"
                        height="auto"
                        max-width="300px"
                      />
                    </a>
                  </v-col>
                  <v-col  md="5" sm="4" >
                    <a href="">
                    <v-img
                      src="@/assets/img/appstore.svg"
                      class="d-block ml-auto mr-auto"
                      height="auto"
                      max-width="300px"
                    />
                    </a>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  /* background-image: url("~@/assets/img/download2.png"); */
  background-color: #73B58B;
  font-family: "Poppins";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: auto;
}

#download .container,
#download .row {
  height: 100%;
  /* margin-left: 8%; */
}

.mainfont {
  font-size: 50px;
  font-weight: bold;
   line-height: 128.5%;
  /* or 31px */
  letter-spacing: 0.03em;
  margin-top: 6%;
}
#icon{
  margin-left: 0%;
}
.v-img{
  height: auto;
}
</style>



