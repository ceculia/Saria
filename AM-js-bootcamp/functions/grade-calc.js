//students score, total possible score
//generate a letter grade and % student received
// You got a C(75%) - return a string
const gradeCalc = function(score,poss){
    const total = score/poss * 100
    let letterGrade = ''
    
    if(total >=90){
        letterGrade = 'A'  
    }
    else if(total >=80){
        letterGrade = 'B' 
    }
    else if(total >=70){
        letterGrade = 'C' 
    }
    else if(total >=60){
        letterGrade = 'D' 
    }
    else{
        letterGrade = 'F' 
    }
    return ` You got an ${letterGrade} (${total}%)`


}

const totalGrade = gradeCalc(15,50)

console.log (totalGrade)