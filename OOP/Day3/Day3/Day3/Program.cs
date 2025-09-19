using System;
using System.ComponentModel;
using System.Diagnostics.Metrics;
using System.Drawing;
using System.Reflection.Metadata;
using System.Security.Cryptography;
using System.Threading.Channels;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Day3

{
    #region structss

    struct TimeSpan
    {
        public int seconds { get; set; }
        public int minutes { get; set; }
        public int hours { get; set; }
        public int TotalSeconds()
        {
            return hours * 3600 + minutes * 60 + seconds;
        }
        public string GetString()
        {
            return $"{hours:D2}:{minutes:D2}:{seconds:D2}";
        }
    }

    //struct Rectangle
    //{

    //    int width;
    //    int height;

    //    public int getWidth() { return width; }

    //    public void setWidth(int value) { width = value; }
    //    public int getHeight() { return height; }
    //    public void setHeight(int value) { height = value; }

    //    public int Area() { return width * height; }
    //    public int Perimeter() { return 2 * (width + height); }

    //}
    #endregion




    class Program
    {
        static void Main()
        {
            #region Students Grades
            //Console.WriteLine("enter the number of students");
            //int studentNum = int.Parse(Console.ReadLine());
            //int[] studentGrades = new int[studentNum];
            //for (int i = 0; i < studentNum; i++)
            //{
            //    Console.WriteLine($"enter num {i + 1} grade");
            //    studentGrades[i] = int.Parse(Console.ReadLine());

            //}
            //for (int i = 0; i < studentNum; i++)
            //{
            //    Console.WriteLine($"number {i + 1}grade = {studentGrades[i]}");

            //}
            //int gradeSum = 0;
            //for (int i = 0; i < studentNum; i++)
            //{
            //    gradeSum += studentGrades[i];
            //}
            //Console.WriteLine($"the average of all students grade ={gradeSum / studentNum} ");
            #endregion
            #region  multi Two dim arr
            //int[,] multiArr = new int[10, 10];
            //for (int i = 0; i < 10; i++)
            //{
            //    Console.WriteLine(" ");
            //    for (int j = 0; j < 10; j++)
            //    {
            //        multiArr[i, j] = (i + 1) * (j + 1);
            //        Console.Write($"{multiArr[i, j]}  ");


            //    }


            //}



            #endregion
            #region  students tracks

            //Console.WriteLine("enter num of tracks");
            //int tracks = int.Parse(Console.ReadLine());
            //Console.WriteLine("enter num of students per track");
            //int students = int.Parse(Console.ReadLine());
            //int[,] studentsTracks = new int[tracks, students];
            //for (int i = 0; i < tracks; i++)
            //{
            //    for (int j = 0; j < students; j++)
            //    {
            //        Console.Write($"Enter age of student {j + 1} in track {i + 1}: ");
            //        studentsTracks[i, j] = int.Parse(Console.ReadLine());


            //    }


            //}
            //Console.WriteLine("\nStudent ages by track:");
            //for (int i = 0; i < tracks; i++)
            //{
            //    Console.Write($"Track {i + 1}: ");
            //    for (int j = 0; j < students; j++)
            //    {
            //        Console.Write($"{studentsTracks[i, j]} ");
            //    }
            //    Console.WriteLine();
            //}

            //for (int i = 0; i < tracks; i++)
            //{
            //    int sum = 0;
            //    for (int j = 0; j < students; j++)
            //    {
            //        sum += studentsTracks[i, j];
            //    }
            //    int avg = (int)sum / students;
            //    Console.WriteLine($"Average age for track {i + 1}: {avg}");
            //}




            #endregion
            #region Rectangle

            //Console.WriteLine("enter rec width");
            //Rectangle rect = new Rectangle();
            //rect.setWidth(int.Parse(Console.ReadLine()));
            //Console.WriteLine("enter rec height");
            //rect.setHeight(int.Parse(Console.ReadLine()));

            //Console.WriteLine($"area={rect.Area()}");
            //Console.WriteLine($"permiter={rect.Perimeter()}");



            #endregion
            #region Timespan 

            Console.Write("Enter number of time values: ");
            int size = int.Parse(Console.ReadLine());

            TimeSpan[] times = new TimeSpan[size];

            for (int i = 0; i < size; i++)
            {
                Console.WriteLine($"\nEnter time #{i + 1}:");

                Console.Write("Hours: ");
                int h = int.Parse(Console.ReadLine());

                Console.Write("Minutes: ");
                int m = int.Parse(Console.ReadLine());

                Console.Write("Seconds: ");
                int s = int.Parse(Console.ReadLine());

                times[i] = new TimeSpan
                {
                    hours = h,
                    minutes = m,
                    seconds = s
                };
            }

            Console.WriteLine("\nTimes entered:");
            for (int i = 0; i < size; i++)
            {
                Console.WriteLine($"Time #{i + 1}: {times[i].GetString()} , Total Seconds = {times[i].TotalSeconds()}");
            }


            #endregion
            #region Bonus task 
            Console.Write("Enter number of tracks: ");
            int trackNum = int.Parse(Console.ReadLine());

            int[][] studentTracks=new int [trackNum][];
            for (int i = 0; i < trackNum; i++)
            {
                Console.WriteLine($"Enter num of students in track {i + 1}");
                int studentCount = int.Parse(Console.ReadLine());

                studentTracks[i] = new int[studentCount];

                for (int j = 0; j < studentCount; j++)
                {
                    Console.Write($"Enter age of student {j + 1} in track {i + 1}: ");
                    studentTracks[i][j] = int.Parse(Console.ReadLine());
                }
            }
            Console.WriteLine("\nStudent ages by track:");
            for (int i = 0; i < trackNum; i++)
            {
                Console.Write($"Track {i + 1}: ");
                for (int j = 0; j < studentTracks[i].Length; j++)
                {
                    Console.Write($"{studentTracks[i][j]} ");
                }
                Console.WriteLine();
            }



            #endregion




        }




    }
}
