<template>
  <header class="app-header">
    <scale-telekom-header
      app-name="AI AMM Test Application"
      meta-nav-aria-label="Meta navigation section"
      meta-nav-external-aria-label="External navigation section"
      lang-switcher-aria-label="Language switcher section"
      main-nav-aria-label="Main navigation section"
    >
      <scale-telekom-nav-list
        slot="lang-switcher"
        variant="lang-switcher"
        alignment="right"
        aria-label="Language switcher"
        class="scale-telekom-nav-list hydrated"
        role="menu"
      >
        <scale-telekom-nav-item
          active
          aria-label="Switch to English"
          variant="lang-switcher"
          class="scale-telekom-nav-item hydrated"
          role="none"
        >
          <a title="English" aria-current="true" role="menuitem"> EN </a></scale-telekom-nav-item
        >
        <scale-telekom-nav-item
          aria-label="Switch to German"
          variant="lang-switcher"
          class="scale-telekom-nav-item hydrated"
          role="none"
          ><a title="German" role="menuitem">DE</a>
        </scale-telekom-nav-item>
      </scale-telekom-nav-list>

      <scale-telekom-nav-list
        slot="functions"
        variant="functions"
        alignment="right"
        aria-label="Functions Menu"
        class="scale-telekom-nav-list hydrated"
        role="menu"
      >
        <scale-telekom-nav-item
          aria-label="Login"
          variant="functions"
          class="scale-telekom-nav-item hydrated"
          role="none"
          ><a role="menuitem">
            <scale-badge no-dot label="Login" class="hydrated"
              ><scale-icon-user-file-user
                class="hydrated"
              ></scale-icon-user-file-user></scale-badge></a
        ></scale-telekom-nav-item>
      </scale-telekom-nav-list>
    </scale-telekom-header>
  </header>
</template>
