//ajax to insert new entitiy into associations table, which will go into pending
function insertNewUnfinishedAssociation(type, name){

    console.log("insertingNewUnfinishedAssociation called with "+ type + " and " + name)
    params = 'type=' + type
        + '&name=' + name
    console.log("params = " +  params )

    request = new AsyncRequest()

    request.open("POST", "php/AddNewUnfinishedAssociation.php", true)
    request.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded")
    // request.setRequestHeader("Content-length", params.length)
    // request.setRequestHeader("Connection", "close")

    request.onreadystatechange = function()
    {
        if (this.readyState == 4)
        {
            if (this.status == 200)
            {
                if (this.responseText != null)
                {

                    console.log(this.responseText)
                }
                else alert("Communication error: No data received")
            }
            else alert( "Communication error: " + this.statusText)
        }
    }

    request.send(params)

}

//this function updates all select elements
function refreshDropsWithNewAssociation(){
    console.log("called refreshDropsWithNewAssociation")
    //get the parent associated drop for add existing
    let currentInAddExistingAssociatedType = O('associated_add_existing_entity_select_box_type').value
    console.log("type "+currentInAddExistingAssociatedType)
    fillExistingNameAssociations(currentInAddExistingAssociatedType)


    let currentInPendingEntityType = O('pending_entity_select_box_type').value
    console.log("type "+currentInPendingEntityType)
    fillPendingNameAssociations(currentInPendingEntityType)
}

function fillExistingNameAssociations(type){
    params2 = 'type=' + type;

    request2 = new AsyncRequest()

    request2.open("POST", "php/fetchNameListForDrop.php", true)
    request2.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded")


    request2.onreadystatechange = function()
    {
        if (this.readyState == 4)
        {
            if (this.status == 200)
            {
                if (this.responseText != null)
                {

                    let view =  O('associated_add_existing_entity_select_box_name')
                    removeAllChildren(view)
                    console.log(this.responseText)
                    try{
                        let arr1 = JSON.parse(this.responseText);
                        console.log("array1 " + arr1)

                        for (let j = 0; j < arr1.length; j++) {
                            let opt = document.createElement("option");
                            opt.value = arr1[j]
                            if (j === 0) {
                                opt.defaultSelected = true
                            }
                            opt.innerHTML = arr1[j]; // whatever property it has
                            console.log(arr1[j].toUpperCase())
                            // then append it to the select element
                            view.appendChild(opt);
                        }
                    }catch(ex){

                    }


                    $('#associated_add_existing_entity_select_box_name').trigger('chosen:updated');


                }
                else alert("Communication error: No data received")

            }
            else alert( "Communication error: " + this.statusText)

        }
    }

    request2.send(params2)
}


function fillPendingNameAssociations(type){
    params3 = 'type=' + type;

    request3 = new AsyncRequest()

    request3.open("POST", "php/fetchNameListForDropPending.php", true)
    request3.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded")


    request3.onreadystatechange = function()
    {
        if (this.readyState == 4)
        {
            if (this.status == 200)
            {
                if (this.responseText != null)
                {

                    let view =  O('pending_entity_select_box_name')
                    removeAllChildren(view)
                    console.log(this.responseText)

                    let arr1 = JSON.parse(this.responseText);
                    console.log("array1 " + arr1)

                    for (let j = 0; j < arr1.length; j++) {
                        let opt = document.createElement("option");
                        opt.value = arr1[j]
                        if (j === 0) {
                            opt.defaultSelected = true
                        }
                        opt.innerHTML = arr1[j]; // whatever property it has
                        console.log(arr1[j].toUpperCase())
                        // then append it to the select element
                        view.appendChild(opt);
                    }

                    $('#pending_entity_select_box_name').trigger('chosen:updated');


                }
                else alert("Communication error: No data received")

            }
            else alert( "Communication error: " + this.statusText)

        }
    }

    request3.send(params3)
}

function fillWarsBoxInConflictBox(){
    params4 = 'type=' + 'war';

    request4 = new AsyncRequest()

    request4.open("POST", "php/fetchNameListForDrop.php", true)
    request4.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded")


    request4.onreadystatechange = function()
    {
        if (this.readyState == 4)
        {
            if (this.status == 200)
            {
                if (this.responseText != null)
                {

                    let view =  O('conflict_entity_create_war_associated_select')
                    try {
                        removeAllChildren(view)
                    }catch(ex){

                    }
                    console.log(this.responseText)
                    try{
                        let arr1 = JSON.parse(this.responseText);
                        console.log("array13 " + arr1)

                        for (let j = 0; j < arr1.length; j++) {
                            let opt = document.createElement("option");
                            opt.value = arr1[j]
                            if (j === 0) {
                                opt.defaultSelected = true
                            }
                            opt.innerHTML = arr1[j]; // whatever property it has
                            console.log(arr1[j].toUpperCase())
                            // then append it to the select element
                            view.appendChild(opt);
                        }
                    }catch(ex){

                    }


                    $('#conflict_entity_create_war_associated_select').trigger('chosen:updated');


                }
                else alert("Communication error: No data received")

            }
            else alert( "Communication error: " + this.statusText)

        }
    }

    request4.send(params4)
}
