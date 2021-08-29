<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      type="border-card"
      closable
      tab-position="right"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <cost ref="cost"></cost>
        <div style="margin: 20px">
          <el-button size="small" @click="addTab(editableTabsValue)">
            More Items
          </el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
    <br />
    <!-- Items: {{ this.$refs.cost.state }} -->
    <br />
    <el-button-group>
      <el-button>取消</el-button>
      <el-button type="primary">確定</el-button>
    </el-button-group>
  </div>
</template>

<script>
import Cost from "@/components/Cost";
//這裡可以導入其他文件，比如：組件、工具js、第三方插件js、json文件、圖片文件等等
//例如：import <組件名稱> from '<組件路徑>';

export default {
  //import引入組件需要注入到對象才可以使用
  components: { Cost },
  props: {},
  data() {
    //這裡存放數據
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "Item",
          name: "1",
        },
      ],
      tabIndex: 1,
    };
  },
  //計算屬性 類似於data概念
  computed: {},
  //監看data數據中的變化
  watch: {},
  //方法集合
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "items",
        name: newTabName,
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
  //生命週期 - 創建完成（可以訪問當前this實例）
  created() {},
  //生命週期 - 掛載完成（可以訪問DOM元素）
  mounted() {},
  beforeCreate() {}, //生命週期 - 創建之前
  beforeMount() {}, //生命週期 - 掛載之前
  beforeUpdate() {}, //生命週期 - 更新之前
  updated() {}, //生命週期 - 更新之後
  beforeDestory() {}, //生命週期 - 銷毀之前
  actived() {}, //如果頁面有keep-alive緩存功能，這個函數會觸發
};
</script>

<style scoped>
</style>