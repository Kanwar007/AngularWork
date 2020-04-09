import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-and-removeform',
  templateUrl: './add-and-removeform.component.html',
  styleUrls: ['./add-and-removeform.component.css']
})
export class AddAndRemoveformComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  form = new FormGroup({
    topics: new FormArray([])
  });
  addTopic(topic : HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
    topic.value=''
  }
  removeTopic(topic: FormControl){
    let topicIn =this.topics.controls.indexOf(topic);
    this.topics.removeAt(topicIn);
    
  }
  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
