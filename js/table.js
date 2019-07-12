var dom = document.getElementById("bargraph1");
var myChart = echarts.init(dom);

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['第一季度', '第二季度', '第三季度', '第四季度',],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'规模（万）',
            type:'bar',
            barWidth: '60%',
            data:[130, 152, 200, 334]
        }
    ]
};

myChart.setOption(option);

var dom = document.getElementById("bargraph2");
var myChart = echarts.init(dom);

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['第一季度', '第二季度', '第三季度', '第四季度',],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'规模（万）',
            type:'bar',
            barWidth: '60%',
            data:[100, 112, 122, 129]
        }
    ]
};

myChart.setOption(option);

var dom = document.getElementById("bargraph3");
var myChart = echarts.init(dom);

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['第一季度', '第二季度', '第三季度', '第四季度',],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'规模（万）',
            type:'bar',
            barWidth: '60%',
            data:[70, 152, 184, 224]
        }
    ]
};

myChart.setOption(option);