#include <iostream>
#include <vector>
using namespace std;

class DiamondCompany
{
private:
  int comp_id;
  string comp_name;
  int comp_staff_quantity;
  int comp_revenue;
  int comp_import_raw_diamond;
  int comp_export_diamond;
  string comp_ceo;

public:
  DiamondCompany()
  {
    comp_id = 0;
    comp_name = " ";
    comp_staff_quantity = 0;
    comp_revenue = 0;
    comp_import_raw_diamond = 0;
    comp_export_diamond = 0;
    comp_ceo = "";
  }

  void input(){
     cout << "Company Id: ";
    cin >> comp_id;

    cout << "Company Name: ";
    cin >> comp_name;

    cout << "Company Staff Queantity : ";
    cin >> comp_staff_quantity;

    cout << "Company Revenue : ";
    cin >> comp_revenue;

    cout << "Company Import Raw Diamond : ";
    cin >> comp_import_raw_diamond;

    cout << "Company Export Diamond : ";
    cin >> comp_export_diamond;

    cout << "Company CEO Name : ";
    cin >> comp_ceo;

  }

  void display(){

    cout << "\n======== Diamond Company Details ========";
    cout << "Company Id : " << comp_id <<endl;
    cout << "Company Name : " << comp_name <<endl;
    cout << "Company Staff Quantity : " << comp_staff_quantity <<endl;
    cout << "Company  Revenue: " << comp_revenue <<endl;
    cout << "Company Import Row Diamond : " << comp_import_raw_diamond <<endl;
    cout << "Company Export Diamond : " << comp_export_diamond <<endl;
    cout << "Company CEO : " << comp_ceo <<endl;

  }
};


int main(){
  int n;
  cout << "Enter number of Diamond Companies : ";
  cin >> n;

  DiamondCompany companies[100];

  for(int i = 0; i < n; i++){
    cout << "\n Enter Details of Company" << endl;
    companies[i].input();

  }

  for(int i = 0; i < n; i++){
    companies[i].display();
  }

  return 0;
}