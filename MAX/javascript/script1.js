//ajax to insert new entitiy into associations table, which will go into pending
function insertNewUnfinishedAssociation(type, name){
   // params  = "url=news.com"
    request = new AsyncRequest()

    request.open("POST", "urlpost.php", true)
    request.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded")
    request.setRequestHeader("Content-length", params.length)
    request.setRequestHeader("Connection", "close")

    request.onreadystatechange = function()
    {
        if (this.readyState == 4)
        {
            if (this.status == 200)
            {
                if (this.responseText != null)
                {
                    document.getElementById('info').innerHTML =
                        this.responseText
                }
                else alert("Communication error: No data received")
            }
            else alert( "Communication error: " + this.statusText)
        }
    }

    request.send(params)

}