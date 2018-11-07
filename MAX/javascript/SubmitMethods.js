function submitPerson() {
    console.log("insertPerson called")
    document.person_form.associations.value = getAssociationsListForMYSQL();
    document.person_form.submit();
}
function submitConflict() {
    console.log("insertConflict called")
    document.conflict_form.associations.value = getAssociationsListForMYSQL();
    document.conflict_form.submit();
}
function submitWar() {
    console.log("insertWar called")
    document.war_form.associations.value = getAssociationsListForMYSQL();
    document.war_form.submit();
}