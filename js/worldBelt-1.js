var myChart = echarts.init(document.getElementById('chart-panel'));

var latlong = {};
latlong.AD = {'latitude':42.5, 'longitude':1.5};
latlong.AE = {'latitude':24, 'longitude':54};
latlong.AF = {'latitude':135.759523, 'longitude':39.721352};	
latlong.AG = {'latitude':17.05, 'longitude':-61.8};
latlong.AI = {'latitude':18.25, 'longitude':-63.1667};
latlong.AL = {'latitude':113.026524, 'longitude':14.421249};	
latlong.AM = {'latitude':116.391666, 'longitude':39.905555}; 	
latlong.AN = {'latitude':12.25, 'longitude':-68.75};
latlong.AO = {'latitude':23.718888, 'longitude':37.973611};	
latlong.AP = {'latitude':35, 'longitude':105};
latlong.AQ = {'latitude':-90, 'longitude':0};
latlong.AR = {'latitude':36.812777, 'longitude':-1.273333};	
latlong.AS = {'latitude':-14.3333, 'longitude':-170};
latlong.AT = {'latitude':101.707500, 'longitude':3.150555};	
latlong.AU = {'latitude':105.854722, 'longitude':21.024160};	
latlong.AW = {'latitude':12.5, 'longitude':-69.9667};
latlong.AZ = {'latitude':106.827492, 'longitude':-6.172472};	
latlong.BA = {'latitude':-112.409855, 'longitude':56.950857};	
latlong.BB = {'latitude':13.1667, 'longitude':-59.5333};
latlong.BD = {'latitude':65.196343, 'longitude':33.930445};	
latlong.BE = {'latitude':66.350927, 'longitude':48.193764};	
latlong.BF = {'latitude':-154.044122, 'longitude':64.998775};	
latlong.BG = {'latitude':19.297298, 'longitude':47.189334};	
latlong.BH = {'latitude':79.848330, 'longitude':6.927500};	
latlong.BI = {'latitude':14.904029, 'longitude':62.199806};	
latlong.BJ = {'latitude':10.583776, 'longitude':51.165707};	
latlong.BM = {'latitude':32.3333, 'longitude':-64.75};
latlong.BN = {'latitude':128.096469, 'longitude':36.656350};	
latlong.BO = {'latitude':45.334471, 'longitude':59.205313};	
latlong.BR = {'latitude':-100.442374, 'longitude':53.299707};	
latlong.BS = {'latitude':24.25, 'longitude':-76};
latlong.BT = {'latitude':87.266496, 'longitude':59.456510};	
latlong.BV = {'latitude':-54.4333, 'longitude':3.4};
latlong.BW = {'latitude':-138.662849, 'longitude':11.856062};
latlong.BY = {'latitude':139.838589, 'longitude':37.487849};	
latlong.BZ = {'latitude':17.25, 'longitude':-88.75};
latlong.CA = {'latitude':2.349722, 'longitude':48.852777};	
latlong.CC = {'latitude':-12.5, 'longitude':96.8333};
latlong.CD = {'latitude':131.190884, 'longitude':42.577999};	
latlong.CF = {'latitude':157.412272, 'longitude':36.607269};	
latlong.CG = {'latitude':130.713554, 'longitude':42.414934};	
latlong.CH = {'latitude':47, 'longitude':8};
latlong.CI = {'latitude':129.337831, 'longitude':43.097981};	
latlong.CK = {'latitude':-21.2333, 'longitude':-159.7667};
latlong.CL = {'latitude':131.849164, 'longitude':42.995577};	
latlong.CM = {'latitude':25.771799, 'longitude':56.875537};	
latlong.CN = {'latitude':12.798959, 'longitude':43.739112};		
latlong.CO = {'latitude':74.963135, 'longitude':41.205528};	
latlong.CR = {'latitude':130.473328, 'longitude':43.012374};	
latlong.CU = {'latitude':125.421378, 'longitude':43.754451};	
latlong.CV = {'latitude':24.302043, 'longitude':45.946289};	
latlong.CX = {'latitude':-10.5, 'longitude':105.6667};
latlong.CY = {'latitude':113.547228, 'longitude':34.790404};	
latlong.CZ = {'latitude':108.923181, 'longitude':34.352802};	
latlong.DE = {'latitude':51, 'longitude':9};
latlong.DJ = {'latitude':118.651791, 'longitude':24.890674};	
latlong.DK = {'latitude':87.774506, 'longitude':43.824039};		
latlong.DM = {'latitude':15.4167, 'longitude':-61.3333};
latlong.DO = {'latitude':119.280025, 'longitude':26.094400};	
latlong.DZ = {'latitude':2.349722, 'longitude':48.852777};	
latlong.EC = {'latitude':113.275570, 'longitude':23.132022};		
latlong.EE = {'latitude':59, 'longitude':26};
latlong.EG = {'latitude':110.213763, 'longitude':19.955517};	
latlong.EH = {'latitude':24.5, 'longitude':-13};
latlong.ER = {'latitude':85.632376, 'longitude':42.752160};	
latlong.ES = {'latitude':40, 'longitude':-4};
latlong.ET = {'latitude':8, 'longitude':38};
latlong.EU = {'latitude':47, 'longitude':8};
latlong.FI = {'latitude':62, 'longitude':26};
latlong.FJ = {'latitude':-18, 'longitude':175};
latlong.FK = {'latitude':-51.75, 'longitude':-59};
latlong.FM = {'latitude':6.9167, 'longitude':158.25};
latlong.FO = {'latitude':62, 'longitude':-7};
latlong.FR = {'latitude':46, 'longitude':2};
latlong.GA = {'latitude':-1, 'longitude':11.75};
latlong.GB = {'latitude':54, 'longitude':-2};
latlong.GD = {'latitude':12.1167, 'longitude':-61.6667};
latlong.GE = {'latitude':42, 'longitude':43.5};
latlong.GF = {'latitude':4, 'longitude':-53};
latlong.GH = {'latitude':8, 'longitude':-2};
latlong.GI = {'latitude':36.1833, 'longitude':-5.3667};
latlong.GL = {'latitude':72, 'longitude':-40};
latlong.GM = {'latitude':13.4667, 'longitude':-16.5667};
latlong.GN = {'latitude':11, 'longitude':-10};
latlong.GP = {'latitude':16.25, 'longitude':-61.5833};
latlong.GQ = {'latitude':103.875069, 'longitude':36.082328};	
latlong.GR = {'latitude':39, 'longitude':22};
latlong.GS = {'latitude':-54.5, 'longitude':-37};
latlong.GT = {'latitude':15.5, 'longitude':-90.25};
latlong.GU = {'latitude':13.4667, 'longitude':144.7833};
latlong.GW = {'latitude':12, 'longitude':-15};
latlong.GY = {'latitude':5, 'longitude':-59};
latlong.HK = {'latitude':22.25, 'longitude':114.1667};
latlong.HM = {'latitude':-53.1, 'longitude':72.5167};
latlong.HN = {'latitude':15, 'longitude':-86.5};
latlong.HR = {'latitude':126.626643, 'longitude':43.742894};	
latlong.HT = {'latitude':19, 'longitude':-72.4167};
latlong.HU = {'latitude':47, 'longitude':20};
latlong.ID = {'latitude':-5, 'longitude':120};
latlong.IE = {'latitude':53, 'longitude':-8};
latlong.IL = {'latitude':31.5, 'longitude':34.75};
latlong.IN = {'latitude':20, 'longitude':77};
latlong.IO = {'latitude':-6, 'longitude':71.5};
latlong.IQ = {'latitude':33, 'longitude':44};
latlong.IR = {'latitude':32, 'longitude':53};
latlong.IS = {'latitude':65, 'longitude':-18};
latlong.IT = {'latitude':42.8333, 'longitude':12.8333};
latlong.JM = {'latitude':18.25, 'longitude':-77.5};
latlong.JO = {'latitude':31, 'longitude':36};
latlong.JP = {'latitude':36, 'longitude':138};
latlong.KE = {'latitude':1, 'longitude':38};
latlong.KG = {'latitude':41, 'longitude':75};
latlong.KH = {'latitude':17.677201, 'longitude':52.693217};
latlong.KI = {'latitude':1.4167, 'longitude':173};
latlong.KM = {'latitude':88.495873, 'longitude':22.578089};	
latlong.KN = {'latitude':17.3333, 'longitude':-62.75};
latlong.KP = {'latitude':40, 'longitude':127};
latlong.KR = {'latitude':37, 'longitude':127.5};
latlong.KW = {'latitude':29.3375, 'longitude':47.6581};
latlong.KY = {'latitude':19.5, 'longitude':-80.5};
latlong.KZ = {'latitude':48, 'longitude':68};
latlong.LA = {'latitude':18, 'longitude':105};
latlong.LB = {'latitude':33.8333, 'longitude':35.8333};
latlong.LC = {'latitude':13.8833, 'longitude':-61.1333};
latlong.LI = {'latitude':47.1667, 'longitude':9.5333};
latlong.LK = {'latitude':7, 'longitude':81};
latlong.LR = {'latitude':6.5, 'longitude':-9.5};
latlong.LS = {'latitude':-29.5, 'longitude':28.5};
latlong.LT = {'latitude':55, 'longitude':24};
latlong.LU = {'latitude':49.75, 'longitude':6};
latlong.LV = {'latitude':57, 'longitude':25};
latlong.LY = {'latitude':25, 'longitude':17};
latlong.MA = {'latitude':32, 'longitude':-5};
latlong.MC = {'latitude':43.7333, 'longitude':7.4};
latlong.MD = {'latitude':47, 'longitude':29};
latlong.ME = {'latitude':42.5, 'longitude':19.4};
latlong.MG = {'latitude':-20, 'longitude':47};
latlong.MH = {'latitude':9, 'longitude':168};
latlong.MK = {'latitude':41.8333, 'longitude':22};
latlong.ML = {'latitude':17, 'longitude':-4};
latlong.MM = {'latitude':22, 'longitude':98};
latlong.MN = {'latitude':46, 'longitude':105};
latlong.MO = {'latitude':22.1667, 'longitude':113.55};
latlong.MP = {'latitude':15.2, 'longitude':145.75};
latlong.MQ = {'latitude':14.6667, 'longitude':-61};
latlong.MR = {'latitude':20, 'longitude':-12};
latlong.MS = {'latitude':16.75, 'longitude':-62.2};
latlong.MT = {'latitude':35.8333, 'longitude':14.5833};
latlong.MU = {'latitude':-20.2833, 'longitude':57.55};
latlong.MV = {'latitude':3.25, 'longitude':73};
latlong.MW = {'latitude':-13.5, 'longitude':34};
latlong.MX = {'latitude':23, 'longitude':-102};
latlong.MY = {'latitude':2.5, 'longitude':112.5};
latlong.MZ = {'latitude':-18.25, 'longitude':35};
latlong.NA = {'latitude':-22, 'longitude':17};
latlong.NC = {'latitude':-21.5, 'longitude':165.5};
latlong.NE = {'latitude':16, 'longitude':8};
latlong.NF = {'latitude':-29.0333, 'longitude':167.95};
latlong.NG = {'latitude':10, 'longitude':8};
latlong.NI = {'latitude':13, 'longitude':-85};
latlong.NL = {'latitude':52.5, 'longitude':5.75};
latlong.NO = {'latitude':62, 'longitude':10};
latlong.NP = {'latitude':28, 'longitude':84};
latlong.NR = {'latitude':-0.5333, 'longitude':166.9167};
latlong.NU = {'latitude':-19.0333, 'longitude':-169.8667};
latlong.NZ = {'latitude':-41, 'longitude':174};
latlong.OM = {'latitude':21, 'longitude':57};
latlong.PA = {'latitude':9, 'longitude':-80};
latlong.PE = {'latitude':-10, 'longitude':-76};
latlong.PF = {'latitude':-15, 'longitude':-140};
latlong.PG = {'latitude':-6, 'longitude':147};
latlong.PH = {'latitude':13, 'longitude':122};
latlong.PK = {'latitude':30, 'longitude':70};
latlong.PL = {'latitude':52, 'longitude':20};
latlong.PM = {'latitude':46.8333, 'longitude':-56.3333};
latlong.PR = {'latitude':18.25, 'longitude':-66.5};
latlong.PS = {'latitude':32, 'longitude':35.25};
latlong.PT = {'latitude':39.5, 'longitude':-8};
latlong.PW = {'latitude':7.5, 'longitude':134.5};
latlong.PY = {'latitude':-23, 'longitude':-58};
latlong.QA = {'latitude':25.5, 'longitude':51.25};
latlong.RE = {'latitude':-21.1, 'longitude':55.6};
latlong.RO = {'latitude':46, 'longitude':25};
latlong.RS = {'latitude':44, 'longitude':21};
latlong.RU = {'latitude':60, 'longitude':100};
latlong.RW = {'latitude':-2, 'longitude':30};
latlong.SA = {'latitude':25, 'longitude':45};
latlong.SB = {'latitude':-8, 'longitude':159};
latlong.SC = {'latitude':-4.5833, 'longitude':55.6667};
latlong.SD = {'latitude':15, 'longitude':30};
latlong.SE = {'latitude':62, 'longitude':15};
latlong.SG = {'latitude':1.3667, 'longitude':103.8};
latlong.SH = {'latitude':-15.9333, 'longitude':-5.7};
latlong.SI = {'latitude':46, 'longitude':15};
latlong.SJ = {'latitude':78, 'longitude':20};
latlong.SK = {'latitude':48.6667, 'longitude':19.5};
latlong.SL = {'latitude':8.5, 'longitude':-11.5};
latlong.SM = {'latitude':43.7667, 'longitude':12.4167};
latlong.SN = {'latitude':14, 'longitude':-14};
latlong.SO = {'latitude':10, 'longitude':49};
latlong.SR = {'latitude':4, 'longitude':-56};
latlong.ST = {'latitude':1, 'longitude':7};
latlong.SV = {'latitude':119.213565, 'longitude':34.590563};			
latlong.SY = {'latitude':35, 'longitude':38};
latlong.SZ = {'latitude':-26.5, 'longitude':31.5};
latlong.TC = {'latitude':21.75, 'longitude':-71.5833};
latlong.TD = {'latitude':102.094955, 'longitude':46.022195};	
latlong.TF = {'latitude':-43, 'longitude':67};
latlong.TG = {'latitude':8, 'longitude':1.1667};
latlong.TH = {'latitude':15, 'longitude':100};
latlong.TJ = {'latitude':39, 'longitude':71};
latlong.TK = {'latitude':-9, 'longitude':-172};
latlong.TM = {'latitude':40, 'longitude':60};
latlong.TN = {'latitude':34, 'longitude':9};
latlong.TO = {'latitude':-20, 'longitude':-175};
latlong.TR = {'latitude':39, 'longitude':35};
latlong.TT = {'latitude':11, 'longitude':-61};
latlong.TV = {'latitude':-8, 'longitude':178};
latlong.TW = {'latitude':23.5, 'longitude':121};
latlong.TZ = {'latitude':-6, 'longitude':35};
latlong.UA = {'latitude':49, 'longitude':32};
latlong.UG = {'latitude':1, 'longitude':32};
latlong.UM = {'latitude':19.2833, 'longitude':166.6};
latlong.US = {'latitude':38, 'longitude':-97};
latlong.UY = {'latitude':-33, 'longitude':-56};
latlong.UZ = {'latitude':41, 'longitude':64};
latlong.VA = {'latitude':41.9, 'longitude':12.45};
latlong.VC = {'latitude':13.25, 'longitude':-61.2};
latlong.VE = {'latitude':8, 'longitude':-66};
latlong.VG = {'latitude':18.5, 'longitude':-64.5};
latlong.VI = {'latitude':18.3333, 'longitude':-64.8333};
latlong.VN = {'latitude':16, 'longitude':106};
latlong.VU = {'latitude':-16, 'longitude':167};
latlong.WF = {'latitude':-13.3, 'longitude':-176.2};
latlong.WS = {'latitude':-13.5833, 'longitude':-172.3333};
latlong.YE = {'latitude':15, 'longitude':48};
latlong.YT = {'latitude':-12.8333, 'longitude':45.1667};
latlong.ZA = {'latitude':-29, 'longitude':24};
latlong.ZM = {'latitude':102.593412, 'longitude':19.512803};
latlong.ZW = {'latitude':104.889750, 'longitude':12.795783};

