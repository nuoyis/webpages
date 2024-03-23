<script setup>

</script>

<template>
  <var-fab type="primary" trigger="hover" inactive-icon="chevron-up">
    <var-button type="info" @click="$router.push('/htmlview')"  icon-container>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="info" @click="$router.push('/uptimerobot')"  icon-container>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="info" @click="$router.push('/serverstatus')"  icon-container>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="info" @click="$router.push('/api')"  icon-container>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="info" @click="$router.push('/blogview')"  icon-container>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="info" @click="$router.push('/youlian')" icon-container>
      <var-icon name="bell" />
    </var-button>
    <var-button type="info" @click="$router.push('/history')" icon-container>
      <var-icon name="history" />
    </var-button>
    <var-button type="info" @click="$router.push('/aboutintroduce')" icon-container>
      <var-icon name="card-account-details-outline" />
    </var-button>
    <var-button type="info" @click="$router.push('/')" icon-container>
      <var-icon name="home" />
    </var-button>
  </var-fab>
</template>

<style scoped>

</style>