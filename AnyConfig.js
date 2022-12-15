function findConfig(_element, _period)
{
    if(_element=="He") //helium exception
    {
	    return("1s^2");
    }
    let config = "";
	let periodIndex = table.indexOf(_period)+1;
    let nobleGas = table[periodIndex-2][_period.length-1];
    config+="["+nobleGas+"] ";
    let group = _period.indexOf(_element)+1;
  
	if(group==6 || group==11) //d4 and d9 rule
    { 
        let sElectrons = 1;
        config+=periodIndex+"s^"+sElectrons;
        if(group>3 && periodIndex>5)
        {
            config+=" "+(parseInt(periodIndex)-2).toString()+"f^14";
        }
        let dElectrons = group-1;
        config+=" "+(parseInt(periodIndex)-1).toString()+"d^"+dElectrons;
	}
    else //not an exception
    {
        let sElectrons = group > 2 ? 2: group;
        config+=periodIndex+"s^"+sElectrons;
        if(group>3 && periodIndex>5)
        {
            config+=" "+(parseInt(periodIndex)-2).toString()+"f^14";
        }
        if(group>2 && periodIndex>3) //d orbital
        {
        let dElectrons = group > 12 ? 10: group-2;
        config+=" "+(parseInt(periodIndex)-1).toString()+"d^"+dElectrons; 
        }
        if(group>12) //p orbital
        {
        let pElectrons = group - 12;
        config+=" "+periodIndex+"p^"+pElectrons;
        }
    }
    return(config);
}


//check answer
function checkAnswer(_userAnswer, _correctAnswer)
{
	if(_userAnswer.split(' ').join('')==_correctAnswer.split(' ').join('')) //disregard spaces
	{
		console.log("Good job! That's correct! The electron configuration of "+element+" is "+_correctAnswer);
  	    questionsCorrect+=1;
	}
	else
	{
		console.log("Sorry, that's incorrect! The electron configuration of "+element+" is "+_correctAnswer);
  	    uestionsIncorrect+=1;
	}
	console.log("You have got "+questionsCorrect+" questions correct and "+questionsIncorrect+" wrong.");
}

//periodic table
var table = new Array(
    ["H","","","","","","","","","","","","","","","","","He"],
    ["Li","Be","","","","","","","","","","","B","C","N","O","F","Ne"],
    ["Na","Mg","","","","","","","","","","","Al","Si","P","S","Cl","Ar"],
    ["K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr"],
    ["Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe"],
    ["Cs","Ba","La","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn"],
    ["Fr","Ra","Ac","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"],
);

//config variables
var element;
var period;

//scoring variables
var questionsCorrect = 0;
var questionsIncorrect = 0;


while(true)
{
    period = table[Math.floor(Math.random()*(table.length-1))]; //random period from table
    element = period[Math.floor(Math.random()*(period.length-1))]; //random element from period
    if(element!="") //make sure it's not missing
    {
        break;
    }
}


var userAnswer = prompt("What is the shorthand electron configuration of "+element+"?");
var correctAnswer = findConfig(element, period);
if(userAnswer!=null && userAnswer!="")
{
  checkAnswer(userAnswer, correctAnswer);
}

