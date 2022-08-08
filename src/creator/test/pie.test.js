QUnit.module("PieChart");
QUnit.test("component pie's creation",(assert) =>{
    var props = {
      value:[20,30,50],
      label:["un","deux","trois"],
      color:["red","blue","yellow"],
      name:"pie",
      options:{
         type:"donut",
         caracter:"white_skin",
         percent_print:true
      }
   };
    var cp = new Component("pie","name of component", props);
      assert.ok(cp.id,'id must be defined as String by ayajs');
      assert.equal(cp.name,"name of component","component's name");
      assert.equal(cp.type,'pie');
      assert.equal(cp.form[0].type,"arc","type must be arc");
      assert.propEqual(cp.props, props,"props must be defined");
});

QUnit.test("all the arcs are concentrated and form a circle", (assert) =>{
   var props = {
      value:[20,30,50],
      label:["un","deux","trois"],
      color:["red","blue","yellow"],
      name:"pie",
      options:{
         type:"donut",
         caracter:"white_skin",
         percent_print:true
      }
   };
   var a_x, a_y;
   var cp = new Component("pie","name of component", props);
   
   assert.equal(cp.form[0].type, "arc", "type must be pie");
   assert.equal(cp.form.length,cp.props.value.length,"the number of arc must be the size of value array");
   cp.form.map((arc,index) =>{
      //assert.equal(arc.radius, 15, "radius must be fifteen");
      assert.equal(arc.x0, 200);
      assert.equal(arc.y0, 200);
      if(index == 0){ 
         assert.equal(arc.y0, arc.y, "the ordinate of the two points base are same");
         assert.equal(arc.x, arc.x0 + arc.radius, "the abcissa of the next point ");
         a_x = arc.dest_x;
         a_y = arc.dest_y;
      }
      else{
         assert.equal(arc.x, a_x);
         assert.equal(arc.y, a_y);
         a_x = arc.dest_x;
         a_y = arc.dest_y;
      }

   });   

   QUnit.test("position of label and percent on arcs ", (assert) =>{
      var props = {
         value:[20,30,50],
         label:["un","deux","trois"],
         color:["red","blue","yellow"],
         name:"pie",
         options:{
            type:"donut",
            caracter:"white_skin",
            percent_print:true
         }
      };
      var child_x, child_y, offsetX, offsetY;
      var cp = new Component("pie", "name of component", props);
      assert.equal(cp.props.options.percent_print, true);
      cp.form.map((arc) =>{
         child_x = arc.children[0].child.x;
         child_y = arc.children[0].child.y;
         offsetX = arc.children[0].child.offsetX;
         offsetY = arc.children[0].child.offsetY;
         assert.equal(arc.children.length, 1, "any arc must have two children");
         //assert.equal(arc.children[0].child.type, "text", "the type must be a text");
         if(arc.x0 < arc.x){
            if(arc.x0 <= arc.dest_x){
               assert.equal(child_x + offsetX, arc.x0 + arc.radius/2);
               if(arc.y0 > arc.dest_y){
                  assert.equal(child_y + offsetY, arc.y0 - Math.abs(arc.dest_y - arc.y)/2);
               }
               else
                  assert.equal(child_y + offsetY, arc.y0 + Math.abs(arc.dest_y - arc.y)/2);
            }
            else{
               if(arc.x0 >= arc.dest_x){
                  assert.equal(child_x + offsetX, arc.x0 - Math.abs(arc.dest_x - arc.x)/2);
                  assert.equal(child_y + offsetY, arc.y0 - arc.radius/2);
               }
            }
         } 
         else{
               if(arc.x0 > arc.dest_x){
                  assert.equal(child_x + offsetX, arc.x0 - arc.radius/2);
                  if(arc.y0 < arc.dest_y){
                     assert.equal(child_y + offsetY, arc.y0 + Math.abs(arc.dest_y -arc.y)/2);
                  }
                  else
                     assert.equal(child_y + offsetY, arc.y0 - Math.abs(arc.y - arc.dest_y)/2);
               }
               else{
                  assert.equal(child_x + offsetX, arc.x0 - arc.radius/2);
                  assert.equal(child_y + offsetY, arc.y0 + Math.abs(arc.dest_y - arc.y)/2);
               }  
         }    
         
      });
   });

});