var mapData = [
// {'code':'AF' , 'name':'日本海', 'value':16, 'color':'#eea638'},
// {'code':'AL' , 'name':'南海', 'value':16, 'color':'#d8854f'},
{'code':'AO' , 'name':'雅典', 'value':8, 'color':'#de4c4f'},
{'code':'AR' , 'name':'内罗毕', 'value':8, 'color':'#86a965'},	
{'code':'AM' , 'name':'北京', 'value':8, 'color':'#d8854f'},	
{'code':'AU' , 'name':'河内', 'value':8, 'color':'#8aabb0'},	
{'code':'AT' , 'name':'吉隆坡', 'value':8, 'color':'#d8854f'},	
{'code':'AZ' , 'name':'雅加达', 'value':8, 'color':'#d8854f'},	
{'code':'BH' , 'name':'科伦坡', 'value':8, 'color':'#eea638'},	
	

// {'code':'BT' , 'name':'俄罗斯', 'value':12, 'color':'#eea638'},	
// {'code':'BO' , 'name':'欧洲', 'value':16, 'color':'#86a965'},	
// {'code':'BA' , 'name':'加拿大', 'value':12, 'color':'#d8854f'},	
// {'code':'BW' , 'name':'太平洋', 'value':16, 'color':'#de4c4f'},	
// {'code':'BR' , 'name':'北美洲', 'value':16, 'color':'#86a965'},		
// {'code':'BF' , 'name':'美国', 'value':12, 'color':'#de4c4f'},	
// {'code':'BI' , 'name':'北欧', 'value':16, 'color':'#de4c4f'},	
// {'code':'KH' , 'name':'中欧', 'value':16, 'color':'#eea638'},	
// {'code':'CM' , 'name':'东欧', 'value':16, 'color':'#de4c4f'},	
// {'code':'CA' , 'name':'西欧', 'value':16, 'color':'#a7a737'},	
// {'code':'CV' , 'name':'南欧', 'value':16, 'color':'#de4c4f'},	
// {'code':'CF' , 'name':'北太平洋', 'value':16, 'color':'#de4c4f'},	
{'code':'CN' , 'name':'威尼斯', 'value':8, 'color':'#eea638'},
{'code':'CO' , 'name':'中亚', 'value':16, 'color':'#86a965'},	
{'code':'KM' , 'name':'加尔各答', 'value':12, 'color':'#de4c4f'},	
// {'code':'CD' , 'name':'扎鲁比诺港', 'value':4, 'color':'#de4c4f'},	
// {'code':'CG' , 'name':'斯拉夫扬卡镇', 'value':4, 'color':'#de4c4f'},	
// {'code':'CR' , 'name':'珲春', 'value':4, 'color':'#a7a737'},	
// {'code':'CI' , 'name':'延吉', 'value':4, 'color':'#de4c4f'},	
// {'code':'HR' , 'name':'吉林', 'value':4, 'color':'#d8854f'},	
// {'code':'CY' , 'name':'郑州', 'value':4, 'color':'#d8854f'},	
{'code':'CZ' , 'name':'西安', 'value':4, 'color':'#d8854f'},	
{'code':'DJ' , 'name':'泉州', 'value':4, 'color':'#de4c4f'},	
{'code':'DO' , 'name':'福州', 'value':4, 'color':'#a7a737'},	
{'code':'EC' , 'name':'广州', 'value':4, 'color':'#86a965'},
{'code':'EG' , 'name':'海口', 'value':4, 'color':'#de4c4f'},	
{'code':'SV' , 'name':'连云港', 'value':4, 'color':'#a7a737'},	
{'code':'GQ' , 'name':'兰州', 'value':4, 'color':'#de4c4f'},	
{'code':'ZM' , 'name':'老挝', 'value':12, 'color':'#a7a737'},
// {'code':'ER' , 'name':'新疆', 'value':4, 'color':'#de4c4f'},
{'code':'ZW' , 'name':'柬埔寨', 'value':12, 'color':'#de4c4f'}

];

