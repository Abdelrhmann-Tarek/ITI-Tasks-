using System;
using System.Diagnostics;
using System.Threading.Channels;
using static System.Runtime.InteropServices.JavaScript.JSType;
namespace Day2
{


    class project
    {
        static void Main(string[] args)
        {
            #region ascii
            //-A program to take a character from the user, and then display its ASCII code.

            //Console.WriteLine("please inter char");
            //string userChar = Console.ReadLine();
            //char c = userChar[0];
            //Console.WriteLine((int)c);
            #endregion
            #region sec ascii 
            ////- Same program but vice versa.
            //int ascii = int.Parse(Console.ReadLine());
            //Console.WriteLine($"Your number is  {(char)ascii}");



            #endregion
            #region  odd even
            /////A program to take a num from user and display odd or even based on this num.
            //int num = int.Parse(Console.ReadLine());
            //if (num % 2 == 0)
            //    Console.WriteLine("even number");
            //else
            //    Console.WriteLine("odd number");
            #endregion
            #region sum sub multi

            ////// -A program to take two numbers and print the sum, subtraction, multiplication.
            //Console.WriteLine("please enter first number");
            //int firstNum = int.Parse(Console.ReadLine());
            //Console.WriteLine("please enter second number");
            //int SecNum = int.Parse(Console.ReadLine());
            //Console.WriteLine($"sum of nums ={firstNum + SecNum}");
            //Console.WriteLine($"sub of nums ={firstNum - SecNum}");
            //Console.WriteLine($"multi of nums ={firstNum * SecNum}");




            #endregion
            #region Degree
            ////-A program to take student degree and calculate grade
            //Console.WriteLine("enter your degree");
            //int degree  = int.Parse(Console.ReadLine());
            //if (degree >= 85) Console.WriteLine(" Your grade is A ");
            //else if (degree >= 75) Console.WriteLine("Uour grade is B");
            //else if (degree >= 65) Console.WriteLine(" Your grade is C ");
            //else if (degree >= 50) Console.WriteLine(" Your grade is D ");
            //else Console.WriteLine("Your grade is F");





            #endregion
            #region multi Table
            ////-Multiplication table
            //int num= int.Parse(Console.ReadLine());
            //for (int i = 1; i <= 12; i++)
            //{
            //    Console.WriteLine($"{num}*{i}= "+num * i);

            //}
            //    #endregion
            //}
            #endregion
            #region Bonus
            Stopwatch sw = Stopwatch.StartNew();

            int countOnes = 0;
            for (long i = 1; i <= 99999999; i *= 10)
            {
                long divider = i * 10;
                countOnes += (int)((99999999 / divider) * i + Math.Min(Math.Max(99999999 % divider - i + 1, 0), i));
            }
            Console.WriteLine(countOnes);


            //int NumOfOnes = 0;
            //for (int i = 0; i <= 99999999; i++)
            //{
            //    string HaveOnes = i.ToString();
            //    if (HaveOnes.Contains("1"))
            //    {
            //        for (int j = 0; j < HaveOnes.Length; j++)
            //        {
            //            if (HaveOnes[j] == '1') NumOfOnes++;
            //        }


            //    }


            //}
            //Console.WriteLine(NumOfOnes);

            sw.Stop();
            Console.WriteLine($"Execution time: {sw.Elapsed}");

            #endregion

        }
    }
}