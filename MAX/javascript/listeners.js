$('document').ready(function(){
    console.log("ready")
    $('#entity_input_content').load('html/person_entity.html');
    refreshDropsWithNewAssociation()
})

O('entity_select_box').onchange = function(){
    console.log(this.value)
    if (this.value === "conflict"){
        $('#entity_input_content').load('html/conflict_entity.html');
    }
    else if (this.value === "person"){
        $('#entity_input_content').load('html/person_entity.html');
    }
    else if (this.value === "war"){
        $('#entity_input_content').load('html/war_entity.html');
    }
}
O("conflict_clear").onclick = function(){
    location.reload()}

O("associated_entity_add_new_button").onclick = function(){
    var typewired = O("associated_entity_add_new_select_box").value.toString()
    var namewired = O("associations_name").value.toString()
    console.log(typewired + " " +namewired)

    console.log("called insertNewUnfinishedAssociation1")
    insertNewUnfinishedAssociation(typewired, namewired)
    console.log("called insertNewUnfinishedAssociation2")

    //reset the box
    O('associated_entity_add_new_select_box').selectedIndex = 0
    $('#associated_entity_add_new_select_box').trigger('chosen:updated');
    O("associations_name").value = ""


    //TODO refresh drops for add existing/pending and if in conflict and it type was a war, update innerhtml
    refreshDropsWithNewAssociation()
}

O('associated_add_existing_entity_select_box_type').onchange = function(){
    console.log(this.value)
    fillExistingNameAssociations(this.value)

}
O('pending_entity_select_box_type').onchange = function(){
    console.log(this.value)
    fillPendingNameAssociations(this.value)

}
