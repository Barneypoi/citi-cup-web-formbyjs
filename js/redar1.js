function setRedar(){
    var dom = document.getElementById("topBox");
    var myChart = echarts.init(dom);
// 指定图表的配置项和数据
option = {
    // title: {
    //     text: '基础雷达图'
    // },
    tooltip: {},
    legend: {
        data: ['用户', '基金']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '风险调整', max: 1},
            { name: '风险指标', max: 1},
            { name: '收益指标', max: 1},
            { name: '选股能力', max: 1},
            { name: '择时能力', max: 1}
        ]
    },
    series: [{
        name: '用户 vs 基金',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [0.5, 0.4, 0.4, 0.5, 0.4],
                name : '用户'
            },
            {
                value : [document.getElementById("fxtz1").innerHTML, document.getElementById("fxzb1").innerHTML, document.getElementById("syzb1").innerHTML, document.getElementById("xgnl1").innerHTML, document.getElementById("zsnl1").innerHTML],
                name : '基金'
            }
        ]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var dom = document.getElementById("topBox2");
var myChart = echarts.init(dom);

// 指定图表的配置项和数据
option = {
    // title: {
    //     text: '基础雷达图'
    // },
    tooltip: {},
    legend: {
        data: ['用户', '基金']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '风险调整', max: 1},
            { name: '风险指标', max: 1},
            { name: '收益指标', max: 1},
            { name: '选股能力', max: 1},
            { name: '择时能力', max: 1}
        ]
    },
    series: [{
        name: '用户 vs 基金',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [0.5, 0.4, 0.4, 0.5, 0.4],
                name : '用户'
            },
            {
                value : [document.getElementById("fxtz2").innerHTML, document.getElementById("fxzb2").innerHTML, document.getElementById("syzb2").innerHTML, document.getElementById("xgnl2").innerHTML, document.getElementById("zsnl2").innerHTML],
                name : '基金'
            }
        ]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var dom = document.getElementById("topBox3");
var myChart = echarts.init(dom);

// 指定图表的配置项和数据
option = {
    // title: {
    //     text: '基础雷达图'
    // },
    tooltip: {},
    legend: {
        data: ['用户', '基金']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '风险调整', max: 1},
            { name: '风险指标', max: 1},
            { name: '收益指标', max: 1},
            { name: '选股能力', max: 1},
            { name: '择时能力', max: 1}
        ]
    },
    series: [{
        name: '用户 vs 基金',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [0.5, 0.4, 0.4, 0.5, 0.4],
                name : '用户'
            },
            {
                value : [document.getElementById("fxtz3").innerHTML, document.getElementById("fxzb3").innerHTML, document.getElementById("syzb3").innerHTML, document.getElementById("xgnl3").innerHTML, document.getElementById("zsnl3").innerHTML],
                name : '基金'
            }
        ]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
}