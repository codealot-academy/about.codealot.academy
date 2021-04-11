<template>
  <footer class="footer has-cards">
    
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">
            {{translate(getLanguage(), "Nos siga nas redes sociais!")}}
          </h3>
          <h4 class="mb-0 font-weight-light">
            {{translate(getLanguage(), "Vamos entrar em contato em uma dessas plataformas.")}}
            
          </h4>
        </div>
        <div class="col-lg-6 text-lg-center btn-wrapper">
          <a
            target="_blank"
            href="https://twitter.com/CodealotA"
            class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-twitter"></i>
          </a>

          <a
            target="_blank"
            href="https://www.facebook.com/Codealot-Academy-100964571625713"
            class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fa fa-facebook-square"></i>
          </a>

        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; 2020 <img style="width:30%;height:30%;" src="../assets/img/brand/only-text.png" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import translate from "../i18n/i18n.js";

export default {
  methods:{
    getLanguage(){
      return localStorage.getItem('language') || 0;
    },

    translate: function(language, phrase){
      return translate(language, phrase);
    },
  },
};
</script>
<style></style>
