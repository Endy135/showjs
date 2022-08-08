QUnit.module("Landmark");
/*QUnit.test("creation of landmark with box's diagram parameters", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: ["un", "deux", "trois", "quatre"]
    }
    var ld = new Landmark(10, 10, 1000, 1000, prop);
    assert.equal(ld.x0, 10, "the x_origin must be defined");
    assert.equal(ld.y0, 10 + 1000, "the y_origin must be difined");
    assert.equal(ld.width, 1000, "the width must be defined");
    assert.equal(ld.height, 1000, "the height must be defined");
});

QUnit.test("check if the absissa line and ordinate line are well draw", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: ["un", "deux", "trois", "quatre"]
    }
    var ld = new Landmark(10, 9000, 1000, 1000, prop);

    assert.equal(ld.x_axis.type, "line", "type must be line");
    assert.equal(ld.x_axis.x, ld.x0, "x_abscissa must be ten");
    assert.equal(ld.x_axis.y, ld.y0, "y_abscissa must be ten");
    assert.equal(ld.x_axis.dest_x, ld.x0 + ld.width, "dest_x must be a one thousand and ten");
    assert.equal(ld.x_axis.dest_y, ld.y0, "dest_y absissa must be ten");

    assert.equal(ld.y_axis.type, "line", "type must be line");
    assert.equal(ld.y_axis.x, ld.x0, "x_ordinate must be ten");
    assert.equal(ld.y_axis.y, ld.y0, "y_ordinate must be ten");
    assert.equal(ld.y_axis.dest_x, ld.x0, "dest_x must be a one thousand and ten");
    assert.equal(ld.y_axis.dest_y, ld.y0 - ld.height, "y_ordinate must be one");
});

QUnit.test("let fix the minimum of y_pas when height is greater than y_pas fixed", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: ["un", "deux", "trois", "quatre"]
    }
    var ld  = new Landmark(10, 9000, 1000, 5, prop);
    assert.ok(ld.height > ld.y_pas_min,"the height must be greater than the minimum of y_pas ");
    assert.equal(ld.y_pas_min, 1, "the minimum of y_pas must be ten");
});

QUnit.test("let fix the minimum of y_pas when height is smaller than y_pas_min fixed", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: ["un", "deux", "trois", "quatre"]
    }
    var ld  = new Landmark(10, 9000, 1000, 1, prop);
    assert.ok(ld.height <= 1,"the height must be greater than the minimum of y_pas ");
    assert.equal(ld.y_pas_min, ld.height/2, "the minimum of y_pas must be one");
});

QUnit.test("let fix the minimum of x_pas when the label is an array of string", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: ["un", "deux", "trois", "quatre"]
    }
    var ld  = new Landmark(10, 9000, 1000, 1000, prop);
    assert.equal(typeof prop.label[0], "string", "the type of label must be a string");
    assert.equal(ld.x_pas_min, ld.width/prop.label.length, "the minimum of x_pas must be ");
});

QUnit.test("let fix the minimum of x_pas when width is greater than x_pas fixed", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: [11, 34, 69, 13]
    }
    var ld  = new Landmark(10, 9000, 1000, 5, prop);
    assert.equal(typeof prop.label[0], "number", "the type of label must be a number");
    assert.ok(ld.width > 1,"the width must be greater than the minimum of x_pas (1)");
    assert.equal(ld.x_pas_min, 1, "the minimum of x_pas must be one");
});

QUnit.test("let fix the minimum of x_pas when width is smaller than x_pas_min fixed", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: [1, 17, 69, 13]
    }
    var ld  = new Landmark(10, 10, 0.5, 1, prop);
    assert.equal(typeof prop.label[0], "number", "the type of label must be a number");
    assert.ok(ld.width <= 1,"the width must be greater than the minimum of x_pas ");
    assert.equal(ld.x_pas_min, ld.width/2, "the minimum of x_pas must be ten");
});*/

QUnit.test("graduation of y_axis", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: [1, 17, 69, 13]
    }
    var ld  = new Landmark(10, 10, 5, 13, prop);
    var y_pas_t = [23, 24.625, 26.25, 27.875, 29.5, 31.125, 32.75, 34.375];
    assert.equal(ld.y_pas.length, 8, "the number of label on y_axis");
    y_pas_t.map((y_t, index) =>{
        assert.equal(y_t, ld.y_pas[index]);
    });
});

QUnit.test("graduation of x_axis when prop.label isn't a array of string", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: [1, 17, 69, 13]
    }
    var ld  = new Landmark(10, 10, 5, 13, prop);
    var x_pas_t = [10, 11.25, 12.5, 13.75];
    x_pas_t.map((x_t, index) =>{
        assert.equal(x_t, ld.x_pas[index]);
    }); 
});

QUnit.test("graduation of x_axis when prop.label is an array of number", (assert) =>{
    var prop = {
        data : [12, 234, 17, 29],
        label: ["un", "deux", "trois", "quatre"]
    }
    var ld  = new Landmark(10, 10, 5, 13, prop);
    var x_pas_t = []
});



