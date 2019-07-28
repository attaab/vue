<template>
  <div>
      <h1>{{ title }}</h1>

      {{greeting()}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Ninja App'
    }
  },
  methods: {
    greeting : function () {
      return "hey man, you are almost there, keep pushing";
    }
  },
}
</script>
