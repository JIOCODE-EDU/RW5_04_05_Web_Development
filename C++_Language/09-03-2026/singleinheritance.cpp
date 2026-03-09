#include <iostream>

using namespace std;

class X{
  protected:
  int a , b , c;

  public:
  void set_Data(){
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;
  }
};


class Y : public X{
  public:
  void get_Data(){
    int result;
    result  = (a * a * a) + (b * b * b) + (c * c * c);
    cout << "Sum of cubes = " << result << endl;
  }
};

int main(){
  Y obj;

  obj.set_Data();
  obj.get_Data();

  return 0;
}