using System;
using System.ComponentModel;
using System.Security.Cryptography.X509Certificates;
namespace parttwo
{




    internal class Program
    {
        public static class Math
        {
            public static int Add(int x, int y)
            {
                return x + y;
            }
            public static int Sub(int x, int y)
            {
                return x - y;
            }
            public static int Multi(int x, int y)
            { return x * y; }

            public static double Divide(double x, double y)
            {
                if (y == 0) Console.WriteLine("can't divide by 0");
                 return x / y; }
        }
        static void Main(string[] args)
        {

            Console.WriteLine(Math.Add(5, 4));
            Console.WriteLine(Math.Sub(5, 4));
            Console.WriteLine(Math.Multi(5, 4));
            Console.WriteLine(Math.Divide(5, 4));
        }

    }
}