class App {

    constructor(){

        this.$notes = [];

        this.$form = document.querySelector('#form');
        this.$noteTitle = document.querySelector('#note-title');
        this.$noteText = document.querySelector('#note-text');
        this.$formButtons = document.querySelector('#form-buttons');


        this.addEventListners();
    }

    //main event listening method
    addEventListners() {

        //toggle the input bar
        document.body.addEventListener('event', (event) =>{
            this.handleFormClick(event);
        });

        //take down the note that have add
        this.$form.addEventListener('submit', event => {
            event.preventDefault(); 
            const title = this.$noteTitle.value;   
            const text = this.$noteText.value;   
            const hasNote = title || text;
            if (hasNote) {
              // add note  
              this.addNote({ title, text });
            }
          });
    } 


    //Handling the form clicked event
    handleFormClick(event){
        const isFormClicked = this.$form.contains(event.target);

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

    //saving the notes
    addNote(note) {
        const newNote = {
          title: note.title,
          text: note.text,
          color: 'white',
          id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
        };
        this.notes = [...this.notes, newNote];
        console.log(this.notes);
      }

}

new App();