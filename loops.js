
    //adds +1 to table till its done with 50
for(let table = 0; table < 51; table++){
    console.log(" ")
    console.log("table of " + table)

    //adds +1 to times till its done with 10
    for(let times = 0; times < 11; times++){
        //counts table X times
        let answer = times * table
        console.log(table + " x " + times + " = " + answer)
    }
}