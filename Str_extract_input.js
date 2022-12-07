function string1()
{
    let str_Sentence = document.getElementsByName("sentence1")[0].value
    let chr_ToFind = document.getElementsByName("letter1")[0].value
		if(str_Sentence.length >= 1)
		{
			if(chr_ToFind.length == 1)
			{
				let index1 = str_Sentence.indexOf(chr_ToFind);
				// alert(index1)
				if(index1 > -1 )
				{
				var result = str_Sentence.slice(index1+1);
				let msg = document.getElementsByClassName('text_1')
				msg[0].innerText =  result
				msg[0].style.background ="black"
				msg[0].style.color = "white"
				msg[0].style.border = "solid 2px black"  
				return false;
				}
				else
				{
				 let msg = document.getElementsByClassName('text_1')
				 msg[0].innerText = "letter does not present in the sentence"
				 msg[0].style.background ="black"
				 msg[0].style.color = "white"
				 msg[0].style.border = "solid 2px black"  
				return false;
				}
			}
			else if(chr_ToFind.length == 0)
				{
				 let msg = document.getElementsByClassName('text_1')
				 msg[0].innerText = "Enter a letter to begin extract!!"
				 msg[0].style.background ="black"
				 msg[0].style.color = "red"
				 msg[0].style.border = "solid 2px black"
				return false;
				}
				else
				{
				 let msg = document.getElementsByClassName('text_1')
				 msg[0].innerText = "You entered more than one letter!!"
				 msg[0].style.background ="black"
				 msg[0].style.color = "red"
				 msg[0].style.border = "solid 2px black"
				return false;	
				}
    }
	else
	{
		 let msg = document.getElementsByClassName('text_1')
		 msg[0].innerText = "Input string cannot be blank!!"
		 msg[0].style.background ="black"
		 msg[0].style.color = "red"
		 msg[0].style.border = "solid 2px black" 
		 return false;
	}
 }        
    
