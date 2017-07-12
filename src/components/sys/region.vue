<template>
  <div class="region">
    <!-- 省 -->
    <fetch :get="fetch">
      <template scope="scope">
        <vis-select v-model="province" @change="handleChange('city', province)" style="width: 100px;">
          <vis-option
            v-for="(item, index) in scope.data"
            :value="item.id" :label="item.name"
            :key="index"
          ></vis-option>
        </vis-select>
      </template>
    </fetch>
    <!-- 市 -->
    <vis-select
      v-if="cityData.length > 0"
      v-model="city"
      style="width: 100px;"
      @change="handleChange('area', city)">
      <vis-option
        v-for="(item, index) in cityData"
        :value="item.id" :label="item.name"
        :key="index"
      ></vis-option>
    </vis-select>
    <!-- 区 -->
    <vis-select
      v-if="districtData.length > 0"
      style="width: 100px;"
      v-model="district">
      <vis-option
        v-for="(item, index) in districtData"
        :value="item.id" :label="item.name"
        :key="index"
      ></vis-option>
    </vis-select>
  </div>
</template>

<script>
  import Fetch from '@/components/sys/fetch';
  let url = '/basedata/area/areaList';
  export default {
    data() {
      return {
        cityData: [],
        districtData: [],
        province: null,
        city: null,
        district: null,

        fetch: {
          url,
          params: {
            parentId: 1,
            lv: 'province'
          }
        }
      }
    },
    props: {
      value: Object
    },
   /* watch: {
      province(val) {
        this.value.province = val;
      },
      city(val) {
        this.value.city = val;
      },
      district(val) {
        this.value.district = val;
      }
    },*/
    components: { Fetch },
    methods: {
      handleChange(type, value) {
        this.$fetch({
          url,
          params: {
            parentId: value,
            lv: type
          },
          onSuccess: (data) => {
            this.district = '';
            switch (type) {
              case 'city':
                this.city = '';
                this.cityData = data.data;
                this.districtData = [];
                break;
              case 'area':
                this.districtData = data.data;
                break;
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .region {
    width: 310px;
  }
</style>
