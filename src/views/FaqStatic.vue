<template>
  <div>
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5 pt-5">
              <img src="../assets/img/ill/ill-2.svg" class="img-center img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="ni ni-chat-round"
                  size="lg"
                  class="bg-gradient-white"
                  color="primary"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-3">
                <h4 class="display-3 text-white mt-2">Perguntas frequentes</h4>
              </div>
            </div>
            <div class="mt-5">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-sm-3">
            <small class="text-uppercase text-muted lead">Quanto custa pra participar?
            </small>
          </div>
          <div class="col-sm-9">
            <p class="text-primary">De graça para desenvolvedores. As empresas pagam pra ter acesso ao seu perfil.
            </p>
          </div>
          <div class="col-sm-3 pt-5">
            <small class="text-uppercase text-muted lead">A participação é confidencial?
            </small>
          </div>
          <div class="col-sm-9 pt-5">
            <p class="text-primary">Sim, só mostramos o seu perfil pra empresa quando vc estiver pronto e mesmo nesse momento você pode escolher empresas que não podem ver seu perfil.
            </p>
          </div>
          <div class="col-sm-3 pt-5">
            <small class="text-uppercase text-muted lead">Por que não simplesmente aplicar para empresas?
            </small>
          </div>
          <div class="col-sm-9 pt-5">
            <p class="text-primary"> Nós casamos o seu perfil com empresas compatíveis com suas habilidades e preferências. Com o resultado do teste, podemos atestar a veracidade de sua competência. Identificamos as areas em que você precisa aprimorar. Te fazemos pular etapas de processo seletivo.
            </p>
          </div>
          <div class="col-sm-3 pt-5">
            <small class="text-uppercase text-muted lead">Quero aprimorar meu conhecimento, como podem me ajudar?
            </small>
          </div>
          <div class="col-sm-9 pt-5">
            <p class="text-primary">Iremos oferecer sugestões de material e artigos curados ou escritos por nós. Futuramente também ofereceremos cursos e material interativo.
            </p>
          </div>
          <div class="col-sm-3 pt-5">
            <small class="text-uppercase text-muted lead">O que devo esperar do teste?
            </small>
          </div>
          <div class="col-sm-9 pt-5">
            <p class="text-primary">Perguntas diversas sobre desenvolvimento de software, estruturas de dados e algoritmos, design de sistemas e outros assuntos relacionados.
            </p>
          </div>
          <div class="col-sm-3 pt-5">
            <small class="text-uppercase text-muted lead">Se eu for mal no teste, posso tentar de novo?
            </small>
          </div>
          <div class="col-sm-9 pt-5">
            <p class="text-primary">Sim. Ao final do teste te daremos um relatório e com ele você poderá focar nas áreas que tem mais dificuldade. Te daremos 3 tentativas iniciais e uma tentativa adicional a cada mês.
            </p>
          </div>
          <div class="col-sm-3 pt-5">
            <small class="text-uppercase text-muted lead">Quanto tempo tenho para acabar o teste?
            </small>
          </div>
          <div class="col-sm-9 pt-5">
            <p class="text-primary">Cada questão tem que ser respondida em menos de 2 minutos. Assim que você escolhe a opção de começar o teste, o primeiro timer inicia e não é possível voltar numa questão já respondida ou numa questão com tempo expirado.
            </p>
          </div>
          <div class="col-sm-3 pt-5">
            <small class="text-uppercase text-muted lead">O que acontece depois do teste?
            </small>
          </div>
          <div class="col-sm-9 pt-5">
            <p class="text-primary">Depois do teste você terá a oportunidade de completar o seu perfil para que ele seja visível por empresas em nossa plataforma. Com resultado bom o suficiente entraremos em contato e casaremos seu perfil com empresas relevantes.
            </p>
          </div>
        </div>
      </div>
    </section>
    

    <section class="section section-lg pt-lg-0">  
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row justify-content-center text-center ">
              <div class="col-lg-6">


                <router-link to="/">
                  <base-button type="success" size="lg" class="align-center" disabled>
                  <div class="px-5">
                    <i style="color: white" class="fa fa-check-circle"></i>
                    <span class="btn-inner--text">{{translate(getLanguage(),"Faça o teste")}}</span>
                  </div>
                  </base-button >
                </router-link>

                <p class="lead  text-white">
                  {{translate(getLanguage(), "Teste em construção, estará disponível em breve.")}}
                </p>

                <!-- <router-link to="/quiz">
                  <base-button type="success" size="lg" class="align-center">
                  <div class="px-5">
                    <i style="color: white" class="fa fa-check-circle"></i>
                    <span class="btn-inner--text">Faça o teste</span>
                  </div>
                  </base-button >
                </router-link>

                <p class="lead  text">
                  Você tem 3 tentativas pra passar: faça agora pra ver como se sai!
                </p> -->
                
              </div>
            </div>
          </div>
        </div>
      </section>

    
  </div>
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
  }
};

</script>
