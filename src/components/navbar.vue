<template>
  <div class="navigation">
    <ui-toolbar type="colored" text-color="white" title="Candito 6 Week Strength" :raised="false" >
    <ui-menu
        contain-focus
        has-icons
        slot="dropdown"
        :options="['test']"
        @close="$refs.dropdownButton4.closeDropdown()"
      />
    <div slot="actions">
      <ui-icon-button
        color="white"
        has-dropdown
        icon="more_vert"
        ref="dropdownButton4"
        size="large"
        type="secondary"
      >
        <ui-menu
          contain-focus
          has-icons
          slot="dropdown"
          :options=menuOptions
          @select=handleMenuClick
          @close="$refs.dropdownButton4.closeDropdown()"
        />
        </ui-icon-button>
      </div>
    </ui-toolbar>
    <div class="navigation__slider">
      <ui-icon-button class="navigation__slider__backward-button" color="white" icon="arrow_backward" size="large" type="secondary"></ui-icon-button>
      <ui-icon-button class="navigation__slider__forward-button" color="white" icon="arrow_forward" size="large" type="secondary"></ui-icon-button>
    </div>
  </div>
</template>

<script>
  import firebaseHelper from '../firebase';
  const signInMenuOption = {
    id: 'signIn',
    label: 'sign in'
  };
  const signOutMenuOption = {
    id: 'signOut',
    label: 'sign out',
    action() {
      firebaseHelper.signOut();
    }
  };

  export default {
    data() {
      return {
        menuOptions: [this.isUserSignedIn ? signInMenuOption : signOutMenuOption]
      }
    },
    props: ['isUserSignedIn'],
    methods: {
      handleMenuClick(menuItem) {
        if (menuItem.action) {
          menuItem.action()
        }
      }
    }
  }
</script>

<style lang="scss">
  .navigation__slider {
    height: 50px;
    background-color: #2196f3;

    .navigation__slider__backward-button {

    }

    .navigation__slider__forward-button {
      float: right
    }
  }
</style>
