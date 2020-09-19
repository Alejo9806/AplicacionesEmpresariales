import 'package:ejemplodojoflutter/constant/constants.dart';
import 'package:ejemplodojoflutter/pages/principal_screen.dart';
import 'package:flutter/material.dart';
void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget{
  @override 
  Widget build(BuildContext context){
    return MaterialApp( 
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: primary,
        scaffoldBackgroundColor: backgroundColor,

        textTheme: TextTheme(
          headline4: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
          headline5: TextStyle(color: Colors.white, fontWeight: FontWeight.normal),
          button: TextStyle(color: primary)
        ),

        inputDecorationTheme: InputDecorationTheme(
          enabledBorder: UnderlineInputBorder(
            borderSide: BorderSide(
              color: Colors.white.withOpacity(0.2)
            )
          )
        ),
      ),
      home: PrincipalScreen(), 
    );
  }
}
