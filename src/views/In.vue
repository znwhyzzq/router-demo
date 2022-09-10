 <template>
  <div class="table-wrapper">
    <el-table :data="tableData" style="width: 100%" margin="border-radius">
      <el-table-column prop="time" label="时间"  >
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.time" v-show="scope.row.iseditor" style="color:black"/>
          <span v-show="!scope.row.iseditor">{{scope.row.time}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="课程" >
        <template slot-scope="scope">
          <el-input type="text" v-model="scope.row.name" v-show="scope.row.iseditor" style="color:black"/>
          <span v-show="!scope.row.iseditor">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="班级" style="color:black" >
        <template slot-scope="scope" >
          <el-input type="text" v-model="scope.row.address" v-show="scope.row.iseditor" style="color:black"/>
          <span v-show="!scope.row.iseditor">{{scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button   type="primary" icon="el-icon-edit" circle @click="edit(scope.row, scope)" size="small"></el-button>
          <el-button  type="success" icon="el-icon-check" circle @click="save(scope.row)" size="small"></el-button>
          <el-button  class="iconfont icon-shuaxin" circle @click="GetUserInfo" size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          time: "8:00-10:00",
          name: "计算机组成原理",
          address: "计算机科学-4",
          iseditor: false
        },
        {
          time: "10:00-12:00",
          name: "数据库",
          address: "软件工程-2",
          iseditor: false
        },
        {
          time: "14:00-16:00",
          name: "计算机网络",
          address: "大数据-3",
          iseditor: false
        },
        {
          time: "16:00-18:00",
          name: "Java",
          address: "人工智能-1",
          iseditor: false
        }
      ]
    };
  },
  methods: {
    edit(row, index) {
      row.iseditor = true;
    },
    save(row, index) {
      row.iseditor = false;
    },
    GetUserInfo(){
            this.$axios
            .get('http://localhost:3000/tableData')
            .then(response=>{
              let data=response.data;
              data.forEach(element => {
              this.tableData.push({
              time:element.time,
             name:element.name,
              address:element.address,
          });
        });
      })
    }
  }
};
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
  color: #46d4ff;
}

.icon-shuaxin:before {
  content: "\ec08";
  color: #46d4ff;
}

</style> 
