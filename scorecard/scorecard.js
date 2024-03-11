let progressStatsData = [
    {name:"Soft Skill", currScore:4.3, lastScore:2.9, imgUrl:"/assets/images/scoreChart1.svg"},
    {name:"Best Practices", currScore:4.7, lastScore:3.3, imgUrl:"/assets/images/scoreChart2.svg"},
    {name:"Compliance", currScore:3.9, lastScore:3.3, imgUrl:"/assets/images/scoreChart3.svg"},
    {name:"Screen Sim", currScore:4.1, lastScore:4.6, imgUrl:"/assets/images/scoreChart4.svg"},
]
document.getElementById("progressStats").innerHTML = progressStats()
function progressStats(){
    let str = ""
    progressStatsData.forEach((a)=>{ 
        str += `<div class="skill_stat">
        <div class="skill_stat_OuterCircle">
            <div class="skill_stat_circle">
                ${a.currScore}
                <!-- <img src=${a.imgUrl} alt=""> -->
            </div>
        </div>    
        <div class="skill_stat_text">
            ${a.name}
        </div>
        </div>`
    })
    return str
}

document.getElementById("drawer_skillHeadings").innerHTML = drawerSkillHeadings()
function drawerSkillHeadings(){
    let str = ""
    str += `<div class="drawer_scoreHeading"></div>`
    progressStatsData.forEach((a)=>{ 
        str += `<div class="drawer_scoreHeading">${a.name}</div>`
    })
    return str
}

document.getElementById("drawer_scoreValues").innerHTML = drawerSkillValues()
function drawerSkillValues(){
    let str = ""
    str += `
        <div class="drawer_scoreHeading drawer_bottom_bars">
            <div class="drawer_sideColumnBox">
                <div class="drawer_sideCol_title" style="color: #000;">Current</div>
                <div class="drawer_sideCol_pract">Practice</div>
            </div>
            <div class="drawer_sideColumnBox">
                <div class="drawer_sideCol_title">Last</div>
                <div class="drawer_sideCol_pract">Practice</div>
            </div>
        </div>
    `
    progressStatsData.forEach((a)=>{ 
        str += `
            <div class="drawer_scoreHeading drawer_bottom_bars">
                <div class="drawer_scoreValueBox">
                    <div class="drawer_currentScoreVal">${a.currScore}</div>
                    <div class="drawer_scoreValueIcon">
                        <img src=${a.currScore > a.lastScore ? "/assets/icons/arrowUpGreen.svg" : "/assets/icons/arrowDownRed.svg"} alt="">
                    </div>
                </div>
                <div class="drawer_scoreValueBox">
                    <div class="drawer_lastScoreVal">${a.lastScore}</div>
                </div>
            </div>
        `
    })
    return str
}

function openScoreStatBoard(){
    document.getElementById('skill_drawerCollapsed').style.display = 'none';
    document.getElementById('skill_drawerExpanded').style.display = 'flex';
}
function closeScoreStatBoard(){
    document.getElementById('skill_drawerExpanded').style.display = 'none';
    document.getElementById('skill_drawerCollapsed').style.display = 'flex';
}

function closeScoreCard(){
    document.getElementById('scorecard_container').style.display = 'none';
}