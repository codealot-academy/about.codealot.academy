import Vue from 'vue'

const clientID = '559176601508-7pb85sbobd7988d9fag8jm44d27811kt.apps.googleusercontent.com';

export default Vue.directive('google-signin-button', {
  bind: function (el, binding, vnode) {
    CheckComponentMethods()
    let googleSignInAPI = document.createElement('script')
    googleSignInAPI.setAttribute('src', 'https://apis.google.com/js/api:client.js')
    document.head.appendChild(googleSignInAPI)

    googleSignInAPI.onload = InitGoogleButton

    function InitGoogleButton() {
    // eslint-disable-next-line
      gapi.load('auth2', () => {
        // eslint-disable-next-line
        const auth2 = gapi.auth2.init({
          client_id: clientID,
          cookiepolicy: 'single_host_origin'
        })
        auth2.attachClickHandler(el, {},
          OnSuccess,
          Onfail
        )
      })
    }
    function OnSuccess(googleUser) {
      vnode.context.OnGoogleAuthSuccess(googleUser, googleUser.getAuthResponse().id_token)
      googleUser.disconnect()
    }
    function Onfail(error) {
      vnode.context.OnGoogleAuthFail(error)
    }
    function CheckComponentMethods() {
      if (!vnode.context.OnGoogleAuthSuccess) {
        throw new Error('The method OnGoogleAuthSuccess must be defined on the component')
      }

      if (!vnode.context.OnGoogleAuthFail) {
        throw new Error('The method OnGoogleAuthFail must be defined on the component')
      }
    }
  }
})
