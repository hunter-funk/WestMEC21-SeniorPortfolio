var resume = document.getElementById("resume");
var skills = document.getElementById("skills");
var work = document.getElementById("work");
var contact = document.getElementById("contact");

function focusOn(nav) {
    if(nav == 0){
        resume.focus();
        console.log(`trigger`);
    }else if(nav == 1){
        skills.focus();
        console.log(`trigger`);
    }else if(nav == 2){
        work.focus();
        console.log(`trigger`);
    }else if(nav == 3){
        contact.focus();
        console.log(`trigger`);
    }
}