var max = -Infinity;
var min = Infinity;
mapData.forEach(function (itemOpt) {
    if (itemOpt.value > max) {
        max = itemOpt.value;
    }
    if (itemOpt.value < min) {
        min = itemOpt.value;
    }
});

var blurPoints = (function(){
    var geoObj = {};
    for(var i=0;i<mapData.length;i++){
        geoObj[mapData[i].name] = [latlong[mapData[i].code].latitude,latlong[mapData[i].code].longitude];
    }
    return geoObj;
})();


var cityData=[
    {'code':'CU' , 'name':'长春', 'value':4, 'color':'#a7a737'},	
    {'code':'DK' , 'name':'乌鲁木齐', 'value':4, 'color':'#d8854f'},
    {'code':'BE' , 'name':'哈萨克斯坦', 'value':12, 'color':'#d8854f'},
    {'code':'TD' , 'name':'蒙古国', 'value':12, 'color':'#de4c4f'},	
    {'code':'CL' , 'name':'海参崴', 'value':4, 'color':'#86a965'},	
    {'code':'BN' , 'name':'韩国', 'value':12, 'color':'#eea638'},	
    {'code':'BY' , 'name':'日本', 'value':12, 'color':'#d8854f'},	
    {'code':'BD' , 'name':'阿富汗', 'value':12, 'color':'#eea638'},	
    {'code':'BG' , 'name':'匈牙利', 'value':12, 'color':'#d8854f'},
    {'code':'DZ' , 'name':'巴黎', 'value':8, 'color':'#de4c4f'},	
    {'code':'BJ' , 'name':'德国', 'value':12, 'color':'#de4c4f'}
];


