import projects from "./newProject"
import { promptNewProject } from "./newProject"
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const projectDiv = document.querySelector('.projects')
const main = document.querySelector('main')
const title = document.createElement('h1')
title.innerHTML = 'Do What you gotta do'
header.appendChild(title)
const btnDiv = document.createElement('div')
const newProject = document.createElement('button')
newProject.addEventListener('click', ()=>{
  
    promptNewProject()})
    
newProject.innerHTML = 'New Project'
btnDiv.appendChild(newProject)
header.appendChild(btnDiv)
const newTask = document.createElement('button')
projects()
