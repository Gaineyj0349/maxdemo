let tag = "CurrentlyWiredAssociationsManager\n\t";

//clear out the associations variable and objects
function resetCurrentWiredAssociations(){
    console.log(tag+"resetting wired associations array")
    window.currentWiredAssociations = Array()

    populateCurrentWiredDropsWithNames()
}

function populateCurrentWiredDropsWithNames(){
    console.log(tag + " populating wired associations array")
    let view = O('currently_wired_name_select_box')
    removeAllChildren(view)
    if(window.currentWiredAssociations.length>0) {
        window.currentWiredAssociations.sort()
        doArrayPrintout()
        for (let j = 0; j < window.currentWiredAssociations.length; j++) {
            let opt = document.createElement("option");
            opt.value = window.currentWiredAssociations[j]
            opt.innerHTML = window.currentWiredAssociations[j]; // whatever property it has
            console.log("building wired " + window.currentWiredAssociations[j])
            // then append it to the select element
            view.appendChild(opt);
        }


    }
    $('#currently_wired_name_select_box').trigger('chosen:updated');

}

function getAssociationsListForMYSQL(){
   return window.currentWiredAssociations.join("|");
}
