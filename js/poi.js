var myChart = echarts.init(document.getElementById('chart-panel'));
var uploadedDataURL = "../mapData/data-1461574801505-SJtcnUog.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function (weiboData) {
    myChart.hideLoading();

    weiboData = weiboData.map(function (serieData, idx) {
        var px = serieData[0] / 1000;
        var py = serieData[1] / 1000;
        var res = [[px, py]];

        for (var i = 2; i < serieData.length; i += 2) {
            var dx = serieData[i] / 1000;
            var dy = serieData[i + 1] / 1000;
            var x = px + dx;
            var y = py + dy;
            res.push([x, y]);

            px = x;
            py = y;
        }
        return res;
    });
    myChart.setOption(option = {
        backgroundColor: '#1b1b1b',
        color: [
            'rgba(255, 255, 255, 0.8)',
            'rgba(14, 241, 242, 0.8)',
            'rgba(37, 140, 249, 0.8)'
        ],
        title : {
            text: '大规模MarkPoint特效',
            subtext: '纯属虚构',
            x:'center',
            textStyle : {
                color: '#fff'
            }
        },
        legend: {
            orient: 'vertical',
            x:'left',
            data:['强','中','弱'],
            textStyle : {
                color: '#fff'
            }
        },
        series : [
            {
                name: '弱',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{
                        borderColor:'rgba(100,149,237,1)',
                        borderWidth:1,
                        areaStyle:{
                            color: '#1b1b1b'
                        }
                    }
                },
                data : [],
                markPoint : {
                    symbolSize: 2,
                    large: true,
                    effect : {
                        show: true
                    },
                    data : (function(){
                        var data = [];
                        var len = weiboData[0].length;
                        while(len--) {
                            data.push({
                                name : "",
                                value : 1,
                                geoCoord : weiboData[0][len]
                            })
                        }
                        return data;
                    })()
                }
            },
            {
                name: '中',
                type: 'map',
                mapType: 'china',
                data : [],
                markPoint : {
                    symbolSize: 3,
                    large: true,
                    effect : {
                        show: true
                    },
                    data :  (function(){
                        var data = [];
                        var len = weiboData[1].length;
                        while(len--) {
                            data.push({
                                name : "",
                                value : 1,
                                geoCoord : weiboData[1][len]
                            })
                        }
                        return data;
                    })()
                }
            },
            {
                name: '强',
                type: 'map',
                mapType: 'china',
                hoverable: false,
                roam:true,
                data : [],
                markPoint : {
                    symbol : 'diamond',
                    symbolSize: 6,
                    large: true,
                    effect : {
                        show: true
                    },
                    data : (function(){
                        var data = [];
                        var len = weiboData[2].length;
                        while(len--) {
                            data.push({
                                name : "",
                                value : 1,
                                geoCoord : weiboData[2][len]
                            })
                        }
                        return data;
                    })()
                }
            }
        ]
    })
});       