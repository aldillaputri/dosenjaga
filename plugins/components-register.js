import Vue from 'vue'
import LoginFormMobile from '~/components/Login/LoginFormMobile'
import LoginFormDesktop from '~/components/Login/LoginFormDesktop'
import MenuDesktop from '~/components/MenuNavigation/MenuDesktop'
import MenuMobile from '~/components/MenuNavigation/MenuMobile'

Vue.component('login-form-mobile', LoginFormMobile)
Vue.component('login-form-desktop', LoginFormDesktop)
Vue.component('menu-desktop', MenuDesktop)
Vue.component('menu-mobile', MenuMobile)
