
//url = "https://api.github.com/users/mayar-kabaja";
const userName = document.querySelector("#github-user-handle");
const img = document.querySelector("#github-user-avatar");
const numOfRepo = document.querySelector("#github-user-repos");
const languages = document.querySelector("#github-repos-languages");
const stars = document.querySelector("#github-repos-stars");
const repoName = document.querySelector("#github-repo-name");
const repoCreate= document.querySelector("#github-repo-created");
const repoIssue = document.querySelector("#github-repo-open-issues");
const repoWatch = document.querySelector("#github-repo-watchers");
const repocontributors = document.querySelector("#github-repo-contributors");


 
function fetch(url , callback){

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if( xhr.readyState === 4  && xhr.status === 200){
                let data = JSON.parse(xhr.responseText);
                callback(data);
            } 

        }
        xhr.open("Get" , url);
        xhr.send();

    }

fetch("https://api.github.com/users/mayar-kabaja",setData)

function setData(data){
    
    userName.innerHTML=data.login;
    img.src = data.avatar_url;
    numOfRepo.innerHTML = data.public_repos;

    let repoUrl = data.repos_url;

    fetch(repoUrl , setData1)
    


   
    
    
}





function setData1(arr){
        

        let lan = " "
        
       for(let i = 0 ; i < arr.length ; i++){
            if(arr[i].language !== null ){
                lan +=` ${arr[i].language}`
            }
        }

        
        languages.innerHTML = lan;


        let count = 0
        
       for(let i = 0 ; i < arr.length ; i++){
           count += arr[i].stargazers_count;
        }

        
        stars.innerHTML = count;


        repoName.innerHTML =arr[3].name;
        repoIssue.innerHTML =arr[3].open_issues_count;
        repoCreate.innerHTML = arr[3].created_at
        repoWatch.innerHTML = arr[3].watchers_count
        fetch(arr[3].contributors_url , function(data){
   
           repocontributors.innerHTML = data[0].contributions;
        })

        


    };











