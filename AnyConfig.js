function findConfig(_element, _period)
{
	//index of period in table to find which period element is in
	//first check for helium
  //then find index of element in period list
  //Use that for orbitals
  let config = "";
	let periodIndex = table.indexOf(_period)+1;
  console.log(periodIndex);
  let group = _period.indexOf(_element)+1;
  if(_element=="He") //helium exception
  {
		config = "1s^2";
  }
  else
  {
  	let sElectrons = group > 2 ? 2: group;
    config+=periodIndex+"s^"+sElectrons;
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
	if(_userAnswer==_correctAnswer)
	{
		console.log("Good job! That's correct! The electron configuration of "+element+" is "+_correctAnswer);
  	questionsCorrect+=1;
	}
	else
	{
		console.log("Sorry, that's incorrect! The electron configuration of "+element+" is "+_correctAnswer);
  	questionsIncorrect+=1;
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
  /*
  	period = ["K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr"];
    element = "Cu";
    break;
    */

  period = table[Math.floor(Math.random()*(table.length-1))]; //random period from table
  element = period[Math.floor(Math.random()*(period.length-1))]; //random element from period
  if(element!="") //make sure it's not missing
  {
    break;
  }
}

var userAnswer = prompt("What is the shorthand electron configuration of "+element+"?");
var correctAnswer = findConfig(element, period);
checkAnswer(userAnswer, correctAnswer);

