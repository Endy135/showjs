class PieChartCreator{
    static createChart(props){
       var arcs = [];
       props.value.map((angle)=>{
          arcs.push(aya.Arc(0,0,20,0,angle));
       });
       return arcs;
    }
 }