function xD(){
   var text = jQuery("#pole").val();
   var wyrazy = text.split(" ");
   var cionk = "";
   for ( var i in wyrazy) {
       var wyrazDoWyswietlenia = wyrazy[i];
       var przetlumaczony = slownik[wyrazDoWyswietlenia];
       if ( typeof(przetlumaczony) ===  "undefined"){
           przetlumaczony = wyrazDoWyswietlenia;
       }
       cionk = cionk + " " + przetlumaczony;
   }

   jQuery ("#pole2").val(cionk);

}

jQuery ("button").on ("click",xD);


