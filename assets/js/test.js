/**
 * 
 */
count = 0;
touch = 0;
$(function(){
	$("form").on("click", function(e){
		e.preventDefault();
	})

	$("#secondPage").hide();
	$("#thirdPage").hide();
	$("#fourPages").hide();
	$("#hide-four").hide();
	$("#btn").on("click", function(){
		//debugger;
		var login = $("#l").val();
		var password = $("#p").val();

		//$.ajaxSetup({cache: false})
		$.ajax({
			  method:"POST",
			  url: "file.php",
			  dataType: 'json',
			  data: {login :login , pass : password},
			})
			.done(function(response) {
			  console.log(response);
			  debugger;
			 for (var key in response) {
				 debugger
				  var a = response[key].thirthName;
				  var b = response[key].thirthPrice;
				  var c = response[key].thirthQuality;
				  var getKey = key;
				  count++;
				  $('#myTable').append('<tr class="td-remove"><td id="' + getKey + '" class="hidden">'+ getKey +'</td><td class="count">'+ count +'</td><td class="name">'+ a +'</td><td class="price" >'+ b +'</td><td class="quality" >'+ c +'</td><td ><a class="fa fa-minus remove" aria-hidden="true"></a><a class="fa fa-pencil change" aria-hidden="true"></a></td></tr>');
				  $(".hidden").hide();
			}
			  $("#secondPage").show();
			  $("#div-form").hide();
			})
	})

		
	$('#thirth-form').on('click',function(){
		$("#secondPage").hide();
		$("#thirdPage").show();
		  count++;
		  $('.name-third').val('');
		  $('.quality-third').val('');
		  $('.price-third').val('');
	})

});

$(function(){
	$('#btn-third').on("click",function(){
		debugger;
		var thirthName = $('.name-third').val();
		var thirthQuality = $('.quality-third').val();
		var thirthPrice = $('.price-third').val();
		touch++;
		debugger;
	

		var data = {
					keys:{
					thirthName :thirthName,
					thirthQuality : thirthQuality,
					thirthPrice : thirthPrice
					
					}
		};  
		
		
		
		$.ajax({
			  method:"POST",
			  url: "addForm.php",
			  dataType: 'json',
			  data:data,
			})
			.done(function(responseThirth) {
				debugger;
			  console.log(responseThirth);
			  var getLastObject = Object.keys(responseThirth)[Object.keys(responseThirth).length -1];
			  var a = responseThirth[getLastObject].thirthName;
			  var b = responseThirth[getLastObject].thirthPrice;
			  var c = responseThirth[getLastObject].thirthQuality;
			  $("#secondPage").show();
			  $("#thirdPage").hide();
			  $('#myTable').append('<tr class="td-remove"><td id="' + getLastObject + '" class="hidden">'+ getLastObject +'</td><td class="count">'+ count +'</td><td class="name" >'+ a +'</td><td class="price" >'+ b +'</td><td class="quality" >'+ c +'</td><td><a class="fa fa-minus remove" aria-hidden="true"></a><a class="fa fa-pencil change" aria-hidden="true"></a></td></tr>');
			  
			  $(".hidden").hide();
			  
				})
			})
	
		
})
$(function(){
	$("#myTable").on('click', '.remove',function(){
		debugger;
		if(confirm('Are you sure')){
			$(this).closest('tr').remove();
		
		debugger;
		var sentKeysToDelete = $(this).closest('tr').find('td').eq(0).html();
		$.ajax({
			  method:"POST",
			  url: "addForm.php",
			  dataType: 'json',
			  data:{sentKeysToDelete : sentKeysToDelete},
			})
		}
		})
})

$(function(){
	$("#myTable").on('click', '.change',function(){
		debugger;	
		var sentKeysToChange = $(this).closest('tr').find('td').eq(0).html();
	
		$.ajax({
			  method:"POST",
			  url: "changeSession.php",
			  dataType: 'json',
			  data:{sentKeysToChange : sentKeysToChange},
			})
			.done(function(responseChange) {
				console.log(responseChange);
				debugger;
			  $("#secondPage").hide();
			  $("#fourPages").show();
			  $('#getKeys').val(sentKeysToChange);
			  $('.name-four').val(responseChange.thirthName);
			  $('.quality-four').val(responseChange.thirthPrice);
			  $('.price-four').val(responseChange.thirthQuality);

					
				})
		})
	
})
$(function(){
	$("#btn-four").on('click' , function (){
		debugger;
		 var keys2 = $('#getKeys').val();
		 var thirthName = $('.name-four').val();
		 var thirthQuality = $('.quality-four').val();
		 var thirthPrice = $('.price-four').val();
		 //var dataChange  = {};
		 //dataChange[keys2] = {
		 dataChange = {
		 		 keys :{
		 		 key : keys2,
				 thirthName :thirthName,
				 thirthQuality : thirthQuality,
				 thirthPrice : thirthPrice
		 		 }
		 };  
		 debugger;
		 $.ajax({
			  method:"POST",
			  url: "addForm.php",
			  dataType: 'json',
			  data:dataChange,
			})
			.done(function(resp) {
				debugger;
			  console.log(resp);
				  debugger;
				  console.log($('#' + keys2));
				  $('#' + keys2).closest('tr').find('td').eq(2).html(resp[keys2].thirthName);
				  $('#' + keys2).closest('tr').find('td').eq(3).html(resp[keys2].thirthQuality);
				  $('#' + keys2).closest('tr').find('td').eq(4).html(resp[keys2].thirthPrice);
				  $("#fourPages").hide();
				  $("#secondPage").show();
					 
				  
			})
	
	})
})