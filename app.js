class App {

    constructor(){

        this.$form = document.querySelector('#form');
        this.$title = document.querySelector('#note-title')
        this.$formButtons = document.querySelector('#form-buttons')


        this.addEventListners();
    }

    //main event listening method
    addEventListners() {
        document.body.addEventListener('event', (event) =>{
            this.handleFormClick(event);
        });
    } 


    //Handling the form clicked event
    handleFormClick(event){
        const isFormClicked = this.$form.contains(event.target)

        if(isFormClicked){
            // open the form
            this.openForm();
        }else{
            //close the form
            this.closeForm();
        }
    }



    //Open Form function
    openForm(){
        this.$form.classList.add('form-open');
        this.$title.style.display('block')
        this.$formButtons.style.display('block')
    }

    //close the form
    closeForm(){
        this.$form.classList.remove('form-open');
        this.$title.style.display('none')
        this.$formButtons.style.display('none')
    }

}

new App();