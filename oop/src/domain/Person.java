package domain;

//abstract 객체 생성하지말고 타입만 제공해라
//public abstract class Person 하면 객체 생성이 불가. Person p = new Person(); //error
//interface : 사용표준을 제공하기 위한 목적으로 상수와 구현이 없는 abstract method
//로만 구성
public class Person{
  private String id;
  private String name;

  public Person(){
  }

  public Person(String id,String name){
      this.id=id;
      this.name = name;
  }

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

  public String toString(){
    return "id:"+id+"\tname:"+name;
  }


}