<!-- <template>
    <div class="about">
      <h1>This is an about page</h1>
      <button @click="sendRequest">click me</button>
    </div>
  </template>
  <script>
  import { get,post } from "../utils/http";
  export default {
    methods: {
      async sendRequest() {
        let res = await get("/api/infomation");
        console.log("res", res);
      },
    },
  };
  </script>
   
   -->
   <template>
    <div class="about">
      <h1>This is an about page</h1>
      <el-button @click="sendRequest">click me</el-button>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    methods: {
      sendRequest() {
        axios
          .get("http://localhost:3000/infomation")
          .then((response) => {
            console.log("数据请求成功,获取到的数据为:", response);
          })
          .catch((error) => {
            console.log("数据请求出错,错误为:", error);
          });
      },
    },
  };
  </script>
  
  