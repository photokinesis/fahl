<template>
  <div class="cost">
    PrductName
    <el-autocomplete
      v-model="state"
      clearable
      :fetch-suggestions="querySearchAsync"
      placeholder="Select Product"
      @select="handleSelect"
    ></el-autocomplete
    ><br />
    <br />
    大
    <el-input-number
      v-model="sizeL"
      @change="handleChange"
      :min="0"
      :max="Infinity"
      label="sizeLarge"
      placeholder=""
    ></el-input-number
    ><br />
    中
    <el-input-number
      v-model="sizeM"
      @change="handleChange"
      :min="0"
      :max="Infinity"
      label="sizeMedium"
      placeholder=""
    ></el-input-number
    ><br />
    小
    <el-input-number
      v-model="sizeS"
      @change="handleChange"
      :min="0"
      :max="Infinity"
      label="sizeSmall"
      placeholder=""
    ></el-input-number>
    <br>
    {{state}}<br>
    {{sizeL}}個大的，{{sizeM}}個中的，{{sizeS}}個小的
  </div>
</template>

<script>
//這裡可以導入其他文件，比如：組件、工具js、第三方插件js、json文件、圖片文件等等
//例如：import <組件名稱> from '<組件路徑>';

export default {
  //import引入組件需要注入到對象才可以使用
  components: {},
  props: {},
  data() {
    //這裡存放數據
    return {
      products: [],
      state: [],
      sizeL: "",
      sizeM: "",
      sizeS: "",
      num: 0,
    };
  },
  //計算屬性 類似於data概念
  computed: {},
  //監看data數據中的變化
  watch: {},
  //方法集合
  methods: {
    handleChange(value) {
      console.log(value);
    },
    loadProduct() {
      return [
        { value: "閃爍海洋" },
        { value: "沈著冷靜" },
        { value: "陽光灑落" },
        { value: "潮濕森林" },
        { value: "放鬆爵士" },
        { value: "旅行記憶" },
      ];
    },

    querySearchAsync(queryString, cb) {
      var products = this.products;
      var results = queryString
        ? products.filter(this.createStateFilter(queryString))
        : products;

      cb(results);
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  //生命週期 - 創建完成（可以訪問當前this實例）
  created() {},
  //生命週期 - 掛載完成（可以訪問DOM元素）
  mounted() {
    this.products = this.loadProduct();
  },
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