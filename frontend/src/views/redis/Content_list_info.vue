<template>
  <el-row type="flex" justify="center" align="middle" style="margin-top: 10px">
    <el-col :span="14">
      <img
        src="../../public/info/key.png"
        alt="nowKey"
        style="vertical-align: middle; height: 28px; width: 28px"
      />
      <span style="font-size: 20px; vertical-align: middle">{{ nowKey }}</span>
    </el-col>
    <el-col :offset="8" :span="1">
      <!--关闭图片-->
      <el-tooltip content="关闭页面" placement="top">
        <img
          src="../../public/info/close.png"
          alt="close"
          style="vertical-align: middle; cursor: pointer"
          @click="close"
        />
      </el-tooltip>
    </el-col>
  </el-row>
  <el-row style="margin-top: 20px" :gutter="5">
    <el-col :span="9">
      <!--key-->
      <el-input v-model="nowKey" style="width: calc(100% - 30px)">
        <template #prepend>{{ allValue.data.type }}</template>
        <template #append>
          <el-button @click="rename">
            <template #icon>
              <CheckmarkOutline />
            </template>
          </el-button>
        </template>
      </el-input>
    </el-col>
    <el-col :offset="1" :span="6">
      <!--到期时间-->
      <el-input v-model="ttl" style="width: calc(100% - 30px)">
        <template #prepend>TTL</template>
        <template #append>
          <el-button :icon="CheckOutlined" @click="updateTtl">
            <template #icon>
              <CheckmarkOutline />
            </template>
          </el-button>
        </template>
      </el-input>
    </el-col>
    <el-col :offset="1" :span="2">
      <el-tooltip content="删除" placement="bottom">
        <el-button type="primary" danger :size="small" @click="del">
          <template #icon>
            <!--删除-->
            <Delete20Regular />
          </template>
        </el-button>
      </el-tooltip>
    </el-col>
    <el-col :span="2">
      <el-tooltip content="刷新" placement="bottom">
        <el-button
          type="primary"
          :size="small"
          @click="getInfo"
          style="background: #ffb33a; border: none"
        >
          <template #icon>
            <!--刷新-->
            <Refresh />
          </template>
        </el-button>
      </el-tooltip>
    </el-col>
    <el-col :span="2">
      <el-tooltip content="复制为命令" placement="bottom">
        <el-button
          type="primary"
          :size="small"
          style="background: #07c245; border: none"
          v-clipboard:copy="commandStr"
        >
          <template #icon>
            <!--获取命令-->
            <CodeSlashOutline />
          </template>
        </el-button>
      </el-tooltip>
    </el-col>
  </el-row>
  <el-row class="interval_row">
    <el-col :span="2">
      <el-button type="primary" disabled @click="addRowDialog = true">
        添加新行
      </el-button>
    </el-col>
  </el-row>
  <el-dialog v-model="addRowDialog" title="插入行" width="40%" center>
    <!--添加list值的弹窗-->
    <el-row>
      <el-col :span="2">
        <span style="font-size: 16px">键值</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input
          v-model="newKv"
          :rows="4"
          type="textarea"
          placeholder="请输入键值"
        >
        </el-input>
      </el-col>
    </el-row>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addRowDialog = false">取消</el-button>
        <el-button type="primary"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
  <el-row class="interval_row">
    <el-col :span="22">
      <!--表格-->
      <el-table :data="content.data" style="width: 100%">
        <el-table-column
          prop="id"
          :label="`id(Total: ${content.data.length})`"
        />
        <el-table-column prop="value" label="value" />
        <el-table-column label="operation">
          <template #default="scope">
            <el-tooltip content="复制值" placement="bottom">
              <el-button size="small" type="success" disabled circle>
                <template #icon>
                  <!--复制值-->
                  <CopyOutline />
                </template>
              </el-button>
            </el-tooltip>
            <el-tooltip content="删除当前行" placement="bottom">
              <el-button size="small" type="danger" disabled circle>
                <template #icon>
                  <!--删除内容-->
                  <Delete20Regular />
                </template>
              </el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import {
  CheckmarkOutline,
  CodeSlashOutline,
  CopyOutline,
} from "@vicons/ionicons5";
import { Delete20Regular } from "@vicons/fluent";
import { Edit } from "@vicons/carbon";
import { Refresh } from "@vicons/tabler";

const router = useRouter();
// 节点id
let nodeId = ref("");
// 连接类型
let connType = ref("");
// 连接文件名
let connName = ref("");
// redis key
let nowKey = ref("");
// redis old key
let oldKey = ref("");
// redis value
let allValue = reactive({
  data: "",
});
// redis 剩余时间
let ttl = ref("");
// redis content data size
let contentSize = ref(0);
// redis content data
let content = reactive({
  data: "",
});
// 内容展示类型
let formatType = ref("Text");
// 命令
let commandStr = ref("");
// 添加行弹窗显示标记
let addRowDialog = ref(false);
// 添加行的值
let newKv = ref("");

// 获取基础信息
function getInfo() {
  // 从redis获取数据
  window.go.main.App.RedisGetData(
    connType.value,
    connName.value,
    nodeId.value,
    nowKey.value
  ).then((res) => {
    // 此处如果是空值，则应该是该键没有填充值
    allValue.data = JSON.parse(res);
    content.data = allValue.data.value;
    ttl.value = allValue.data.ttl;
    contentSize.value = allValue.data.size;
    commandStr.value = allValue.data.commandStr;
  });
}

// 初始化挂载前的函数
onBeforeMount(() => {
  // 获取路由传递的参数
  // redis键
  nowKey.value = router.currentRoute.value.query.key;
  // redis键
  oldKey.value = router.currentRoute.value.query.key;
  // redis db
  nodeId.value = router.currentRoute.value.query.dbId;
  // 类型
  connType.value = router.currentRoute.value.query.connType;
  // 连接文件名
  connName.value = router.currentRoute.value.query.connName;
  getInfo();
});

// 关闭页面
function close() {
  router.push({
    path: "/rightContent/default",
  });
}

// 修改redis的键
function rename() {
  window.go.main.App.RedisReName(
    connType.value,
    connName.value,
    nodeId.value,
    oldKey.value,
    nowKey.value
  );
}

// 更新剩余时间
function updateTtl() {
  window.go.main.App.RedisUpTtl(
    connType.value,
    connName.value,
    nodeId.value,
    nowKey.value,
    ttl.value
  );
}

// 删除
function del() {
  window.go.main.App.RedisDelKey(
    connType.value,
    connName.value,
    nodeId.value,
    nowKey.value
  );
}

// 创建新的行弹窗
function addListRowPop() {}
</script>

<style scoped>
.interval_row {
  margin-top: 10px;
}
</style>
