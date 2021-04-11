import clickOutside from "../directives/click-ouside.js";
import googleSignInButton from "../directives/google-signin-button.js";

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install(Vue) {
    Vue.directive("click-outside", clickOutside);
    Vue.directive("google-signin-button", googleSignInButton);
  }
};

export default GlobalDirectives;
