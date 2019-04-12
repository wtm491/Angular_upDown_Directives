    
function upDown() {

    this.count = 0;

    this.goUp = ()=>{
        this.count+=10
    } 
    
    this.goDown = ()=> {
        this.count-=10
    }
}

angular.module('upDownApp').component('upDownCounter', 
    {
        template:
        ` 
            <div class="counter-container">
                <button ng-click="$ctrl.goUp()">Up</button>
                <span>{{$ctrl.count}}</span>
                <button ng-click="$ctrl.goDown()">Down</button>
                <input expand-on-focus count = $ctrl.count>
            </div>
        `, 

        controller: upDown
    });