import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\t\t===={ wellcome in MURTAZA ALI advanture game }====\n"));



class Player{
    name:string;
    energy:number

    constructor(name:string){
        this.name = name
        this.energy=100

    }
    energy_decresss(){
        let Energy= this.energy-20
        this.energy= Energy
    };
    energy_increass(){
        this.energy=100
    }

}


class Opponent{
    name:string;
    energy:number

    constructor(name:string){
        this.name = name
        this.energy=100

    }
     energy_decresss(){
        let Energy= this.energy-20
        this.energy= Energy
    }
}

let player_name=await inquirer.prompt([
    {
        name:"name",
        message:"enter your name",
        type:"input"
    },
])
    console.log(chalk.bold.green(player_name.name))
    
  let opponent =await inquirer.prompt([
     {   name:"select",
        message:"sellect your opponent",
        type:"list",
        choices:["skeleton","zombi","ghost"]


    }
]); 

   console.log(chalk.bold.red(opponent.select))


let plear_1 = new Player(player_name.name);
let oponent_1 = new Opponent(opponent.select);

do{
    // function for skeliton
     if(opponent.select==="skeleton"){
      
    let ask =await inquirer.prompt([
        {
            name:"opt",
            message:"what is your up next step ?",
            type:"list",
            choices:["attack","Heel","run for a life ..."]
        }
    ]);

    if(ask.opt==="attack"){
        console.log("attack");
        let num = Math.floor(Math.random() * 2)

        if(num > 0){
          plear_1.energy_decresss()
          console.log(chalk.bold.red(`${plear_1.name} energy is ${plear_1.energy} `));
          console.log(chalk.bold.green(`${oponent_1.name} energy is ${oponent_1.energy} \n`));
          if(plear_1.energy <= 0){
            console.log(chalk.bold.red.italic("you lost bettle try next time"));
            process.exit()

          }

           }
        else if(num <=0){
            oponent_1.energy_decresss()
          console.log(chalk.bold.red(`${oponent_1.name} energy is ${oponent_1.energy} `));
          console.log(chalk.bold.green(`${plear_1.name} energy is ${plear_1.energy} \n`));

          if(oponent_1.energy <= 0){
            console.log(chalk.bold.green.italic("Congratulation you won the battle"));
            process.exit()

            }

        }
        
    }
    else if(ask.opt === "Heel"){
       plear_1.energy_increass()
       console.log(chalk.bold.green.italic(`you drink a Heel now your health is ${plear_1.energy}`));
       
            
      }
    else if(ask.opt === "run for a life ..."){
        console.log(chalk.bold.red.italic("you lost bettle try next time\n"));
        process.exit()

        
    }

    }

    //function for zombi
    if(opponent.select==="zombi"){
      
        let ask =await inquirer.prompt([
            {
                name:"opt",
                message:"what is your up next step ?",
                type:"list",
                choices:["attack","Heel","run for a life ..."]
            }
        ]);
    
        if(ask.opt==="attack"){
            console.log("attack");
            let num = Math.floor(Math.random() * 2)
    
            if(num > 0){
              plear_1.energy_decresss()
              console.log(chalk.bold.red(`${plear_1.name} energy is ${plear_1.energy} `));
              console.log(chalk.bold.green(`${oponent_1.name} energy is ${oponent_1.energy} \n`));
              if(plear_1.energy <= 0){
                console.log(chalk.bold.red.italic("you lost bettle try next time"));
                process.exit()
    
              }
    
               }
            else if(num <=0){
                oponent_1.energy_decresss()
              console.log(chalk.bold.red(`${oponent_1.name} energy is ${oponent_1.energy} `));
              console.log(chalk.bold.green(`${plear_1.name} energy is ${plear_1.energy} \n`));
    
              if(oponent_1.energy <= 0){
                console.log(chalk.bold.green.italic("Congratulation you won the battle"));
                process.exit()
    
                }
    
            }
            
        }
        else if(ask.opt === "Heel"){
           plear_1.energy_increass()
           console.log(chalk.bold.green.italic(`you drink a Heel now your health is ${plear_1.energy}`));
           
                
          }
        else if(ask.opt === "run for a life ..."){
            console.log(chalk.bold.red.italic("you lost bettle try next time\n"));
            process.exit()
    
            
        }
    
        }

        if(opponent.select==="ghost"){
      
            let ask =await inquirer.prompt([
                {
                    name:"opt",
                    message:"what is your up next step ?",
                    type:"list",
                    choices:["attack","Heel","run for a life ..."]
                }
            ]);
        
            if(ask.opt==="attack"){
                console.log("attack");
                let num = Math.floor(Math.random() * 2)
        
                if(num > 0){
            plear_1.energy_decresss()
            console.log(chalk.bold.red(`${plear_1.name} energy is ${plear_1.energy} `));
            console.log(chalk.bold.green(`${oponent_1.name} energy is ${oponent_1.energy} \n`));
            if(plear_1.energy <= 0){
           console.log(chalk.bold.red.italic("you lost bettle try next time"));
             process.exit()
         }
        
   }
            else if(num <=0){
             oponent_1.energy_decresss()
             console.log(chalk.bold.red(`${oponent_1.name} energy is ${oponent_1.energy} `));
              console.log(chalk.bold.green(`${plear_1.name} energy is ${plear_1.energy} \n`));
        
              if(oponent_1.energy <= 0){
                console.log(chalk.bold.green.italic("Congratulation you won the battle"));
               process.exit()
          }
         }
       }
            else if(ask.opt === "Heel"){
               plear_1.energy_increass()
               console.log(chalk.bold.green.italic(`you drink a Heel now your health is ${plear_1.energy}`));
                                
              }
            else if(ask.opt === "run for a life ..."){
                console.log(chalk.bold.red.italic("you lost bettle try next time\n"));
                process.exit()
             }
        
            }
    
}
while(true)
    



