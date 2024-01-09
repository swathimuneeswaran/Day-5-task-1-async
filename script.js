fetch("https://restcountries.com/v2/all")
  .then((response) => {
    var container = document.createElement("div");

    if (response.status === 200) {
      var image = document.createElement("img");
      image.src = "https://vadivelu.anoram.com/gif/200";
      image.height = 250;

      var text = document.createElement("h2");
      text.innerHTML = "<strong>Status code is 200:</strong> Success";
      container.appendChild(image);
      container.appendChild(text);
    } else if (response.status >= 200 && response.status < 400) {
      var image = document.createElement("img");
      image.src = "https://vadivelu.anoram.com/gif/206";
      image.height = 250;

      var text = document.createElement("h2");
      text.innerHTML = "<strong>Status code is between 200 and 399:</strong> Success";

      container.appendChild(image);
      container.appendChild(text);
    } else if (response.status >= 400 && response.status < 500) {
      var image = document.createElement("img");
      image.src = "https://vadivelu.anoram.com/gif/400";
      image.height = 250;

      var text = document.createElement("h2");
      text.innerHTML = "<strong>Status code is between 400 and 499:</strong> Client Error";

      container.appendChild(image);
      container.appendChild(text);
    } else if (response.status >= 500) {
      var image = document.createElement("img");
      image.src = "https://vadivelu.anoram.com/gif/506";
      image.height = 250;

      var text = document.createElement("h2");
      text.innerHTML = "<strong>Status code is 500 or higher:</strong> Server Error";

      container.appendChild(image);
      container.appendChild(text);
    } else {
      var text = document.createElement("h2");
      text.innerHTML = "<strong>Unexpected status code:</strong> " + response.status;

      container.appendChild(text);
    }

    // Add styling to center the table
    container.style.textAlign = "center";

    document.body.appendChild(container);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  })
  .then((data) => {
    var table = document.createElement("table");
    table.border = "1";

    // Add color to the table
    table.style.backgroundColor = "white"; // Adjust the color as needed

    // Create table header
    var headerRow = table.insertRow(0);
    var serialNoHeader = headerRow.insertCell(0);
    var countryHeader = headerRow.insertCell(1);

    serialNoHeader.textContent = "Serial No";
    countryHeader.textContent = "Country Name";

    // Create table rows with data
    for (var i = 0; i < data.length; i++) {
      var row = table.insertRow(i + 1);
      var serialNoCell = row.insertCell(0);
      var countryCell = row.insertCell(1);

      serialNoCell.textContent = i + 1;
      countryCell.textContent = data[i].name;
    }

    // Add styling to center the table
    table.style.margin = "auto";

    document.body.appendChild(table);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


  var button = document.createElement("button"); 
  button.setAttribute("type", "button");
  button.innerText = "Click here to know more";
  button.style.backgroundColor = "violet";
  button.addEventListener("click", dabba);
  
  function dabba() {
    var res = parseInt(prompt("Enter any number from 100 to 599 to know the meaning of status code ☺"));
    
    if (res <= 100) {
     
      var newTab = window.open("https://vadivelu.anoram.com/gif/100");
    } 
    else if(res>100 && res<=199)
    {
    
      var newTab = window.open("https://vadivelu.anoram.com/gif/101");
    }
    else if(res===200)
    {
    
      var newTab = window.open("https://vadivelu.anoram.com/gif/200");
    }
    else if(res===201)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/jpg/201");
    }
    else if(res>201 && res<=300)
    {
    
      var newTab = window.open("https://vadivelu.anoram.com/gif/206");
    }
    else if(res===301)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/jpg/301");
    }
    else if(res===302)
    {
     
      var newTab = window.open("https://vadivelu.anoram.com/jpg/302");
    }
    else if(res>=303 && res<=399)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/jpg/307");
    }
    else if(res===400)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/gif/400");
    }
    else if(res===401)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/jpg/401");
    }
    else if(res===402)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/jpg/402");
    }
    else if(res===403)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/jpg/403");
    }
    else if(res===404)
    {
     
      var newTab = window.open("https://vadivelu.anoram.com/gif/404");
    }
    else if(res===405)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/jpg/405");
    }
    else if(res===406 && res===407)
    {
    
      var newTab = window.open("https://vadivelu.anoram.com/gif/406");
    }
    else if(res===408)
    {

      var newTab = window.open("https://vadivelu.anoram.com/jpg/408");
    }
    else if(res===409)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/jpg/409");
    }
    else if(res===410)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/gif/410");
    }
    else if(res===411)
    {
  
      var newTab = window.open("https://vadivelu.anoram.com/jpg/411");
    }
    else if(res>=412 && res<=416)
    {
     
      var newTab = window.open("https://vadivelu.anoram.com/jpg/412");
    }
    else if(res>=417 && res<=420)
    {
   
      var newTab = window.open("https://vadivelu.anoram.com/jpg/417");
    }
    else if(res===421)
    {
     
      var newTab = window.open("https://vadivelu.anoram.com/gif/421");
    }
    else if(res===422)
    {
 
      var newTab = window.open("https://vadivelu.anoram.com/jpg/422");
    }
    else if(res===423)
    {
     
      var newTab = window.open("https://vadivelu.anoram.com/gif/423");
    }
    else if(res>=424 && res<=498)
    {
    
      var newTab = window.open("https://vadivelu.anoram.com/gif/424");
    }
    else if(res===499)
    {
      
      var newTab = window.open("https://vadivelu.anoram.com/gif/499");
    }
    else if(res===500 && res===501)
    {
  
      var newTab = window.open("https://vadivelu.anoram.com/gif/500");
    }
    else if(res>=502)
    {
      var newTab = window.open("https://vadivelu.anoram.com/gif/506");
    }
  }
  
  document.body.append(button);
  
