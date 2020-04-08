import { AbstractControl, ValidationErrors, ControlContainer } from '@angular/forms';



export  class UserNameValidators{

static cannotContainSpace(control:AbstractControl) :ValidationErrors | null{
    if((control.value as string).indexOf(' ')>= 0)
    return{
        cannotContainSpace:true
    };
    return null;    
  }
  static shouldBeUniqure(control:AbstractControl):Promise <ValidationErrors| null>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('ok');
            if(control.value ==="kakaka"){
                resolve({
                    shouldBeUniqure:true
                });
            }else{
                resolve (null);
            }
            
            
        },2000);
    });
    
        
  }
}