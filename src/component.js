
class Component{
    constructor(type="line", name="name of component",props={}){
        this.id =1;
        this.name = name;
        this.type = type;
        this.props = props;
        this.form = Creator.createChart(this.type,this.props);
        this.draw();
    }

    draw(){
        if(Array.isArray(this.form)){
            this.form.map((form) =>{
                v_test++;
                form.draw();
                form.children.map(({child}) =>{
                    child.draw();
                    v_test++;
                });
            });
        }
        else{ 
            this.form.draw();
            v_test++;
            this.form.children.map(({child})=>{
                child.draw();
                v_test++;
            });
        }
    }
}