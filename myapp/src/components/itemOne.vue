<template>
  <div>
    <h2>图表1</h2>
    <div class="chart" id="oneChart">图表的容器</div>
  </div>
</template>

<script>
//reactive表示复杂数据类型
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    //引入（接收）echarts、axios
    let $echarts = inject("echarts");
    let $http = inject("axios");
    //创建数据
    let data = reactive({});
    let xdata = reactive([]);
    let ydata = reactive([]);
    //数据处理（数据对象-->两个arr数据）
    function setData() {
      xdata = data.data.chartData.chartData.map((v) => v.title);
      ydata = data.data.chartData.chartData.map((v) => v.num);
      console.log("xdata", xdata);
      console.log("ydata", ydata);
    }

    //获取数据请求函数
    async function getState() {
      data = await $http({ url: "/one/data" });
      //  console.log(oneData.data.chartData.chartData)
    }


    //页面加载完毕之后自动执行函数
    onMounted(() => {
      let myChart = $echarts.init(document.getElementById("oneChart"));
      // 调用‘获取数据’请求
      getState().then(() => {
        setData();
        //设置图标格式、样式
        myChart.setOption({
          grid:{
            top:"3%",
            left:"1%",
            right:"6%",
            bottom:"3%",
            containLabel:true

          },
          xAxis: {
            type: "value",//数值轴
            axisLine:{
              lineStyle:{
                color:"#fff"
              }
            }
          },
          yAxis: {
            type: "category",//类目轴
            data: xdata,
             axisLine:{
              lineStyle:{
                color:"#fff"
              }
            }
          },
          series: [
            {
              data: ydata,
              type: "bar",//柱状图
              itemStyle: {
                normal: {
                  barBorderRadius:[0,20,20,0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa",
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8",
                    },
                    {
                      offset: 1,
                      color: "#cda819",
                    },
                  ]),
                },
              },
            },
          ],
        });
      });
    });

    return {
      getState,//获取数据请求方法
      data,//请求到的数据对象
      xdata,//数据对象的x轴--title
      ydata,//数据对象的y轴--num
      setData,//数据处理（map处理）
    };
  },
};
</script>




<style scoped>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>