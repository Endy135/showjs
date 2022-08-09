QUnit.module("Landmark");
QUnit.test("creation of landmark with box's diagram parameters", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule']
    }
    var ld = new Landmark(10, 10, 1000, 1000, prop);
    assert.equal(ld.x0, 10, "the x_origin must be defined");
    assert.equal(ld.y0, 10 + 1000, "the y_origin must be difined");
    assert.equal(ld.width, 1000, "the width must be defined");
    assert.equal(ld.height, 1000, "the height must be defined");
});

QUnit.test("check if the absissa line and ordinate line are well draw", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule']
    }
    var ld = new Landmark(10, 9000, 1000, 1000, prop);

    assert.equal(ld.x_axis.type, "polyline", "type must be line");
    assert.equal(ld.x_axis.x, ld.x0, "x_abscissa must be ten");
    assert.equal(ld.x_axis.y, ld.y0, "y_abscissa must be ten");
    assert.equal(ld.x_axis.dest_x, ld.x0 + ld.width, "dest_x must be a one thousand and ten");
    assert.equal(ld.x_axis.dest_y, ld.y0, "dest_y absissa must be ten");

    assert.equal(ld.y_axis.type, "polyline", "type must be line");
    assert.equal(ld.y_axis.x, ld.x0, "x_ordinate must be ten");
    assert.equal(ld.y_axis.y, ld.y0, "y_ordinate must be ten");
    assert.equal(ld.y_axis.dest_x, ld.x0, "dest_x must be a one thousand and ten");
    assert.equal(ld.y_axis.dest_y, ld.y0 - ld.height, "y_ordinate must be one");
});

QUnit.test("let fix the minimum of y_pas when height is greater than y_pas fixed and the data to be displayed is well known as string", (assert) =>{
     var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        y: "nom"
    }
    var ld  = new Landmark(10, 9000, 1000, 5, prop);
    assert.ok(ld.height > ld.y_pas_min,"the height must be greater than the minimum of y_pas ");
    assert.equal(ld.y_pas_min, ld.height/prop[prop.y].length, "the minimum of y_pas must be ten");
});

QUnit.test("let fix the minimum of y_pas when the data to be display is not known", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule']
    }
    var ld  = new Landmark(10, 9000, 1000, 1, prop);
    assert.ok(ld.height <= 1,"the height must be greater than the minimum of y_pas ");
    assert.equal(ld.y_pas_min, ld.height/prop.sexe.length, "the minimum of y_pas must be one");
});

QUnit.test("let fix the minimum of x_pas when the data to be displayed is well known as string", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "sexe"
    }
    var ld  = new Landmark(10, 9000, 1000, 1000, prop);
    assert.equal(typeof prop[prop.x][0], "string", "the type of label must be a string");
    assert.equal(ld.x_pas_min, ld.width/prop[prop.x].length, "the minimum of x_pas must be 250");
});

QUnit.test("let fix the minimum of x_pas when the data to be displayed is not known", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule']
    }
    var ld  = new Landmark(10, 9000, 1000, 1000, prop);
    assert.equal(typeof prop.age[0], "number", "the type of label must be a number");
    assert.equal(ld.x_pas_min, 1, "the minimum of x_pas must be 1");
});

QUnit.test("let fix the minimum of x_pas when width is greater than x_pas fixed and x is defined", (assert) =>{
     var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "age"
    }
    var ld  = new Landmark(10, 9000, 1000, 5, prop);
    assert.equal(typeof prop[prop.x][0], "number", "the type of data must be a number");
    assert.ok(ld.width > 1,"the width must be greater than the minimum of x_pas (1)");
    assert.equal(ld.x_pas_min, 1, "the minimum of x_pas must be one");
});


QUnit.test("graduation of x_axis when data isn't a array of string", (assert) =>{
     var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule']
    }
    var ld  = new Landmark(10, 10, 5, 13, prop);
    var x_pas_t = [10, 11.25, 12.5, 13.75];
    x_pas_t.map((x_t, index) =>{
        assert.equal(x_t, ld.x_pas[index]);
    }); 
});

