<template>
  <section id="team" class="team-area pt-120">
    <div class="container">
      <div class="justify-center row">
        <div>
          <div class="pb-8 text-center section-title">
            <div class="m-auto line"></div>
            <h1 class="mainfont">Meet Our Team Members</h1>
          </div>
          <div>
              <v-card class="mx-auto" max-width="300">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="300px"
                ></v-img>

                <v-card-title>
                  Top western road trips
                </v-card-title>

                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>
              </v-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          title: "Personal Trainer",
          text:
            "Get personal Trainer and free consultation about your body fit.",
        },
        {
          title: "Track Your Healthy Habits",
          text: "Get scheduleboard about your training and your healthy habits",
        },
        {
          title: "Healthy Recipes",
          text:
            "Get a variety of healthy recipes by nutritionist that are tailored directly to your needs.",
        },
        {
          title: "Healthy Recipes",
          text:
            "Get a variety of healthy recipes by nutritionist that are tailored directly to your needs.",
        },
        {
          title: "Healthy Recipes",
          text:
            "Get a variety of healthy recipes by nutritionist that are tailored directly to your needs.",
        },
        {
          title: "Healthy Recipes",
          text:
            "Get a variety of healthy recipes by nutritionist that are tailored directly to your needs.",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#team {
  z-index: 0;
  font-family: "Poppins";
  background-color: #f8f8f8;
}

.fontstyle {
  font-size: 32px;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}

.mainfont {
  font-size: 50px;
  font-weight: bold;
}

/* .v-parallax__image {
 width: 100% !important;
 /* transform: none !important; */
/* height: 100% !important; */
/* } */
</style>

<style>
section {
  position: relative;
}
</style>
