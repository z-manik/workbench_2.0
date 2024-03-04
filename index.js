let startPosX = 0, startPosY = 0;
function activateTab(tabId, btnId) {

    let buttonClass = document.getElementById(btnId).classList;
    let tabClass = document.getElementById(tabId).classList;
    if (buttonClass.contains("footer-btn-selected")) {
        buttonClass.remove("footer-btn-selected")
        tabClass.add("hide")
    } else {
        buttonClass.add("footer-btn-selected")
        tabClass.remove("hide")
    }

}
function setSize(tabId, styles) {

    let tab = document.getElementById(tabId)
    // tab.style.cssText = "";
    tab.style.cssText = styles;
}
var elements = [
    { id: "ScreenSim-close", tab: "tab1", name: "ScreenSim", expandId: "ScreenSim-expand", style: "position: absolute;z-index:1;top: 2vh;bottom: 2vh;left:1vw;right:1vw; height:90%; width:98%;" },
    { id: "CallTranscript-close", tab: "tab4", name: "CallTranscript", expandId: "CallTranscript-expand", style: "position: absolute;z-index:1;top: 20vh;bottom: 7vh;left: 65%;right:2%;width: 500px;height: 600px;" },
    { id: "CallNotes-close", tab: "tab2", name: "CallNotes", expandId: "CallNotes-expand", style: "position: absolute;z-index:1;top:20vh;bottom: 7vh;left:30%;right:550px;width:500px;height:600px" },
    { id: "MyNotes-close", tab: "tab3", name: "MyNotes", expandId: "MyNotes-expand", style: "position: absolute;z-index:1;top:20vh;left:2vw;bottom: 7vh;right:2.35vw;width:500px;height:600px" },
    { id: "Resources-close", tab: "tab5", name: "Resources", expandId: "Resources-expand", style: "position: absolute;z-index:1;top:20vh;;bottom: 7vh;left:20%;right:550px;width:500px;height:600px" }
];
elements.forEach(function (element) {
    document.getElementById(element.id).addEventListener("click", function () {
        activateTab(element.tab, element.name);
    });

    document.getElementById(element.name).addEventListener("click", function () {
        activateTab(element.tab, element.name);
    });
    document.getElementById(element.expandId).addEventListener("click", function () {
        setSize(element.tab, element.style);
    });
});

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    startPosX = event.offsetX;
    startPosY = event.offsetY;
}
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    console.log("drop");
    event.preventDefault();
    const divId = event.dataTransfer.getData('text/plain');
    const draggedDiv = document.getElementById(divId);
    const tabContent = document.getElementById('modalSheet');
    console.log(divId, draggedDiv, tabContent);
    if (draggedDiv && tabContent) {
        // Calculate the position relative to the active tab's position
        const tabRect = tabContent.getBoundingClientRect();
        const top = event.clientY - tabRect.top - startPosY;
        const left = event.clientX - tabRect.left - startPosX;

        draggedDiv.style.left = left + "px";
        draggedDiv.style.top = top + "px";

        // Append the draggedDiv to the tabContent
        tabContent.appendChild(draggedDiv);
    }
}
// document.getElementById('callTs').innerHTML = CallTranscriptData();
function CallTranscriptData() {
    return (
        `   <div style="padding:10px">
            <div class="chat1">
                <div style="margin-bottom: 5px;"><img src="Customer.png" /></div>
                <div
                    style="border-radius:4px;background-color: #f1f1f1;color:#333;padding:10px 10px;font-size:14px;margin-right: 10%;">
                    You are receiving an inbound call.</div>
            </div>
            <div class="chat2">
                <div style="text-align:right;margin-bottom: 5px;"><img src="Agent.png" /></div>
                <div
                    style="border-radius:4px;background-color: #024890;color:#fff;padding:10px 10px;font-size:14px;margin-left: 10%;">
                    So Miss Smith there is a $15 fee due to late payment on the account. Your due date is the first of the
                    month but the payment came is on the fifth</div>
            </div>
            <div class="chat1">
                <div style="margin-bottom: 5px;"><img src="Customer.png" /></div>
                <div
                    style="border-radius:4px;background-color: #f1f1f1;color:#555;padding:10px 10px;font-size:14px;margin-right: 10%;">
                    Oh I see, well I was sick and in the hospital so that’s why I was late</div>
            </div>
            <div class="chat2">
                <div style="text-align:right;margin-bottom: 5px;"><img src="Agent.png" /></div>
                <div
                    style="border-radius:4px;background-color: #024890;color:#fff;padding:10px 10px;font-size:14px;margin-left: 10%;">
                    Let me see if there’s any thing I can do.</div>
            </div>
            <div class="chat1">
                <div style="margin-bottom: 5px;"><img src="Coach.png" /></div>
                <div
                    style="border-radius:4px;background-color: #FFEBAD;color:#333;padding:10px 10px;font-size:14px;margin-right: 10%;">
                    I ‘m sorry you didn’t reply using the best practice. Please ensure you include empathy towards a
                    customer in your response.</div>
            </div>
        </div>`
    )
}

function playAudio() {
    console.log("adsfgh")
}