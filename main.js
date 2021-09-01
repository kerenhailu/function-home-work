// -------------------------------1
function str(strOne) {
    if (strOne.length > 5) {
        return "long"
    }
    return "short"
}
var str1 = str("sfvfsvz")
console.log(str1);
// -------------------------------2
function str2(strTwo) {
    if (strTwo.indexOf("a") != -1) {
        return strTwo.indexOf("a")
    }
    return "not found"
} var str2 = str2("kerean")
console.log(str2);
// -------------------------------3
function str3(strThree) {
    if (strThree.indexOf("r") != -1) {
        return true
    }
    return false
}
var str3 = str3("keean")
console.log(str3);
// -------------------------------4
function strAndTav(str, tav) {
    if (str.indexOf(tav) != -1) {
        return true
    }
    return false
}
var strAndTav = strAndTav("keean", "i")
console.log(strAndTav);
// -------------------------------5
function stringAndTav(str, tav) {
    if (str.lastIndexOf(tav) != -1) {
        console.log(str.lastIndexOf(tav));
    }
    else {
        console.log("the tav isnt in the string");
    }
}
stringAndTav("HAILU", "a")
// -------------------------------6
// function threeTav(str) {
//     return str.substr(0, 3)
// }
// console.log(threeTav("sayonara"));
// -------------------------------7
// function FourTav(str) {
//     return str.substr(2, 4)
// }
// console.log(FourTav("sayonara"));
// -------------------------------8
// function tavEnd(str) {
//     return str.substr(3)
// }
// console.log(tavEnd("sayonara"));
// -------------------------------9
// function strAndIndex(str, INDEX) {
//     if (str.length < INDEX) {
//         return "index bigger"
//     }
//     return str.substr(INDEX)
// }
// var strAndIndex = strAndIndex("kerenadvzd", 5)
// console.log(strAndIndex);
// -------------------------------10
// function StringAndIndex(str, Index) {
//     if (str.length < Index) {
//         return "index is bigger"
//     }
//     return str.substr(Index, 3)
// }
// console.log(StringAndIndex("kerenhailu", 15));
// -------------------------------11
// function TwoNumAndStr(str, num1, num2) {
//     return str.substr(num1, num2)
// }
// var TwoNumAndStr = TwoNumAndStr("kerenhailu", 2, 4)
// console.log(TwoNumAndStr);
// -------------------------------12
// function TavThree(str) {
//     return str.substr(0, 3)
// } console.log(TavThree("sayonara"));
// -------------------------------13
// function TavFour(str) {
//     return str.substring(2, 6)
// } console.log(TavFour("sayonara"));
// -------------------------------14
// function end(str) {
//     return str.substr(3)
// } console.log(end("sayonara"));
// -------------------------------15
// function FallNamePromt(str) {
//     console.log(str.length);
//     if (str.indexOf(" ") != -1) {
//         console.log("yes space");
//     }
//     console.log(str.substring(0, str.indexOf(" ")));
//     console.log(str.substr(str.indexOf(" ") + 1));
// } FallNamePromt("keren hailuuu")
// -------------------------------16
// function TwoStr(str1, str2) {
//     if (str1.toLowerCase == str2.toLowerCase) {
//         return "same"
//     } return "not the same"
// } console.log(TwoStr("keren", "KEreN"));
// -------------------------------17
// function TwoString(str1, str2) {
//     if (str1.toUpperCase == str2.toUpperCase) {
//         return "same"
//     } return "not the same"
// } console.log(TwoStr("keren", "KEreN"));
// -------------------------------18
// function FullName(firstName, SecondName) {
//     if (firstName.length > SecondName.length) {
//         return firstName
//     }
//     return SecondName
// } var FullName = FullName(prompt("your name"), prompt("your second name"))
// console.log(FullName);
// -------------------------------19
// function TwoName(name1,name2){
//     if(name1.indexOf("a")!=-1){
//         return "you have a in the name"
//     }
//     if(name2.indexOf("api")!=-1){
//         return "you have api in the name"
//     }
// }var TwoName = TwoName(prompt("your name"), prompt("your second name"))
// console.log(TwoName);
// -------------------------------20
// function strShortOrLong(str){
//     if(str.length<5){
//         return "long"
//     }
//     return "short"
// }console.log(strShortOrLong("khjhcfgfcv"));
// -------------------------------21
// function Country(city){
//     if(city.length<3){
//         return "yes"
//     } 
//      return "no"
// }console.log(Country("Ethiopia"));
// -------------------------------22
// function STRINGANDTAV(str,tav){
//     if(str.length>6){
//         return str
//     }
//     return str.indexOf(tav)
// }console.log(STRINGANDTAV("kerennnn","a"));
// -------------------------------23
// function sANDT(str,tav){
//     if(str.indexOf(tav)!=-1){
//         return str.indexOf(tav)
//     }return str
// }console.log(sANDT("djfjng","d"));
// -------------------------------24
// function fulllName(name1, name2) {
//     return `${name1[0]},". ",${name2.toUpperCase()}`
// } console.log(fulllName("keren", "hailu"));
// -------------------------------25
// function TwoFamName(famNam1,famNam2){
//     if(famNam1.length>famNam2.length){
//         return `${famNam1},${famNam2.toLowerCase()}`
//     }
// }console.log(TwoFamName("hailu","lEVi"));
// -------------------------------26
function TavPlassName(Name, tav) {
    if (Name.indexOf(tav) != -1) {
        return Name
    } return "the tav isn't in the name of the function"
} console.log(TavPlassName("keren", "n"));
// -------------------------------27
function NAME(OneName) {
    if (OneName.indexOf(" ") == -1) {
        return `${OneName[0].toUpperCase()}${OneName.substr(1).toLowerCase()}`
    }
    if ((OneName.lastIndexOf(" ") == -1) && (OneName.lastIndexOf(" ") != OneName.indexOf(" ")) ){
        return `firstName:${OneName.substr(0, (OneName.indexOf(" ")))}
        middleNam:${OneName.substr((OneName.indexOf(" ")), (OneName.lastIndexOf(" ")))}
        familyName: ${OneName.substr((OneName.lastIndexOf(" ")))} `
    } 
    return [OneName]

} console.log(NAME("meren mut jhb"));



