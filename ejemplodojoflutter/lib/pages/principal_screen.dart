import 'package:ejemplodojoflutter/constant/constants.dart';
import 'package:ejemplodojoflutter/saludo.dart';
import 'package:flutter/material.dart';



class PrincipalScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {

    return Scaffold(

        body:Column(
          
          children: <Widget>[

            Expanded(
              flex: 2,
              child: Container(
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage('assets/perosn.jpeg'),
                      fit: BoxFit.cover
                    )
                  ),
                ),
            ),


            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children:<Widget> [
                  RichText(
                    textAlign: TextAlign.center,
                    text: TextSpan(
                      children: [
                        TextSpan(
                          text: "BAKING LESSONS\n",
                          style: Theme.of(context).textTheme.headline4
                        ),
                        TextSpan(
                          text: "MASTER THE ART OF BAKING",
                          style: Theme.of(context).textTheme.headline5
                        ),
                      ]
                  )
                 ),

                  FittedBox(
                      child: GestureDetector(
                        onTap: () {

                           Navigator.push(context, MaterialPageRoute(
                           builder: (context) {
                            return Saludo();
                          },
                        ));
                        },
                        child: Container(
                          margin: EdgeInsets.only(bottom: 12.0) ,
                          padding: EdgeInsets.symmetric(horizontal: 23,vertical: 15),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(30.0),
                            color: primary
                          ),
                          child: Row(
                            children: <Widget>[
                              Text('START LEARNING', style: Theme.of(context).textTheme.button.copyWith(
                                color: Colors.black
                               ),
                              ),
                              SizedBox(width: 10.0,),
                              Icon(Icons.arrow_forward, color: Colors.black)
                            ],
                          ),
                        ),
                      ),
                    ),
                ],
              )
            ),
          ],
        ),
      );
  }
}