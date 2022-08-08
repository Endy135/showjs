QUnit.module("diagram");

/*QUnit.test("creation of diagram", (assert) =>{
    var cp = new Diagram();
    assert.equal(cp.id, "12a", "id must be defined");
    assert.equal(cp.component[0].length, 1, "the of array component must be one");
    assert.propEqual(cp.legend, {}, "the legend's array must be not empty");
    assert.propEqual(cp.component[0].props, {}, "the props must be defined");
});

QUnit.test("diagram with component and legend", (assert) =>{
    var data = {
        X_data: [203, 401, 307],
        Y_data: [100, 200, 503]
    };
    var legend = {
        title : "graph",
        X_title:"xaxis title",
        Y_title: "yaxis title"
    }; 
    var i;
    var component = {
        type: "type of component",
        name: "name of component",
        props: {
            data:{
                X_data: [203, 401, 307],
                Y_data: [100, 200, 503]
            }
        }
    };
    var cp = new Diagram("id", data, component);
    assert.ok(cp.id, "id must be defined");
    for (i = 0; i < cp.component.length; i++){ 
        assert.propEqual(cp.component[i], {}, "component must be a not empty"); 
    }

    QUnit.test("diagram without data and with component", (assert) =>{
        var legend = {
            title : "graph",
            X_title: "xaxis title",
            Y_title: "yaxis title"
        }; 
        var component = {
            type: "type of component",
            name: "name of component",
            props: {
                data:{}

            }
            
        }
        var cp = new Diagram("id", component, legend);
        assert.equal(cp.id, "id", "id must be defined");
        for (i = 0; i < cp.component.length; i++){ 
            assert.equal(cp.component[i].type, "type of component", "type must be not null");
            assert.equal(cp.component[i].name, "name of component", "component's name");
            assert.propEqual(cp.component[i].props.data, {}, "data must be empty");
        }
        
    });

    QUnit.test("diagram with data and without component", (sassert) =>{
        var cp = new Diagram(data,legend);
        assert.equal();
    });


});

*/
/*
QUnit.test("diagram with a giving type  must initialize components with the same type ", (assert) =>{
    var i;
    var cp = new Diagram("type of component");
    for(i = 0; i < cp.component.length; i++){ 
        assert.equal(cp.type, cp.component[i].type, "the type of all components should have the sa");
    }

});*/

