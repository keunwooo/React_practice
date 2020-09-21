package domain;

class Employee extends Person{
  private String department;

  public Employee(){}

  public Employee(String id,String name,String department){
    super(id,name);
    this.department=department;
  }

	public String getdepartment() {
		return this.department;
	}

	public void setdepartment(String department) {
		this.department= department;
	}
  

  // public String toEmployee(){
  //   return super.toString()+"\tSubject:"+department;
  // }

  @Override
  public String toString(){
    return super.toString()+"\tSubject:"+department;
  }
}