<template>
    <div>
      <div>this is news page</div>
      <button></button>
      <input type="file">
    </div>
</template>

<script>
  import navBar from "./navBar";
    export default {
        name: "news",
        created(){
            // this.axios.get('/cc/json/mobile_tel_segment.htm?tel=13213508338').then((data)=>{
            //     console.log(data)
            // })
            this.axios.post('/api/manage/login/login',{
                password:'123456',username:'admin'
            }).then((data)=>{console.log(data)})
        },
        components:{
            navBar
        },
    }
</script>

<style scoped>

</style>
