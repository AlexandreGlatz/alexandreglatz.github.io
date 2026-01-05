<template>
    <div class="header-bg">
        <header>
            <nav>
                <div class="branding">
                    <RouterLink to="/about"><img src="../assets/logox64.png" alt="main logo" width="64" height="64"></RouterLink>
                </div>
                <ul v-show="!mobile" class="navigation">
                    <!-- <li><RouterLink class="link" :to="{name: 'Home'}">Home</RouterLink></li> -->
                    <li><RouterLink class="link" to="/about">About</RouterLink></li>
                    <li><RouterLink class="link" to="/projects">Projects</RouterLink></li>
                    <!-- <li><RouterLink class="link" :to="{name: ''}">Blog</RouterLink></li> -->
                    <li><RouterLink class="link-contact" to="/contact">Contact</RouterLink></li>
                </ul>
                <div class="icon">
                    <i @click="toggleMobileNavFunc" v-show="mobile" class="fa-solid fa-bars" :class="{'icon-active fa-solid fa-bars-staggered' : mobileNav}"></i>
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="dropdown-nav">
                        <!-- <li><RouterLink class="link" :to="{name: 'Home'}">Home</RouterLink></li> -->
                        <li><RouterLink class="link" to="/about">About</RouterLink></li>
                        <li><RouterLink class="link" to="/projects">Projects</RouterLink></li>
                        <!-- <li><RouterLink class="link" :to="{name: ''}">Blog</RouterLink></li> -->
                        <li><RouterLink class="link-contact" to="{name: 'Contact'}">Contact</RouterLink></li>
                    </ul>
                </transition>
            </nav>
        </header>
    </div>
</template>

<script lang="ts">

interface ComponentState {
  mobile: boolean;
  mobileNav: boolean;
  windowWidth: number;
}

export default {
  
  name: "navigation",
  data(): ComponentState {
    return {
      mobile: true,
      mobileNav: false,
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

<style>

header {
    backdrop-filter:blur(15px);
    background: radial-gradient(ellipse at top, rgba(46,50,142,0.7), rgba(13,14,40,0.7));
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
      @media (min-width: 1000px) {
          max-width: 1000px;
      }

      ul, 
      .link {
          font-weight: 500;
          color: #fff;
          list-style: none;
          text-decoration: none;
      }

      .link-contact {
        border-radius: 50px;
        text-decoration: none;
        color: #fff;
        background-color: #0095FF;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        transition: 0.5s ease all;
      }

      .link-contact:hover {
        box-shadow: 0 0 15px rgba(0, 149, 255, 0.5);
        cursor: pointer;
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
              cursor: pointer;
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
        max-width: 150px;
        height: 3000%;
        background-color: #fff;
        top: -16px;
        right: 0;

        li {
          margin-left: 0;
          .link {
            color: #141641;
          }

          .link-contact {
            margin-left: -20px;
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
