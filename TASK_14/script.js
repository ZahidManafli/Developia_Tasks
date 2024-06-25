let month = +prompt("Input the ith month")

if(month<=12 && month>=1){
    if(month >=1 && month <= 2 || month==12){
        console.log("%cSeason: Winter","color:aqua; font-size:50px;background-color:gray;border-radius:10px;;")
        if(month==1){
            console.log("%cMonth: January","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 30","color:black;font-size:50px;background-color:gray;border-radius:10px;")
            
        }
        else if(month==2){
            console.log("%cMonth: Feburary","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 28/29","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
        else if(month==12){
            console.log("%cMonth: December","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 31","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
    }
    else if(month >=3 && month <= 5){
        console.log("%cSeason: Spring","color:green; font-size:50px;background-color:gray;border-radius:10px;;")
        if(month==3){
            console.log("%cMonth: Mart","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 31","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
        else if(month==4){
            console.log("%cMonth: April","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 30","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
        else if(month==5){
            console.log("%cMonth: May","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 31","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
    }
    else if(month >=6 && month <= 8){
        console.log("%cSeason: Summer","color:yellow; font-size:50px;background-color:gray;border-radius:10px;;")
        if(month==6){
            console.log("%cMonth: June","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 30","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
        else if(month==7){
            console.log("%cMonth: July","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 31","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
        else if(month==8){
            console.log("%cMonth: Aughts","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 31","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
    }
    else if(month >=9 && month <= 11){
        console.log("%cSeason: Authm","color:brown; font-size:50px;background-color:gray;border-radius:10px;;")
        if(month==9){
            console.log("%cMonth: September","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 30","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
        else if(month==10){
            console.log("%cMonth: Octember","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 31","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
        else if(month==11){
            console.log("%cMonth: November","color:white;font-size:50px;background-color:gray;border-radius:10px;")
            console.log("%cMax day: 30","color:black;font-size:50px;background-color:gray;border-radius:10px;")
        }
    }
}else{
    console.error("%cYazdığınız input səhvdir!","font-size:50px;")
}