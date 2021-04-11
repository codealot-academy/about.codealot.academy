<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row justify-content-center text-center ">
              <div class="col-lg-6">

                <h1 class="display-3  text-white">
                  {{translate(getLanguage(), "Faça o teste e receba ofertas das melhores empresas de tecnologia")}}
                </h1>
                
                <router-link to="/start">
                  <base-button type="success" size="lg" class="align-center">
                  <div class="px-5">
                    <i style="color: white" class="fa fa-check-circle"></i>
                    <span class="btn-inner--text">{{translate(getLanguage(),"Faça o teste")}}</span>
                  </div>
                  </base-button >
                </router-link>

                <p class="lead  text-white">
                  {{translate(getLanguage(), "Você tem 3 tentativas pra passar: faça agora pra ver como se sai!")}}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <div class="d-flex align-items-center">
                    <icon
                      name="ni ni-bullet-list-67"
                      type="primary"
                      rounded
                    >
                    </icon>
                    <div>
                      <h6 class="text-primary text-uppercase mt-3 px-1">{{translate(getLanguage(), "Faça o teste")}}</h6>
                    </div>
                  </div>
                  <p class="description mt-3">
                    {{translate(getLanguage(), "Nosso teste mede a capacidade dos desenvolvedores em resolução de problemas e arquitetura de sistemas")}}
                  </p>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <div class="d-flex align-items-center">
                    <icon
                      name="ni ni-paper-diploma"
                      type="success"
                      rounded
                    >
                    </icon>
                    <div>
                      <h6 class="text-success text-uppercase mt-3 px-1">{{translate(getLanguage(), "Veja o seu reporte")}}</h6>
                    </div>
                  </div>
                  <p class="description mt-3">
                    {{translate(getLanguage(), "Te falamos no que você foi bem, o que você pode melhorar e como você pode melhorar")}}
                  </p>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <div class="d-flex align-items-center">
                    <icon
                      name="ni ni-watch-time"
                      type="warning"
                      rounded
                    >
                    </icon>
                    <div>
                      <h6 class="text-warning text-uppercase mt-3 px-1">{{translate(getLanguage(), "No seu tempo")}}</h6>
                    </div>
                  </div>
                  <p class="description mt-3">
                    {{translate(getLanguage(), "Quando você quiser, mostramos seu perfil pra nossas empresas parceiras e suas entrevistas começam")}}
                  </p>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="../assets/img/theme/promo-1.png" class="img-fluid floating" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <!-- <icon
                name="ni ni-settings-gear-65"
                class="mb-5"
                size="lg"
                type="success"
                shadow
                rounded
              ></icon> -->
              <h3> {{translate(getLanguage(), "Por que ")}}<img style="width:60%;height:60%;" src="../assets/img/brand/only-text.png" />?</h3>
              <p>
                {{translate(getLanguage(), "No lugar de entender as particularidades de cada processo seletivo você pode fazer um só teste que abre as portas!")}}
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-chart-bar-32"
                    ></badge>
                    <h6 class="mb-0">{{translate(getLanguage(), "Teste que reflete as expectativas da industria")}}</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-book-bookmark"
                    ></badge>
                    <h6 class="mb-0">{{translate(getLanguage(), "Resultados que te direcionam a ser o melhor profissional")}}</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-building"
                    ></badge>
                    <h6 class="mb-0">{{translate(getLanguage(), "Acesso direto ao emprego dos sonhos")}}</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            <div class="position-relative pl-md-5">
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
                <h4 class="display-3 text-white mt-2">{{translate(getLanguage(), "Perguntas frequentes")}}</h4>
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon
                    name="ni ni-money-coins"
                    gradient="success"
                    color="white"
                    shadow
                    rounded
                  ></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">{{translate(getLanguage(), "Quanto custa pra participar?")}}</h5>
                  <p>
                    {{translate(getLanguage(), "De graça para desenvolvedores. As empresas pagam pra ter acesso ao seu perfil.")}}
                  </p>
                  <a href="#" class="text-warning">{{translate(getLanguage(), "Saiba mais")}}</a>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon
                    name="ni ni-key-25"
                    gradient="warning"
                    color="white"
                    shadow
                    rounded
                  ></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">{{translate(getLanguage(), "A participação é confidencial?")}}</h5>
                  <p>
                    {{translate(getLanguage(), "Sim, só mostramos o seu perfil pra empresa quando você estiver pronto. E mesmo nesse momento você pode escolher esconder seu perfil de certas empresas.")}}
                  </p>
                  <a href="#" class="text-warning">{{translate(getLanguage(), "Saiba mais")}}</a>
                </div>
              </div>
            </card>
            <div class="mt-5">
              <router-link to="/faq-static">
                <base-button type="primary" size="lg" class="align-center">
                  {{translate(getLanguage(), "Leia o FAQ")}}
                </base-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">
              {{translate(getLanguage(), "Quer se preparar primeiro?")}}
            </h2>
            <p class="lead text-white">
              {{translate(getLanguage(), "Veja esses artigos que separamos:")}}
            </p>
          </div>
        </div>
        <div class="row row-grid mt-5">
          <div class="col-lg-4">
            <icon
              name="ni ni-bag-17"
              size="lg"
              gradient="white"
              shadow
              round
              color="success"
            ></icon>
            <h5 class="text-success mt-3">{{translate(getLanguage(), "Estruturas de dados")}}</h5>
            <p class="text-white mt-3">
              {{translate(getLanguage(), "Quase todos os problemas em entrevistas requerem que o candidato demonstre um conhecimento avançado em estruturas de dados.")}}
            </p>
            <a
            target="_blank" 
            href="https://www.freecodecamp.org/news/the-top-data-structures-you-should-know-for-your-next-coding-interview-36af0831f5e3/" class="text-success">Learn more</a>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-bulb-61"
              size="lg"
              gradient="white"
              shadow
              round
              color="warning"
            ></icon>
            <h5 class="text-warning mt-3">{{translate(getLanguage(), "Resolução de problemas")}}</h5>
            <p class="text-white mt-3">
              {{translate(getLanguage(), "Resolver problemas é uma das habilidades chave pra ser um desenvolvedor de software de sucesso")}}
            </p>
            <a
            target="_blank" 
            href="https://levelup.gitconnected.com/how-to-develop-your-problem-solving-skills-7b06fa230e5a" class="text-warning">Learn more</a>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-laptop"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">
              {{translate(getLanguage(), "Design de sistemas")}}
            </h5>
            <p class="text-white mt-3">
              {{translate(getLanguage(), "Entender todas as camadas envolvidas em projetar grandes sistemas pode fazer uma grande diferença na sua oferta de emprego")}}
            </p>
            <a
            target="_blank" 
            href="https://github.com/lei-hsia/grokking-system-design" 
            class="text-white">{{translate(getLanguage(), "Saiba mais")}}</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h4 class="mb-1">{{translate(getLanguage(), "Quer falar com a gente?")}}</h4>
              <p class="mt-0">{{translate(getLanguage(), "Seu feedback é muito importante pra nós.")}}</p>
              <base-input
                class="mt-5"
                alternative
                placeholder= "Your name"
                addon-left-icon="ni ni-user-run"
              >
              </base-input>
              <base-input
                alternative
                placeholder="Email"
                addon-left-icon="ni ni-email-83"
              >
              </base-input>
              <base-input class="mb-4">
                <textarea
                  class="form-control form-control-alternative"
                  name="name"
                  rows="4"
                  cols="80"
                  placeholder="Message here..."
                ></textarea>
              </base-input>
              <base-button type="default" round block size="lg">
                {{translate(getLanguage(), "Enviar Mensagem")}}
              </base-button>
            </card>
          </div>
        </div>
        
      </div>
    </section>

    <section class="section section-lg pt-lg-0">  
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row justify-content-center text-center ">
              <div class="col-lg-6">
                <router-link to="/start">
                  <base-button type="success" size="lg" class="align-center">
                  <div class="px-5">
                    <i style="color: white" class="fa fa-check-circle"></i>
                    <span class="btn-inner--text">
                      {{translate(getLanguage(), "Faça o teste")}}
                    </span>
                  </div>
                  </base-button >
                </router-link>

                <p class="lead  text">
                  {{translate(getLanguage(), "Você tem 3 tentativas pra passar: faça agora pra ver como se sai!")}}
                </p>
                
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
  name: "home",
  data: () => ({
  }),
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
