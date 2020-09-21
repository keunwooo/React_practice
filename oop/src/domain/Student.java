package domain;

public class Student extends Person{
  private String id;
  private String name;
  private String major;

  //constructor
  //기본 생성자
  public Student(){
  }
  //생성자 오버로딩
  //this : 현재객체
  public Student(String id,String name,String major){
    super(id,name); //person의 생성자를 가르킨다.
    //this.id=id;
    //this.name=name;
    this.major=major;
  }
  //캡슐화
  public void setName(String name){
    this.name=name;
  }
  public void setId(String id){
    this.id=id;
  }
  public void setMajor(String major){
    this.major=major;
  }

  public String getName(){
    return this.name;
  }
  public String getId(){
    return this.id;
  }
  public String getMajor(){
    return this.major;
  }

  // public String toStudent(){
  //   return super.toString() +"\tmajor:"+major;
  // }
  
  @Override
  public String toString(){
    return super.toString() +"\tmajor:"+major;
  }




}