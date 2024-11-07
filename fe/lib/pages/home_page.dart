import 'package:fe/widgets/widger_home_categories.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: ListView(
          children: const [HomeCategoriesWidget()],
        ),
      ),
    );
  }
}