QUnit.test("graduation of x_axis when data is known as string", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "nom"
    }
    var ld  = new Landmark(10, 10, 5, 13, prop);
    var x_pas_t = [10, 11.25, 12.5, 13.75];
    x_pas_t.map((x_t, index) =>{
        assert.equal(x_t, ld.x_pas[index]);
    });
});


QUnit.test("graduation of y_axis when y_data isn't defined ", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
    }
    var ld  = new Landmark(10, 10, 5, 13, prop);
    var y_pas_t = [23, 19.75, 16.5, 13.25];
    assert.equal(ld.y_pas.length, 4, "the number of data on y_axis");
    y_pas_t.map((y_t, index) =>{
        assert.equal(y_t, ld.y_pas[index]);
    });
});

QUnit.test("graduation of y_axis when y_data is known", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        y: "nom"
    }
    var ld  = new Landmark(10, 10, 5, 13, prop);
    var y_pas_t = [23, 19.75, 16.5, 13.25];
    y_pas_t.map((y_t, index) =>{
        assert.equal(y_t, ld.y_pas[index]);
    });
});

QUnit.test("drawing x_axis with graduations", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "nom"
    }
    var ld  = new Landmark(10, 10, 5, 13, prop, true);
    var x_pas_t = [10, 11.25, 12.5, 13.75];
    assert.equal(ld.display_x_graduations, true, "display x_graduations must be true");
    assert.equal(ld.x_axis.children.length, ld.x_pas.length, "the number of children of x_axis must be the number of graduations");
});

QUnit.test("checking the  x position (x and dest_x) of each x_graduations on x_axis", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "nom"
    }
    var ld  = new Landmark(10, 10, 5, 13, prop, true);
    var x_pas_t = [10, 11.25, 12.5, 13.75];
    ld.x_axis.children.map(({child}, index) =>{
        assert.equal(child.x  + child.offsetX, ld.x_pas[index]);
        assert.equal(child.dest_x + child.offsetX, ld.x_pas[index]);
    });
});

QUnit.test("checking the  y position (y and dest_y) of each x_graduations on x_axis", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "nom"
    }
    var ld  = new Landmark(10, 10, 5, 13, prop, true);
    var x_pas_t = [10, 11.25, 12.5, 13.75];
    ld.x_axis.children.map(({child}, index) =>{
        assert.equal(child.y, ld.y0 - 3);
        assert.equal(child.dest_y, ld.y0 + 3);
    });
});

QUnit.test("drawing y_axis with graduations", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "nom"
    }
    var ld  = new Landmark(10, 10, 5, 13, prop, false, true);
    var y_pas_t = [23, 19.75, 16.5, 13.25];
    assert.equal(ld.display_y_graduations, true, "display y_graduations must be true");
    assert.equal(ld.y_axis.children.length, ld.y_pas.length, "the number of children of y_axis must be the number of graduations");
});

QUnit.test("checking the  x position (x and dest_x) of each y_graduations on y_axis", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "nom"
    }
    var ld  = new Landmark(10, 10, 5, 13, prop, false, true);
    var y_pas_t = [23, 19.75, 16.5, 13.25];
    ld.y_axis.children.map(({child}, index) =>{
        assert.equal(child.x  + child.offsetX, ld.x0 - 3);
        assert.equal(child.dest_x + child.offsetX, ld.x0 + 3);
    });
});

QUnit.test("checking the  y position (y and dest_y) of each y_graduations on y_axis", (assert) =>{
    var prop = {
        age : [12, 234, 17, 29],
        sexe: ["un", "deux", "trois", "quatre"],
        nom: ['David', 'michel', 'Sarah', 'Paule'],
        x: "nom"
    }
    var ld  = new Landmark(10, 10, 5, 13, prop, false, true);
    var y_pas_t = [23, 19.75, 16.5, 13.25];
    ld.y_axis.children.map(({child}, index) =>{
        assert.equal(child.y, ld.y_pas[index]);
        assert.equal(child.dest_y, ld.y_pas[index]);
    });
});

