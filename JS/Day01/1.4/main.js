var check ;
    


if(check=confirm("Do you fly?"))
{
   if(check =confirm("Are You Wild?"))
    {
        document.writeln(' <img src="./image/Eagle.jpeg" alt="" />');
        document.writeln(' <h1>Eagle<h1/>');

   }else {
         document.writeln('<img src="./image/Parrot.jpeg">');
        document.writeln(' <h1>Parrot<h1/>');}
}else if(check=confirm("DO you live undersea?"))
    {
        if(check=confirm("Are you Wild?"))
            {
                document.writeln('<img src="./image/Shark.jpeg">');
                document.writeln(' <h1>Shark<h1/>');
                        // shark
        }else{
               document.writeln('    <img src="./image/Dolphin.jpeg" alt="" />');
                document.writeln(' <h1>Dolphin<h1/>');}
        }else if(check=confirm("Are you Wild?"))
                  {
                  document.writeln('    <img src="./image/lion.jpeg" alt="" />');
                   document.writeln(' <h1>Lion<h1/>');
        } else{
                 document.writeln('    <img src="./image/cat.webp" alt="" />');
                 document.writeln(' <h1>Cat<h1/>');
        }


