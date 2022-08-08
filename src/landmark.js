class Landmark{
    constructor(x_box, y_box, width, height, prop = {}){
        this.x0 = x_box;
        this.y0 = y_box + height;
        this.width = width;
        this.height = height;
        this.x_axis = "";
        this.y_axis = "";
        this.y_pas_min = (this.height == 1) ? this.height/2 : 1;
        this.x_pas_min = (typeof prop.label[0] == "string") ? this.width / prop.label.length : (this.width <= 1) ? this.width/2 : 1;
        this.y_pas = [];
        this.x_pas = [];
        this.create_axis();
        this.create_y_pas();
        this.create_x_pas();
    }

    create_axis(){
        this.x_axis = aya.Line(this.x0, this.y0, this.x0 + this.width, this.y0);
        this.y_axis = aya.Line(this.x0, this.y0, this.x0, this.y0 - this.height);
    }

    create_y_pas(){
        var i, y;
        var tmp = this.height / 2;
        while(tmp > this.y_pas_min ){ 
            tmp = tmp / 2;
        }
        console.log(tmp);
        tmp = tmp*2;
        y = this.y0;
        console.log(tmp);
        for(i = 0; i < (this.height/tmp); i++){
            this.y_pas[i] = y;
            y += tmp;
        }
    }

    create_x_pas(){
        var i;
        var tmp = this.width/2;
        while(tmp > this.x_pas_min)
            tmp = tmp/2;
            console.log(tmp);
            tmp = tmp*2;
            console.log(tmp);
            for(i = 0; i < (this.width/tmp); i++){
                this.x_pas[i] = this.x0 + i*tmp;
            }
    }


}
