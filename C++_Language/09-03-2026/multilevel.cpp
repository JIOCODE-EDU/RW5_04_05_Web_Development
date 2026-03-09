// primary formula is = K=(F-32)*5/9+273.15
//  F= C * 9/5+32


#include <iostream>

using namespace std;

class P{
  protected:
  float temp;

  public:
    void getTemp(){
      cout << "Enter tempreture in celsius: ";
      cin >> temp;
    }
};


class Q : public P{
  protected:
  float fahrenheit;

  public:

  void toFahrenheit(){
    fahrenheit = temp * 9/5+32;

    cout << "Temprature in Fahrenheit : " << fahrenheit << endl;
  }
};


class R : public Q{
  public:
  void toKelvin(){
    float kelvin;
    kelvin = (fahrenheit-32)*5/9+273.15;
    cout << "Tempreture in kelvin = " << kelvin << endl;
  }
};

int main(){
  R obj;

  obj.getTemp();
  obj.toFahrenheit();
  obj.toKelvin();

  return 0;
}