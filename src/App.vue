<template>
  <div id="app"> 
<router-view/>
   </div>
</template>

<script>
import Home from './views/Home.vue'
import Open from './views/Open.vue'
import In from './views/In.vue'
import Hope from './views/Hope.vue'
import about from './views/about.vue'

export default {
    name: "App",
    
            methods:{
            handle (){
                this.$router.go(-1);
            }
        },
  data() {
    return {
      key: Date.now()
    };
  },
  created() {
    setInterval(() => {
      this.key=Date.now();
    }, 300000);

}
}
</script>

<style scoped>
#app {
 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

body{
  margin:0;
  padding:0;
  border:0
}

</style>
