<template>
    <div class="header-bg">
        <header :class="{'scrolled-nav': scrollPosition}">
            <nav>
                <div class="branding">
                    <img src="../assets/logox32.png" alt="main logo">
                </div>
                <ul v-show="!mobile" class="navigation">
                    <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">About</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">Projects</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">Contact</router-link></li>
                </ul>
                <div class="icon">
                    <i @click="toggleMobileNavFunc" v-show="mobile" class="fa-solid fa-bars" :class="{'icon-active fa-solid fa-bars-staggered' : mobileNav}"></i>
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="dropdown-nav">
                        <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
                        <li><router-link class="link" :to="{name: ''}">About</router-link></li>
                        <li><router-link class="link" :to="{name: ''}">Projects</router-link></li>
                        <li><router-link class="link" :to="{name: ''}">Contact</router-link></li>
                    </ul>
                </transition>
            </nav>
        </header>
    </div>
</template>

<script lang="ts">

interface ComponentState {
  scrollPosition: boolean;
  mobile: boolean;
  mobileNav: boolean;
  windowWidth: number; // Use number instead of boolean for window width
}

export default {
  
  name: "navigation",
  data(): ComponentState {
    return {
      scrollPosition: false,
      mobile: true,
      mobileNav: true,
      windowWidth: 1440,
    }

  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNavFunc() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style lang="scss">

header {
    backdrop-filter:blur(15px);
    background-color: rgba(15,16,50,1);
    z-index: 99;
    width: 100%;
    top:0;

    position: fixed;
    transition: 0.5 ease all;
    color: #fff;

    nav 
    {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 12px 0;
      transition: .5s ease all;
      width: 100%;
      margin: 0 auto;
      @media (min-width: 1140px) {
          max-width: 1140px;
      }

      ul, 
      .link {
          font-weight: 500;
          color: #fff;
          list-style: none;
          text-decoration: none;
      }

      li {
          text-transform: uppercase;
          padding: 16px;
          margin-left: 16px;
      }

      .link {
          font-size: 14px;
          transition: .5s ease all;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;

          &:hover {
              color: #0095FF;
              border-color: #0095FF;
          }
      }

      .branding {
          display: flex;
          align-items: center;
      }

      img {
        padding-left: 10px;
        transition: .5s ease all;
      }
      
      .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
      }
      
      .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
        height: 100%;
        
        i {
          cursor: pointer;
          font-size: 24px;
          transition: .8s ease all;
        }
      }
      
      .icon-active{
        transform: rotate(180deg);
        color: #141641;
        z-index: 999;
      }

      .dropdown-nav {
        padding-top: 10%;
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 3000%;
        background-color: #fff;
        top: -16px;
        right: 0;

        li {
          margin-left: 0;
          .link {
            color: #141641;
          }
        }
      }

      .mobile-nav-enter-active,
      .mobile-nav-leave-active {
        transition: 1s ease all;
      }

      .mobile-nav-enter-from, 
      .mobile-nav-leave-to {
        transform: translateX(300px);
      }

      .mobile-nav-enter-to {
        transform: translateX(0);
      }

    }

}
</style>