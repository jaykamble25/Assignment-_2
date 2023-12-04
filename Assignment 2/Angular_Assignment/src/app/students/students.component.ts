import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Students } from '../models/Students';
import { FormGroup, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  students:Students[] =[]
  message:string = ""
  colorClass:string = ''
  addStudentDiv:boolean = false
  rollNo: any;
  studentName: any;
  percentage: any;
  numberOfAttempts: any;
  subjects: any;
  showStudentClicked: boolean = false;
  updateStudentDiv: boolean = false;



  editStudent(s:Students){
        this.rollNo = s.rollNo;
        this.studentName = s.name;
        this.percentage = s.percentage;
        this.numberOfAttempts = s.numberOfAttempts;
        this.subjects = s.subjects;
        this.showUpdateStudent();
  }

  updateStudent(){
    if(confirm("Sure want to update?" + this.rollNo)){
      for(let i=0;i<this.students.length;i++){
        if(this.students[i].rollNo == this.rollNo){
          this.students[i].name = this.studentName;
          this.students[i].percentage = this.percentage;
          this.students[i].numberOfAttempts = this.numberOfAttempts;
          this.students[i].subjects = this.subjects.split(",");
          break;
        }
      }
      this.updateStudentDiv = false;
    }
  }

  showStudents(){
    this.showStudentClicked = !this.showStudentClicked;
  }

  showAddStudent() {
    this.addStudentDiv = !this.addStudentDiv;
  }

  showUpdateStudent() {
    this.updateStudentDiv = !this.updateStudentDiv;
  }

  addStudents(){
    if(confirm("Sure want to add?" + this.rollNo)){
      this.subjects = this.subjects.split(",");
      let s = new Students(this.rollNo,this.studentName,this.percentage,this.numberOfAttempts,this.subjects)
      this.students.push(s)
      this.addStudentDiv = false
    }
  }

  deleteStudent(arg0: number) {
    if(confirm("Sure want to delete?" + arg0))
    {
      this.colorClass = "success"
      for(let i=0;i<this.students.length;i++){
        if(this.students[i].rollNo == arg0){
          this.students.splice(i,1);
          break;
        }
      }
      this.message = "Student deleted successfully";
    }
    else{
      this.colorClass = "error"
      this.message = "Student not deleted";
    }
    setTimeout(() => {
        this.message = ""
      }
      , 3000);
    }



    ////student sorting methods-------------------------------------------------------------------------------------------------------


    sortBySubjects() {
      this.students.sort((a,b) => {
        if(a.subjects.length > b.subjects.length){
          return 1;
        }
        else if(a.subjects.length < b.subjects.length){
          return -1;
        }
        else{
          return 0;
        }
      })
    }
    sortByPercentage() {
      this.students.sort((a,b) => {
        if(a.percentage > b.percentage){
          return 1;
        }
        else if(a.percentage < b.percentage){
          return -1;
        }
        else{
          return 0;
        }
      })
    }
    sortByName() {
      this.students.sort((a,b) => {
        if(a.name > b.name){
          return 1;
        }
        else if(a.name < b.name){
          return -1;
        }
        else{
          return 0;
        }
      })
    }
    sortByRollNumber() {
      this.students.sort((a,b) => {
        if(a.rollNo > b.rollNo){
          return 1;
        }
        else if(a.rollNo < b.rollNo){
          return -1;
        }
        else{
          return 0;
        }
      })
    }

    sortByNumberOfAttempts() {
      this.students.sort((a,b) => {
        if(a.numberOfAttempts > b.numberOfAttempts){
          return 1;
        }
        else if(a.numberOfAttempts < b.numberOfAttempts){
          return -1;
        }
        else{
          return 0;
        }
      })
    }

  }
