import { Component} from "@angular/core";

@Component({
    selector: 'test-comp',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})

export class TestComponent{
    fruit:boolean = false;
    isEnabled:boolean = false;
    public image:String ="";
    public pineApple="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    public grape="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiaZ6Vxsm38MZ0E7QBHGRvD-n0xqU_cdT5uQ&usqp=CAU"
    public myid="testid"
    
    public imgChange(){
        this.fruit = !this.fruit
        if (this.fruit){
            this.image="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        }else{
            this.image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiaZ6Vxsm38MZ0E7QBHGRvD-n0xqU_cdT5uQ&usqp=CAU"
        }
    
    }


    public onClick(){
        console.log("hai hello"+this.myid)
    }

}

// wehave to declare it in app.module
// then on app.html 