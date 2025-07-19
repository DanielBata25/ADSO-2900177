let bingo=[];
       let interacion1;
       let interacion2;
       let contador=0;
       let tabla;

       for(interacion1=0;interacion1<5;interacion1++){
        let interno=[]
        for (interacion2=0; interacion2<5;interacion2++){
            contador=contador+1;
            tabla=contador*3;
            interno.push(tabla);
        }
        bingo.push(interno);
       }
       console.log(bingo);