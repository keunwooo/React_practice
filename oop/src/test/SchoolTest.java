package test;
import domain.Student;
import domain.Instructor;

public class SchoolTest{

  public static void main(String [] args){

    //Student [] slist = new Student[25];
    //slist[0] = new Student("s001","a","a");
    //Instructor [] ilist = new Instructor[25];
    //ilist[0] = new Instructor("I001","c","b");
    //Employee [] elist = new Employee[25];
    //elist = new Employee("E001","b","c");

    //객체 다형성 : 부모타입의 객체 생성시 자식생성자로 초기화
    persons[] persons = new Person[33];

    persons[0] = new Student("s001","서동주","컴공");
    persons[1] = new Instructor("I001","이은진","react");
    persons[2] = new Employee("E001","이상희","교육부");

    //System.out.println(slist[0].toStudent());
    //System.out.println(ilist[0].toInstructor());
    //System.out.println(elist[0].toEmployee());

    //객체 다형성  부모타입으로 자식 관리가 가능

    for(Person person : persons){

      if(person instanceof Student){
        System.out.println(((Student)person).toStudent());
      }
      else if(person instanceof Instructor){
        System.out.println(((Instructor)person).toInstructor());
      }
      else if(person instanceof Employee){
        System.out.println(((Employee)person).toEmployee());
      }
      }

      
      //메소드 다형성
    for(Person person : persons){
      System.out.println(person.toString());
    }


    }
}

