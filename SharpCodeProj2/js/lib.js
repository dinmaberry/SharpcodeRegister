$("document").ready(function () {
    $(".dissappear").hide();
    var tableData = [
      [
        {
          id: 1,
          item: "GEOPHYSICAL DATA SURVEY",
          unitPrice: 250000,
          qty: 1,
          price: "",
        },
        {
          id: 2,
          item: "GEOTECHNICAL DATA SURVEY",
          unitPrice: 50000,
          qty: 1,
          price: "",
        },
        {
          id: 3,
          item: "ROUTINE CORE ANALYSIS",
          unitPrice: 20000,
          qty: 1,
          price: "",
        },
        {
          id: 4,
          item: "SIDEWALL CORE ACQUISITION",
          unitPrice: 8000,
          qty: 1,
          price: "",
        },
        {
          id: 5,
          item: "FIELD NAME REGISTRATION",
          unitPrice: 12000,
          qty: 1,
          price: "",
        },
      ],
      [
        {
          id: 6,
          item: "FIELD DEVELOPMENT PROGRAM",
          unitPrice: 10000,
          qty: 1,
          price: "",
        },
        {
          id: 7,
          item: "SPECIAL CORE ANALYSIS",
          unitPrice: 50000,
          qty: 1,
          price: "",
        },
        {
          id: 8,
          item: "EXPORT OF GEOPGYSICAL DATA",
          unitPrice: 9000,
          qty: 1,
          price: "",
        },
        {
          id: 9,
          item: "EXPORT OF GEOLOGIC SAMPLES",
          unitPrice: 9000,
          qty: 1,
          price: "",
        },
      ],
      [
        {
          id: 10,
          item: "DATA SURVEY REGISTRATION",
          unitPrice: 50000,
          qty: 1,
          price: "",
        },
        {
          id: 11,
          item: " AGENT REGISTRATION",
          unitPrice: 13000,
          qty: 1,
          price: "",
        },
        {
          id: 12,
          item: "TASK CONFIRMATION",
          unitPrice: 4000,
          qty: 1,
          price: "",
        },
      ],
      [
        {
          id: 13,
          item: " GEOPHYSICAL ACTIVITIES",
          unitPrice: 17000,
          qty: 1,
          price: "",
        },
        {
          id: 14,
          item: "AGENT MOBILIZATION",
          unitPrice: 19000,
          qty: 1,
          price: "",
        },
      ],
    ];
    //Ensure one radio is selected at a particular time
  
    //Hides the table header in the Js
    $("#one").hide();
    $(document).on("change", "#select-menu", function () {
      $("tbody").html("");
      for (let index = 0; index <= tableData.length; index++) {
        if ($(this).val() == "Exploratory Activities") {
          $("tbody").append(`<tr>
          <td colspan="5" ><input type="radio" class="save" id = "a" name="groupOfDefaultRadios" > ${tableData[0][index].item}</td>
          <td><input type="text" class="calc border" value="${tableData[0][index].unitPrice}" readonly></td>
          <td><input type="number" class="luck" value="${tableData[0][index].qty}" id = "null1" ></td>
          <td><span class = "output">${tableData[0][index].price}</span></td>
          </tr>`);
          $("#one").show();
        } else if ($(this).val() == "Development in View") {
          $("tbody").append(`<tr>
          <td colspan="5"><input type="radio" class="save"name="groupOfDefaultRadios" > ${tableData[1][index].item}</td>
          <td><input type="text" class="calc border" value="${tableData[1][index].unitPrice}" readonly></td>
          <td><input type="number" class="luck" value="${tableData[1][index].qty}" id = "null1" ></td>
          <td><span class="output" id="me">${tableData[1][index].price}</span></td>
          </tr>`);
          $("#one").show();
        } else if ($(this).val() == "Please select service") {
          $("#one").hide();
        } else if ($(this).val() == "Development in Progress") {
          $("tbody").append(`<tr>
          <td colspan="5"><input type="radio" class="save" name="groupOfDefaultRadios" > ${tableData[2][index].item}</td>
          <td><input type="text" class="calc border" value="${tableData[2][index].unitPrice}" readonly></td>
          <td><input type="number" class="luck" value="${tableData[2][index].qty}" id = "null1" ></td>
          <td><span class="output" id="me">${tableData[2][index].price}</span></td>
        </tr>`);
          $("#one").show();
        } else if ($(this).val() == "Development To Be Improved") {
          $("tbody").append(`<tr>
          <td colspan="5"><input type="radio" class="save" name="groupOfDefaultRadios" id ="e"> ${tableData[3][index].item}</td>
          <td><input type="text" class="calc border" value="${tableData[3][index].unitPrice}" readonly></td>
          <td><input type="number" class="luck" value="${tableData[3][index].qty}" id = "null1" ></td>
          <td><span class="output" id="me" hidden>${tableData[3][index].unitPrice * tableData[3][index].qty }</span></td>
        </tr>`);
          $("#one").show();
        }
      }
      
    });
  });
  
  