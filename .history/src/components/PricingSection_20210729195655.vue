<template>
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card style="width: 100%">
            <h1 id="mainfont" class="text-center pt-6 font-weight-bold">Packages</h1>
            <v-divider class="my-6"></v-divider>
            <v-row class="text-center" id="fontype">
              <v-col class="col-11 col-sm-5 col-md-3">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                          <v-img src="~@/assets/img/beginner.png"></v-img>
                      </div>
                    </div>
                    <div class="text text-uppercase  my-2">Beginner</div>
                     <v-divider class="my-2"/>
                    <div class="text"> Session with Personal Trainer</div>
                    <v-divider class="my-2"/>
                    <div class="text">2 Healthy Recipes</div>
                    <v-divider class="my-2"/>
                    <div class="text">Body Progress Tracker</div>
                    <v-divider class="my-2"/>
                    <div class="text">Unlimited Consultation with Personal Trainer</div>
                    <v-divider class="my-2"/>
                    <div id="pricetag" class="text mt-6">Rp 250.000</div>
                    <div id= "caption" class="text mt-2 font-weight-light">*per month</div>
                    <v-btn
                        v-bind="size"
                        rounded
                        outlined
                        color="#00A86B"
                        class="mt-6"
                    >
                      I want this!
                    </v-btn>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
                </div>
                <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
              </v-col>
              <v-col class="col-11 col-sm-5 col-md-3">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                          <v-img src="~@/assets/img/intermediate.png"></v-img>
                      </div>
                    </div>
                    <div class="text text-uppercase  my-2">Intermediate</div>
                    <v-divider class="my-2"/>
                    <div class="text">Free Access to All Online Classes</div>
                    <v-divider class="my-2"/>
                    <div class="text">Rental Sports Equipment</div>
                    <v-divider class="my-2"/>
                    <div class="text">Personal Trainer</div>
                    <v-divider class="my-2"/>
                    <div class="text">Healthy Calculator</div>
                    <v-divider class="my-2"/>
                    <div class="text--disabled">Healthy Recipes</div>
                    <v-divider class="my-2"/>
                    <div id="pricetag" class="text mt-6">Rp 150.000</div>
                    <div id= "caption" class="text mt-2 font-weight-light">*per month</div>
                    <v-btn
                        v-bind="size"
                        rounded
                        outlined
                        color="#00A86B"
                        class="mt-6"
                    >
                      I want this!
                    </v-btn>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.mdAndUp"></v-divider>
                </div>
                <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
              </v-col>
              <v-col class="col-11 col-sm-5 col-md-3">
                <v-divider v-if="this.$vuetify.breakpoint.smOnly" class="mx-4"></v-divider>

                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                          <v-img src="~@/assets/img/advanced.png"></v-img>
                      </div>
                    </div>
                    <div class="text text-uppercase  my-2">Advanced</div>
                     <v-divider class="my-2"/>
                    <div class="text">Free Access to All Online Classes</div>
                    <v-divider class="my-2"/>
                    <div class="text">Rental Sports Equipment</div>
                    <v-divider class="my-2"/>
                    <div class="text">Personal Trainer</div>
                    <v-divider class="my-2"/>
                    <div class="text">Healthy Calculator</div>
                    <v-divider class="my-2"/>
                    <div class="text">Healthy Recipes</div>
                    <v-divider class="my-2"/>
                    <div id="pricetag" class="text mt-6">Rp 200.000</div>
                    <div id= "caption" class="text mt-2 font-weight-light">*per 3 month</div>
                    <v-btn
                        v-bind="size"
                        rounded
                        outlined
                        color="#00A86B"
                        class="mt-6"
                    >
                      I want this!
                    </v-btn>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.mdAndUp"></v-divider>
                </div>
              </v-col>
              <v-col class="col-11 col-sm-5 col-md-3">
                <v-divider v-if="this.$vuetify.breakpoint.smOnly" class="mx-4"></v-divider>
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                          <v-img src="~@/assets/img/extra.png"></v-img>
                      </div>
                    </div>
                    <div class="text text-uppercase  my-2">Extra</div>
                     <v-divider class="my-2"/>
                    <div class="text">Consultation with Nutritionist</div>
                    <v-divider class="my-2"/>
                    <div class="text">Healthy Calculator</div>
                    <v-divider class="my-2"/>
                    <div class="text">Healthy Recipes</div>
                    <v-divider class="my-2"/>
                    <div class="text--disabled">Rental Sports Equipment</div>
                    <v-divider class="my-2"/>
                    <div class="text--disabled">Personal Trainer</div>
                    <v-divider class="my-2"/>
                    <div id="pricetag" class="text mt-6">Rp 60.000</div>
                    <v-btn
                        v-bind="size"
                        rounded
                        outlined
                        color="#00A86B"
                        class="mt-6"
                    >
                      I want this!
                    </v-btn>
                  </v-card-text>
                </div>
                <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-rounded text-light">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.54 17.34"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
        />
      </svg> -->
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="#F8F8F8"
      >
        <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
    
  </section>
</template>

<style lang="scss">
$main_color: #00A86B;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.header {
  background-color: #00A86B;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 170px;
  height: 170px;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
  font-family: 'Poppins';
  margin-top: 4%;
}

.content {
  z-index: 1;
}

#mainfont{
  font-size: 40px;
}

#fontype{
  font-family: Poppins;
}

#pricetag {
  font-family: Poppins;
  font-weight: bold;
  font-size: 30px;
  padding: 4px;
  color: #00A86B;
}

.text-uppercase{
  font-family: Poppins;
  font-weight: normal;
  font-size: 24px;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>

<script>
export default {
  data: () => ({
    planos: [
      {
        title: "Beginner",
        price: "R$100,00",
        img: "f1.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 3",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Intermediate",
        price: "R$150,00",
        img: "f2.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Advanced",
        price: "R$250,00",
        img: "f3.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 4",
            color: "success",
          },
        ],
      },
      {
        title: "Extra",
        price: "R$250,00",
        img: "f3.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 4",
            color: "success",
          },
        ],
      },
    ],
  }),
  computed: {
    size() {
      const size = {md: "large", xl: "x-large"}[
          this.$vuetify.breakpoint.name
          ];
      return size ? {[size]: true} : {};
    }
  },
};
</script>