var noBlurPoints = (function(){
    var geoObj = {};
    for(var i=0;i<cityData.length;i++){
        geoObj[cityData[i].name] = [latlong[cityData[i].code].latitude,latlong[cityData[i].code].longitude];
    }
    return geoObj;
})();

var areaData=[
    {name:'南海', value:30, lat:14.421249, lng:113.026524, color: '#a7a737'},
    {name:'欧洲', value:30, lat:51.915390, lng:6.672310, color: '#a7a737'},
    {name:'东南亚', value:1000000, lat:8.680429, lng:99.532973, color: '#a7a737'},
    {name:'南亚', value:30, lat:14.870506, lng:77.534990, color: '#a7a737'},
    {name:'印度洋', value:50, lat:5.777106, lng:58.549894, color: '#a7a737'},
    {name:'西亚', value:30, lat:34.276180, lng:51.288060, color: '#a7a737'},
    {name:'地中海', value:50, lat:35.360773, lng:18.039340, color: '#a7a737'},
    {name:'俄罗斯', value:50, lat:55.672529, lng:43.491217, color: '#a7a737'},
    {name:'中亚', value:30, lat:41.717478, lng:74.311367, color: '#a7a737'},
];

var areaPoints = (function(){
    var geoObj = {};
    for(var i=0;i<areaData.length;i++){
        geoObj[areaData[i].name] = [areaData[i].lng,areaData[i].lat];
    }
    return geoObj;
})();

