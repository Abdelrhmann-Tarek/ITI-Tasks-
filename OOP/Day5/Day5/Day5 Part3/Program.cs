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
            }
        }
    }
}
