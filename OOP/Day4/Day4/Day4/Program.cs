using System.Drawing;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Channels;

namespace Day3
{

    internal class Program
    {
       
        struct HireDate 
        {
            public int Year {  get; set; }
            public int Month { get; set; }
            public int Day { get; set; }
            public HireDate(int year ,int month , int day)
            {
                Year = year;
                Month = month;  
                Day = day;  
            }
            public bool isLaterolder(HireDate date)
            {

                if (this.Year > date.Year) return true;
                else if (this.Year == date.Year && this.Month > date.Month) return true;
                else if (this.Year == date.Year && this.Month == date.Month && this.Day > date.Day) return true;
                else return false;
            }





                    public string GetString()
                    {
                        return ($"{Year}\\{Month}\\{Day}");
                    }
        }
       

        class Employees
        {
            public int Id { get; set; }
            public int salary {  get; set; }
            
            public string gender { get; set; }
            public HireDate hireDate { get; set; }

            public Employees(int id , int salary, string gender , HireDate hireDate)
            {
                Id = id;
                this.salary = salary;
                this.gender = gender;
                this.hireDate = hireDate;
                
            }

            public string GetString()
            {
                return ($"\n     Employee ID:{Id},Salary={salary},Gender:{gender},Hire Date:{hireDate.GetString()}");
            }
           
        }
        static void Main  (string[] args)
        {
            Console.WriteLine("Enter number of Employees");
            int arrSize=int.Parse(Console.ReadLine());
            Employees[] employees = new Employees[arrSize];


            

                
                //employees[i]= new Employees(id, salary, gender,hireDate);

            



            for (int i = 0; i < arrSize; i++)
            {
                Console.WriteLine($"\nEnter Employee info #{i + 1}:");

                Console.Write("Id: ");
                int id = int.Parse(Console.ReadLine());

                Console.Write("Salary: ");
                int salary = int.Parse(Console.ReadLine());

                Console.Write("Gender: ");
                string gender = Console.ReadLine();
                Console.Write("Hiring date \n");
                Console.WriteLine("Day:");
                int day = int.Parse(Console.ReadLine());
                Console.WriteLine("Month:");
                int month = int.Parse(Console.ReadLine());
                Console.WriteLine("Year:");
                int year = int.Parse(Console.ReadLine());

                HireDate hireDate = new HireDate(year, month, day);
                employees[i] = new Employees(id, salary, gender, hireDate);
            }

            for (int i = 0; i < arrSize; i++)
            {
                Console.WriteLine(employees[i].GetString());
            }
            for (int i = 0; i < arrSize - 1; i++)
            {
                for (int j = 0; j < arrSize - 1 - i; j++)
                {
                  if(  employees[j].hireDate.isLaterolder(employees[j + 1].hireDate))
                    {
                        HireDate bubbleSort = employees[j + 1].hireDate;
                        employees[j + 1].hireDate = employees[j].hireDate;
                        employees[j].hireDate= bubbleSort;
                    }
                
                
                
                
                }
                



            }

            Console.WriteLine("Your data sorted based by hire data ");
            for (int k = 0; k < arrSize ; k++)
            {
                Console.WriteLine($"\n{employees[k].GetString()}");
            }




        }
    }
}