namespace Day1
{


    public class Subject
    {
        public int Code { get; set; }
        public string Name { get; set; }
    }
    public class Student
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Subject[] Subjects { get; set; }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>() { 2, 4, 6, 7, 1, 4, 2, 9, 1 };

            ////////////q1////////////////
            var q1 = numbers.Distinct().OrderBy(x => x);
            foreach (int number in q1)
            {
                Console.WriteLine(number);
            }
            ////////////q2////////////////
            var q2 = q1.Select(q1 => new { Number = q1, Multiplcation = q1 * 2 });
            foreach (var number2 in q2)
            {
                Console.WriteLine(number2);
            }
            ////////////q3////////////////
            string[] names = { "Tom", "Dick", "Harry", "MARY", "Jay" };
            var q3 = from n in names
                     where n.Length == 3
                     select n; 
            foreach (var name in q3) { Console.WriteLine(name);}
            //
            var q3p2 = names.Where(x => x.Length == 3).Select(x=>x) ;
            foreach (var name in q3p2) { Console.WriteLine(name);}
            ////////////q4////////////////
            var q4 = from n in names
                     where n.ToLower().Contains("a")
                     orderby n.Length
                     select n;

            foreach(var name in q4) { Console.WriteLine(name); }
            //
            var q4p2 = names.Where(n=>n.ToLower().Contains("a")).OrderBy(x => x.Length).Select(n=>n);
            foreach (var name in q4p2) { Console.WriteLine(name); }

            ////////////q5////////////////
            var q5 = names.Take(2);

            foreach (var name in q5) { Console.WriteLine(name); }

            ////////////q6////////////////

            List<Student> students = new List<Student>()
{
                new Student()
                {
                    ID = 1,
                    FirstName = "Ali",
                    LastName = "Mohammed",
                    Subjects = new Subject[]
                    {
                        new Subject() { Code = 22, Name = "EF" },
                        new Subject() { Code = 33, Name = "UML" }
                    }
                },
                new Student()
                {
                    ID = 2,
                    FirstName = "Mona",
                    LastName = "Gala",
                    Subjects = new Subject[]
                    {
                        new Subject() { Code = 22, Name = "EF" },
                        new Subject() { Code = 34, Name = "XML" },
                        new Subject() { Code = 25, Name = "JS" }
                    }
                },
                new Student()
                {
                    ID = 3,
                    FirstName = "Yara",
                    LastName = "Yousf",
                    Subjects = new Subject[]
                    {
                        new Subject() { Code = 22, Name = "EF" },
                        new Subject() { Code = 25, Name = "JS" }
                    }
                },
                new Student()
                {
                    ID = 1,
                    FirstName = "Ali",
                    LastName = "Ali",
                    Subjects = new Subject[]
                    {
                        new Subject() { Code = 33, Name = "UML" }
                    }
                }
                };

            var q6 = students.Select(x => new{ FullName = x.FirstName+" " +x.LastName, NoOfSubjects = x.Subjects.Length } );
            foreach ( var x in q6) { Console.WriteLine(x); }



            ////////////q7////////////////

            var q7 = students.OrderByDescending(s => s.FirstName).ThenBy(s => s.LastName).Select(s => new { s.FirstName, s.LastName });
            foreach( var x in q7) { Console.WriteLine( x .FirstName + x.LastName); }


            //////////////////////q8////////////////
            ///
            var q8 = students.SelectMany(s=>s.Subjects,(students,Subject)=>new {StudentName=students.FirstName +" "+students.LastName ,SubjecName=Subject.Name });


            foreach(var x in q8) { Console.WriteLine(x ); }


            //////////////////////q9////////////////

          

            var query = students.GroupBy(s => new { s.FirstName, s.LastName }).Select(g => new{ StudentName = g.Key.FirstName + " " + g.Key.LastName,Subjects = g.SelectMany(s => s.Subjects).Select(sub => sub.Name) });

            foreach (var item in query)
            {
                Console.WriteLine(item.StudentName);

                foreach (var subject in item.Subjects)
                {
                    Console.WriteLine(" " + subject);
                }
            }

        }
    }
}
