<!-- <template>
  <div id="building">
    <div>
      <el-container>
        <el-header>
          <div class="tetx">
        <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item  :to="{ path: '/Hope' }">课程查询</el-breadcrumb-item>
    <el-breadcrumb-item  :to="{ path: '/In' }">课程列表</el-breadcrumb-item>
    <el-breadcrumb-item  :to="{ path: '/' }">退出登录</el-breadcrumb-item>
  </el-breadcrumb>
          </div>
        </el-header>
  </el-container>
    <el-container>
      <el-aside width="200px" color="gray">
         <el-menu @select="sc" style="background-color:lightgray">
        <el-submenu index="1" style="background-color:lightgray">
          <template slot="title" >
            <i class="el-icon-location" ></i>
            </template>
             <el-menu-item index="/Hope" style="background-color:gray;">
          课程查询
            </el-menu-item>
            <el-menu-item index="/In"  style="background-color:lightgray">
          课程列表
            </el-menu-item>
        </el-submenu>
        <el-menu @select="sc1" style="background-color:lightgray"></el-menu>
        <el-submenu index="2" style="background-color:lightgray">
          <template slot="title" >
            <i class="el-icon-menu" ></i>
            </template>
             <el-menu-item index="/about" style="background-color:gray;">
          课程查询
            </el-menu-item>
        </el-submenu>
        <el-menu @select="sc"  style="background-color:lightgray"></el-menu>
        <el-submenu index="3" style="background-color:lightgray">
          <template slot="title" >
            <i class="el-icon-document" ></i>
            </template>
            <el-menu-item index="/tableData" style="background-color:gray;">
          数据
            </el-menu-item>
        </el-submenu>
        <el-menu @select="sc" style="background-color:lightgray"></el-menu>
        <el-submenu index="4" style="background-color:lightgray">
          <template slot="title" >
            <i class="el-icon-setting" ></i>
            </template>
            <el-menu-item index="/about" style="background-color:gray;">
          课程查询
            </el-menu-item>
        </el-submenu>
          
         </el-menu>
         
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
  </el-container>
  </div>
    </div>
  </template>
  
  <script>
  export default {
  methods:{
    sc(index){this.$router.push(index);
    },
    sc1(index){this.$router.push(index);
    },
    sc2(index){this.$router.push(index);
    },
    sc3(index){this.$router.push(index);
    }
  }
  }
  </script>
  
  <style lang="less" scoped>
  .tetx{
    position: absolute;
  align-items: center;
  left:2%;
  top:2%;
  
  }
  *{
    margin:0;
    padding:0;
    list-style:none;
  
  }
  .l-content{
    display:flex;
    align-items: center;
  }
  
  .loginTitle{
      margin: 0px auto 40px auto;
      text-align: center;
       color: rgb(224, 18, 18);
       font-size: 26px;
  
  
   }
   #building{
    background:url(https://cn.bing.com//th?id=OHR.PeljesacWind_ZH-CN9299214248_1920x1080.jpg&rf=LaDigue_1920x1080.jp);
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100% cover;
  }
  </style>  -->
  <template>
    <div id="building">
      <div>
        <el-container>
          <el-aside width="200px"   color="gray">
         <el-menu @select="sc" background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-submenu index="1" style="background-color:gray">
          <template slot="title" >
            <i class="el-icon-location" ></i>
            </template>
             <el-menu-item index="/Hope" style="background-color:gray;">
          课程查询
            </el-menu-item>
            <el-menu-item index="/In"  style="background-color:lightgray">
          课程列表
            </el-menu-item>
        </el-submenu>
        <el-menu @select="sc1" style="background-color:lightgray"></el-menu>
        <el-submenu index="2" style="background-color:lightgray">
          <template slot="title" >
            <i class="el-icon-menu" ></i>
            </template>
             <el-menu-item index="/about" style="background-color:gray;">
          课程查询
            </el-menu-item>
        </el-submenu>
        <el-menu @select="sc"  style="background-color:lightgray"></el-menu>
        <el-submenu index="3" style="background-color:lightgray">
          <template slot="title" >
            <i class="el-icon-document" ></i>
            </template>
            <el-menu-item index="/tableData" style="background-color:gray;">
          数据
            </el-menu-item>
        </el-submenu>
        <el-menu @select="sc" style="background-color:lightgray"></el-menu>
        <el-submenu index="4" style="background-color:lightgray">
          <template slot="title" >
            <i class="el-icon-setting" ></i>
            </template>
            <el-menu-item index="/about" style="background-color:gray;">
          课程查询
            </el-menu-item>
        </el-submenu>
          
         </el-menu>
         
      </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px"> 
      1234567
     </el-header>
     <div class="head">
        <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item  :to="{ path: '/Hope' }">课程查询</el-breadcrumb-item>
    <el-breadcrumb-item  :to="{ path: '/In' }">课程列表</el-breadcrumb-item>
    <el-breadcrumb-item  :to="{ path: '/' }">退出登录</el-breadcrumb-item>
  </el-breadcrumb>
</div>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
    </div>
      </div>
    </template>
    
    <script>
    export default {
    methods:{
      sc(index){this.$router.push(index);
      },
      sc1(index){this.$router.push(index);
      },
      sc2(index){this.$router.push(index);
      },
      sc3(index){this.$router.push(index);
      }
    }
    }
    </script>
    
    <style lang="less" scoped>
       
    .head{
     text-align: right; font-size: 12px;
    position: absolute;
    align-items: center;
    left:20%;
    top:5%;
    
    }
    *{
      margin:0;
      padding:0;
      list-style:none;
     
    
    }
    .l-content{
      display:flex;
      align-items: center;
    }
    
    .loginTitle{
        margin: 0px auto 40px auto;
        text-align: center;
         color: rgb(116, 225, 33);
         font-size: 26px;
    
    
     }
     #building{
      background:url(https://cn.bing.com//th?id=OHR.PeljesacWind_ZH-CN9299214248_1920x1080.jpg&rf=LaDigue_1920x1080.jp);
      width:100%;
      height:100%;
      position:fixed;
      background-size:100% 100% cover;
    }
    </style> 