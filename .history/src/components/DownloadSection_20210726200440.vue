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
              <h2 class="font-weight-light">
                We are already available on various application stores. What
                still makes you doubt? <br />
                Just download it and enjoy the amazing features.
              </h2>
              <!-- <v-btn rounded outlined href="" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Git Hub
              </v-btn> -->
             <v-container>
                <v-row  align="center" justify="center">
                  <v-col sm="4">
                  <div class="elementor-widget-wrap">
                    <div
                      class="elementor-element elementor-element-a2bc001 elementor-widget elementor-widget-image"
                      data-id="a2bc001"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                    <v-col>
                      <div class="elementor-widget-container">
                        <div class="elementor-image">
                          <a href="">
                            <img
                              src="https://halofina.com/wp-content/uploads/2021/07/Play-Store.svg"
                              class="attachment-full size-full"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="elementor-widget-container">
                        <div class="elementor-image">
                          <a href="">
                            <img
                              src="https://halofina.com/wp-content/uploads/2021/07/App-Store.svg"
                              class="attachment-full size-full"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </div>
                    </v-col>
                    </div>
                  </div>
                  </v-col>
                </v-row>
             </v-container>
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
  font-family: "Poppins";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}

.mainfont {
  font-size: 50px;
  font-weight: bold;
}
</style>
