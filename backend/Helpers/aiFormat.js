const format=function(text){
    // let regex=new RegExp('*','g');
    // console.log("works1");
    // console.log(regex);
    let ret={};
    
    let k=1;
    
    let noformat=text.replaceAll("*","");
    // noformat=noformat.replaceAll('\n','');
    noformat=noformat.replaceAll('-','');
    let i=noformat.toUpperCase().search("NAME");
    console.log(i);

    while(i!=-1){
        
        noformat=noformat.substring(i+4);
        let name=noformat.substring(0,noformat.toUpperCase().search("\n"));
        let temp=noformat.substring(noformat.toUpperCase().search("\n"));
        let remedie=temp.substring(temp.toUpperCase().search("REMEDIES")+10,temp.search(/\./)+1);
        console.log(i);
    ret[k]={"Name":name,"Remidie":remedie};
    k++;
    noformat=temp.substring(temp.search(/\./)+1);
    i=noformat.toUpperCase().search("NAME");
}
    return ret;
}
//temp.toUpperCase().search('.')
module.exports=format