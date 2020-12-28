$(document).ready(function () {
  function stringMatch(value, domain) {
    return domain && domain.toLowerCase().indexOf(value.toLowerCase()) >= 0;
  }

  //to remove style from smallerCards
  function unStyle(elem) {
    elem.css("border", "1px solid rgba(0,0,0,.125)");
    elem.find(".check-icon").hide();
    elem.attr("data-Status", "inActive");
  }

  //to add style to smallerCards
  function addStyle(elem) {
    elem.css("border", "1px solid #28a745");
    elem.find(".check-icon").show();
    elem.attr("data-Status", "Active");
  }

  //listen for when the keyboard is pressed in the input box
  $("#search input").keyup(function () {
    let input = $(this).val();
    let width = $("#search input").css("width");
    $("#search .search-select").css("width", width);

    //when a character is inputed
    if (input.length > 0) {
      let count = 0;
      //remove the search icon
      $("#rightView #search .fa-search").hide();

      $("#search .search-option").each(function (data) {
        let title = $(this).find(".search-option-title").text();
        let details = $(this).find(".search-option-details").text();
        if (stringMatch(input, details) || stringMatch(input, title)) {
          $("#search .search-select").css("display", "block");
          $(this).show();
          count++;
        } else {
          $(this).hide();
        }
      });

      if (count === 0) {
        $("#search .default-option").show();
        $("#search .search-select").show();
      } else {
        $("#search .default-option").hide();
      }
    }

    //when no character is inputed
    else {
      //show the search icon back
      $("#rightView #search .fa-search").show();
      //remove the options
      $("#search .search-select").hide();
    }
  });

  $(".search-option").click(function () {
    $("#search input").val($(this).find(".search-option-title").text());
    window.location = $(this).attr("data-link");
  });

  $("#accordionSection .card button").click(function () {
    let contentSection = $($(this).attr("data-target"));
    let firstChild = contentSection.find(".smaller-card:first-Child");
    let currentlyActive = contentSection.find(
      ".smaller-card[data-Status='Active']"
    );
    unStyle(currentlyActive);
    addStyle(firstChild);
  });

  $(".accordion .card .smaller-card").click(function () {
    let currentlyActive = $(this).siblings('[data-Status="Active"]');
    unStyle(currentlyActive);
    addStyle($(this));
  });

  //anytime anywhere in the document is clicked
  document.addEventListener("click", function () {
    $("#search .search-select").hide();
  });

  //$("#submit").addEventListener()
  $("#hide1").hide();
  $("#hide2").hide();
  debugger;
  $("#submit").click(function () {
    debugger;

    if (
      $("#email").val().toLowerCase() == "sharpcode@gmail.com" &&
      $("#password").val() == "sharpcode"
    ) {
      //$('#password').addClass('has-error');
      window.location.href = "http://127.0.0.1:5502/dashboard.html";
      //alert("We are home");
    } else if ($("#email").val() == "" && $("#password").val() == "") {
      $("#hide2").show();
    } else {
      $("#hide1").show();
    }
  });
});


