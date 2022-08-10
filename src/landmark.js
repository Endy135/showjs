class Landmark{
    constructor(x_box, y_box, width, height, prop = {}, display_x_graduations = false, display_y_graduations = false){
        this.x0 = x_box;
        this.y0 = y_box + height;
        this.width = width;
        this.height = height;
        this.x_axis = "";
        this.y_axis = "";
        this.display_x_graduations = display_x_graduations;
        this.display_y_graduations = display_y_graduations;
        if(prop.x ){ 
            if(typeof prop[prop.x][0] == "string")
                this.x_pas_min = this.width / prop[prop.x].length;
            else
                this.x_pas_min = 1;
        }
        else{
            var key;
            Object.keys(prop).map((v, index) =>{
                if(index == 0)
                    key = v; 
            });
            if(typeof prop[key][0] == "string")
                this.x_pas_min = this.width / prop[key].length;
            else
                this.x_pas_min = 1;
        }
        if(prop.y ){ 
            if(typeof prop[prop.y][0] == "string")
                this.y_pas_min = this.height / prop[prop.y].length;
            else
                this.y_pas_min = 1;
        }
        else{
            var key;
            Object.keys(prop).map((v, index) =>{
                if(index == 1)
                    key = v; 
            });
            if(typeof prop[key][0] == "string")
                this.y_pas_min = this.height / prop[key].length;
            else
                this.y_pas_min = 1;
        }

    
        this.y_pas = [];
        this.x_pas = [];
        this.create_y_pas(prop);
        this.create_x_pas(prop);
        this.create_axis(prop);
    }

    create_axis(prop){
        var key_x, key_y, cpt = 0;
        Object.keys(prop).map((v, index) =>{
            if(index == 0)
                key_x = v;
            if(index == 1)
                key_y = v;
        });

        this.x_axis = aya.Polyline([this.x0, this.y0, this.x0 + this.width, this.y0]);
        this.y_axis = aya.Polyline([this.x0, this.y0, this.x0, this.y0 - this.height]);
        if(this.display_x_graduations){
            for(var i = 0; i < this.x_pas.length; i++){
                var pl = aya.Polyline([this.x_pas[i], this.y0 - 3, this.x_pas[i], this.y0 + 3]);
                if(prop.x)
                    var text = aya.Text(this.x_pas[i] - prop[prop.x][i].length*5, this.y0 + 15,  prop[prop.x][i]);
                else
                    var text = aya.Text(this.x_pas[i] - prop[key_x][i].length*5, this.y0 + 15,  prop[key_x][i]);
                //var pl = aya.Polyline([0, 0, 0, 0]);
                pl.addChild(text, (p,c)=>{},null, true);
                this.x_axis.addChild(pl, (p,c) =>{}, null, true);
            }
        }
        if(this.display_y_graduations){
            for(var i = 0; i < this.y_pas.length; i++){
                var pc = aya.Polyline([this.x0 -3, this.y_pas[i], this.x0 + 3, this.y_pas[i]]);
                this.y_axis.addChild(pc, (p,c) =>{}, null, true);
            }
        }
        for(var m of this.x_axis.children){
            if((m.child.children[0].child.x + m.child.children[0].child.text.length) >= Math.abs(this.x_pas[0] - this.x_pas[1])){
               console.log(m.child.children[0].child);
                cpt++;
                break;
            }
        }
        if(cpt){
            this.x_axis.children.map(({child}, index) =>{
                var text = child.children[0].child;
                text.setRotateAngle(-45);
                text.setRotateCenter(text.x, text.y);
                text.redraw();
            });
        }


        this.x_axis.draw();
        this.y_axis.draw();
    }

    create_y_pas(prop){
        var i, y, tmp, key;
        if(prop.y){
            if(typeof prop[prop.y][0] == "string"){
                for( i = 0; i < this.height/prop[prop.y].length; i++){
                    this.y_pas[i] = this.y0 - i*this.y_pas_min;
                }
            }
            else{
                tmp = this.height / 2;
                while(tmp > this.y_pas_min ){ 
                    tmp = tmp / 2;
                }
                tmp = tmp*2;
                y = this.y0;
                for(i = 0; i < (this.height/tmp); i++){
                    this.y_pas[i] = y;
                    y -= tmp;
                }
            }
        }
        else{
            Object.keys(prop).map((v, index) =>{
                if(index == 1)
                    key = v;
            });
            if(typeof prop[key][0] == "string")
                for (i = 0; i < this.height/this.y_pas_min; i++)
                    this.y_pas[i] = this.y0 - i*this.y_pas_min;
            else{
                tmp = this.height/2;
                while(tmp > this.y_pas_min)
                    tmp = tmp/2;
                tmp = tmp*2;
                for(i = 0; i < (this.height/tmp); i++){
                    this.y_pas[i] = this.y0 - i*tmp;
                }
            }
        }
        
        
    }

    create_x_pas(prop){
        var i, tmp, key;
        if(prop.x ){
            if(typeof prop[prop.x][0] == "string")
                for (i = 0; i < this.width/this.x_pas_min; i++)
                    this.x_pas[i] = this.x0 + i*this.x_pas_min;
            else{
                tmp = this.width/2;
                while(tmp > this.x_pas_min)
                    tmp = tmp/2;
                tmp = tmp*2;
                for(i = 0; i < (this.width/tmp); i++){
                    this.x_pas[i] = this.x0 + i*tmp;
                }
            }
            
        }
        else{
            Object.keys(prop).map((v, index) =>{
                if(index == 0)
                    key = v;
            });
            if(typeof prop[key][0] == "string")
                for (i = 0; i < this.width/this.x_pas_min; i++)
                    this.x_pas[i] = this.x0 + i*this.x_pas_min;
            else{
                tmp = this.width/2;
                while(tmp > this.x_pas_min)
                    tmp = tmp/2;
                tmp = tmp*2;
                for(i = 0; i < (this.width/tmp); i++){
                    this.x_pas[i] = this.x0 + i*tmp;
                }
            }
           
        }
    }
   

   


}
