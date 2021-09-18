console.log("hello");
scissor = document.querySelector('#scissor');
paper = document.querySelector('#paper');
stone = document.querySelector('#stone');
users = document.querySelector('#users');
computer = document.querySelector('#computer');
winnnerresult = document.querySelector('#winnnerresult');
usersvalue = document.querySelector('users_value');
computervalue = document.querySelector('computer_value');
comp_res = document.getElementById('comp_res');
user_res = document.getElementById('user_res');
declare = document.getElementById('declare');


const game = () => {

    
    let userchoice = [0,1,2];
    // Stone 
    stone.addEventListener("click",  () => {
        // lets compare
        let computerchoice = [1,2,3,4];
        let x = Math.floor(Math.random() * 3)
        console.log(x)      
        if (x === 1) 
        {
            console.log("paper")
            winnnerresult.innerHTML = `<h2 class="res">lose</h2>`
            computervalue++;
            comp_res.innerHTML = computervalue;
        } 
        else if (x===2) {
            console.log("scissor")
            winnnerresult.innerHTML = `<h2 class="res"> Win </h2>`
            usersvalue++;
            user_res.innerHTML = usersvalue;
        }
        else{
            console.log("stone")
            winnnerresult.innerHTML = `<h2 class="res"> tie </h2>`
            
        }
    })
    
    
    //  // Paper 
    paper.addEventListener("click",  () => {
        // lets compare
        let computerchoice = [1,2,3,4];
        let x = Math.floor(Math.random() * 3)
        console.log(x)      
        if (x === 0) 
        {
            console.log("stone")
            winnnerresult.innerHTML = `<h2 class"res">Win</h2>`
            usersvalue++;
            user_res.innerHTML = usersvalue;
        } 
        else if (x===2) {
            console.log("scissor")
            winnnerresult.innerHTML = `<h2 class"res"> lose </h2>`
            computervalue++;
            comp_res.innerHTML = computervalue;
        }
        else{
            console.log("paper")
            winnnerresult.innerHTML = `<h2 class"res"> tie </h2>`
            
        }
    })
    
    // scissor
    
    scissor.addEventListener("click",  () => {
        // lets compare
        let computerchoice = [1,2,3,4];
        let x = Math.floor(Math.random() * 3)
        console.log(x)      
        if (x === 0) 
        {
            console.log("stone")
            winnnerresult.innerHTML = `<h2 class"res">lose</h2>`
            computervalue++;
            comp_res.innerHTML = computervalue;
        } 
        else if (x===1) {
            console.log("paper")
            winnnerresult.innerHTML = `<h2 class"res"> Win </h2>`
            usersvalue++;
            user_res.innerHTML = usersvalue;
        }
        else{
            console.log("scissor")
            winnnerresult.innerHTML = `<h2 class"res"> tie </h2>`
            
        }
        // declareresult()
        
        
    })
    
}

// declaring results
declareresult = () =>{
    if (user_res.innerHTML >= 10) {
        console.log("user")
        declare.innerHTML="<h2>User Won</h2>"
    }
    else if(comp_res.innerHTML >= 10) {
            console.log("comp")
            declare.innerHTML="<h2>Comp Won</h2>"
        
        }
        else{
                console.log("tt")
            }
        }
        
        
        game()
           
        // if (usersvalue ===2) {
            // declareresult()
        // }