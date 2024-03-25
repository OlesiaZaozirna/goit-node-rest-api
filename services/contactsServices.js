import Contact from "../models/contact.js";

async function listContacts() {
  return Contact.find();
}

async function addContact(data) {
  return Contact.create(data);
}

async function getContactById(id) {
  const data = await Contact.findById(id);
  return data;
}

async function updateContactById(id, data) {
  return Cintact.findByIdAndUpdate(id, data);
}

async function removeContact(id) {
  return Contact.findByIdAndDelete(id);
}

async function updateStatusContact(contactId, data) {
  return Contact.findByIdAndUpdate(contactId, data, { new: true });
}

export {
  listContacts,
  addContact,
  getContactById,
  removeContact,
  updateContactById,
  updateStatusContact,
};
