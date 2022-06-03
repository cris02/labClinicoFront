// Write on keyup event of keyword input element
 $(document).ready(function(){
 $("#search").keyup(function(){
 _this = this;
 // Show only matching TR, hide rest of them
 $.each($("#tabla tr"), function() {
 if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1 && this.className !="cab")
 $(this).hide();
 else
 $(this).show();
 });
 });
});
