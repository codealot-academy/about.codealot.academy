<template>
  <div>
    <section class="section section-shaped section-lg my-0">
      <div class="shape shape-style-1 bg-gradient-default">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg-md">
        <div class="row justify-content-center">
          <div class="col-lg-5">
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <small class="text-uppercase text-muted lead">Termos </small>
        <p class="text-primary">
          Ao acessar esse website você está concordando em obedecer a estes Termos e Condições de uso. Também concorda em seguir todas as leis e regulamentos 
          aplicáveis e que é responsável pelo cumprimento de quaisquer leis locais relevantes. Se você não concordar com qualquer um desses termos, você
          está proibido de usar ou acessar esse website. Os materiais desse website estão protegidos por direitos autorais e leis de copyright.
        </p>

        <small class="text-uppercase text-muted lead">Cadastro </small>
        <p class="text-primary">
          Ao se cadastrar nesse website você atesta que:
          <ul>
            <li>É maior de idade e capaz para exercício dos atos da vida civil.</li>
            <li>Garante a veracidade e atualização das informações fornecidas.</li>
            <li>Concorda em manter como confidenciais todas as informações obtidas a partir da utilização do site. Não é permitido copiar
              questões do teste para outras plataformas, divulgar informações do processo ou nomes de funcionários da Codealot ou de empresas parceiras. 
              </li>
            <li>Concorda em notificar a Codealot em caso de suspeita de uso não autorizado de sua conta.</li>
            <li>Concorda em não criar múltiplas contas para facilitar extração de informação</li>
          </ul>
          E aceita q descomplrimento de qualquer item desse termo de uso pode resultar em exclusão de sua conta e interrupção dos serviços.
        </p>

        <small class="text-uppercase text-muted lead">Não Garantia</small>
        <p class="text-primary">
          A Codealot não oferece garantias quanto à precisão das informações relacionadas à marketing ou quanto a resultados prováveis 
          ou confiabilidade do uso dos materias nesse website (ou website relacionados a esse).
        </p>

        <small class="text-uppercase text-muted lead">Revisões e Erratas</small>
        <p class="text-primary">
          O material aparecendo nesse website pode eventualmente incluir erros técnicos, tipográficos ou fotográficos. A Codealot não garante acuracia, 
          completude ou atualização do material que está sendo exibido no site. A Codealot se reserva o direito de alterar esses conteúdos em qualquer momento
          sem nenhum aviso. A Codealot não se compromete a atualizar esses dados com nenhuma frequencia específica.
        </p>

        <small class="text-uppercase text-muted lead">Conteúdo externo ao site</small>
        <p class="text-primary">
          Esse website faz referência a alguns conteúdo externos, como links de outros websites ou livros, e fazendo isso não garante acuracia, completude ou
           atualização desses conteúdos. Uso desse material é de completa responsabilidade do usuário desse website.
        </p>

        <small class="text-uppercase text-muted lead">Revisão dos termos</small>
        <p class="text-primary">
          A Codealot pode decidir revisar e alterar qualquer conteúdo dos termos de uso ou dos termos de privacidade em qualquer momento e sem aviso. Ao usar esse
          website você está aceitando obedecer a versão mais atual desse termo de uso.
        </p>

      </div>
    </section>
    

    <section class="section section-lg pt-lg-0">  
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row justify-content-center text-center ">
              <div class="col-lg-6">
                <router-link to="/quiz">
                  <base-button type="success" size="lg" class="align-center">
                  <div class="px-5">
                    <i style="color: white" class="fa fa-check-circle"></i>
                    <span class="btn-inner--text">Faça o teste</span>
                  </div>
                  </base-button >
                </router-link>

                <p class="lead  text">
                  Você tem 3 tentativas pra passar: faça agora pra ver como se sai!
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    
  </div>
</template>

<script>
export default {};
</script>
