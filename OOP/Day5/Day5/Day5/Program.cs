using System;
using System.Reflection;
using System.Threading.Channels;
namespace Day5
{

    internal class Program
    {
        class Question
        {
            public string? header { get; set; }
            public string? body { get; set; }
            public int marks { get; set; }
            public virtual string  getString()
            {
                return $"{header}\n {body}\n{marks}";
                
            }



        }

        class TrueOrFalse : Question
        {

            public bool answer { get; set; }

            public override string getString()
            {
                return $"{header}\n {body}\nMarks:{marks}\n Answer is : {answer}";

            }


        }
        class ChooseOne : Question
        {
            public string[] options { get; set; }
            public string correctAns { get; set; }

            public override string getString()
            {
                string optionsText = " ";
                for (int i = 0; i < options.Length; i++)
                {
                    optionsText += $"{i+1}.{options[i]}";
                }

                return $"{header}\n {body}\nOptions :\n{optionsText}\n{marks}\n{correctAns}";

            }


        }
        class ChooseAll : Question
        {
            public string[] options { get; set; }
            public int[] correctAns { get; set; }
           
           

            public override string getString()
            {
                string optionText = "";
                string correctAnsText = "";
                for (int i = 0; i < options.Length; i++) 
                {
                    optionText += $"{i + 1}.{options[i]}";

                }
                for (int i = 0; i < correctAns.Length; i++)
                {
                    correctAnsText += $"{correctAns[i]}";

                }
                return $"{header}\n {body}\nOptions\n{optionText}\nMarks :{marks}\nCorrect Answers \n{correctAnsText}";


            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("How many Question ?? ");
            int count = int.Parse(Console.ReadLine());
            Question[] questions = new Question[count];
            for (int i = 0; i < count; i++)
                
                {

                Console.WriteLine("choose question type :\n (1) True Or False \n (2) Choose One \n (3) Choose All ");
                int quetionType = int.Parse(Console.ReadLine());
                if (quetionType == 1)
                {
                    TrueOrFalse trueOrFalse = new TrueOrFalse();
                    Console.WriteLine("Enter Question Header");
                    trueOrFalse.header = Console.ReadLine();
                    Console.WriteLine("Enter Question Body");
                    trueOrFalse.body = Console.ReadLine();
                    Console.WriteLine("Enter Question Marks");
                    trueOrFalse.marks = int.Parse(Console.ReadLine());
                    Console.WriteLine("Enter Question answer \n (true) \n (false)");
                    trueOrFalse.answer = bool.Parse(Console.ReadLine());
                    questions[i] = trueOrFalse;

                }
                if (quetionType == 2)
                {
                    ChooseOne chooseOne = new ChooseOne();
                    Console.WriteLine("Enter Question Header");
                    chooseOne.header = Console.ReadLine();
                    Console.WriteLine("Enter Question Body");
                    chooseOne.body = Console.ReadLine();
                    Console.WriteLine("Enter Number of options");
                    int optionsNum = int.Parse(Console.ReadLine());
                    chooseOne.options = new string[optionsNum];

                    for (int j = 0; j < optionsNum; j++)
                    {
                        Console.WriteLine($"Enter Option {j + 1}");
                        chooseOne.options[j] = Console.ReadLine();
                    }
                    Console.WriteLine("Enter the Correct Answer:");
                    chooseOne.correctAns = Console.ReadLine();
                    Console.WriteLine("Enter Question Mark");
                    chooseOne.marks = int.Parse(Console.ReadLine());


                    questions[i]= chooseOne;
                }

                if (quetionType == 3)
                {
                    ChooseAll chooseAll = new ChooseAll();
                    Console.WriteLine("Enter Question Header");
                    chooseAll.header = Console.ReadLine();
                    Console.WriteLine("Enter Question Body");
                    chooseAll.body = Console.ReadLine();
                    Console.WriteLine("Enter Number of options");
                    int optionsNum = int.Parse(Console.ReadLine());
                    chooseAll.options = new string[optionsNum];

                    for (int j = 0; j < optionsNum; j++)
                    {
                        Console.WriteLine($"Enter Option {j + 1}");
                        chooseAll.options[j] = Console.ReadLine();
                    }
                    Console.WriteLine("How many correct answers?");
                    int correctAnsNum = int.Parse(Console.ReadLine());
                    chooseAll.correctAns = new int[correctAnsNum];
                    for (int j = 0; j < correctAnsNum; j++) {
                        Console.WriteLine($"index of correct answer {j + 1} =");
                        chooseAll.correctAns[j] = int.Parse(Console.ReadLine());
                    }

                    Console.WriteLine("Enter Question Mark");
                    chooseAll.marks = int.Parse(Console.ReadLine());
                    questions[i]=chooseAll;
                }
            }


            for (int i = 0; i < count; i++)
            {
                Console.WriteLine($"Question number {i + 1}\n");
                Console.WriteLine($"{questions[i].getString()}\n");
            }

        }
    }
}