 .model
 .stack 50
 .data
    MANG db 100 dup(?) 
    mangso db 100 dup(?)
    mangchu db 100 dup(?)
    
    
 .code
    Main proc
       mov ax, @data
       mov ds, ax   
       
           lea si, MANG
           XOR cx, cx 
       
       LapDoc:  
          
           mov ah, 1
           int 21h  
           
           cmp al, 13
           je ketthuc
           cmp al, '0'
           jl luuvaochu
           
           
           
           
       luuvaochu:    
           mov [si],al
           inc si
           inc cx  
           
           jmp LapDoc 
           
         
       
      
       
       ketthuc:
        
       mov ah, 4ch
       int 21h
       
       
       
                   
    Main endp
    end main
