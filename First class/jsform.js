function dataSend() {
    let name1=document.getElementById('name').value;
let contact=document.getElementById('contact').value;
let remarks=document.getElementById('remarks').value;
let gender=document.querySelector('input[name="gender"]:checked');
let courses=document.querySelectorAll('input[name="course"]:checked');
let location=document.getElementById('location').value;

let courseValue=[];
for(let i=0; i < courses.length; i++){
    courseValue.push(courses[i].value)
}

let output="Name: "+name1+ "\n"
+"Contact: "+contact+ "\n"
+"Remarks: "+remarks+ "\n"
+"Sex: "+gender.value+ "\n"
+"Courses: "+courseValue+ "\n"
+"Location: "+location+ "\n"

let newWindow=window.open('','_blank');
newWindow.document.write("<pre>"+output+"</pre>");
}