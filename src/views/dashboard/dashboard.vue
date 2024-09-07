<template>
  <div>
    <el-row :gutter="20" class="mgb20">
      <el-col :span="6">
        <el-card shadow="hover" body-class="card-body">
          <el-icon class="card-icon bg1">
            <User />
          </el-icon>
          <div class="card-content">
            <countup class="card-num color1" :end="88888" />
            <div>xxxx</div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover" body-class="card-body">
          <el-icon class="card-icon bg2">
            <ChatDotRound />
          </el-icon>
          <div class="card-content">
            <countup class="card-num color2" :end="88888" />
            <div>xxxx</div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover" body-class="card-body">
          <el-icon class="card-icon bg3">
            <Goods />
          </el-icon>
          <div class="card-content">
            <countup class="card-num color3" :end="88888" />
            <div>xxxx</div>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover" body-class="card-body">
          <el-icon class="card-icon bg4">
            <ShoppingCartFull />
          </el-icon>
          <div class="card-content">
            <countup class="card-num color4" :end="88888" />
            <div>xxxx</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="mgb20">
      <el-col :span="18">
        <el-card shadow="hover">
          <div class="card-header">
            <p class="card-header-title">xxxxxx</p>
            <p class="card-header-desc">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
          <v-chart class="chart" :option="dashOpt1" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="card-header">
            <p class="card-header-title">xxxx</p>
            <p class="card-header-desc">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
          <v-chart class="chart" :option="dashOpt2" />
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="7">
        <el-card shadow="hover" :body-style="{ height: '400px' }">
          <div class="card-header">
            <p class="card-header-title">xxxx</p>
            <p class="card-header-desc">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :color="activity.color"
            >
              <div class="timeline-item">
                <div>
                  <p>{{ activity.content }}</p>
                  <p class="timeline-desc">{{ activity.description }}</p>
                </div>
                <div class="timeline-time">{{ activity.timestamp }}</div>
              </div>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="hover" :body-style="{ height: '400px' }">
          <div class="card-header">
            <p class="card-header-title">xxxx</p>
            <p class="card-header-desc">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
          <v-chart class="map-chart" :option="mapOptions" />
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card shadow="hover" :body-style="{ height: '400px' }">
          <div class="card-header">
            <p class="card-header-title">xxxx</p>
            <p class="card-header-desc">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
          <div>
            <div class="rank-item" v-for="(rank, index) in ranks">
              <div class="rank-item-avatar">{{ index + 1 }}</div>
              <div class="rank-item-content">
                <div class="rank-item-top">
                  <div class="rank-item-title">{{ rank.title }}</div>
                  <div class="rank-item-desc">xx:{{ rank.value }}</div>
                </div>
                <el-progress
                  :show-text="false"
                  striped
                  :stroke-width="10"
                  :percentage="rank.percent"
                  :color="rank.color"
                />
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import countup from "@/components/countup.vue";
import { use, registerMap } from "echarts/core";
import { BarChart, LineChart, PieChart, MapChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import VChart from "vue-echarts";
import { dashOpt1, dashOpt2, mapOptions } from "../chart/options";
import chinaMap from "@/utils/china";
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  LineChart,
  PieChart,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  MapChart,
]);
registerMap("china", chinaMap);
const activities = [
  {
    content: "xxxx",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    timestamp: "1分钟前",
    color: "#00bcd4",
  },
  {
    content: "xxxx",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    timestamp: "1分钟前",
    color: "#1ABC9C",
  },
  {
    content: "xxxx",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    timestamp: "1分钟前",
    color: "#3f51b5",
  },
  {
    content: "xxxx",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    timestamp: "1分钟前",
    color: "#f44336",
  },
  {
    content: "xxxx",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    timestamp: "1分钟前",
    color: "#009688",
  },
];

const ranks = [
  {
    title: "xxxx",
    value: 88888,
    percent: 80,
    color: "#f25e43",
  },
  {
    title: "xxxx",
    value: 77777,
    percent: 70,
    color: "#00bcd4",
  },
  {
    title: "xxxx",
    value: 66666,
    percent: 60,
    color: "#64d572",
  },
  {
    title: "xxxx",
    value: 55555,
    percent: 55,
    color: "#e9a745",
  },
  {
    title: "xxxx",
    value: 44444,
    percent: 50,
    color: "#009688",
  },
];
</script>

<style>
.card-body {
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0;
}
</style>
<style scoped>
@import "../../assets/css/dashborad.css";
</style>