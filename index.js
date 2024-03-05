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
    console.log(event);
    let focusTab= event.target.id.split("_")
    console.log(focusTab[0])
 
    // event.dataTransfer.setData('text/plain', event.target.id);
    event.dataTransfer.setData('text/plain', focusTab[0]);
    startPosX = event.offsetX;
    startPosY = event.offsetY;
}
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const divId = event.dataTransfer.getData('text/plain');
   let focusTab= divId.split("_")
    // const draggedDiv = document.getElementById(divId);
    const draggedDiv = document.getElementById(focusTab[0]);
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
document.getElementById('fileUploadBtn').addEventListener('click', openFileUpload);
function openFileUpload() {
  document.getElementById('fileId').click();
}

// resources Title Edit
let activeTitleName = '';
function openTitleEditModal(title){
    activeTitleName = title.id;
    document.getElementById('titleEditModal').style.display = "flex";
    document.getElementById('EditableTitle').value = title.innerText;
}

function closeTitleEditModal(){
    document.getElementById('titleEditModal').style.display = "none";
}

function updateResourceTitleEdit(editedTitle){
    document.getElementById(activeTitleName).innerText = editedTitle.value;
    closeTitleEditModal()
}

function deleteResourceItem(resItem){
    document.getElementById(resItem.id).style.display = "none";
}

//resources insert Link
function openInsertLinkModal(){
    document.getElementById('insertLink').style.display = "flex";
}
function closeInsertLinkModal(){
    document.getElementById('insertLink').style.display = "none";
}
function addResourceLink(url, title){

    closeInsertLinkModal()
}

// -- text formatting
// Function to toggle bold formatting
function toggleBold() {
    document.getElementById('my_notes_text').focus();
    document.execCommand('bold', false, null);
    updateButtonState('boldButton');
  }

  // Function to toggle italic formatting
  function toggleItalic() {
    document.getElementById('my_notes_text').focus();
    document.execCommand('italic', false, null);
    updateButtonState('italicButton');
  }

  // Function to toggle underline formatting
  function toggleUnderline() {
    document.getElementById('my_notes_text').focus();
    document.execCommand('underline', false, null);
    updateButtonState('underlineButton');
  }

  // Function to change text color
  function changeTextColor() {
    document.getElementById('my_notes_text').focus();
    var color = document.getElementById('colorPicker').value;
    document.execCommand('foreColor', false, color);
  }

  // Function to update button state based on the current selection
  function updateButtonState(buttonId) {
    // var button = document.getElementById(buttonId);
    // console.log("button: ", button)
    // console.log("buttonID: ", buttonId)
    // var isButtonActive = document.queryCommandState(buttonId.toLowerCase());
    // console.log("current status (btn):",isButtonActive)
    // button.classList.toggle('active', !isButtonActive);
  }
  // --
