<template>
  <div>
    <section class="section section-lg">
      <div class="container shape-container d-flex">
          <div class="col px-0">
          <div class="row justify-content-center text-center ">
              <div class="col-lg-6">
<br>
              <h1 class="display-3">
                  {{translate(getLanguage(), "Que bacana que deseja fazer nosso teste!")}}
              </h1>
              
              
              </div>
          </div>
          </div>
      </div>

    <section class="section section-lg">
      <div class="container">
          <p class="lead">
              {{translate(getLanguage(), "A questão abaixo não é uma questão de verdade do teste. Serve somente pare que você tenha um exemplo do que esperar durante o teste real.")}}
          </p>

          <p class="lead">
              {{translate(getLanguage(), "Durante o teste você encontrar questões dos seguintes tipos: Questões de completar linhas de código, Desenvolvimento web backend, Algoritmos, Low-level systems, System design e infraestrutura. Não esperamos que saibam todos esses tópicos em detalhe, então é natural não acertar algumas das questões.")}}
          </p>

          <p class="lead">
              {{translate(getLanguage(), "Você terá somente 2 minutos para cada questão. Observe o temporizador com o tempo máximo de cada questão e tente otimizar o seu tempo.")}}
          </p>
      </div>
    </section>

      <question>
        <h5 slot="title" class="card-title text-muted">
          <div style="float: right; position: relative; top: -20">
            <img src="../assets/img/icons/common/counter.png" />
            <p class="text-danger">
                {{translate(getLanguage(), "Tempo máximo")}}
            </p>
          </div>
          {{translate(getLanguage(), "Praticando sem compromisso")}}
        </h5>
        <p slot="body" class="card-text">
          {{translate(getLanguage(), "Qual das seguintes requisições HTTP não deveria alterar o estado do servidor?")}}
        </p>

        <p slot="answer1" >
          UPDATE
        </p>
        <p slot="answer2">
          POST
        </p>
        <p slot="answer3">
          GET
        </p>
        <p slot="answer4">
          DELETE
        </p>
        <p slot="answer5">
          {{translate(getLanguage(), "Eu não sei")}}
        </p>

        <router-link slot="button" to="/register">
          <base-button type="primary" size="lg" class="align-center">
          <div class="px-5">
            <i style="color: white" class="fa fa-check-circle"></i>
            <span class="btn-inner--text">
              {{translate(getLanguage(), "Vou me registrar para o teste!")}}
            </span>
          </div>
          </base-button >
        </router-link>
      </question>
    </section>
  </div>
</template>

<script>
import translate from "../i18n/i18n.js";
import Question from "./components/Question";
export default {
  methods:{
    getLanguage(){
      return localStorage.getItem('language') || 0;
    },
    translate: function(language, phrase){
      return translate(language, phrase);
    },
  },
  components: {
    question: Question
  }
};
</script>
<style>

</style>


