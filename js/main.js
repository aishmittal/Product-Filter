$(document).ready(function(){
   $(".filter-block").hide();
   $(".home-block").show();
   $(".option_block ul li input").prop('checked',false); 
   $("#filter-button").click(function(){
      
      $(".filter-block").show();
      $(".home-block").hide();
      $(".side_menu_options div").hide();
      $(".side_menu_options #prop1").show();
   }); 
    $("#close-button").click(function(){
      
      $(".filter-block").hide();
      $(".home-block").show();
     
   });
   $(".menu-list ul li").click(function(){
   	$(".menu-list ul li").removeClass("active");
   		$(this).addClass("active");

         var id=$(this).text().trim();
         var len=id.length;
         var prop="";
         if(len<=10)
            prop=id[len-1];
         else
            prop=id[len-2]+id[len-1]

      //  if($(this).text().trim()=="Property 3")
      //  {  
      //     $(".side_menu_options div").hide();
      //    $(".side_menu_options #prop3").show();
      // }
      $(".side_menu_options div").hide();
      $(".side_menu_options #prop"+prop).show();
   });
   $(".option_block ul li label").click(function(){
      if($(this).siblings('input').prop('checked')==false)
      {
         $(this).siblings('input').prop('checked',true);
      }
      else{
       $(this).siblings('input').prop('checked',false);    
      }
   });
   $("#reset").click(function(){

   $(".option_block ul li input").prop('checked',false);   
   
   });
    $("#apply").click(function(){
      
         $(".filter-block").hide();
         $(".home-block").show();
         var filter="";
         $('.option_block').children('ul').each(function (){
         $(this).children('li').each(function () {
            if($(this).children('input').prop('checked')==true)
            {
               filter+="<li class='list-group-item'>"+$(this).children('label').text().trim()+"</li>";     
            }
         });
      });
          if(filter!=""){
            $("#filters-selected").html(filter);
            }   
         else
            {
            $("#filters-selected").html("<li class='list-group-item'> No Filters Selected </li>");
            }
   });
});
