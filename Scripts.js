  document.getElementById("btn").addEventListener("click",(event)=>{
    event.preventDefault();
    const description = document.getElementById("Description").value;
    const catagory = document.getElementById("category").value;
    const amount=document.getElementById("Amount").value;
    // const description_data = document.getElementById("Description-data");
    // const catagory_data = document.getElementById("Category-data");
    // const amount_data = document.getElementById("Amount-data");
    const table=document.getElementById('table');
    const tr=document.createElement('tr');
    const td_des = document.createElement('td');
    const td_cat = document.createElement('td');
    const td_amt = document.createElement('td');
    td_des.textContent=description;
    td_cat.textContent=catagory;
    td_amt.textContent=amount;
    tr.appendChild(td_des);
    tr.appendChild(td_cat);
    tr.appendChild(td_amt);
    table.appendChild(tr);
    
});