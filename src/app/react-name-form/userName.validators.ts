import { AbstractControl, ValidationErrors, ControlContainer } from '@angular/forms';


export  class UserNameValidators{

static cannotContainSpace(control:AbstractControl) :ValidationErrors | null{
    if((control.value as string).indexOf(' ')>= 0)
    return{
        cannotContainSpace:true
    };
    return null;    
  }
  static shouldBeUniqure(control:AbstractControl):ValidationErrors| null{

    setTimeout(()=>{
        console.log('ok')
        if(control.value ==="kakaka")
        return{
            shouldBeUniqure:true
        };
        return null;
    },200);
        return null;
  }
}