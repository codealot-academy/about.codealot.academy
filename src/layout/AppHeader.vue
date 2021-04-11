<template>
  <header class="header-global">
    <nav class="container shape-container d-fl">
      <a href="/">
        <img src="../assets/img/brand/only-symbol-outline.png" alt="Logo" />
      </a>
      <div class="nav__items" style="background-color: rgba(0,0,0, 0.015); text-shadow: 2px 2px 3px #000000; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">
        <div v-if="user">
          <router-link to="/profile" class="nav-link">
            {{ user.Name }}
          </router-link>
          <a href="#" @click="logout($event)" class="nav-link">Logout</a>
          <a href="#" @click="toggleLanguage()" class="nav-link">English/Português</a>
        </div>
        <div class="nav_inner" v-else>
          <router-link to="/login" class="nav-link">Login</router-link>
          <router-link to="/register" class="nav-link">Register</router-link>
          <a href="#" @click="toggleLanguage()" class="nav-link">English/Português</a>
        </div>
      </div>
      <div class="nav__toggler">
        <a class="hamburguer_icon" @click="openNav">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
        <ul id="popupNav" style="background-color: #341E8C;">
          <div v-if="user">
            <li>
              <router-link to="/profile" class="nav-link"
                >{{ user.Name }}
              </router-link>
            </li>
            <li>
              <a href="#" @click="logout($event)" class="nav-link">Logout</a>
            </li>
            <li>
              <a href="#" @click="toggleLanguage()" class="nav-link">English/Português</a>
            </li>
          </div>
          <div v-else>
            <li @click="closeNav">
              <router-link @click="closeNav" to="/login" class="nav-link">Login</router-link>
            </li>
            <li @click="closeNav">
              <router-link  to="/register" class="nav-link">Register</router-link>
            </li>
            <li @click="closeNav">
              <a href="#" @click="toggleLanguage()" class="nav-link">English/Português</a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
// import Cookies from "../utils/Cookies";
// import jwtDecode from "jwt-decode";

export default {
  components: {},
  computed: {
    user: function() {
      return this.$store.getters.user
    }
  },
  created() {
    if (localStorage.getItem("language") === null) {
      localStorage.setItem('language', "pt");
    }
    // const token = Cookies.read("token");

    // if (token) {
    //   const user = jwtDecode(token);
    //   this.$store.dispatch("LOGIN", user);
    // }
  },
  methods: {
    logout(e) {
      e.preventDefault();

      this.$store.dispatch('setToken', '')
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    },
    toggleLanguage() {
      let language = localStorage.getItem("language");
      if(language == "pt"){
        localStorage.setItem("language", "en");
        location.reload();
      } else {
        localStorage.setItem("language", "pt")
        location.reload();
      }
    },
    openNav() {
      var hamburger_icon = document.querySelector(".hamburguer_icon");

      if (hamburger_icon.classList.contains("is-active")) {
        hamburger_icon.classList.remove("is-active");
        document.getElementById("popupNav").style.display = "none";
      } else {
        document.getElementById("popupNav").style.display = "inline-block";
        hamburger_icon.classList.add("is-active");
      }
    },
    closeNav() {
      var hamburger_icon = document.querySelector(".hamburguer_icon");
      hamburger_icon.classList.remove("is-active");
      document.getElementById("popupNav").style.display = "none";
    }
  }
};
</script>
<style scoped>
/* Set Link Colors */

a:link,
a:visited {
  color: white;
}

a:hover,
a:active {
  color: #8b96ef;
}

/* Set Link Colors */
router-link {
  margin: 20px;
}

router-link:link,
router-link:visited {
  color: white;
}

router-link:hover,
router-link:active {
  color: #8b96ef;
}

/* NavBar styles */

nav {
  position: relative;
  height: 0;
}

nav a {
  position: relative;
  z-index: 2;
}
nav img {
  height: 10vh;
  margin: 15px;
  display: inline-block;

}
.nav__items {
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 2;
}

a.nav-link {
  display: inline;
  /*color: white;  TODO: it is like this to prevent it from blending into the background during quiz/profile */
}

/* Set Hamburger Style to hidden */
.nav__toggler {
  display: none;
}

/* Hamburguer menu on phone screens */
@media only screen and (max-width: 600px) {
  .nav__items {
    display: none;
  }

  nav img {
    height: 60px;
  }

  i {
    width: 80px;
    color: rgb(195, 200, 245);
    font-size: 35px;
    text-align: center;
  }
  
  .hamburguer_icon{
    position: relative;
    z-index: 2;
  }

  .hamburguer_icon:hover {
    cursor: pointer;
  }

  .nav__toggler {
    display: inline;
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 3;
  }

  .nav__toggler ul {
    list-style: none;
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    padding: 0;
  }

  .nav__toggler ul li {
    padding: 10px 10px 5px 10px;
    text-align: right;
  }
}
</style>
