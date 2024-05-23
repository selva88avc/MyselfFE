
// document.getElementsByTagName("form")[0].onsubmit = function() {myFunction()};


function myFunction() {
    event.preventDefault();
    let table = document.getElementsByTagName("table")[0];
    let tbody = table.getElementsByTagName("tbody")[0];
    let repository = document.getElementById("countQueryRepositoryInput").value;
    let header = document.getElementById("countQueryIssueType").value;
    let rows = tbody.getElementsByTagName("tr");
    let countSpan = document.getElementById("count");
    let repositoryPresent = false;
    for (var i = 0; i<rows.length; i++) {
        if(rows[i].getElementsByTagName("th")[0].innerText === repository){
            let value = 0;
            if(header === "total"){
                value = rows[i].getElementsByTagName("td")[0].innerText;
            } else if(header==="open"){
                value = rows[i].getElementsByTagName("td")[1].innerText;
            } else if(header === "issues"){
                value = rows[i].getElementsByTagName("td")[2].innerText;
            }
            countSpan.innerText = value;
            repositoryPresent = true
        }
    }
    if(repository==undefined|| repository==null|| !repositoryPresent){
        countSpan.innerHTML = "<li>Please enter valid repository</li>";
    }

   
}