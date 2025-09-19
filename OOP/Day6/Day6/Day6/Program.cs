using System.ComponentModel.Design.Serialization;

namespace Day5_Part3
{
    internal class Program
    {
        class Duration
        {
            public int Hours { get; set; }
            public int Minutes { get; set; }
            public int Seconds { get; set; }

            public Duration(int x, int y, int z)
            {
                Hours = x;
                Minutes = y;
                Seconds = z;

            }
            public Duration(int seconds)
            {
                Hours = seconds / 3600;
                Minutes = (seconds % 3600) / 60;
                seconds = (seconds % 3600) % 60;
            }

            

            public static Duration operator +(Duration D1 , Duration D2)
            {
               Duration D3 = new Duration(D1.Hours+D2.Hours,D1.Minutes+D2.Minutes,D1.Seconds+D2.Seconds);
                return D3;
            }
            public static Duration operator +(Duration D1, int D2)
            {

               Duration D3 = new Duration(D2);
                Duration D4 = new Duration(D1.Hours+D3.Hours,D1.Minutes+D3.Minutes,D1.Seconds+D3.Seconds);
                return D4;
                
                
            }
            public static Duration operator +(int D1, Duration D2)
            {
                Duration D3 = new Duration(D1);
                Duration D4 = new Duration(D3.Hours + D2.Hours, D3.Minutes + D2.Minutes, D3.Seconds + D2.Seconds);
                return D4;



            }
            public static Duration operator ++(Duration D1)
            {
                return  new Duration(D1.Hours, D1.Minutes + 1, D1.Seconds);
            }
            public static Duration operator --(Duration D1)
            {
                return new Duration(D1.Hours, D1.Minutes - 1, D1.Seconds);

            }
            public static Duration operator- (Duration D1)
            {
                Duration D3 = new Duration(12-D1.Hours, 60+ D1.Minutes, 60 + D1.Seconds);
                return D3;
            }
            public static bool operator <(Duration D1,Duration D2)
            {
                return D1 < D2;
            }
            public static bool operator >(Duration D1,Duration D2)
            {
                return D1 > D2;
            }
            public static bool operator <=(Duration D1, Duration D2)
            {
                return D1 <= D2;
            }
            public static bool operator >=(Duration D1, Duration D2)
            {
                return D1 >= D2;
            }
            
            public static bool operator true (Duration D1)
            {
                return D1.Hours>0||D1.Minutes>0||D1.Seconds>0;
            }
            public static bool operator false(Duration D1)
            {
                return D1.Hours < 0 || D1.Minutes < 0 || D1.Seconds < 0;
            }
            public static explicit operator DateTime(Duration D1)
            {
                return new DateTime(2002,14,1,D1.Hours,D1.Minutes,D1.Seconds);
            }



            public string GetString()
            {
                string result = "";

                if (Hours > 0) result += $"Hours:{Hours}, ";
                if (Minutes > 0 || Hours > 0) result += $"Minutes:{Minutes},";
                result += $"Second:{Seconds}";
                return result;

            }
            static void Main(string[] args)
            {
                Duration D1 = new Duration(1, 10, 15);
                Console.WriteLine(D1.GetString());

                Duration D2 = new Duration(3600);
                Console.WriteLine(D2.GetString());

                Duration D3 = new Duration(4500);
                Console.WriteLine(D3.GetString());

                Duration D4 = new Duration(666);
                Console.WriteLine(D4.GetString());


                D3 = D1 + D2;
                D3 = D1 + 7800;
                D3 = 666 + D3;
                D3 = D1++; 
                D3 = --D2;
                D1= -D2;  
                if ( D1>D2);  
                if ( D1<=D2);  
                if (D1);
                DateTime Obj = (DateTime)D1;



            







            }
        }
    }
}
