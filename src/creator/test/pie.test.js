QUnit.module("PieChart");
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