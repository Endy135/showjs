class PieChartCreator{
    static createChart(props){
       var arcs = [];
       var x = 280, y = 200;
       props.value.map((v, index)=>{
         var angle = (v/100 *3.6)/0.01;
         var text = aya.Text(0, 0, v + "%");
         var arc = aya.Arc(200, 200, x, y, angle, 0);
         arc.addChild(text, (p,c)=>{
            if(arc.x0 < arc.x){
               if(arc.x0 <= arc.dest_x){
                  c.setOffsetX(p.x0 + p.radius/2);
                  if(arc.y0 > arc.dest_y)
                     c.setOffsetY(p.y0 - Math.abs(p.dest_y - p.y)/2);
                  else
                     c.setOffsetY(p.y0 + Math.abs(p.dest_y - p.y)/2) ;
               }
               else{
                  if(arc.x0 >= arc.dest_x){
                     c.setOffsetX(p.x0 - Math.abs(p.dest_x - p.x)/2);
                     c.setOffsetY(p.y0 - p.radius/2);
                  }
               }
            } 
            else{
                  if(arc.x0 > arc.dest_x){
                     c.setOffsetX(p.x0 - p.radius/2);
                     if(arc.y0 < arc.dest_y)
                        c.setOffsetY(p.y0 + Math.abs(p.dest_y - p.y)/2);
                     else
                        c.setOffsetY(p.y0 - Math.abs(p.y - p.dest_y)/2);
                  }
                  else{
                     c.setOffsetX(p.x0 - p.radius/2);
                     c.setOffsetY(p.y0 + Math.abs(p.y - p.dest_y)/2);
                  }  
            }    
         }, (p,c)=>{}, false);
         x = arc.dest_x;
         y = arc.dest_y;
         arcs.push(arc);
      });
      arcs.map((arc) =>{
         arc.draw();
         arc.children[0].child.draw();
      });
       return arcs;
    }
 }