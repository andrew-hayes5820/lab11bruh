// here is an example result of an object when using a $.get function
// please run through the object, and have the console log all the numbers.
data:{
  contactList: [
    {name: 'Ivan', number: 9292838282}
    {name: 'Gerrae', number: 9292838282}
    {name: 'Grant', number: 9292838282}
    {name: 'Chriups', number: 9292838282}
    ],
    full: true,
  }
}


$.get('someUrl'), function(responseBody){
responseBody.data.contactList.forEach(function(contact)
  conosole.log(contact.number)
  );
}

// create an array of NAMES ONLY for the below array
  var contactList = [
      {name: 'Ivan', number: 9292838282},
      {name: 'Gerrae', number: 9292838282},
      {name: 'Grant', number: 9292838282},
      {name: 'Chriups', number: 9292838282}
    ];

  var nameArray = [];
  contactList.forEach(function(contact){
    nameArray.push(contact.name);
    });

    nameArray;


  
