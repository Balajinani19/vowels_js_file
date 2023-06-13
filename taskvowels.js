function vowelcount(str){
    var countvowels=[];
    var countconsonants=[];
    var spaces=[];
    for (let i = 0; i < str.length; i++) {
    var vowel = str[i];
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U' ){
        countvowels[vowel] = (countvowels[vowel] || 0)+ 1
        countvowels.push(str[i])
    }
    else if(str[i]==' '){
        spaces[vowel]=(spaces[vowel] || 0) + 1
        spaces.push(str[i])
    }
    else{
        countconsonants[vowel] = (countconsonants[vowel] || 0)+ 1
        countconsonants.push(str[i])
    }
    }
    console.log(countvowels)
    console.log(countconsonants)
    console.log(spaces)
}
vowelcount("Santosh Sarma ALamuru");
