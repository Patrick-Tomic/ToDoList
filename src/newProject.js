 

export default function projects(possibleProject = undefined){
    let projectList = []
    if(localStorage.getItem('projects') != undefined){
        const arr = localStorage.getItem('projects')
        projectList = JSON.parse(arr)
    }
    else{
         
        projectList.push('Today')
        projectList.push('All')
    }
    if(possibleProject != undefined){
        projectList.push
    }
   
    const main = document.querySelector('main')
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('projects')

    for(let i =0; i < projectList.length; i++){
        const p = document.createElement('p')
        p.classList.add(projectList[i])
        p.innerHTML = projectList[i]
        projectDiv.appendChild(p)
    }
    const jsonArr = JSON.stringify(projectList)
    localStorage.setItem('projects', jsonArr)
    main.appendChild(projectDiv)
}
export function promptNewProject(){
    const main = document.querySelector('main')
    const projectDiv = document.querySelector('.projects')
    const response = prompt("Name new Category: ")
    if(response == undefined){
        console.log('not valid')
        prompt('Enter a proper category')
        return
    } else{ 
        main.removeChild('.projects')
        projects(response)
    }
}