import 'package:flutter/material.dart';

class Saludo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Text('Lo lograste'),
      floatingActionButton: FloatingActionButton(
        onPressed:() => {
          Navigator.of(context).pop()
        }
      ),
    );
  }
}