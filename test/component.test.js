QUnit.module("Component");

   QUnit.test('create a component without parameter', (assert) =>{
    //assert.expect(3);
    var cp = new Component();
    assert.ok(cp.id,"id must be defined as String by ayajs");
    assert.equal(cp.name,"name of component","component's name");
    assert.equal(cp.type,"line","type must be lineChart");
    assert.propEqual(cp.props,{},"props must be something");
    assert.equal(cp.form.type,"polyline","form must be Polyline");
   }); 

   QUnit.test("creation of the line chart with markers ",(assert) =>{
      var props ={
         data:[2,3,5,7,11,13,17,19],
         title:"graphe1",
         color:["red"],
         options:{
            markers:true,
         }
      };

      var i,p=0;
      var cp = new Component("line","name of component",props);
      
      assert.ok(cp.id,"id must be defined as a String by ayas");
      assert.equal(cp.name,"name of component","component's name");
      assert.ok(cp.props.options.markers,"markers must be true");
      assert.equal(cp.form.type, "polyline", "form must be polyline with dots");
      assert.equal(cp.form.children.length, cp.props.data.length/2, "the number of children must be a number of couple dots");
      for(i = 0; i< cp.props.data.length/2; i++)
          assert.equal(cp.form.children[i].child.type, "circle", "type must be a circle");
   
     cp.form.children.map(({child},index)=>{
         assert.equal(child.x, cp.props.data[index*2]);
         assert.equal(child.y, cp.props.data[index*2+1]);
     });
   });

   QUnit.test("creation of line chart without markers",(assert) =>{
      var props = {
         data:[2,3,5,7,11,13,17,19],
         title:"graphe1",
         color:["red"],
         options:{
            markers:false,
         }
      }
      var cp = new Component("line","name of component", props);
      assert.ok(cp.id,"id must be defined as a String by ayas");
      assert.equal(cp.name,"name of component","component's name");
      assert.notOk(cp.props.options.markers,"markers must be false");
      assert.equal(cp.form.type, "polyline", "form must be polyline without dots");
      assert.equal(cp.form.children.length, 0,"the table of children must be empty");
   });



   QUnit.test("component pie's creation",(assert) =>{
    var props = {
      value:[20,30,50],
      label:["un","deux","trois"],
      color:["red","blue","yellow"],
      options:{
         type:"donut",
         caracter:"white_skin",
         textInfo:"label+percent"
      }
   }
    var cp = new Component("pie","name of component", props);
      assert.ok(cp.id,'id must be defined as String by ayajs');
      assert.equal(cp.name,"name of component","component's name");
      assert.equal(cp.type,'pie');
      assert.equal(cp.form[0].type,"arc","type must be arc");
      assert.propEqual(cp.props,props,"props must be defined");
   });

   QUnit.test("draw line chart with markers", (assert) =>{
      v_test = 0;
      var props = {
         data:[100,100,151,200,251,300,180,180],
         title:"graphe1",
         color:["red"],
         options:{
            markers:true,
         }
      };
      var cp = new Component("line", "name of component", props);
      assert.equal(v_test,cp.props.data.length/2 +1, "line's chart markers drawing");
   });

   QUnit.test("draw line chart without markers", (assert) =>{
      v_test = 0;
      var props = {
         data:[100,100,151,200,251,300,180,180],
         title:"graphe1",
         color:["red"],
         options:{
            markers:false,
         }
      };
      var cp = new Component("line", "name of component", props);
      assert.equal(v_test,1, "drawing line chart alone");
   });

   
