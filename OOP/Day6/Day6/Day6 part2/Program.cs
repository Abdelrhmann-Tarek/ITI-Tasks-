namespace Day6_part2
{
  
    internal class Program
    {
        public class UserQueue<T>
        {
            private T[] items;
            private int front;
            private int last;
            private int size;
            private int capacity;

            public UserQueue(int capacity = 10)
            {
                this.capacity = capacity;
                items = new T[capacity];
                front = 0;
                last = -1;
                size = 0;
            }

            public void Enqueue(T item)
            {
                if (size == capacity)
                {
                    Console.WriteLine("Queue is full");
                    return;
                }

                last = (last + 1) % capacity;
                items[last] = item;
                size++;
            }

            
            public T Dequeue()
            {
                if (IsEmpty)
                {
                    Console.WriteLine("Queue is empty");
                    return default;
                }

                T removed = items[front];
                front = (front + 1) % capacity;
                size--;
                return removed;
            }

            
            public T Peek()
            {
                if (IsEmpty)
                {
                    Console.WriteLine("Queue is empty");
                    return default;
                }

                return items[front];
            }

          
            public int Count
            {
                get { return size; }
            }

            public bool IsEmpty
            {
                get { return size == 0; }
            }


        }
        static void Main(string[] args)
        {

            Queue<string> q = new Queue<string>();
           
            
        }
    }
}
