function Greet(name){
    
    if(name == null ){return ("Hello, my friend. What is your name?");
        }
    if(typeof(name)=="string" && name == name.toUpperCase()){
        return ("HI, "+name+". HOW ARE YOU DOING?");
    }
    if(typeof(name) =="object" && name.length == 2){
        return ("Hi, "+name+". How are you guys?");
    }
    if(typeof(name)=="object" && name.length>2){
        return ("Hi, "+name+". How are you guys(more than 2)?");
    }
    if(name != null  && typeof(name)!="object" && name!= name.toString().toUpperCase() ){
        return ("Hi, "+name+". How are you?");
    }
   
}        
module.exports = {Greet};