option = {
    backgroundColor: '#404a59',
    title : {
        text: '一带一路',
        subtext: 'Navinfo',
        x:'center',
        textStyle: {
            color: '#fff'
        }
    },
    series : [
        {
            name: 'cities',
            type: 'map',
            mapType: 'world',
            hoverable: false,
            roam:true,
            itemStyle: {
                normal:{
                    borderColor:'#111',
                    borderWidth:0.3,
                    areaStyle:{
                        color: '#323c48'
                    }
                }
            },
            data : [],
            markPoint : {
                symbol:'emptyCircle',
                symbolSize: 10,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                effect : {
                    show: true,
                    shadowBlur : 1
                },
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            position:'right'
                        }
                    },
                    emphasis: {
                        label:{
                            position:'right'
                        }
                    }
                },
                data : mapData.map(function (itemOpt) {
                    return {
                        name: itemOpt.name,
                        value: itemOpt.value,
                    };
                })
            },
            geoCoord: blurPoints
        },
        {
            name: 'citiesLabel',
            type: 'map',
            mapType: 'world',
            hoverable: false,
            roam:true,
            scaleLimit: { min: 1, max: 2 },
            data : [],
            markPoint : {
                symbol:'circle',
                symbolSize: 0,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            position:'right',
                            formatter: '{b}',
                            textStyle:{
                                color: '#FF8C00'
                            }
                        }
                    },
                    emphasis: {
                        label:{
                            position:'right'
                        }
                    }
                },
                data : mapData.map(function (itemOpt) {
                    return {
                        name: itemOpt.name,
                        value: itemOpt.value,
                    };
                })
            },
            geoCoord: blurPoints
        },
        {
            name: 'citiesNoBlur',
            type: 'map',
            mapType: 'world',
            hoverable: false,
            roam:true,
            scaleLimit: { min: 1, max: 2 },
            data : [],
            markPoint : {
                symbol:'circle',
                symbolSize: 5,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            position:'right',
                            formatter: '{b}',
                            textStyle:{
                                color: '#FF8C00'
                            }
                        }
                    },
                    emphasis: {
                        label:{
                            position:'right'
                        }
                    }
                },
                data : cityData.map(function (itemOpt) {
                    return {
                        name: itemOpt.name,
                        value: itemOpt.value,
                    };
                })
            },
            geoCoord: noBlurPoints
        },
        {
            name: 'areaPoints',
            type: 'map',
            mapType: 'world',
            hoverable: false,
            roam:true,
            itemStyle: {
                normal:{
                    borderColor:'#111',
                    borderWidth:0.3,
                    areaStyle:{
                        color: '#323c48'
                    }
                }
            },
            scaleLimit: { min: 1, max: 2 },
            data : [],
            markPoint : {
                symbol:'circle',
                symbolSize: 20,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            position:'inside',
                            formatter: '{b}',
                            textStyle:{
                                color: '#FF8C00'
                            }
                        }
                    },
                    emphasis: {
                        label:{
                            position:'right'
                        }
                    }
                },
                data : areaData.map(function (itemOpt) {
                    return {
                        name: itemOpt.name,
                        value: itemOpt.value,
                    };
                })
            },
            geoCoord: areaPoints
        },
        {
            name: '一带一路1',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: 'world',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:1,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data:[],
            markLine : {
                symbol: ['none', 'none'],  
                symbolSize : 1,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 50,             // 运动周期，无单位，值越大越慢
                    color: '#fff',
                    shadowColor: 'rgba(220,220,220,0.4)',
                    shadowBlur : 1
                },
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:1,
                        borderColor:['rgba(30,144,255,1)','lime'][0],
                        lineStyle: {
                            //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
                            //shadowBlur: 10,
                            //shadowOffsetX: 0,
                            //shadowOffsetY: 0,
                            type: 'solid'
                        }
                    }
                },
                smooth:false,
                data :[[{"name":"point0"},{"name":"point1"}],[{"name":"point1"},{"name":"point2"}],[{"name":"point2"},{"name":"point3"}],[{"name":"point3"},{"name":"point4"}],[{"name":"point4"},{"name":"point5"}],[{"name":"point5"},{"name":"point6"}],[{"name":"point6"},{"name":"point7"}],[{"name":"point7"},{"name":"point8"}],[{"name":"point8"},{"name":"point9"}],[{"name":"point9"},{"name":"point10"}],[{"name":"point10"},{"name":"point11"}],[{"name":"point11"},{"name":"point12"}],[{"name":"point12"},{"name":"point13"}],[{"name":"point13"},{"name":"point14"}],[{"name":"point14"},{"name":"point15"}],[{"name":"point15"},{"name":"point16"}],[{"name":"point16"},{"name":"point17"}],[{"name":"point17"},{"name":"point18"}],[{"name":"point18"},{"name":"point19"}],[{"name":"point19"},{"name":"point20"}],[{"name":"point20"},{"name":"point21"}],[{"name":"point21"},{"name":"point22"}],[{"name":"point22"},{"name":"point23"}],[{"name":"point23"},{"name":"point24"}],[{"name":"point24"},{"name":"point25"}],[{"name":"point25"},{"name":"point26"}],[{"name":"point26"},{"name":"point27"}],[{"name":"point27"},{"name":"point28"}],[{"name":"point28"},{"name":"point29"}],[{"name":"point29"},{"name":"point30"}],[{"name":"point30"},{"name":"point31"}],[{"name":"point31"},{"name":"point32"}],[{"name":"point32"},{"name":"point33"}],[{"name":"point33"},{"name":"point34"}],[{"name":"point34"},{"name":"point35"}],[{"name":"point35"},{"name":"point36"}],[{"name":"point36"},{"name":"point37"}],[{"name":"point37"},{"name":"point38"}],[{"name":"point38"},{"name":"point39"}],[{"name":"point39"},{"name":"point40"}],[{"name":"point40"},{"name":"point41"}],[{"name":"point41"},{"name":"point42"}],[{"name":"point42"},{"name":"point43"}],[{"name":"point43"},{"name":"point44"}],[{"name":"point44"},{"name":"point45"}],[{"name":"point45"},{"name":"point46"}],[{"name":"point46"},{"name":"point47"}],[{"name":"point47"},{"name":"point48"}],[{"name":"point48"},{"name":"point49"}],[{"name":"point49"},{"name":"point50"}],[{"name":"point50"},{"name":"point51"}],[{"name":"point51"},{"name":"point52"}],[{"name":"point52"},{"name":"point53"}],[{"name":"point53"},{"name":"point54"}],[{"name":"point54"},{"name":"point55"}],[{"name":"point55"},{"name":"point56"}],[{"name":"point56"},{"name":"point57"}],[{"name":"point57"},{"name":"point58"}],[{"name":"point58"},{"name":"point59"}],[{"name":"point59"},{"name":"point60"}],[{"name":"point60"},{"name":"point61"}],[{"name":"point61"},{"name":"point62"}],[{"name":"point62"},{"name":"point63"}],[{"name":"point63"},{"name":"point64"}],[{"name":"point64"},{"name":"point65"}],[{"name":"point65"},{"name":"point66"}],[{"name":"point66"},{"name":"point67"}],[{"name":"point67"},{"name":"point68"}],[{"name":"point68"},{"name":"point69"}],[{"name":"point69"},{"name":"point70"}],[{"name":"point70"},{"name":"point71"}],[{"name":"point71"},{"name":"point72"}],[{"name":"point72"},{"name":"point73"}],[{"name":"point73"},{"name":"point74"}],[{"name":"point74"},{"name":"point75"}],[{"name":"point75"},{"name":"point76"}],[{"name":"point76"},{"name":"point77"}],[{"name":"point77"},{"name":"point78"}],[{"name":"point78"},{"name":"point79"}],[{"name":"point79"},{"name":"point80"}],[{"name":"point80"},{"name":"point81"}],[{"name":"point81"},{"name":"point82"}],[{"name":"point82"},{"name":"point83"}],[{"name":"point83"},{"name":"point84"}],[{"name":"point84"},{"name":"point85"}],[{"name":"point85"},{"name":"point86"}],[{"name":"point86"},{"name":"point87"}],[{"name":"point87"},{"name":"point88"}],[{"name":"point88"},{"name":"point89"}],[{"name":"point89"},{"name":"point90"}],[{"name":"point90"},{"name":"point91"}],[{"name":"point91"},{"name":"point92"}],[{"name":"point92"},{"name":"point93"}],[{"name":"point93"},{"name":"point94"}],[{"name":"point94"},{"name":"point95"}],[{"name":"point95"},{"name":"point96"}],[{"name":"point96"},{"name":"point97"}],[{"name":"point97"},{"name":"point98"}],[{"name":"point98"},{"name":"point99"}],[{"name":"point99"},{"name":"point100"}],[{"name":"point100"},{"name":"point101"}],[{"name":"point101"},{"name":"point102"}],[{"name":"point102"},{"name":"point103"}],[{"name":"point103"},{"name":"point104"}],[{"name":"point104"},{"name":"point105"}],[{"name":"point105"},{"name":"point106"}],[{"name":"point106"},{"name":"point107"}],[{"name":"point107"},{"name":"point108"}],[{"name":"point108"},{"name":"point109"}],[{"name":"point109"},{"name":"point110"}],[{"name":"point110"},{"name":"point111"}],[{"name":"point111"},{"name":"point112"}],[{"name":"point112"},{"name":"point113"}],[{"name":"point113"},{"name":"point114"}],[{"name":"point114"},{"name":"point115"}],[{"name":"point115"},{"name":"point116"}],[{"name":"point116"},{"name":"point117"}],[{"name":"point117"},{"name":"point118"}],[{"name":"point118"},{"name":"point119"}],[{"name":"point119"},{"name":"point120"}],[{"name":"point120"},{"name":"point121"}],[{"name":"point121"},{"name":"point122"}],[{"name":"point122"},{"name":"point123"}],[{"name":"point123"},{"name":"point124"}],[{"name":"point124"},{"name":"point125"}],[{"name":"point125"},{"name":"point126"}],[{"name":"point126"},{"name":"point127"}],[{"name":"point127"},{"name":"point128"}],[{"name":"point128"},{"name":"point129"}],[{"name":"point129"},{"name":"point130"}],[{"name":"point130"},{"name":"point131"}],[{"name":"point131"},{"name":"point132"}],[{"name":"point132"},{"name":"point133"}],[{"name":"point133"},{"name":"point134"}],[{"name":"point134"},{"name":"point135"}],[{"name":"point135"},{"name":"point136"}],[{"name":"point136"},{"name":"point137"}],[{"name":"point137"},{"name":"point138"}],[{"name":"point138"},{"name":"point139"}],[{"name":"point139"},{"name":"point140"}],[{"name":"point140"},{"name":"point141"}],[{"name":"point141"},{"name":"point142"}],[{"name":"point142"},{"name":"point143"}],[{"name":"point143"},{"name":"point144"}],[{"name":"point144"},{"name":"point145"}],[{"name":"point145"},{"name":"point146"}],[{"name":"point146"},{"name":"point147"}],[{"name":"point147"},{"name":"point148"}],[{"name":"point148"},{"name":"point149"}],[{"name":"point149"},{"name":"point150"}],[{"name":"point150"},{"name":"point151"}],[{"name":"point151"},{"name":"point152"}],[{"name":"point152"},{"name":"point153"}],[{"name":"point153"},{"name":"point154"}],[{"name":"point154"},{"name":"point155"}],[{"name":"point155"},{"name":"point156"}],[{"name":"point156"},{"name":"point157"}],[{"name":"point157"},{"name":"point158"}],[{"name":"point158"},{"name":"point159"}],[{"name":"point159"},{"name":"point160"}],[{"name":"point160"},{"name":"point161"}],[{"name":"point161"},{"name":"point162"}],[{"name":"point162"},{"name":"point163"}],[{"name":"point163"},{"name":"point164"}],[{"name":"point164"},{"name":"point165"}],[{"name":"point165"},{"name":"point166"}],[{"name":"point166"},{"name":"point167"}],[{"name":"point167"},{"name":"point168"}],[{"name":"point168"},{"name":"point169"}],[{"name":"point169"},{"name":"point170"}],[{"name":"point170"},{"name":"point171"}],[{"name":"point171"},{"name":"point172"}],[{"name":"point172"},{"name":"point173"}],[{"name":"point173"},{"name":"point174"}],[{"name":"point174"},{"name":"point175"}],[{"name":"point175"},{"name":"point176"}],[{"name":"point176"},{"name":"point177"}],[{"name":"point177"},{"name":"point178"}],[{"name":"point178"},{"name":"point179"}],[{"name":"point179"},{"name":"point180"}],[{"name":"point180"},{"name":"point181"}],[{"name":"point181"},{"name":"point182"}],[{"name":"point182"},{"name":"point183"}],[{"name":"point183"},{"name":"point184"}],[{"name":"point184"},{"name":"point185"}],[{"name":"point185"},{"name":"point186"}],[{"name":"point186"},{"name":"point187"}],[{"name":"point187"},{"name":"point188"}],[{"name":"point188"},{"name":"point189"}],[{"name":"point189"},{"name":"point190"}],[{"name":"point190"},{"name":"point191"}],[{"name":"point191"},{"name":"point192"}],[{"name":"point192"},{"name":"point193"}],[{"name":"point193"},{"name":"point194"}],[{"name":"point194"},{"name":"point195"}],[{"name":"point195"},{"name":"point196"}],[{"name":"point196"},{"name":"point197"}],[{"name":"point197"},{"name":"point198"}],[{"name":"point198"},{"name":"point199"}],[{"name":"point199"},{"name":"point200"}],[{"name":"point200"},{"name":"point201"}],[{"name":"point201"},{"name":"point202"}],[{"name":"point202"},{"name":"point203"}],[{"name":"point203"},{"name":"point204"}],[{"name":"point204"},{"name":"point205"}],[{"name":"point205"},{"name":"point206"}],[{"name":"point206"},{"name":"point207"}]],
            },
            geoCoord: {"point0":[119.213565,34.590563],"point1":[117.348651,34.867114],"point2":[116.392071,34.999642],"point3":[115.945735,35.042326],"point4":[115.482155,35.066746],"point5":[115.124223,35.015648],"point6":[114.677887,34.91961],"point7":[114.12806,34.844913],"point8":[113.547228,34.790404],"point9":[112.763186,34.78681],"point10":[111.798219,34.747338],"point11":[111.191301,34.727531],"point12":[110.472011,34.627562],"point13":[109.929922,34.482994],"point14":[109.477122,34.37449],"point15":[109.218377,34.338039],"point16":[108.923181,34.352802],"point17":[108.506829,34.610151],"point18":[108.189867,34.759545],"point19":[107.795282,34.906166],"point20":[106.542507,35.426074],"point21":[105.311332,35.785054],"point22":[103.875069,36.082328],"point23":[101.854267,37.310325],"point24":[99.79683,38.326859],"point25":[95.92611,39.475851],"point26":[91.65219,40.286891],"point27":[87.13635,40.962795],"point28":[85.199313,41.193524],"point29":[81.894814,41.435915],"point30":[78.69778,41.54341],"point31":[77.249715,41.473709],"point32":[75.646749,41.357297],"point33":[74.963135,41.205528],"point34":[74.27807,40.862539],"point35":[73.673878,40.445395],"point36":[72.428494,39.649919],"point37":[71.294086,39.077559],"point38":[69.91307,38.359683],"point39":[68.87731,37.855231],"point40":[67.52239,37.27764],"point41":[64.56261,36.35081],"point42":[62.528203,35.78854],"point43":[60.500623,35.488884],"point44":[57.616959,35.451428],"point45":[51.42277,35.6961],"point46":[43.514057,36.906262],"point47":[38.197285,38.029939],"point48":[34.097065,39.649986],"point49":[32.429986,41.0545],"point50":[31.528809,42.263058],"point51":[31.123305,43.308282],"point52":[30.762826,44.946564],"point53":[30.807882,47.441956],"point54":[31.44453,49.78783],"point55":[32.38489,51.654964],"point56":[34.097065,53.33593],"point57":[37.620277,55.754166],"point58":[32.673854,54.314556],"point59":[30.14995,53.676124],"point60":[27.222206,53.037692],"point61":[23.688734,52.46646],"point62":[20.86195,52.096828],"point63":[17.126558,51.828012],"point64":[14.754078,51.660012],"point65":[12.482558,51.660012],"point66":[9.554814,51.727212],"point67":[6.923664,51.922271],"point68":[6.799616,51.930805],"point69":[6.730698,51.937204],"point70":[6.67231,51.91539],"point71":[6.668676,51.845469],"point72":[6.692794,51.785733],"point73":[7.410795,49.7272],"point74":[8.309915,48.459954],"point75":[10.09358,46.57625],"point76":[11.876819,44.748645],"point77":[12.608751,44.175237],"point78":[13.391167,43.601829],"point79":[14.249295,43.219557],"point80":[15.258863,42.856397],"point81":[15.817467,42.51173],"point82":[16.697495,41.977165],"point83":[17.345947,41.45805],"point84":[18.45761,40.23161],"point85":[19.683611,39.18073],"point86":[20.59225,38.436],"point87":[21.2635,37.98692],"point88":[22.15616,37.693547],"point89":[22.73775,37.58109],"point90":[22.987862,37.586599],"point91":[23.16031,37.62231],"point92":[23.27667,37.673373],"point93":[23.365459,37.742849],"point94":[23.44356,37.87691],"point95":[23.513797,37.924053],"point96":[23.575079,37.948083],"point97":[23.659722,37.972261],"point98":[23.723562,37.986723],"point99":[23.778284,37.990338],"point100":[23.840606,37.986723],"point101":[23.920336,37.967981],"point102":[23.97589,37.924053],"point103":[24.025143,37.865011],"point104":[24.068296,37.769901],"point105":[24.105288,37.644797],"point106":[24.189636,37.505151],"point107":[24.34415,37.359191],"point108":[24.532252,37.186201],"point109":[24.713636,37.018617],"point110":[28.663776,34.248505],"point111":[31.350958,31.953962],"point112":[33.285728,30.003209],"point113":[33.957518,29.173154],"point114":[35.16675,27.08117],"point115":[36.617824,24.484313],"point116":[38.391365,21.723655],"point117":[39.170636,20.575616],"point118":[39.734944,19.625809],"point119":[40.191772,18.866312],"point120":[40.467207,18.226864],"point121":[40.762791,17.41714],"point122":[41.065079,16.349586],"point123":[41.34726,15.345656],"point124":[41.842163,14.433642],"point125":[42.314636,13.228164],"point126":[43.013293,12.228448],"point127":[43.67937,11.918278],"point128":[44.410636,11.74847],"point129":[45.158126,11.641962],"point130":[45.969201,11.654076],"point131":[47.201502,11.786702],"point132":[48.280177,12.031436],"point133":[51.606497,12.539517],"point134":[52.009613,12.509689],"point135":[52.311937,12.298829],"point136":[52.576477,11.950977],"point137":[52.715041,11.528637],"point138":[52.702445,11.206017],"point139":[52.500893,10.721801],"point140":[52.211169,10.180797],"point141":[51.63169,9.39098],"point142":[49.767338,6.743428],"point143":[48.763847,5.492285],"point144":[46.990343,3.990677],"point145":[45.008332,3.03203],"point146":[36.812777,-1.273333],"point147":[42.933952,-2.654872],"point148":[49.493792,-3.589064],"point149":[55.165824,-4.080744],"point150":[65.720736,-4.375752],"point151":[72.543165,-4.204525],"point152":[74.794736,-3.855792],"point153":[76.850868,-3.45804],"point154":[79.42066,-2.710816],"point155":[80.831508,-2.162848],"point156":[81.990452,-1.465432],"point157":[83.549789,-0.515559],"point158":[84.830034,1.046844],"point159":[85.894957,2.879897],"point160":[86.636431,4.581121],"point161":[87.785044,7.089928],"point162":[88.490484,9.234696],"point163":[88.862479,10.62039],"point164":[89.170723,11.768606],"point165":[89.599027,14.027678],"point166":[89.800579,15.637854],"point167":[89.800564,17.215256],"point168":[89.372281,19.435014],"point169":[88.994361,20.94907],"point170":[88.629559,22.31013],"point171":[88.297836,22.195264],"point172":[88.05375,21.67128],"point173":[87.974011,20.932409],"point174":[87.822843,20.047881],"point175":[87.646491,19.139449],"point176":[87.470139,18.278825],"point177":[87.318971,17.418201],"point178":[87.069584,16.39667],"point179":[86.790976,15.520894],"point180":[86.385712,14.57003],"point181":[85.929808,13.54411],"point182":[85.524544,12.643294],"point183":[84.900353,11.752431],"point184":[84.295696,10.867899],"point185":[83.615457,9.959463],"point186":[82.645471,9.002687],"point187":[82.003888,8.289382],"point188":[81.370672,7.688838],"point189":[80.862553,7.180348],"point190":[80.554287,6.928483],"point191":[83.339963,8.273846],"point192":[86.531354,9.811075],"point193":[87.797786,10.363587],"point194":[88.862479,10.62039],"point195":[89.67209,10.815667],"point196":[91.495738,11.021315],"point197":[92.6115,11.011605],"point198":[93.72465,10.945555],"point199":[94.803372,10.659557],"point200":[95.750938,10.162675],"point201":[96.510785,9.183203],"point202":[97.447953,7.952587],"point203":[98.385114,6.345251],"point204":[99.398243,4.435174],"point205":[100.183425,3.783547],"point206":[100.791313,3.507283],"point207":[102.144024,3.042791]}
        },
        {
            name: '一带一路2',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: 'world',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:1,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data:[],
            markLine : {
                symbol: ['none', 'none'],  
                symbolSize : 1,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 50,             // 运动周期，无单位，值越大越慢
                    color: '#fff',
                    shadowColor: 'rgba(220,220,220,0.4)',
                    shadowBlur : 1
                },
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:1,
                        borderColor:['rgba(30,144,255,1)','lime'][0],
                        lineStyle: {
                            //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
                            //shadowBlur: 10,
                            //shadowOffsetX: 0,
                            //shadowOffsetY: 0,
                            type: 'solid'
                        }
                    }
                },
                smooth:false,
                data:[[{"name":"point208"},{"name":"point209"}],[{"name":"point209"},{"name":"point210"}],[{"name":"point210"},{"name":"point211"}],[{"name":"point211"},{"name":"point212"}],[{"name":"point212"},{"name":"point213"}],[{"name":"point213"},{"name":"point214"}],[{"name":"point214"},{"name":"point215"}],[{"name":"point215"},{"name":"point216"}],[{"name":"point216"},{"name":"point217"}],[{"name":"point217"},{"name":"point218"}],[{"name":"point218"},{"name":"point219"}],[{"name":"point219"},{"name":"point220"}],[{"name":"point220"},{"name":"point221"}],[{"name":"point221"},{"name":"point222"}],[{"name":"point222"},{"name":"point223"}],[{"name":"point223"},{"name":"point224"}],[{"name":"point224"},{"name":"point225"}],[{"name":"point225"},{"name":"point226"}],[{"name":"point226"},{"name":"point227"}],[{"name":"point227"},{"name":"point228"}],[{"name":"point228"},{"name":"point229"}],[{"name":"point229"},{"name":"point230"}],[{"name":"point230"},{"name":"point231"}],[{"name":"point231"},{"name":"point232"}],[{"name":"point232"},{"name":"point233"}],[{"name":"point233"},{"name":"point234"}],[{"name":"point234"},{"name":"point235"}],[{"name":"point235"},{"name":"point236"}],[{"name":"point236"},{"name":"point237"}],[{"name":"point237"},{"name":"point238"}],[{"name":"point238"},{"name":"point239"}],[{"name":"point239"},{"name":"point240"}],[{"name":"point240"},{"name":"point241"}],[{"name":"point241"},{"name":"point242"}],[{"name":"point242"},{"name":"point243"}],[{"name":"point243"},{"name":"point244"}],[{"name":"point244"},{"name":"point245"}],[{"name":"point245"},{"name":"point246"}],[{"name":"point246"},{"name":"point247"}],[{"name":"point247"},{"name":"point248"}],[{"name":"point248"},{"name":"point249"}],[{"name":"point249"},{"name":"point250"}],[{"name":"point250"},{"name":"point251"}],[{"name":"point251"},{"name":"point252"}],[{"name":"point252"},{"name":"point253"}]]
            },
            geoCoord:{"point208":[102.144024,3.042791],"point209":[102.270827,3.121021],"point210":[102.403149,3.242006],"point211":[102.608985,3.520638],"point212":[102.895689,4.092566],"point213":[103.123586,4.811142],"point214":[103.491138,6.145638],"point215":[104.049842,8.521342],"point216":[105.480947,13.94584],"point217":[105.480947,15.646748],"point218":[104.537093,17.071685],"point219":[103.698621,17.691307],"point220":[103.131417,18.626591],"point221":[103.069761,19.211143],"point222":[103.230061,19.830767],"point223":[103.636969,20.263335],"point224":[104.080865,20.485463],"point225":[104.980993,20.656278],"point226":[105.930441,20.80955],"point227":[106.707265,20.844918],"point228":[107.521076,20.844917],"point229":[108.334884,20.632693],"point230":[109.19802,20.208261],"point231":[110.27909,19.96086],"point232":[111.05042,20.26119],"point233":[111.709497,20.628392],"point234":[112.112265,20.915268],"point235":[112.490633,21.270996],"point236":[112.83371,21.97181],"point237":[113.21466,22.75849],"point238":[113.279877,22.913184],"point239":[113.35523,23.02803],"point240":[113.504843,23.041924],"point241":[113.63461,23.00486],"point242":[113.93767,22.8281],"point243":[114.416871,22.644508],"point244":[114.93676,22.52945],"point245":[115.462655,22.498976],"point246":[116.005701,22.522553],"point247":[116.526686,22.655704],"point248":[116.970538,22.790042],"point249":[117.499514,23.03073],"point250":[118.031781,23.324281],"point251":[118.320338,23.730406],"point252":[118.46279,24.03369],"point253":[118.73987,24.889068]}
        },
        {
            name: '一带一路3',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: 'world',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:1,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data:[],
            markLine : {
                symbol: ['none', 'none'],  
                symbolSize : 1,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 50,             // 运动周期，无单位，值越大越慢
                    color: '#fff',
                    shadowColor: 'rgba(220,220,220,0.4)',
                    shadowBlur : 1
                },
                itemStyle : {
                    normal: {
                        color:'#fff',
                        borderWidth:1,
                        borderColor:['rgba(30,144,255,1)','lime'][0],
                        lineStyle: {
                            //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
                            //shadowBlur: 10,
                            //shadowOffsetX: 0,
                            //shadowOffsetY: 0,
                            type: 'solid'
                        }
                    }
                },
                smooth:false,
                data: [[{"name":"point260"},{"name":"point261"}],[{"name":"point261"},{"name":"point262"}],[{"name":"point262"},{"name":"point263"}],[{"name":"point263"},{"name":"point264"}],[{"name":"point264"},{"name":"point265"}]]
            },
            geoCoord: {"point260":[102.144024,3.042791],"point261":[102.545336,2.822987],"point262":[102.778352,2.616115],"point263":[102.925091,2.382804],"point264":[106.829606,-5.93061],"point265":[106.827492,-6.172472]}
        }
    ]
};

myChart.setOption(option);
                    