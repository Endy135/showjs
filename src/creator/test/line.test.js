QUnit.module("LineChart");


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
    assert.equal(cp.props.options.markers, true, "markers option should be true");
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
    assert.equal(cp.props.options.markers, false, "markers option should be false");
    assert.equal(v_test,1, "drawing line chart alone");
   });
