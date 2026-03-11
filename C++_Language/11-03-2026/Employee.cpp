#include <iostream>

using namespace std;

class Employee
{
protected:
  int employee_id;
  string employee_name;
  int employee_age;
  float employee_salary;

public:
  void setData(int id, string name, int age, float salary)
  {
    employee_id = id;
    employee_name = name;
    employee_age = age;
    employee_salary = salary;
  }

  virtual void display()
  {
    cout << "Employee ID: " << employee_id;
    cout << "Employee Name: " << employee_name;
    cout << "Employee Age: " << employee_age;
    cout << "Employee Salary: " << employee_salary << endl;
  };

  virtual ~Employee() {};

  // Full-time employee
};

class FullTimeEmployee : public Employee
{
private:
  float bonus;

public:
  void setBonus(float b)
  {
    bonus = b;
  }

  void display() override
  {
    cout << "=======Full-Time Employee========";

    Employee::display();

    cout << "Bonus: " << bonus << endl;
  }
};

class PartTimeEmployee : public Employee
{
private:
  int hours_worked;

public:
  void setHours(int h)
  {
    hours_worked = h;
  }

  void display() override
  {

    cout << "=====PartTime Employee=====";

    Employee::display();

    cout << "Hours Worked: " << hours_worked << endl;
  }
};

int main()
{

  Employee* employees[100];

  int count = 0;
  int choice;

  do
  {
    cout << "\n===== Employee Management System =====\n";
    cout << "\n==== 1. Add Employee ====\n";
    cout << "\n==== 2. Display All Employee ====\n";
    cout << "\n==== 3. Delete Employee ====\n";
    cout << "\n==== 4. Exit ====\n";
    cin >> choice;

    if (choice == 1)
    {
      int type;

      cout << "\n 1. Full Time Employee";
      cout << "\n 2. Part Time Employee";
      cout << "\n Select Type: ";

      cin >> type;

      int id, age;
      float salary;
      string name;

      cout << "Enter Employee ID: ";
      cin >> id;
      cout << "Enter Employee Name: ";
      cin >> name;
      cout << "Enter Employee Age: ";
      cin >> age;
      cout << "Enter Employee Salary: ";
      cin >> salary;

      if (type == 1)
      {
        float bonus;

        FullTimeEmployee* emp = new FullTimeEmployee();

        emp->setData(id, name, age, salary);

        cout << "Enter Bonus: ";

        cin >> bonus;

        emp->setBonus(bonus);

        employees[count++] = emp;
      }
      else if (type == 2)
      {
        float hours;

        PartTimeEmployee* emp = new PartTimeEmployee();

        emp->setData(id, name, age, salary);

        cout << "Enter Worked Hours: ";

        cin >> hours;

        emp->setHours(hours);

        employees[count++] = emp;
      }
    }else if(choice == 2){
      if(count == 0){
        cout << "\n No Employee Found.";
      }else{
        for(int i = 0; i < count; i++){
          employees[i]->display();
          cout << endl;
        }
      }
    }else if(choice == 3){
      int index;
      cout << " Enter Employee index to delete (0 to " << count - 1 << "):";

      if(index >= 0 && index < count){
        delete employees[index];
      }

       for(int i = 0; i < count - 1 ; i++){
          employees[i] = employees[i + 1];
        }

        count--;

        cout << "Employee Deleted Successfully.";
    }else{
      cout << "Invalid Index";
    }
  }while(choice != 4);

  for(int i = 0; i<count; i++){
    delete employees[i];
  }
 

  return 0;
}