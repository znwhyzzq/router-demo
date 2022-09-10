 <template>
  <div id="building">  
    <div>
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
    <h3 class="loginTitle">用户登录</h3>
    <el-form-item prop="username">
    <el-input  type="text"  auto-complete="false" v-model="loginForm.username" placeholder="输入"></el-input>
    </el-form-item>
    <el-form-item prop="password">
    <el-input  type="password" auto-complete="false" v-model="loginForm.password" placeholder="输入"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" class="loginRemember" style="width:100%">记住我</el-checkbox>
    <el-button type="primary" style="width:60%;background: #505458"  @click="submitlogin">登录</el-button>
    <router-link to="register"><el-button type="primary" style="width: 40%;background:rgba(203, 129, 129, 0.962) ;border: none">注册</el-button></router-link>
    </el-form>
  </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            loginForm:{
                captchaUrl:'',
                username:'admin',
                password:'123',
            },
            checked:true,
            rules:{
                username:[{required:true,message:'输入用户名',trigger:'blur'}],
                 password:[{required:true,message:'输入密码',trigger:'blur'}],     
            }
        }
    },
     methods:{
        submitlogin(){
            this.$refs.loginForm.validate((valid)=>{
                 console.log(valid)
        if (valid) {
          // alert('登录成功！')
          console.log('登录成功！')
          this.$message.success('登录成功！')
          this.$router.push({ path: '/home' })
               }else{
                    this.$message.error('请输入验证码');
                    return false;
                }
            });
            
        }
    }

}
</script>

<style scoped>

 .loginContainer{
    border-radius: 15px;
    background-clip:padding-box;
    margin:180px auto;
    width :350px;
    padding: 15px 35px 15px 35px;
  

 }
 .loginTitle{
    margin: 0px auto 40px auto;
    text-align: center;
     color: rgba(21, 128, 235, 0.962);
     font-size: 26px;

 }
 .loginRemember{
    text-align: left;
    margin:10px 10px 15px 10px;
 }
  #building{
  background:url(https://dd-static.jd.com/ddimg/jfs/t1/17835/27/16004/183247/6277f14fE2702e765/691e7a24e329fe41.jpg);
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100% cover;
   text-align: center;
}
  .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        user-select: none;
  }
</style> 