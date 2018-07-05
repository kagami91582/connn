$.ajax({
    url:'https://opendata.epa.gov.tw/ws/Data/RainTenMin/?$format=json',
    type: 'get',
    success: dataCatch(),
    methods:'jsonp',
    error: function(){
        console.log('error');
    }
});

function dataCatch(data){
    console.log(data);
}