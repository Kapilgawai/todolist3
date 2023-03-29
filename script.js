window.addEventListener('load' , ()  => {

 

    //global variables

const form = document.querySelector("#main-list-form");

const input = document.querySelector("#list-input");

const list_el = document.querySelector("#tasks");  

 

    form.addEventListener('submit', (e) => {

 

   

         // to prevent the page from refreshing

        e.preventDefault();

 

         // assign the input

        const task = input.value;

 

        // to get the alert if input is not valid

        if (!task) {

            alert("Please fill out the task");

            return;

        }

 

         // to create the task

        const task_el = document.createElement("div");

            task_el.classList.add("task");

 

         // to add content in task bar

        const task_content_el = document.createElement("div");

            task_content_el.classList.add("content");

            task_el.appendChild(task_content_el);

 

         // to define the input

        const task_input_el = document.createElement("input");

            task_input_el.classList.add("text");

            task_input_el.type = "text";

            task_input_el.value = task;

            task_input_el.setAttribute("readonly" , "readonly");

            task_content_el.appendChild(task_input_el);

 

         // for operation on task  

        const task_actions_el = document.createElement("div");

            task_actions_el.classList.add("actions");

 

         // add edit button after to edit the task created

        const task_edit_el = document.createElement("button");

            task_edit_el.classList.add("edit");

            task_edit_el.innerHTML = "Edit";

 

         // to add delete button to delete the task created

        const task_delete_el = document.createElement("button");

            task_delete_el.classList.add("delete");

            task_delete_el.innerHTML = "Delete";




        // to add task appearing on screen    

            task_actions_el.appendChild(task_edit_el);

            task_actions_el.appendChild(task_delete_el);

            task_el.appendChild(task_actions_el);

            list_el.appendChild(task_el);

 

        input.value =  "";

 

        // to activate edit button or to edit task and save it

            task_edit_el.addEventListener('click', () => {

       

                if(task_edit_el.innerText.toLowerCase() == "edit"){

                    task_input_el.removeAttribute("readonly");

                    task_input_el.focus();

                    task_edit_el.innerText = "Save";

                }else {

                    task_input_el.setAttribute("readonly", "readonly");

                    task_edit_el.innerText = "Edit";

                }

            });

 

           

            // to activate delete button to delete the task

            task_delete_el.addEventListener('click', () => {

                list_el.removeChild(task_el);

            });

    });

});



