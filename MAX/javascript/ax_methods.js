
function populateDropsWithTypes(){
    console.log("populateDrops called")
    var x =  C('chosen_short')
    for (var i = 0; i < x.length; i++) {  
        for(let j = 0; j < entity_types.length ; j++){
            let opt = document.createElement("option");
            opt.value= entity_types[j]
            if(j === 0){
                opt.defaultSelected = true
            }
            opt.innerHTML = entity_types[j].toUpperCase() // whatever property it has
            console.log(entity_types[j].toUpperCase())
            // then append it to the select element
            x[i].appendChild(opt);
        }
    }

}




function AsyncRequest()
{
    try
    {
        var request = new XMLHttpRequest()
    }
    catch(e1)
    {
        try
        {
            request = new ActiveXObject("Msxml2.XMLHTTP")
        }
        catch(e2)
        {
            try
            {
                request = new ActiveXObject("Microsoft.XMLHTTP")
            }
            catch(e3)
            {
                request = false
            }
        }
    }
    return request
}
function removeAllChildren(obj) {
    while (obj.firstChild) {
        obj.removeChild(obj.firstChild);
    }
}
