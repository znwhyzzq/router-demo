<template>
  <div class="table-wrapper">
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" width="120">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.id" v-show="scope.row.iseditor" style="color:black"/>
          <span v-show="!scope.row.iseditor">{{scope.row.id}}</span>
        </template>
      </el-table-column>
        <el-table-column prop="title" label="title">
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.title" v-show="scope.row.iseditor" style="color:black"/>
          <span v-show="!scope.row.iseditor">{{scope.row.title}}</span>
        </template>
      </el-table-column>
        <el-table-column prop="desc" label="desc" >
        <template slot-scope="scope" >
          <el-input type="text" v-model="scope.row.desc" v-show="scope.row.iseditor" style="color:black"/>
          <span v-show="!scope.row.iseditor">{{scope.row.desc}}</span>
        </template>
      </el-table-column>
        <el-table-column prop="author" label="author" >
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.author" v-show="scope.row.iseditor" style="color:black"/>
          <span v-show="!scope.row.iseditor">{{scope.row.author}}</span>
        </template>
      </el-table-column>
        <el-table-column label="操作" >
        <template>
          <el-button   type="primary" icon="el-icon-edit" circle @click="edit(scope.row, scope)" size="small"></el-button>
          <el-button  type="success" icon="el-icon-check" circle @click="save(scope.row, scope)" size="small"></el-button>
          <el-button  class="iconfont icon-shuaxin" circle @click="GetUserInfo" size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
    data(){
        return{
            tableData:[ ],
              }
          },
    mounted(){
          this.GetUserInfo()
            },
    methods:{
      edit(row, index) {
      row.iseditor = true;
    },
    save(row, index) {
      row.iseditor = false;
    },
        GetUserInfo(){
            this.$axios
            .get('http://localhost:3000/infomation')
            .then(response=>{
              let data=response.data;
              data.forEach(element => {
              this.tableData.push({
              id:element.id,
              title:element.title,
              desc:element.desc,
              author:element.author,
          });
        });
      })
    }
  }
}
</script>

<style lang="less" scoped>
  /**表格背景透明 */
  //透明化整体
  .table-wrapper /deep/  .el-table,
  .el-table__expanded-cell {
    background-color: transparent !important;
  }
  //透明化行、单元格,删除表头下横线
  .table-wrapper /deep/ tr, .table-wrapper /deep/ th, .table-wrapper /deep/ td {
    background: #1439391c !important;
    color:#fff;
    border-bottom: 0px; //删除表头下横线
  }
  //hover时样式
  .table-wrapper /deep/  .el-table tbody tr:hover>td {
    background-color: #367f7f78 !important
  }
  // 表格内容(有用)
  .table-wrapper /deep/ .el-table__row {
    background: #1439391c !important;
    color: #46d4ff;
  }
  /**表格背景透明end */
  @font-face {
  font-family: "iconfont"; /* Project id 3628339 */
  src: url('//at.alicdn.com/t/c/font_3628339_lbn6dn5slff.woff2?t=1662255424921') format('woff2'),
       url('//at.alicdn.com/t/c/font_3628339_lbn6dn5slff.woff?t=1662255424921') format('woff'),
       url('//at.alicdn.com/t/c/font_3628339_lbn6dn5slff.ttf?t=1662255424921') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 12px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1eefcf;
}

.icon-shuaxin:before {
  content: "\ec08";
  color: #39ac31;
}
  </style> 
<!-- <template>
  <div class="hello">
      <el-table
            :data="res.data.result"
            border
            style="width: 100%">
            <el-table-column
            fixed
            prop="productId"
            label="日期"
            width="150">
            </el-table-column>
            <el-table-column
            prop="productName"
            label="岗位"
            width="120">
            </el-table-column>
            <el-table-column
            prop="prodcutPrice"
            label="手机号"
            width="120">
            </el-table-column>
            <el-table-column
            prop="prodcutImg"
            label="姓名"
            width="120">
            </el-table-column>           
        </el-table>
 
 
  </div>
</template>

<script>
    export default{
        data(){
            return {
                res:"",//创建对象
                        
            }
        },
        mounted () {
          this.getGoodsList()
        },
        methods: {
          getGoodsList () {
            this.$axios.get('http://localhost:3000/result').then((res) => {
                //用axios的方法引入地址
                this.res=res
                //赋值
              console.log(res)
            })
          }
        }
    }
</script>

<style>

</style> -->