var colM = [
    { title: "活动名称", dataIndx: 'actName', width: 200, dataType: "string", align: "center" },
    { title: "生效时间 <img src=\"img/sort.png\" style=\"cursor:pointer\" name='begin_time'  height=\"12\" alt=\"\" 
     onclick= sort('begin_time')> ", dataIndx: 'beginTime', width: 160, dataType: "string", align: "center"},
    { title: "失效时间 <img src=\"img/sort.png\" style=\"cursor:pointer\" name='end_time'  height=\"12\" alt=\"\" 
     onclick= sort('end_time') >", dataIndx: 'endTime', width: 160, dataType: "string", align: "center"},
    { title: "创建人", dataIndx: 'createLoginCode', width: 160, dataType: "string", align: "center"},
    { title: "操作", dataIndx: 'opera', minWidth: 80, dataType: "string", align: "center"}
];
