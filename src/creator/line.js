class LineChartCreator{            
    static createChart(props){
       var polyline = aya.Polyline(props.data);
       if(props.options != null && props.options.markers ){
          for( var i = 0; i<props.data.length; i++){
             if(i%2 == 0){ 
                var child = aya.Circle(props.data[i],props.data[i+1],5);
                polyline.addChild(child,(p,c)=>{},(p,c)=>{},false);
                //console.log(child);
             }
 
          }
          return polyline;
       }
       else
          return aya.Polyline(props.data);
    }
 }