console.log(("welcome to login signup"));
var x=require("readline-sync")
var user=x.question("you wants to login or signup:")
if (user=="signup"){
    user1=x.question("enter user name")
    pass1=x.question("enter password")
    pass2=x.question("enter your confirm password")
    if (pass1==pass2){
        console.log("your password is confirmed")
        birth=x.question("enter birthdate")
        contactno=x.questionInt("enter number")
        gender=x.question("enter the gender f/m")
        hobbies=x.question("enter your hobbies")
        qualification=x.question("enter your qualification")
        var dict={"username":user1,"password":pass2,"birth":birth,"contactno":contactno,"gender":gender,"hobbies":hobbies,"qualification":qualification}
        var fs=require('fs');
        var file=fs.writeFileSync("text2.json",JSON.stringify(dict,null,4))
        
    }
    else{
        console.log("wrong password")
    }
}
else{
    if (user=="login"){
        var usr_name= x.question("enter the user name :- ");
        var password= x.question("enter the password :- ");
        const fs=require('fs');
        var data =fs.readFileSync("text2.json")
        var data1=JSON.parse(data)
            for (i in (data1)){
                if (usr_name==data1[i]["user1"],["username"]){
                    if (password==data1[i]["pass2"],["pass2"]){
                        console.log("\n**login successful**\n")
                        console.log(data1)
                        break
                        }
                    else{
                        console.log("wrong password")
                    }
                }
                else{
                    console.log("user name incarect")
                }
            }
            
            
            
    }
    else{
        console.log(data1)
    }
        
}