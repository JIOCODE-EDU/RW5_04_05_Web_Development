#include <iostream>

using namespace std;

class Base{};

class Calculation : public Base{
  public:

  void calculate(int a , int b){
    cout << "Division = " << a / b << endl;
  }

  void calculate(int a , int b , int c){
     cout << "Subtraction = " << a - b - c << endl;
  }

  void calculate(int a , int b , int c , int d){
     cout << "Multiplication = " << a * b * c * d << endl;
  }

  void calculate(int a , int b , int c , int d , int e){
     cout << "Addition = " << a + b + c + d + e << endl;
  }
};

int main(){
  Calculation obj;

  obj.calculate(20 , 5);
  obj.calculate(20 , 3 , 5);
  obj.calculate(20 , 3 , 5 , 4);
  obj.calculate(20 , 3 , 5 , 4 , 2);
  return 0;
}


