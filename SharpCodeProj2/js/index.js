$("document").ready(function () {
  var tableData = [
    { id: 1, item: "GEOPHYSICAL DATA SURVEY", unitPrice: 25000, qty: 1, price: ""},
    { id: 1, item: "GEOTECHNICAL DATA SURVEY", unitPrice: 50000, qty: 1, price: ""},
    { id: 1, item: "ROUTINE CORE ANALYSIS", unitPrice: 20000, qty: 1, price: "" },
    { id: 1, item: "SIDEWALL CORE ACQUISITION", unitPrice: 8000, qty: 1, price: ""},
    { id: 1, item: "FIELD NAME REGISTRATION", unitPrice: 12000, qty: 1, price: ""},
    { id: 2, item: "FIELD DEVELOPMENT PROGRAM", unitPrice: 10000, qty: 1, price: ""},
    { id: 2, item: "SPECIAL CORE ANALYSIS", unitPrice: 50000, qty: 1, price: ""},
    { id: 2, item: "EXPORT OF GEOPGYSICAL DATA", unitPrice: 9000, qty: 1, price: ""},
    { id: 2, item: "EXPORT OF GEOLOGIC SAMPLES", unitPrice: 7000, qty: 1, price: ""},
    { id: 3, item: "DATA SURVEY REGISTRATION", unitPrice: 50000, qty: 1, price: ""},
    { id: 3, item: " AGENT REGISTRATION", unitPrice: 13000, qty: 1, price: ""},
    { id: 3, item: "TASK CONFIRMATION", unitPrice: 4000, qty: 1, price: ""},
    { id: 4, item: " GEOPHYSICAL ACTIVITIES", unitPrice: 17000, qty: 1, price: ""},
    { id: 4, item: "AGENT MOBILIZATION", unitPrice: 19000, qty: 1, price: ""},
  ];
  $("#one").hide();
  $(".dissappear").hide();
  $(document).on("change", "#select-menu", function () {
    $("tbody").html("");
    for (let i = 0; i < tableData.length; i++) {
      if ($(this).val() == tableData[i].id) {
        $("tbody").append(`<tr>
          <td colspan="5" ><input type="radio" class="save" id = "a" name="groupOfDefaultRadios" > ${tableData[i].item}</td>
          <td class = "calc">${tableData[i].unitPrice}</td>
          <td><input type="text" class="luck" value="${tableData[i].qty}" id = "null" disabled></td>
          <td class = "output-here"><span>${tableData[i].price}</span></td>
          </tr>`);
        $("#one").show();
      }
    }
  });
  $(document).on("click", "#a", function () {
    $(".output-here").html("");
    $(".luck").val(1);
    $(".luck").attr('disabled','disabled');
    if ($(this).is(":checked")) {
      var j = $(this).closest("tr").find("td"); 
      var merryChristmas = j[1];
      var a = merryChristmas.innerText;
      var b = 1;
      var c = a * b
      var d = parseInt(c).toLocaleString();
      j[3].innerText = d
      $(".amount-to-pay").attr("placeholder", d);
      var o = $(this).closest("tr").find("#null");
      o[0].disabled = false;
      $(".luck").on("focusout", function(){
        $(".output-here").html("");
        var b = $(this).val();
        var c = a * b
        var d = parseInt(c).toLocaleString();
        j[3].innerText = d
        $(".amount-to-pay").attr("placeholder", d);
        $("#submit").on("click", function(){
          var customerId = j[0].innerText;
          var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
          var name = $("#payer-name").val(); 
          var state = $( "#select-us option:selected" ).text();
          $(".success").html(`<h1> Success </h1>`);
          $(".service-name").html("<h2>" + " Service Name:" + customerId + "</h2>");
          $(".paid").html(`<h2>Amount Paid: ${d} </h2>`);
          $(".phone").html(`<h2>Phone: ${phone}</h2>`);
          $(".name-hold").html(`<h2>Name: ${name}</h2>`);
          $(".state").html(`<h2>State: ${state}</h2>`);
          $(".change").text("Payment Made");
          $(".input-part").hide();
          $(".button-me").hide();
          $(".dissappear").show();
         
        })
      })
    }
  });
  $("#back").on("click", function(){
    window.location.href = "http://127.0.0.1:5502/dashboard.html";
  })
  $("input[name='phone']").keyup(function() {
    $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d)+$/, "($1)$2-$3"));
  });
   $("#logout").on('click', function() {
    debugger
    var text = "You canceled the logout request";
   if(confirm("Are you sure you want to logout?")){
      window.location.href = "http://127.0.0.1:5502/index.html";
    }else {
      text
    }    
 });
});
