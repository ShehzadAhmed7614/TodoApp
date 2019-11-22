export let contacts = [
  {
    id: "1",
    name: "aqib",
    contact: "0312-0046554"
  },
  {
    id: "2",
    name: "shehzad",
    contact: "0301-7614142"
  },
  {
    id: "3",
    name: "shehzad",
    contact: "0301-7614142"
  },
  {
    id: "4",
    name: "shehzad",
    contact: "0301-7614142"
  },
  {
    id: "5",
    name: "shehzad",
    contact: "0301-7614142"
  },
  {
    id: "6",
    name: "shehzad",
    contact: "0301-7614142"
  }
];
export function getContact(id) {
  return contacts.find(m => m.id === id);
}

export function addContacts(obj = {}) {
  contacts.push(obj);
  // console.log(obj);
}

export function addContact(obj = {}, id) {
  contacts = contacts.map(contact => {
    if (contact.id === id) {
      // change
      return {
        ...contact,
        ...obj
      };
    }
    return contact;
  });
}
