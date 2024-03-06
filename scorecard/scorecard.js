let progressStatsData = [{name:"Soft Skill",score:4.3},
{name:"Best Practices",score:4.7},
{name:"Compliance",score:3.9},
{name:"Screen Sim",score:4.1}]
document.getElementById("progressStats").innerHTML = progressStats()
function progressStats(){
    let str = ""
    progressStatsData.forEach((a)=>{ 
        str += `<div class="skill_stat">
        <div class="skill_stat_circle">
            ${a.score}
        </div>
        <div class="skill_stat_text">
           ${a.name}
        </div>
    </div>`
})
return str
}

function openScoreStatBoard(){
    
}