 <template>
    <div>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="校区" prop="region1">
         <el-select v-model="ruleForm.region1" placeholder="请选择校区">
          <el-option label="区一" value="shanghai" ></el-option>
          <el-option label="区二" value="beijing" ></el-option>
         </el-select>
      </el-form-item>
       <el-form-item label="教学楼" prop="region2">
         <el-select v-model="ruleForm.region2" placeholder="请选择教学楼">
          <el-option label="教学楼一" value="shanghai1"></el-option>
          <el-option label="教学楼二" value="beijing1"></el-option>
         </el-select>
      </el-form-item>
      <el-form-item label="楼层" prop="region3">
         <el-select v-model="ruleForm.region3" placeholder="请选择楼层">
          <el-option label="楼层一" value="shanghai"></el-option>
          <el-option label="楼层二" value="beijing"></el-option>
          <el-option label="楼层三" value="wuhan"></el-option>
         </el-select>
      </el-form-item>
   <el-form-item label="教室号" prop="name" style="width: 50%">
        <el-input v-model="ruleForm.name" placeholder="请选择教室号"></el-input>
      </el-form-item>
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;" placement="bottom-start"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" plain @click="onButtonReset" size="small">查询</el-button>
    <el-button @click="resetForm('ruleForm')" size="small">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
           region1: '',
             region2: '',
               region3: '',
          date1: '',
        },
        rules: {
          region1: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
           region2: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
           region3: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
         
        }
      };
    },
    methods: {
      onButtonReset(){
               this.$router.push('/In');
            },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>

.loginTitle{
    margin: 0px auto 40px auto;
    text-align: center;
     color: white;
     font-size: 26px;

 }
  .demo-border {  min-height: 1rem; border-radius: 5px; }
  *{
   font-size: 26px;
  }

</style> 