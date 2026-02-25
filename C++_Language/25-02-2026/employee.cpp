#include <iostream>

using namespace std;

class Employee{
  private:
  int emp_id;
  string emp_name;
  int emp_age;
  string emp_role;
  double emp_salary;
  string emp_city;
  int emp_experience;
  string emp_comapany_name;

  public:
   
  void input(){
    cout << "\n Enter Employee ID : ";
    cin >> emp_id;

    cout << "\n Enter Name : ";
    cin >> emp_name;

    cout << "\n Enter Age : ";
    cin >> emp_age;

    cout << "\n Enter role : ";
    cin >> emp_role;

    cout << "\n Enter Salary : ";
    cin >> emp_salary;

    cout << "\n Enter City : ";
    cin >> emp_city;

    cout << "\n Enter Experiance(years) : ";
    cin >> emp_experience ;

    cout << "\n Enter Company Name : ";
    cin >> emp_comapany_name;
  }
  void display(){
    cout<<"\n ------ Employee Details ---------";
    cout << "ID : " << emp_id << endl;
    cout << "Name : " << emp_name << endl;
    cout << "Age : " << emp_age << endl;
    cout << "Role : " << emp_role << endl;
    cout << "Salary : " << emp_salary << endl;
    cout << "City : " << emp_city << endl;
    cout << "Experience : " << emp_experience << endl;
    cout << "Company : " << emp_comapany_name << endl;
  };
};


int main(){
  Employee emp[5];

  cout << "\n======== Employee Management Record=========";


  for(int i = 0; i < 1; i++){
    cout << "\n Enter details for employee " << i + 1 << endl;
    emp[i].input();
  }

  cout << "\n=====Employee Record========";

  for(int i = 0; i < 1; i++){
    emp[i].display();
  }

  return 0;
}