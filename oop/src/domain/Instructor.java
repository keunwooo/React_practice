package domain;

class Instructor extends Person{
  private String Subject;

  public Instructor(){}

  public Instructor(String id,String name,String Subject){
    super(id,name);
    this.Subject=Subject;
  }

	public String getSubject() {
		return this.Subject;
	}

	public void setSubject(String Subject) {
		this.Subject= Subject;
	}
  

  // public String toInstructor(){
  //   return super.toString()+"\tSubject:"+Subject;
  // }

  @Override
  public String toString(){
    return super.toString()+"\tSubject:"+Subject;
  }
}